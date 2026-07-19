// Edge Function: generate-content
// Calls Gemini with the server-held GEMINI_API_KEY. Deployed with
// verify_jwt enabled, so only signed-in Vertano users can invoke it —
// the key never ships to the browser.
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
    const { prompt, niche, platform } = await req.json();
    if (!prompt) {
      return json({ error: "Missing prompt." }, 400);
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
                `As an expert content creator for ${platform} in the ${niche} niche, ` +
                `generate content based on this prompt: ${prompt}. ` +
                `Focus on engaging and beginner-friendly language.`,
            }],
          }],
        }),
      },
    );

    if (!res.ok) {
      console.error("Gemini error:", res.status, await res.text());
      return json({ error: "Failed to generate content." }, 502);
    }

    const data = await res.json();
    const content = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    return json({ content });
  } catch (error) {
    console.error("generate-content error:", error);
    return json({ error: "Failed to generate content." }, 500);
  }
});
