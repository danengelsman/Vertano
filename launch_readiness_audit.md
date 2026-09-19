# Launch Readiness Evaluation — Vertano
**Date:** 2026-08-24 | **Stack:** React/TS/Vite/Tailwind + Express/SQLite + Gemini AI + YouTube API

---

## 🎯 Executive Summary

**Verdict: Not launch-ready.** The app has a compelling feature set on paper (SprintBuilder, AI ContentEditor, MonetizationHub, gamification, Google OAuth) but **critical runtime blockers** exist:

1. **Server crashes on first DB call** — `db` variable used 28+ times but never initialized
2. **No tests** — zero test files found
3. **Auth just implemented** — untested with real Google credentials
4. **YouTube publish/analytics** — mock returns, not real API integration
5. **Frontend type errors** — 20+ pre-existing TS errors unrelated to auth work

**Time to launch-readiness:** 3-5 focused sprints if you fix the DB layer first.

---

## 🔴 Phase 1: Critical Runtime Blockers (Must Fix Before Anything Else)

### 1. Database Layer Missing — **SERVER WILL NOT START**
**Evidence:** `server.ts` references `db.prepare()`, `db.run()`, `db.get()`, `db.all()` 28+ times across all routes. But:
- Line 3: `import { supabase } from "./src/db.ts"` — imports Supabase client, not SQLite
- No `import Database from 'better-sqlite3'` or `const db = new Database(...)`
- No schema initialization (`CREATE TABLE` statements exist in comments but not executed)

**3 Fixes:**
1. **Add `better-sqlite3` init** at top of `startServer()`:
   ```ts
   import Database from 'better-sqlite3';
   const db = new Database('./creator_os.db');
   db.pragma('journal_mode = WAL');
   ```
2. **Run schema migrations on startup** — execute the `CREATE TABLE` statements (users, brands, content, streaks, challenges, analytics, user_accounts) with `db.exec()` guarded by `IF NOT EXISTS`
3. **Add graceful shutdown** — `process.on('SIGINT', () => db.close())`

**Logic:** Without this, *every* authenticated request 500s. This is the #1 blocker.

---

### 2. Zero Test Coverage
**Evidence:** `find . -name "*.test.*" -o -name "*.spec.*"` → 0 results in project root.

**3 Fixes:**
1. **Add Vitest** (native Vite integration) with `npm add -D vitest @vitest/ui jsdom`
2. **Critical path tests first:** auth flow (session set/verify/reject), `/api/me`, `/api/user`, brand CRUD, content CRUD
3. **Add E2E smoke test** with Playwright: Google OAuth → session → create brand → create content → publish mock

**Logic:** You're vibe-coding fast. Tests are the only way to refactor without silently breaking the value loop.

---

### 3. YouTube Integration = Mocks Only
**Evidence:** 
- `app.get("/api/analytics/youtube")` returns hardcoded `{ views: 0, subscribers: 0 }`
- `app.post("/api/publish/youtube")` has upload logic but no token refresh handling
- Token storage exists in `user_accounts` but refresh flow missing

**3 Fixes:**
1. **Add token refresh middleware** — before any YouTube API call, check `expiry_date`; if < 5 min, use `refresh_token` to get new `access_token` via `oauth2Client.refreshAccessToken()`
2. **Implement real analytics** — call `youtube.channels.list({ mine: true, part: 'statistics' })` and `youtube.videos.list({ id: ..., part: 'statistics' })`
3. **Add publish status polling** — YouTube upload is async; return `uploadId` and add `/api/publish/youtube/status/:uploadId` endpoint

**Logic:** "Publish to YouTube" is a core promise. Mock data destroys trust the moment a real creator tries it.

---

## 🟡 Phase 2: Core Value Loop Gaps (User-Facing Broken Flows)

### 4. SprintBuilder — Empty State & Onboarding Missing
**Evidence:** `SprintBuilderPage.tsx` exists but no empty-state UI, no template library, no guided first-sprint flow.

**4 Fixes:**
1. **Empty state screen** — "Create your first sprint" CTA → opens a 3-step wizard (niche → platform → goal)
2. **Template library** — 5-8 pre-built sprint templates (e.g., "7-Day Channel Launch", "Shorts Sprint", "Deep-Dive Series")
3. **Sprint duplication** — "Repeat this sprint" button for recurring workflows
4. **Progress persistence** — auto-save draft sprints to localStorage before server sync

**Logic:** First 5 minutes determine activation. Empty grid = churn.

---

### 5. ContentEditor — AI Reliability & Versioning
**Evidence:** `ContentEditor.tsx` calls AI endpoints but no retry, no streaming, no version history, no diff view.

**4 Fixes:**
1. **Streaming AI responses** — use `generateContentStream` for perceived speed
2. **Auto-save + version history** — every 30s + on blur, keep last 20 versions with diff viewer
3. **Prompt templates per platform** — YouTube long-form vs Shorts vs TikTok have different structures
4. **Human-in-the-loop scoring** — show AI score *before* publish with "Regenerate" and "Override" buttons

**Logic:** Content creation is the daily habit. Friction here = lost creators.

---

### 6. MonetizationHub & FirstDollarTracker — Data Layer Only
**Evidence:** Components exist (`MonetizationHub.tsx`, `FirstDollarTracker.tsx`) but backend routes are missing — no `/api/affiliates`, `/api/sponsorships`, `/api/revenue` endpoints.

**4 Fixes:**
1. **Affiliate link manager** — DB table + CRUD + click tracking pixel + commission import (CSV/API)
2. **Sponsorship pipeline** — Kanban board (Lead → Negotiating → Contracted → Delivered → Paid) with invoice gen
3. **Stripe/PayPal webhook endpoint** — `/api/webhooks/stripe` to auto-log revenue events
4. **Revenue dashboard** — MRR, ARR, revenue by channel, LTV — actionable metrics, not vanity

**Logic:** "First dollar" is your differentiator. Without real money tracking, it's a toy.

---

### 7. Gamification — Streaks/Challenges Need Polish
**Evidence:** DB tables exist (`streaks`, `challenges`) and endpoints work, but:
- Streak uses UTC dates (timezone bug for non-US creators)
- No "streak repair" (paid or free)
- Challenges are static, not dynamic
- Badges not shareable

**4 Fixes:**
1. **Timezone-aware streaks** — store user's IANA tz, compute "today" in their zone
2. **Streak repair mechanic** — 1 free repair/month, then paid (monetization hook)
3. **Dynamic challenges** — AI-generated weekly challenges based on creator's niche/level
4. **Shareable badge cards** — OG-image generation for social posts ("I hit 30-day streak on Vertano!")

**Logic:** Retention mechanics only work if they feel fair and social.

---

## 🟢 Phase 3: Technical Stability & Scale Prep

### 8. Error Handling & Observability
**Evidence:** No Sentry, no structured logging, no request IDs, `console.error` only.

**3 Fixes:**
1. **Add Sentry** (DSN in env) — captures errors with user context (`userId`, `sessionId`)
2. **Request ID middleware** — `crypto.randomUUID()` per request, logged + returned in `X-Request-ID` header
3. **Structured JSON logs** — `pino` or `consola` with level, timestamp, userId, route, latency

**Logic:** You can't debug production issues without this.

---

### 9. AI Cost Guardrails
**Evidence:** Gemini calls in 6 endpoints with no rate limiting, no per-user quotas, no cost tracking.

**3 Fixes:**
1. **Per-user daily token budget** — e.g., 500k tokens/day free tier, tracked in `users.ai_tokens_used_today`
2. **Rate limiter** — `express-rate-limit` on `/api/ai/*` (e.g., 30 req/min per user)
3. **Cost dashboard (admin)** — total spend, per-user spend, model breakdown

**Logic:** Unbounded AI spend kills solo-founder economics.

---

### 10. DB Migration Strategy (SQLite → Postgres/Supabase)
**Evidence:** Code uses raw SQL strings tied to SQLite syntax (`json_insert`, `MAX()` in UPDATE).

**3 Fixes:**
1. **Extract all SQL to a `queries/` folder** — parameterized, dialect-agnostic where possible
2. **Add Knex or Drizzle ORM** — schema defined in code, migrations generated
3. **Dual-write period** — write to both SQLite and Supabase for 2 weeks, compare row counts

**Logic:** You've said Supabase is the migration target. Start the abstraction now.

---

## ⚪ Phase 4: Trust, Legal, Growth

### 11. Privacy/ToS Alignment
**Evidence:** `/privacy` and `/terms` routes exist but are static HTML. No GDPR/CCPA flows.

**3 Fixes:**
1. **Data export endpoint** — `GET /api/me/export` returns all user data as JSON
2. **Account deletion** — `DELETE /api/me` cascades to all tables, revokes Google tokens
3. **Consent log** — record `accepted_terms_at`, `accepted_privacy_at`, `marketing_opt_in` on signup

**Logic:** Legal compliance isn't optional; build it before you have users to complain.

---

### 12. Distribution Mechanics Missing
**Evidence:** No SEO pages, no referral program, no shareable artifacts, no public profiles.

**3 Fixes:**
1. **Programmatic SEO** — `/templates/[niche]`, `/sprints/[type]`, `/creators/[username]` with SSR
2. **Referral program** — "Give 1 month Pro, get 1 month Pro" with unique codes
3. **Public sprint results** — opt-in shareable page showing sprint completion + content links

**Logic:** You're a solo founder. Product-led growth is your only affordable channel.

---

## 📊 Phase 5: Decision Gates (We Need Your Call)

| # | Decision | Options | Recommendation |
|---|----------|---------|----------------|
| 1 | **Auth v1** | Google-only vs Google + email/password | **Google-only** — less code, matches YouTube OAuth flow |
| 2 | **Monetization** | Freemium (forever free tier) vs 14-day trial vs Usage-based | **14-day trial → $29/mo** — creators pay for outcomes, not features |
| 3 | **Platform v1** | Web-only vs PWA vs React Native | **Web + PWA** — installable, no app store friction |
| 4 | **AI Model** | BYOK (user brings Gemini key) vs Bundled (we pay) | **Bundled + fair-use cap** — better UX, controllable cost |
| 5 | **Launch Niche** | All YouTube creators vs YouTube Educators vs Agencies | **YouTube Educators** — highest willingness to pay, clearest use case |

---

## 🗓️ Suggested Sprint Plan

| Sprint | Focus | Deliverable |
|--------|-------|-------------|
| 0 | **DB Layer** | Server boots, all routes return 200/401 (not 500), schema migrates |
| 1 | **Auth Harden** | Real Google OAuth tested, session management, logout, device list |
| 2 | **YouTube Real** | Token refresh, real analytics, publish with status polling |
| 3 | **Core Loop** | SprintBuilder templates, ContentEditor streaming + versions, MonetizationHub CRUD |
| 4 | **Growth Prep** | SEO pages, referral, export/delete, Sentry, rate limits |
| 5 | **Launch Polish** | Landing page, pricing, docs, Stripe checkout, beta invite flow |

---

## 🏁 Next Steps

1. **I'll fix the DB layer now** (Phase 1.1) — this unblocks everything
2. **You decide the 5 Decision Gates** above
3. **Competitive analysis** — sub-agent data gathered; I'll synthesize it next
4. **Then we build marketing packet + investor deck**

Want me to start with **Sprint 0 (DB layer fix)** while you review the decision gates?