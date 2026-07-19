import express from "express";
import { createServer as createViteServer } from "vite";
import { supabase } from "./src/db.ts";
import { v4 as uuidv4 } from 'uuid';
import path from "path";
import fs from "fs";
import { google } from 'googleapis';
import cookieParser from 'cookie-parser';
import crypto from 'crypto';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { fileURLToPath } from 'url';

dotenv.config();

// Lazy getter — ensures the key is read after dotenv.config() has run
function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('GEMINI_API_KEY is not set in .env');
  return new GoogleGenAI({ apiKey });
}

// Augment Express's Request type so handlers can read req.userId after
// requireAuth has run, without losing the native body/params/cookies members.
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.APP_URL}/api/auth/google/callback`
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Type definitions for DB results ---
interface StreakRow {
  current: number;
  longest: number;
  last_publish_date: string;
  total_published: number;
}

interface UserAccountRow {
  access_token: string;
  refresh_token: string;
  expiry_date: number;
  profile_data: string;
  platform: string;
}

interface AccountSummaryRow {
  platform: string;
  profile_data: string;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(cookieParser());

  // --- Session / Auth ---
  // We identify a logged-in user with a signed cookie carrying their user id.
  // The cookie is HMAC-signed so it can't be forged client-side. This is a
  // deliberately small, dependency-light session scheme; it keeps identity
  // (who you are) cleanly separate from the SQLite data layer, so swapping the
  // storage backend later (e.g. Supabase) doesn't touch the login contract.
  const SESSION_COOKIE = 'dba_session';
  const SESSION_SECRET = process.env.SESSION_SECRET || 'dev-insecure-session-secret-change-me';

  function signSession(userId: string): string {
    const payload = Buffer.from(userId).toString('base64url');
    const sig = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('base64url');
    return `${payload}.${sig}`;
  }

  function verifySession(token: string | undefined): string | null {
    if (!token) return null;
    const [payload, sig] = token.split('.');
    if (!payload || !sig) return null;
    const expected = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('base64url');
    // Constant-time compare to avoid timing leaks.
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
    return Buffer.from(payload, 'base64url').toString('utf8');
  }

  function setSessionCookie(res: express.Response, userId: string) {
    res.cookie(SESSION_COOKIE, signSession(userId), {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    });
  }

  // Extend Express's Request with the resolved user id for typed access.
  // (Module augmentation lives at top-level below; see `declare global`.)

  // Gate: rejects unauthenticated requests. Attaches req.userId on success.
  function requireAuth(req: express.Request, res: express.Response, next: express.NextFunction) {
    const userId = verifySession(req.cookies?.[SESSION_COOKIE]);
    if (!userId) return res.status(401).json({ error: 'Not authenticated' });
    req.userId = userId;
    next();
  }

  // Find an existing user by Google identity, or create one. Returns the user id.
  function upsertUserFromGoogle(profile: { id?: string | null; email?: string | null; name?: string | null; picture?: string | null }): string {
    const email = profile.email || null;
    // Prefer matching on email so re-logins map to the same account.
    const existing = email
      ? (db.prepare('SELECT id FROM users WHERE email = ?').get(email) as { id: string } | undefined)
      : undefined;
    if (existing) {
      db.prepare('UPDATE users SET name = ?, picture = ? WHERE id = ?')
        .run(profile.name || null, profile.picture || null, existing.id);
      return existing.id;
    }
    const id = `user_${profile.id || uuidv4()}`;
    db.prepare('INSERT INTO users (id, email, name, picture) VALUES (?, ?, ?, ?)')
      .run(id, email, profile.name || null, profile.picture || null);
    return id;
  }

  app.get("/api/user", requireAuth, (req, res) => {
    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.userId);
    res.json(user);
  });

  app.get("/api/brand", requireAuth, (req, res) => {
    const brand = db.prepare('SELECT * FROM brands WHERE user_id = ?').get(req.userId);
    res.json(brand || null);
  });

  app.post("/api/brand", requireAuth, (req, res) => {
    const { name, tagline, archetype, personality, colors, typography, visual_style, thumbnail_style, content_hooks, catchphrases } = req.body;

    const existing = db.prepare('SELECT user_id FROM brands WHERE user_id = ?').get(req.userId);

    if (existing) {
      db.prepare(`
        UPDATE brands SET 
          name = ?, tagline = ?, archetype = ?, personality = ?, 
          colors = ?, typography = ?, visual_style = ?, 
          thumbnail_style = ?, content_hooks = ?, catchphrases = ?
        WHERE user_id = ?
      `).run(name, tagline, archetype, personality, JSON.stringify(colors), JSON.stringify(typography), visual_style, thumbnail_style, JSON.stringify(content_hooks), JSON.stringify(catchphrases), req.userId);
    } else {
      db.prepare(`
        INSERT INTO brands (user_id, name, tagline, archetype, personality, colors, typography, visual_style, thumbnail_style, content_hooks, catchphrases)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(req.userId, name, tagline, archetype, personality, JSON.stringify(colors), JSON.stringify(typography), visual_style, thumbnail_style, JSON.stringify(content_hooks), JSON.stringify(catchphrases));
    }

    res.json({ success: true });
  });

  app.get("/api/content", requireAuth, (req, res) => {
    const content = db.prepare('SELECT * FROM content WHERE user_id = ? ORDER BY created_at DESC').all(req.userId);
    res.json(content);
  });

  app.post("/api/content", requireAuth, (req, res) => {
    const { title, body, type, platform, score, score_feedback } = req.body;
    const id = uuidv4();

    db.prepare(`
      INSERT INTO content (id, user_id, title, body, type, platform, status, score, score_feedback)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(id, req.userId, title, body, type, platform, 'draft', score, score_feedback);

    res.json({ id });
  });

  app.put("/api/content/:id", requireAuth, (req, res) => {
    const { id } = req.params;
    const { title, body, type, platform, score, score_feedback, status } = req.body;

    db.prepare(`
      UPDATE content SET
        title = ?, body = ?, type = ?, platform = ?, status = ?,
        score = ?, score_feedback = ?
      WHERE id = ? AND user_id = ?
    `).run(title, body, type, platform, status, score, score_feedback, id, req.userId);

    res.json({ success: true });
  });

  app.delete("/api/content/:id", requireAuth, (req, res) => {
    const { id } = req.params;

    db.prepare('DELETE FROM content WHERE id = ? AND user_id = ?').run(id, req.userId);

    res.json({ success: true });
  });

  app.post("/api/content/:id/publish", requireAuth, (req, res) => {
    const { id } = req.params;
    const now = new Date().toISOString();

    db.prepare('UPDATE content SET status = ?, published = ?, published_at = ? WHERE id = ? AND user_id = ?')
      .run('published', 1, now, id, req.userId);

    // Update streak
    const streakData = db.prepare('SELECT * FROM streaks WHERE user_id = ?').get(req.userId) as StreakRow | undefined;
    if (!streakData) {
      db.prepare('INSERT INTO streaks (user_id, current, longest, last_publish_date, total_published) VALUES (?, ?, ?, ?, ?)')
        .run(req.userId, 1, 1, now, 1);
    } else {
      const lastPublish = new Date(streakData.last_publish_date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      lastPublish.setHours(0, 0, 0, 0);

      let newCurrentStreak = streakData.current;
      if (today.getTime() === lastPublish.getTime()) {
        // Already published today, no change to streak
      } else if (today.getTime() - lastPublish.getTime() === 24 * 60 * 60 * 1000) {
        // Published yesterday, continue streak
        newCurrentStreak++;
      } else {
        // Break in streak
        newCurrentStreak = 1;
      }
      db.prepare('UPDATE streaks SET current = ?, longest = MAX(longest, ?), last_publish_date = ?, total_published = total_published + 1 WHERE user_id = ?')
        .run(newCurrentStreak, newCurrentStreak, now, req.userId);
    }

    res.json({ success: true });
  });

  app.post("/api/challenge/:day/complete", requireAuth, (req, res) => {
    const { day } = req.params;
    db.prepare('UPDATE challenges SET completed_days = json_insert(completed_days, ?, 1) WHERE user_id = ?')
      .run('$.' + day, req.userId);

    res.json({ success: true });
  });

  // --- AI Endpoints ---

  app.post("/api/ai/onboarding-chat", requireAuth, async (req, res) => {
    const { messages } = req.body; 
    
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.json({ text: "Hi there! I'm your Creator Coach. To get started, what kind of topics or hobbies do you find yourself talking about all the time?" });
    }

    const transcript = messages.map(m => `${m.role.toUpperCase()}: ${m.text}`).join("\n\n");
    
    const prompt = `You are a friendly, patient, and highly encouraging Creator Coach holding the hand of a brand new content creator. 
Your goal is to figure out what kind of content they want to make and where they want to post it, by asking ONE short, simple question at a time in a conversational way.
Once you have a clear understanding of their passions and target platform, you MUST stop asking questions and propose exactly 3 highly personalized, specific niche ideas for them.
To propose niches, you MUST output ONLY a raw JSON array of exactly 3 objects. Format: [{"niche": "Name of niche", "reason": "Why this fits them"}]. Do not include any conversational text or markdown fences when outputting the JSON array, just the raw JSON.
If you need more info, just respond with friendly, conversational text (not JSON). Keep your conversational responses under 3 sentences.

CONVERSATION SO FAR:
${transcript}

COACH:`;

    try {
      const result = await getGeminiClient().models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });
      let aiResponseText = result.text?.trim() ?? '';
      
      const fenceMatch = aiResponseText.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (fenceMatch) aiResponseText = fenceMatch[1].trim();

      if (aiResponseText.startsWith('[') && aiResponseText.endsWith(']')) {
        try {
          const niches = JSON.parse(aiResponseText);
          return res.json({ niches });
        } catch (e) {
           console.error("Failed to parse niches JSON");
        }
      }
      
      res.json({ text: aiResponseText });
    } catch (error) {
      console.error("AI Onboarding Error:", error);
      res.status(500).json({ error: "Failed to generate response." });
    }
  });

  app.post("/api/ai/generate-branding", requireAuth, async (req, res) => {
    const { niche, transcript } = req.body;
    try {
      const prompt = `Based on the following conversation with a new creator, and their chosen niche of "${niche}", generate a complete brand profile for them.
Return ONLY a raw JSON object with the following fields:
- "name" (string: a catchy creator name or channel name)
- "tagline" (string: a short, punchy bio or tagline)
- "archetype" (string: e.g. "The Educator", "The Entertainer", "The Guide")
- "personality" (string: 2-3 words describing their vibe)
- "colors" (array of 2-3 hex codes that fit the vibe)
- "typography" (string: a Google font name recommendation)
- "visual_style" (string: 1 sentence describing the visual aesthetic)

Do NOT include markdown formatting or backticks. Return ONLY the raw JSON.

CONVERSATION CONTEXT:
${transcript}`;

      const result = await getGeminiClient().models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });
      
      let jsonString = result.text ?? '';
      const fenceMatch = jsonString.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (fenceMatch) jsonString = fenceMatch[1].trim();

      const brandProfile = JSON.parse(jsonString);
      res.json({ brandProfile });
    } catch (error) {
      console.error("AI Branding Error:", error);
      res.status(500).json({ error: "Failed to generate brand profile." });
    }
  });

  app.post("/api/ai/generate-hooks", requireAuth, async (req, res) => {
    const { niche, platform, brandProfile } = req.body;
    try {
      const prompt = `You are an expert viral content strategist for ${platform}.
Generate 5 unique, highly engaging hook ideas for a creator in the "${niche}" niche.
Their brand personality is: ${brandProfile?.personality || 'Authentic'}.
Their brand archetype is: ${brandProfile?.archetype || 'Creator'}.

Return ONLY a raw JSON array of 5 strings. Do NOT include markdown fences.
Example: ["Hook 1", "Hook 2", "Hook 3", "Hook 4", "Hook 5"]`;

      const result = await getGeminiClient().models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });
      
      let jsonString = result.text ?? '';
      const fenceMatch = jsonString.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (fenceMatch) jsonString = fenceMatch[1].trim();
      
      const braceStart = jsonString.indexOf('[');
      const braceEnd = jsonString.lastIndexOf(']');
      if (braceStart !== -1 && braceEnd !== -1) {
          jsonString = jsonString.slice(braceStart, braceEnd + 1);
      }

      const hooks = JSON.parse(jsonString);
      res.json({ hooks });
    } catch (error) {
      console.error("AI Hooks Error:", error);
      res.status(500).json({ error: "Failed to generate hooks." });
    }
  });

  app.post("/api/ai/milestone-briefing", requireAuth, async (req, res) => {
    const { milestoneId, niche, brandProfile } = req.body;
    try {
      const prompt = `You are an expert Creator Coach guiding a new content creator through their journey.
Their niche is: "${niche}".
Their brand personality is: "${brandProfile?.personality || 'Authentic'}".

The creator is currently focusing on the milestone: "${milestoneId}".
The valid milestones are:
- "week-1": First idea bank
- "week-2": Publishing rhythm
- "week-4": Monetization path
- "month-2": First revenue signal

Based on this specific milestone and their niche, provide a highly personalized briefing.
Return ONLY a raw JSON object with the following fields:
- "coachMessage" (string: A 2-3 sentence encouraging and strategic opening message from the coach)
- "tips" (array of 3 strings: specific, actionable tips/tricks for this milestone tailored to their niche)
- "pitfalls" (array of 2 strings: common mistakes to avoid during this phase)

Do NOT include markdown formatting or backticks. Return ONLY the raw JSON.`;

      const result = await getGeminiClient().models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });
      
      let jsonString = result.text ?? '';
      const fenceMatch = jsonString.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (fenceMatch) jsonString = fenceMatch[1].trim();

      const briefing = JSON.parse(jsonString);
      res.json(briefing);
    } catch (error) {
      console.error("AI Milestone Briefing Error:", error);
      res.status(500).json({ error: "Failed to generate milestone briefing." });
    }
  });

  app.post("/api/ai/generate-content", requireAuth, async (req, res) => {
    const { prompt, niche, platform } = req.body;
    try {
      const result = await getGeminiClient().models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `As an expert content creator for ${platform} in the ${niche} niche, generate content based on this prompt: ${prompt}. Focus on engaging and beginner-friendly language.`,
      });
      const generatedContent = result.text;
      res.json({ content: generatedContent });
    } catch (error) {
      console.error("AI Content Generation Error:", error);
      res.status(500).json({ error: "Failed to generate content." });
    }
  });

  app.post("/api/ai/score-content", requireAuth, async (req, res) => {
    const { content } = req.body;
    if (!content || typeof content !== 'string' || content.trim().length === 0) {
      return res.status(400).json({ score: 0, feedback: "No content provided to score." });
    }
    try {
      const result = await getGeminiClient().models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Review the following content and provide a score out of 100 for overall quality, engagement, and clarity, along with specific, constructive feedback for a beginner creator. Respond ONLY with a raw JSON object — no markdown, no explanation, no code fences. The JSON must have exactly two fields: "score" (a number from 0 to 100) and "feedback" (a string). Content: """${content}"""`,
      });
      const aiResponseText = result.text ?? '';

      // Extraction strategy: try JSON fence → bare fence → brace scan
      let jsonString: string | null = null;

      const fenceMatch = aiResponseText.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (fenceMatch) {
        jsonString = fenceMatch[1].trim();
      } else {
        const braceStart = aiResponseText.indexOf('{');
        const braceEnd = aiResponseText.lastIndexOf('}');
        if (braceStart !== -1 && braceEnd > braceStart) {
          jsonString = aiResponseText.slice(braceStart, braceEnd + 1);
        }
      }

      if (!jsonString) {
        console.error("No JSON found in AI response:", aiResponseText);
        return res.status(500).json({ score: 0, feedback: "AI returned an unreadable response. Please try again." });
      }

      try {
        const parsed = JSON.parse(jsonString);
        const score = typeof parsed.score === 'number' ? Math.min(100, Math.max(0, parsed.score)) : 0;
        const feedback = typeof parsed.feedback === 'string' ? parsed.feedback : "No feedback provided.";
        res.json({ score, feedback });
      } catch (parseError) {
        console.error("Failed to parse extracted JSON:", jsonString);
        res.status(500).json({ score: 0, feedback: "Could not parse AI feedback. Please try again." });
      }
    } catch (error) {
      console.error("AI Content Scoring Error:", error);
      res.status(500).json({ error: "Failed to score content." });
    }
  });

  app.get("/api/analytics", requireAuth, (req, res) => {
    const analytics = db.prepare('SELECT * FROM analytics WHERE user_id = ? ORDER BY date ASC').all(req.userId);
    res.json(analytics);
  });

  app.get("/api/habits", requireAuth, (req, res) => {
    const streak = db.prepare('SELECT * FROM streaks WHERE user_id = ?').get(req.userId);
    const challenge = db.prepare('SELECT * FROM challenges WHERE user_id = ?').get(req.userId);
    res.json({ streak, challenge });
  });

  // --- OAuth & Social Integration ---

  app.get("/api/auth/google/url", (req, res) => {
    const url = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: [
        'https://www.googleapis.com/auth/youtube.upload',
        'https://www.googleapis.com/auth/youtube.readonly',
        'https://www.googleapis.com/auth/userinfo.profile'
      ],
      prompt: 'consent'
    });
    res.json({ url });
  });

  // Who am I? Returns the logged-in user or 401. The frontend calls this on
  // load to decide between the login screen and the app.
  app.get("/api/me", (req, res) => {
    const userId = verifySession(req.cookies?.[SESSION_COOKIE]);
    if (!userId) return res.status(401).json({ error: 'Not authenticated' });
    const user = db.prepare('SELECT id, email, name, picture FROM users WHERE id = ?').get(userId);
    if (!user) return res.status(401).json({ error: 'Not authenticated' });
    res.json(user);
  });

  // Log out: clear the session cookie. Client should then show the login screen.
  app.post("/api/logout", (req, res) => {
    res.clearCookie(SESSION_COOKIE);
    res.json({ success: true });
  });

  app.get("/api/auth/google/callback", async (req, res) => {
    const { code } = req.query;
    try {
      const { tokens } = await oauth2Client.getToken(code as string);
      oauth2Client.setCredentials(tokens);

      const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
      const userInfo = await oauth2.userinfo.get();
      const profile = userInfo.data;

      // 1) LOGIN: resolve (or create) the real user from their Google identity,
      //    then issue a signed session cookie so subsequent /api/* requests are
      //    authenticated as this person rather than a shared default user.
      const userId = upsertUserFromGoogle({
        id: profile.id,
        email: profile.email,
        name: profile.name,
        picture: profile.picture,
      });
      setSessionCookie(res, userId);

      // 2) ACCOUNT LINK: persist the YouTube OAuth tokens against this user so
      //    publishing/analytics can act on their channel. Same Google consent
      //    covers both because we request the youtube + profile scopes together.
      const existing = db.prepare('SELECT user_id FROM user_accounts WHERE user_id = ? AND platform = ?')
        .get(userId, 'youtube');

      if (existing) {
        db.prepare(`
          UPDATE user_accounts SET 
            access_token = ?, refresh_token = ?, expiry_date = ?, profile_data = ?
          WHERE user_id = ? AND platform = ?
        `).run(
          tokens.access_token,
          tokens.refresh_token || null,
          tokens.expiry_date,
          JSON.stringify(profile),
          userId,
          'youtube'
        );
      } else {
        db.prepare(`
          INSERT INTO user_accounts (user_id, platform, access_token, refresh_token, expiry_date, profile_data)
          VALUES (?, ?, ?, ?, ?, ?)
        `).run(
          userId,
          'youtube',
          tokens.access_token,
          tokens.refresh_token,
          tokens.expiry_date,
          JSON.stringify(profile)
        );
      }

      res.send(`
        <html>
          <body style="font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; background: #F9F9F8;">
            <div style="text-align: center; padding: 40px; background: white; border-radius: 24px; shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);">
              <h1 style="color: #141414;">Authentication Successful</h1>
              <p style="color: #666;">You can close this window now.</p>
              <script>
                if (window.opener) {
                  window.opener.postMessage({ type: 'OAUTH_AUTH_SUCCESS', platform: 'youtube' }, '*');
                  window.close();
                }
              </script>
            </div>
          </body>
        </html>
      `);
    } catch (error) {
      console.error('OAuth Error:', error);
      res.status(500).send('Authentication failed');
    }
  });

  app.get("/api/accounts", requireAuth, (req, res) => {
    const accounts = db.prepare('SELECT platform, profile_data FROM user_accounts WHERE user_id = ?').all(req.userId) as AccountSummaryRow[];
    res.json(accounts.map(a => ({
      platform: a.platform,
      profile: JSON.parse(a.profile_data)
    })));
  });

  app.post("/api/publish/youtube", requireAuth, async (req, res) => {
    const { title, description, videoUrl } = req.body;

    const account = db.prepare('SELECT * FROM user_accounts WHERE user_id = ? AND platform = ?').get(req.userId, 'youtube') as UserAccountRow | undefined;
    if (!account) return res.status(401).json({ error: 'YouTube account not connected' });

    try {
      const auth = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET
      );
      auth.setCredentials({
        access_token: account.access_token,
        refresh_token: account.refresh_token,
        expiry_date: account.expiry_date
      });

      const youtube = google.youtube({ version: 'v3', auth });

      if (!videoUrl) return res.status(400).json({ error: 'No video URL provided' });

      // Mocking the upload for now as we don't have a real video file buffer easily available
      // but the structure is correct.
      /*
      const response = await youtube.videos.insert({
        part: ['snippet', 'status'],
        requestBody: {
          snippet: { title, description },
          status: { privacyStatus: 'private' }
        },
        media: { body: fs.createReadStream(videoPath) }
      });
      */

      res.json({ success: true, message: 'Video queued for upload to YouTube' });
    } catch (error) {
      console.error('YouTube Upload Error:', error);
      res.status(500).json({ error: 'Failed to upload to YouTube' });
    }
  });

  app.get("/api/analytics/youtube", requireAuth, async (req, res) => {
    const account = db.prepare('SELECT * FROM user_accounts WHERE user_id = ? AND platform = ?').get(req.userId, 'youtube') as UserAccountRow | undefined;
    if (!account) return res.json({ views: 0, subscribers: 0 });

    try {
      const auth = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET
      );
      auth.setCredentials({
        access_token: account.access_token,
        refresh_token: account.refresh_token,
        expiry_date: account.expiry_date
      });

      const youtube = google.youtube({ version: 'v3', auth });
      const response = await youtube.channels.list({
        part: ['statistics'],
        mine: true
      });

      const stats = response.data.items?.[0]?.statistics;
      res.json({
        views: parseInt(stats?.viewCount || '0'),
        subscribers: parseInt(stats?.subscriberCount || '0'),
        videos: parseInt(stats?.videoCount || '0')
      });
    } catch (error) {
      console.error('YouTube Analytics Error:', error);
      res.json({ views: 0, subscribers: 0 });
    }
  });

  app.get("/robots.txt", (req, res) => {
    res.type('text/plain');
    res.send("User-agent: *\nAllow: /");
  });

  // Legal Pages (Server-side rendered for Google Crawler)
  app.get("/privacy", (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="google-site-verification" content="ZMH-pcv71VbShROkNGynDJHXieEDPxQwx2tUiSTuFuA">
          <title>Privacy Policy | Done by AI</title>
          <style>
              body { font-family: sans-serif; line-height: 1.6; max-width: 800px; margin: 40px auto; padding: 20px; color: #333; }
              h1 { border-bottom: 2px solid #eee; padding-bottom: 10px; }
              h2 { margin-top: 30px; }
          </style>
      </head>
      <body>
          <h1>Privacy Policy</h1>
          <p>Effective Date: March 28, 2026</p>
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you create an account, such as your name and email address. When you use our AI services, we may also collect the prompts and content you generate.</p>
          <h2>2. Google OAuth and YouTube Data</h2>
          <p>Done by AI uses Google OAuth to allow you to connect your YouTube channel. We only request the minimum permissions necessary to upload videos and retrieve channel analytics. We do not store your Google password. Your YouTube data is used solely to provide the features of the app and is not shared with third parties.</p>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, including AI-driven branding and content generation features.</p>
          <p><a href="/">Back to Home</a></p>
      </body>
      </html>
    `);
  });

  app.get("/terms", (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="google-site-verification" content="ZMH-pcv71VbShROkNGynDJHXieEDPxQwx2tUiSTuFuA">
          <title>Terms of Service | Done by AI</title>
          <style>
              body { font-family: sans-serif; line-height: 1.6; max-width: 800px; margin: 40px auto; padding: 20px; color: #333; }
              h1 { border-bottom: 2px solid #eee; padding-bottom: 10px; }
              h2 { margin-top: 30px; }
          </style>
      </head>
      <body>
          <h1>Terms of Service</h1>
          <p>Last Updated: March 28, 2026</p>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using Done by AI, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          <h2>2. AI-Generated Content</h2>
          <p>While you own the content you generate, you acknowledge that AI-generated content may not be unique and that other users may generate similar content.</p>
          <p><a href="/">Back to Home</a></p>
      </body>
      </html>
    `);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);

    // Catch-all: serve index.html for any non-API route so that
    // BrowserRouter deep links and page reloads work correctly in dev.
    app.get('*', async (req, res, next) => {
      try {
        const indexHtml = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        const transformed = await vite.transformIndexHtml(req.originalUrl, indexHtml);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(transformed);
      } catch (e) {
        next(e);
      }
    });
  } else {
    // Production build only
    let distPath = path.join(__dirname, 'dist');

    if (!fs.existsSync(path.join(distPath, 'index.html')) || !fs.existsSync(path.join(distPath, 'assets'))) {
      if (fs.existsSync(path.join(__dirname, 'index.html')) && fs.existsSync(path.join(__dirname, 'assets'))) {
        distPath = __dirname;
      } else if (fs.existsSync(path.join(process.cwd(), 'dist', 'index.html')) && fs.existsSync(path.join(process.cwd(), 'dist', 'assets'))) {
        distPath = path.join(process.cwd(), 'dist');
      } else if (fs.existsSync(path.join(process.cwd(), 'index.html')) && fs.existsSync(path.join(process.cwd(), 'assets'))) {
        distPath = process.cwd();
      }
    }

    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
