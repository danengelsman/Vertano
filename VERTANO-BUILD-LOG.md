# Vertano — UI/Landing Overhaul: Build Log & Decision Record

A handoff doc capturing the decisions behind the AI Studio prompt and the reasoning, so the *why* doesn't get lost. Written for Mick / future-Dan.

---

## One-line context
Vertano: an AI coach + workspace that helps total beginners ("day zero" — no audience, no brand) start a YouTube channel. The enemy is blank-page paralysis. Freemium, free until YouTube monetization eligibility, then $19/mo ("free until you're earning").

## The committed bet (the spine everything hangs on)
A warm, inviting landing experience that disarms a scared first-timer, then a **cinematic, spotlit reveal** where the product generates the user's first video live. The wow is the *magic trick* (the product doing the thing), not the chrome. Empowering wow ("it did this for ME"), never intimidating wow.

---

## Locked decisions

| # | Decision | Why |
|---|----------|-----|
| 1 | **One committed direction, not a menu of options** | A six-option pros/cons fan-out recreates the exact blank-page paralysis Vertano exists to kill. A solo founder needs conviction, not coverage. *(This was a mistake in the first drafts — see Lesson below.)* |
| 2 | **Visual direction: "Warm Cinematic"** | Threads the needle between wow and reassurance. Warm base disarms the day-zero impostor; dramatic reveal blows their guard off. The contrast is the wow. |
| 3 | **The "First Idea" generation moment is THE screen** | It's the single moment that converts a scared visitor into a believer and manufactures social proof we don't otherwise have at launch. |
| 4 | **The public demo and in-app onboarding are the same interaction** | Build once; consistent product; the promise and the delivery share one interface. |
| 5 | **Curated public hero / live generation only after signup** | Curated = bulletproof, zero cost/abuse, never whiffs, every visitor sees our best work. Live = the real magic, earned as the reward for signing up. |
| 6 | **Quality contract: curated examples calibrated to what live can reliably produce** | Prevents bait-and-switch. "The trailer can't promise a scene the movie doesn't deliver." |
| 7 | **Streaming alignment: curated reveal *simulates* the token stream; live reveal *is* a real stream** | Identical interface — the user can't tell which is which. Makes the promise honest. |
| 8 | **Live path: model call via a Supabase Edge Function** | Key stays server-side (never hits the browser). Enables streaming + per-user rate limiting for cost/abuse control + graceful failure. |
| 9 | **Tokens: Fraunces (display) + Figtree (UI); warm paper `#FAF8F5`, warm-black stage `#16130F`, persimmon `#FF5C39`, growth-green `#0FA968`; generous radii; reactive gradient mesh signature** | Distinctive and warm; deliberately not the generic AI-SaaS look (no Inter, no flat purple hero). |

---

## Design principles we're building against
- **Empowering wow, not intimidating wow.** Spectacle must make the user feel like the star, never small next to a slick site.
- **Promise, then deliver.** The hero is the trailer; the app is the movie; they must keep faith with each other.
- **The trick must never whiff.** A mediocre generated idea ("Top 10 Beginner Tips") destroys the wow instantly. Curated outputs are hand-tuned to insider quality.
- **Conviction over coverage.** (See Lesson.)

---

## Open decisions — need a call before/while building
1. **Which model powers live generation?** Recommendation: default to **Claude Sonnet 4.6** (already the proven workhorse elsewhere). But validate a cheaper option (e.g., a Flash/Haiku-tier model) against the six curated niches first — the model choice sets *how high the curated bar can go*. A weaker model means curated examples must be set lower so the promise stays honest. Pin it as a swappable constant in the Edge Function until validated.
2. **Calibration step (do this BEFORE writing curated copy):** generate the six niche outputs with the chosen model, then set the curated hero examples to *match that real quality* — don't write fantasy curated copy the live app can't reproduce.
3. **Stack readiness for live generation** — confirm the Edge Function path (key handling, streaming, rate limiting) is wired and producing good output before relying on it for onboarding.

---

## The lesson (worth keeping as a working principle)
The first two drafts optimized for **thoroughness** — six options, pros/cons grids — and mistook breadth for quality. That's decision-avoidance dressed as diligence, and it ironically rebuilt the blank-page paralysis the product fights. The stronger move every time: **pick the bet, show the reasoning, build one thing deeply.** Conviction over coverage. Apply this to Vertano broadly, not just this page.

---

## Related files
- `VERTANO-UI-OVERHAUL-PROMPT.md` — the paste-ready Google AI Studio build prompt (v4). *(Add to repo if you want it tracked here.)*
- `VERTANO-EDGE-FUNCTION-PROMPT.md` — the "First Idea" generation system prompt + Edge Function skeleton. *(Add to repo if you want it tracked here.)*
- `VERTANO-BUILD-LOG.md` — this doc.
