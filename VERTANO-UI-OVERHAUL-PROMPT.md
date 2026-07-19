# Google AI Studio Prompt — Vertano, v4: "Promise, Then Deliver"

You are a world-class product designer and full-stack engineer. You're building a landing page AND the working app behind it. The core principle: **the landing page tells the story of what Vertano does (a curated demo), and the app must actually do it (live generation after signup).** The trailer cannot promise a scene the movie doesn't deliver. Build both, and make them keep faith with each other.

---

## Product context

- **What it is:** an AI coach + workspace that helps people start a YouTube channel from day zero. The user has **no audience, no brand, no idea where to begin.** The enemy is blank-page paralysis.
- **Emotional truth:** they're intimidated and feel like impostors. The job is to flip "I could never" into "wait, I could actually do this" in seconds — and then *prove it's real* once they sign up.
- **Moat:** freemium. Free until the user hits YouTube monetization eligibility (1,000 subs / 4,000 watch hours), then $19/month. "We only win when you win — free until you're earning."
- **Stack:** React + Vite + TypeScript, Tailwind CSS, **Framer Motion** for animation, **Supabase** (Auth + Edge Functions) for backend.

---

## The two layers (this is the heart of the build)

### Layer 1 — The public hero: the PROMISE (curated)
The logged-out landing page. A visitor types a niche and watches their first video concept materialize in a cinematic reveal. This runs on **hand-curated, deterministic outputs** — no live model call, no auth, no cost, no abuse surface, and it never whiffs. It is the trailer: always impressive, always on-brand.

### Layer 2 — The authenticated app: the DELIVERY (live)
After signup, the **same interaction** runs for real: a **live LLM call** that generates a first video concept for *any* niche the user types. Same reveal, same animation, same quality — but now genuinely generative. This is the movie. It must make good on everything the hero promised.

### The contract that binds them
- The curated hero examples are **calibrated to what the live model can reliably produce** — not aspirational fantasy outputs the real thing can't match. Set the bar where live can clear it every time.
- The streaming reveal is **simulated** on the curated hero and a **real token stream** in the live app. Identical interface; the user can't tell which is which.
- If the live delivery would be weaker than the curated promise, that's a failure. Fix the prompt/model behind the live call until it meets the bar.

> Note: see `VERTANO-EDGE-FUNCTION-PROMPT.md` — current recommendation is to buffer the JSON response and animate the reveal client-side rather than truly streaming the model, since JSON can't be cleanly parsed mid-stream. Same visible effect, fewer bugs.

---

## The signature moment (build this with everything you've got — used in BOTH layers)

Hero input: "What do you want to make videos about?" On submit, a **spotlit reveal** animates the first video into existence:

1. The page dims warmly around a stage-lit panel.
2. The **title streams in** token by token (simulated curated / animated client-side live).
3. A **thumbnail concept composites in** — a rendered image that fades and scales into place with a subtle shimmer.
4. A **3-beat outline staggers in**, one beat at a time.
5. One insider-sounding line: *why this exact video works for a total beginner.*
6. A small, satisfying completion micro-celebration (a streak tick or progress fill — never confetti-spam).

This sequence is empowering wow ("it did this for ME"), never intimidating wow. A warm, inviting setup disarms the beginner; the cinematic reveal then blows their guard off. The contrast is the point.

**Curated integrity:** hand-tune excellent outputs for ~6 popular niches (gaming, cooking, fitness, tech reviews, car restoration, beauty). Titles specific and clickable; thumbnail concepts concrete; the "why it works" line reads like insider knowledge. Map common phrasings to the nearest curated niche.

---

## Live generation — technical requirements (Layer 2)

- Route the model call through a **Supabase Edge Function** so the API key stays server-side. The browser never sees the key.
- Handle **loading, error, and empty states** gracefully — a failed call must degrade kindly, never break the magic.
- Add **basic per-user rate limiting** in the Edge Function to control cost and abuse, even post-auth.
- The model prompt behind the call must enforce the same output shape as the curated examples (title + thumbnail concept + 3-beat outline + why-it-works line) so the UI is identical. Pin the specific model in the Edge Function; leave it as a clearly-marked constant I can swap.

---

## Visual language — "Warm Cinematic" (starting tokens; push bolder, don't replace wholesale)

- **Type:** display in **Fraunces** at large, confident scale; UI/body in **Figtree**. Not Inter.
- **Color:** warm paper base `#FAF8F5`; warm-black reveal stage `#16130F`; luminous persimmon accent `#FF5C39`; growth/success green `#0FA968`; muted support `#8A8175`.
- **Signature element:** a warm, cursor-and-scroll-reactive gradient mesh behind the hero — alive and premium, not a flat purple gradient.
- **Shape & depth:** generous radii (12–16px), layered soft shadows, real lighting on the spotlit reveal.
- **Motion (Framer Motion):** streaming text, compositing thumbnail, staggered reveals, scroll-driven transitions, springy micro-interactions. Tasteful and physical.
- **Voice:** plain, warm, confident second person. Name the fear, then make the user feel capable.

---

## What to build

1. **The public landing page** (Layer 1): hero-first, anchored by the curated reveal. Below: a tight value section, a "free until you're earning" fairness panel framed as trust, one primary CTA into signup.
2. **The authenticated app** (Layer 2): signup/auth via Supabase, then the same reveal running **live** via the Edge Function as onboarding step one, with the streak/progress spine visible.
3. **An adoptable system:** `tailwind.config` theme extension (colors, fonts, radii, shadows) + CSS custom properties + the Framer Motion variants + the Supabase Edge Function code.

---

## Hard requirements

1. Mobile-first and responsive — the reveal must be just as cinematic on a phone.
2. Accessibility: WCAG AA contrast, real focus states, semantic markup, `prefers-reduced-motion` fallback.
3. Self-contained, runnable React + Tailwind + Framer Motion + Supabase.
4. No generic AI-SaaS defaults (no flat purple-gradient hero, no Inter).
5. The public demo and the live in-app experience must be visibly the same product — same interface, same quality bar.

---

## Judge your own output before finishing

1. Do the first five seconds of the hero produce an involuntary "whoa"?
2. Does the reveal feel alive and generative, not like static content fading in?
3. **Does the live post-signup generation keep the promise the curated hero makes?** (Same quality, any niche.)
4. Does it make the USER feel powerful — not small next to a slick site?
5. Would someone screen-record the hero and send it to a friend?

End with one short paragraph: where the build is weakest against this rubric — especially any gap between the curated promise and the live delivery — and what you'd push next.
