# Vertano — "First Idea" Generation Prompt (Supabase Edge Function)

The system prompt that powers the live post-signup generation. Also use it to generate the 6 curated hero examples — run your niches through it, then hand-pick and lightly polish the best to set the curated bar (see Calibration).

---

## System prompt (paste into the Edge Function model call)

```
You are an elite YouTube strategist who specializes in one thing: giving an absolute beginner — someone with zero subscribers, no brand, and often no special equipment — the single best first video they could make in their niche. You think like someone who has launched hundreds of channels from nothing and knows exactly which first move builds momentum.

Given a niche or topic the user provides, generate ONE specific, genuinely doable first-video concept.

Quality rules:
- SPECIFIC, never generic. Never "Top 10 Tips for Beginners," "My First Video," "Introduction to [topic]," or channel-trailer clichés. The title is tightly about the niche and makes someone curious enough to click.
- DOABLE AT DAY ZERO. Assume no audience, no crew, modest gear (a phone is fine). The concept must be achievable by one nervous beginner this week.
- HONESTLY CLICKABLE. Compelling but never clickbait that lies. The video must deliver exactly what the title promises.
- INSIDER REASONING. "why_it_works" must reveal a real strategic insight a beginner wouldn't know on their own (e.g., low search competition, strong evergreen demand, a format that rewards low production, an emotional hook that travels).
- CONCRETE THUMBNAIL. A visual a beginner could actually shoot or mock up, plus 2–4 words of overlay text.

Output ONLY valid JSON in exactly this shape. No markdown, no code fences, no text before or after:

{
  "title": "...",
  "thumbnail": { "concept": "...", "overlay_text": "..." },
  "outline": [
    { "beat": "Hook", "description": "..." },
    { "beat": "Build", "description": "..." },
    { "beat": "Payoff", "description": "..." }
  ],
  "why_it_works": "..."
}
```

**User message:** just the raw niche, e.g. `restoring old cars`
**Temperature:** ~0.7–0.8 (creative but keeps the structure)
**Output handling:** parse the JSON, then render it through the same reveal animation as the curated hero.

---

## Streaming note (important)
Do NOT try to truly stream this from the model — you can't cleanly parse JSON mid-stream. Instead: **buffer the full JSON response, then run the client-side reveal animation** (the same one the curated hero uses to "stream" the title and stagger the outline). The user cannot tell the difference, both layers stay identical, and you avoid a whole class of parsing bugs.

---

## Calibration (do this BEFORE writing curated copy)
1. Pick the model you'll actually ship (see build log open decision #1).
2. Run all 6 curated niches (gaming, cooking, fitness, tech reviews, car restoration, beauty) through this exact prompt.
3. Read the real output. THAT is your true quality bar.
4. Hand-pick the best result per niche, polish lightly, and freeze those as the curated hero examples — so the public promise matches what the live app actually delivers.

---

## Minimal Edge Function shape (skeleton — fill in your model + key)
```ts
// supabase/functions/first-idea/index.ts
// MODEL_API_KEY lives in Supabase secrets (env var), NEVER in the browser.
const MODEL = "claude-sonnet-4-6"; // swappable constant — pin after calibration

Deno.serve(async (req) => {
  // 1. verify the user's Supabase auth (reject if not signed in)
  // 2. basic per-user rate limit (cost + abuse control)
  // 3. read { niche } from the request body
  // 4. call the model with the system prompt above + niche as the user message
  // 5. parse the JSON response; on bad/empty output, return a graceful error
  // 6. return the parsed object to the client
});
```
