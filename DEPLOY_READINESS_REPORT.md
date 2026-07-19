 # Deployment Readiness Report

| # | Check | Status | Severity | Findings |
|---|-------|--------|----------|----------|
| 1 | Hardcoded secrets | FAIL | CRITICAL | `firebase-applet-config.json:4`: Hardcoded Firebase API key in a non-gitignored file.<br>`server.ts:78`: Insecure fallback session secret `dev-insecure-session-secret-change-me`.<br>`.env:4`: Real Gemini API key stored on disk. |
| 2 | Environment variable usage | FAIL | CRITICAL | `vite.config.ts:11`: Exposes Gemini API key to the frontend browser build via `process.env.GEMINI_API_KEY`.<br>`.env.example`: Missing Firebase, Stripe, and other required environment variables. |
| 3 | Ports & hosts | FAIL | WARNING | `server.ts:66`: Hardcoded `PORT = 3000` without falling back to `process.env.PORT`. |
| 4 | CORS (Edge Functions) | PASS | INFO | none. (No Edge functions exist in `supabase/functions/`. Backend is a monolithic Express app in `server.ts`). |
| 5 | Compile / build | PASS | WARNING | `npm run build` (`vite build`) completes with zero errors.<br>`npm run lint:ts` (`tsc --noEmit`) fails due to `tsconfig.json` project reference misconfigurations. |
| 6 | Startup / runtime safety | FAIL | CRITICAL | Supabase migrations and RLS definitions are entirely missing, exposing database tables without row-level security.<br>`src/lib/supabaseClient.ts:8`: Fails silently (exports `null`) instead of throwing when env vars are missing. |
| 7 | API ↔ frontend integration | FAIL | CRITICAL | Stripe integration is missing completely. No webhook handler, no signature verification, no backend endpoints (only UI stubs exist). |
| 8 | Deploy target detection | FAIL | WARNING | No deploy target configured yet — must be chosen before launch (missing `vercel.json`, `netlify.toml`, `.github/workflows`, etc). |

> **DEPLOY VERDICT: NO-GO** — The project leaks sensitive API keys directly to the frontend, relies on insecure default session secrets, lacks any backend Stripe implementation, and exposes the database without RLS.

## Punch List

- [ ] Add `firebase-applet-config.json` to `.gitignore` and rotate the exposed Firebase API key if it was ever committed.
- [ ] Remove `process.env.GEMINI_API_KEY` definition from `vite.config.ts` so the secret is not bundled into the frontend client.
- [ ] Remove the insecure fallback string from `SESSION_SECRET` in `server.ts` line 78 and enforce it via environment variable.
- [ ] Implement the Stripe webhook handler in `server.ts` and verify event signatures.
- [ ] Create Supabase migrations and enable Row Level Security (RLS) policies for all tables.
- [ ] Update `src/lib/supabaseClient.ts` to throw a loud error if initialization variables are missing.
- [ ] Update `server.ts` to use `process.env.PORT || 3000` instead of a hardcoded port.
- [ ] Fix `tsconfig.json` project references so `npm run lint:ts` (`tsc --noEmit`) passes successfully.
- [ ] Configure a deployment target (`vercel.json`, `netlify.toml`, Dockerfile, or GitHub Actions pipeline).
- [ ] Update `.env.example` to document all required environment variables for Firebase, Stripe, and the Express backend.
