// Edge Function: score-content
// Asks Gemini to score a piece of content 0-100 with feedback.
// Deployed with verify_jwt enabled; GEMINI_API_KEY stays server-side.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const apiKey = Deno.env.get("GEMINI_API_KEY");
  if (!apiKey) {
    return json({ error: "GEMINI_API_KEY is not configured for this function." }, 500);
  }

  try {
    const { content } = await req.json();
    if (!content) {
      return json({ error: "Missing content." }, 400);
    }

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text:
                `Review the following content and provide a score out of 100 for overall quality, ` +
                `engagement, and clarity, along with specific, constructive feedback for a beginner ` +
                `creator. Format your response as a JSON object with 'score' (number) and 'feedback' ` +
                `(string) fields. Content: """${content}"""`,
            }],
          }],
        }),
      },
    );

    if (!res.ok) {
      console.error("Gemini error:", res.status, await res.text());
      return json({ error: "Failed to score content." }, 502);
    }

    const data = await res.json();
    const raw: string = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

    try {
      const cleaned = raw.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleaned);
      return json({ score: Number(parsed.score) || 0, feedback: String(parsed.feedback ?? "") });
    } catch {
      console.error("Failed to parse AI response as JSON:", raw);
      return json({ score: 0, feedback: "Could not parse AI feedback. Please try again." });
    }
  } catch (error) {
    console.error("score-content error:", error);
    return json({ error: "Failed to score content." }, 500);
  }
});
