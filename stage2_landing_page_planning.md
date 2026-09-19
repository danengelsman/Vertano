# Stage 2: Landing-Page Content Architecture and Copy Structure

**Status:** PLANNING ONLY — NO FILES MODIFIED

**Date:** 2026-08-29  
**Evidence basis:** Repository inspection of `LandingHero.tsx`, `AppLayout.tsx`, `OnboardingModal.tsx`, `LoginScreen.tsx`, `Dashboard.tsx`, `FirstDollarTracker.tsx`, `ContentEditor.tsx`, `Community.tsx`, `Reports.tsx`, `server.ts`, `AppContext.tsx`, `Milestones.ts`, `VertanoLogo.tsx`, `Footer.tsx`, `Navbar.tsx`, `SprintBuilderPage.tsx`, `SprintBuilder.tsx`, `types.ts`, `metadata.json`, `PRIVACY_POLICY.md`, `TERMS_OF_SERVICE.md`, `CHANGELOG.md`, `VERTANO_REBRAND_STRATEGY.md`, `VERTANO_BUILD_LOG.md`, `VERTANO_EDGE_FUNCTION_PROMPT.md`, `competitive_analysis.md`, `launch_readiness_audit.md`, `DEPLOY_READINESS_REPORT.md`, `APP_STORE_METADATA.md`, `PROJECT_NAME.md`, `package.json`, `index.html`, `tailwind.config.ts`, `App.css`, plus supporting docs under `supabase/`, `dist/`, `dist-server/`.

---

## Evidence Legend

Used throughout this document:

| Label | Meaning |
|-------|---------|
| **Verified from repository** | Found in committed source code (`server.ts`, `.tsx` components, `.ts` modules) |
| **Verified at runtime** | Would require a running server + network; NOT verified in this session |
| **Present but unverified** | Code exists, but not tested end-to-end for correctness |
| **UI-present** | Component renders in the UI |
| **UI-only/mock** | Hardcoded data in frontend, no backend backing |
| **Future-state** | Planned but not implemented |
| **Strategic hypothesis** | A positioning/design intent stated in design docs, not yet validated by users |
| **Proposed copy** | Draft text, unapproved for publication |
| **Unknown** | Not found in inspected scope |
| **Prohibited from publication** | Explicitly barred by task constraints |

---

## 1. Full Section-by-Section Landing-Page Wirelist

The current landing page is composed of `LandingHero.tsx`, rendered inside `AppLayout.tsx`. The following is a **proposed restructure** of that page into distinct sections. Each section below is labeled with its evidence status.

### Current Sections (as found in `LandingHero.tsx`)

| # | Section (Current) | Component Location | Evidence Status |
|---|---|---|---|
| 1 | **Hero** — Logo, nav (Sign In / Start Free), H1, subhead, dual CTA (Start Free / Watch 90s demo), trust bar | `LandingHero.tsx` L63–127 | Proposed copy / UI-present |
| 2 | **Why Vertano** — "One system. Three phases. Zero guesswork." with 3 differentiator cards (Plan/Create/Earn) and screenshot placeholders | `LandingHero.tsx` L129–174 | Present but unverified (SprintBuilder is UI-present/partial; ContentEditor AI scoring is mock/unverified; MonetizationHub is UI-present/manual) |
| 3 | **Social Proof** — "Real creator outcomes" with 3 testimonial cards (Sarah Chen $2,100/mo, Marcus Johnson week 6, Priya Patel +40% RPM) | `LandingHero.tsx` L176–209 | Prohibited from publication (invented testimonials) |
| 4 | **CTA / Pricing** — "Aligned pricing" section with "Free until you earn $100 / $29/mo / Cancel anytime" card | `LandingHero.tsx` L211–268 | Prohibited from publication (pricing not approved; "$0 until $100" not approved) |
| 5 | **Footer CTA** — "Ready for your turning point?" with repeated "5,000+ creators" + "14-day free trial" + CTA | `LandingHero.tsx` L270–292 | Prohibited from publication (customer count, pricing, trial length not approved) |

### Proposed Sections (Restructured Wirelist)

| # | Section (Proposed) | Visitor Question Answered | Emotional Purpose | Evidence Status |
|---|---|---|---|---|
| 1 | **Hero** — H1 + subhead + primary CTA + secondary CTA | What is this, and is it for someone like me? | Disarm the scared beginner; make them feel seen | Proposed copy |
| 2 | **The Hard Truth** — The gap between having ideas and earning income | Why hasn't what I've tried worked? | Validate their frustration; name the real enemy | Strategic hypothesis |
| 3 | **How It Works (Visual Path)** — 3-phase visual flow: Plan → Create → Earn with annotated screenshots | What actually happens step by step? | Build confidence through clarity and sequence | Present but unverified |
| 4 | **What Actually Works Today** — Distinguish current from future functionality | What can I use right now vs. what's coming? | Set honest expectations; reduce disappointment | Verified from repository |
| 5 | **The Creator Problem, Named** — Address the psychological barriers (impostor syndrome, blank page, not knowing where to start) | Am I normal for feeling stuck? | Normalize the struggle; reduce isolation | Strategic hypothesis |
| 6 | **Evidence / Trust Plan** — Possible trust statements, each with required evidence and current status | Can I trust this? | Build cautious confidence without fake proof | Trust-content plan |
| 7 | **CTA / Entry Point Options** — Waitlist, early access, demo, guest exploration (no assumed waitlist) | How do I try this? | Lower the commitment barrier; offer choices | Proposed copy |
| 8 | **Footer** — Legal links + minimal brand attribution | Who made this? | Professional closure; legal safety | Verified from repository |

---

## 2. Visitor Question Answered by Every Section

| Section | Primary Question Answered | Secondary Question Answered |
|---------|--------------------------|----------------------------|
| Hero | What is this product, and is it for me? | Can I try it without committing? |
| The Hard Truth | Why do I keep failing at this? | Is the problem me, or the tools? |
| How It Works | What do I actually do inside this product? | Is this for someone at my level? |
| What Works Today | What's real right now vs. aspirational? | Will I be disappointed by missing features? |
| The Creator Problem | Am I normal for feeling this way? | Does this product understand me? |
| Evidence / Trust Plan | Can I trust what they say? | What do I need to verify myself? |
| CTA / Entry Point | How do I get in? | What if I'm not ready to commit? |
| Footer | Who is behind this? | What are my legal rights? |

---

## 3. Emotional Purpose of Every Section

| Section | Emotional Purpose |
|---------|-------------------|
| **Hero** | Make the beginner feel understood and safe. Replace "I'm behind" with "this is designed for where I am." |
| **The Hard Truth** | Validate frustration without shame. Name the enemy (blank page paralysis, scattered tools, guessing) so the visitor feels less alone. |
| **How It Works** | Replace overwhelm with a clear next step. Show a path that is concrete, not abstract. |
| **What Works Today** | Earn trust through honesty. A product that admits its boundaries is a product that won't waste the user's time later. |
| **The Creator Problem** | Normalize the emotional barriers (impostor syndrome, fear of judgment, not knowing where to start). Make the product feel like a friend, not a tool. |
| **Evidence / Trust Plan** | Build cautious confidence. Don't overwhelm with fake proof; show what *could* be true and what evidence each claim needs. |
| **CTA / Entry Point** | Lower the commitment barrier. Offer choices (watch a demo, explore as guest, join a waitlist) so the visitor controls the pace. |
| **Footer** | Provide professional closure. Signal that this is a real entity with legal obligations. |

---

## 4. Draft Content for Every Section

> All text below is **Proposed copy** — unapproved for publication unless explicitly approved by the user.

### Section 1: Hero

**H1 (Proposed copy):**
> [Working name] guides you from your first idea to your first dollar — one week at a time.

**Subhead (Proposed copy):**
> If you've ever started a channel and stopped because you didn't know what to create next, or how to turn it into income, this is for you. No prior audience, no technical setup, no guesswork.

**Primary CTA (Proposed copy):**
> [Get early access]

**Secondary CTA (Proposed copy):**
> [Watch a 90-second overview]

### Section 2: The Hard Truth

**Header (Proposed copy):**
> The gap between knowing what to do and actually doing it.

**Body (Proposed copy):**
> Most creator tools assume you already have an audience, a brand, and a posting schedule. They give you features — analytics, templates, AI scripts — but none of them answer the question that actually stops you: "What do I do tomorrow?"
>
> You don't need another tool. You need a next move that's concrete, achievable, and tied to money.

**Emotional hook (Proposed copy):**
> *Illustration only: A creator sits at their desk, staring at a blank "New Video" screen. The cursor blinks. They close the tab and tell themselves they'll try again next week.*

**Evidence label:** Strategic hypothesis

### Section 3: How It Works (Visual Path)

**Header (Proposed copy):**
> Three phases. No skipped steps.

**Phase 1 — Plan (Proposed copy):**
> SprintBuilder maps your first 7 days. Not a template you have to fill out — a checklist built for your niche.

**Phase 2 — Create (Proposed copy):**
> ContentEditor helps you write, score, and refine your first pieces. AI feedback that you decide whether to trust.

**Phase 3 — Earn (Proposed copy):**
> Revenue tracking shows which of your videos actually made money — and which didn't.

**Evidence status per phase:**
- **SprintBuilder**: UI-present/partial — `SprintBuilderPage.tsx` exists but renders `SprintBuilder.tsx` which references `SprintHeader` and `TaskList` components that do not exist as separate files (they are TODO comments at line 24–26). Data falls back to `mockSprint`.
- **ContentEditor**: UI-present — `ContentEditor.tsx` renders. AI scoring calls `/api/ai/score-content` (verified in `server.ts` L535), but the `scoreContent` function in `lib/api.ts` calls `/api/ai/score-content` (not `/api/ai/score-content`). The backend endpoint exists, but whether it returns a real score or degrades depends on the Gemini API call succeeding. **Mock or unverified at runtime.**
- **Revenue tracking**: UI-only/mock — `FirstDollarTracker.tsx` (L1–82) uses `estimatedEarnings` computed in `AppContext.tsx` (L446–456) from a hardcoded formula: `followerCount * 0.15 * weeklyPosts * 4 * engagementRate * (affiliateRate + sponsorRate + adRate)`. No real revenue data is ingested. Community feed (`defaultCommunityFeed`) is hardcoded mock data (L229–240 in `AppContext.tsx`). Leaderboard data in `Community.tsx` (L19–30) is entirely hardcoded.

**Screenshot note:** The current `LandingHero.tsx` has text placeholders saying `{item.title} screenshot` (L161). No actual screenshots are available. This is a **missing product asset**.

### Section 4: What Actually Works Today

**Header (Proposed copy):**
> What's ready now. What's coming next.

**Body (Proposed copy):**
> [Working name] is early software. Here's what you can actually use today, and what's still being built.

**Subtable (Proposed copy):**

| Ready Now | Status | Evidence |
|-----------|--------|----------|
| AI onboarding chat (finds your niche) | UI-present, backend verified | `OnboardingModal.tsx` calls `/api/ai/onboarding-chat` (verified in `server.ts` L366). Returns either `{ text: "..." }` or `{ niches: [...] }`. Requires auth. |
| AI brand profile generation | UI-present, backend verified | `OnboardingModal.tsx` L89–91 calls `/api/ai/generate-branding` (verified in `server.ts` L412). Returns `{ brandProfile: {...} }`. |
| AI script generation (Content Studio) | UI-present, backend verified | `ContentEditor.tsx` L309–318 calls `/api/ai/generate-content` (verified in `server.ts` L520). |
| AI content scoring | UI-present, backend verified | `ContentEditor.tsx` L92 calls `scoreContent()` → `/api/ai/score-content` (verified in `server.ts` L535). |
| Google OAuth login | UI-present, backend present but unverified at runtime | `LoginScreen.tsx` L40–71 calls `/api/auth/google/url` (verified in `server.ts` L594). OAuth callback endpoint exists (L623). **Not end-to-end verified in this session.** |
| 7-day milestone roadmap | UI-present, data verified | `milestones.ts` — 4 milestones (week-1, week-2, week-4, month-2) with tasks. `Roadmap.tsx` and `MilestonePage.tsx` render this data. `MilestonePage` calls `/api/ai/milestone-briefing` (verified in `server.ts` L481). |
| Content publishing (internal) | UI-present, backend verified | `ContentEditor.tsx` `handlePublish()` (L132–155) calls `publishDraft()` → `publishContent()` → `/api/content/:id/publish` (verified in `server.ts` L321). Updates SQLite `content` table + `streaks` table. |
| Gamification (streaks, badges, challenges) | UI-present, state mostly UI-only/mock | Streaks: backend verified (`/api/habits` → `streaks` table, `server.ts` L586). Badges: **UI-only/mock** — `defaultBadges` in `AppContext.tsx` L170–181; `earnBadge()` only mutates frontend state, no backend persistence. Challenge days: **UI-only/mock** — `defaultChallengeDays` in `AppContext.tsx` L183–227; `completeChallenge` calls `/api/challenge/:day/complete` (verified in `server.ts` L356) but the days array itself is entirely frontend-generated. |

| Coming Next | Status | Evidence |
|-------------|--------|----------|
| YouTube publishing (real) | UI-only/mock | `server.ts` L707–746 — the `youtube.videos.insert` call is commented out (L731–739). Returns `{ success: true, message: 'Video queued for upload to YouTube' }` without actually uploading. **YouTube publishing is mocked.** |
| YouTube analytics (real) | UI-only/mock | `server.ts` L748–779 — calls `youtube.channels.list`, but returns hardcoded `{ views: 0, subscribers: 0 }` on auth failure. UI in `Reports.tsx` uses entirely hardcoded `platformAccounts` and `weeklyData` arrays. |
| Revenue attribution | Not implemented | No `monetization_type` tagging in the database schema (`content` table has: `id`, `user_id`, `title`, `body`, `type`, `platform`, `status`, `score`, `score_feedback`, `created_at`, `updated_at`, `published_at`, `published`). No revenue column. `estimatedEarnings` in `AppContext.tsx` is a formula, not real data. |
| Mobile app (React Native) | Future-state | Listed in README.md L72 and CHANGELOG.md L18 |
| Stripe checkout / payments | UI-only/mock | `Reports.tsx` L251 — `toast({ title: 'Upgrade to Pro', description: 'Stripe checkout would open here for subscription.' })`. No Stripe backend exists. `DEPLOY_READINESS_REPORT.md` L11: "Stripe integration is missing completely." |
| Email/password auth | Future-state | Only Google OAuth is implemented (`server.ts` has Google OAuth routes). `AuthModal.tsx` has a stub email/password form, but it only shows a toast — no backend endpoint exists. |
| Referral program | Future-state | Not present in any inspected file |

### Section 5: The Creator Problem, Named

**Header (Proposed copy):**
> You're not behind. The path is just invisible.

**Body (Proposed copy):**
> New creators face two problems at once:
>
> 1. **The execution gap** — knowing what to do next when every tutorial assumes you already post consistently.
> 2. **The money gap** — having an audience but no idea which content actually pays, or where to start monetizing.
>
> [Working name] was built for the person who has neither problem solved — but wants to solve both, one week at a time.

**Evidence label:** Strategic hypothesis

### Section 6: Evidence / Trust Plan

This section replaces invented trust signals with a transparent plan.

| Possible Trust Statement | Evidence Required | Current Status | Safe for Public Use? |
|--------------------------|-------------------|----------------|---------------------|
| "Built by a solo founder who creates content" | Founder identity + public profile | Unknown — founder info is internal only; not public | ❌ No — do not claim a specific founder background |
| "OAuth via Google's official API" | Google OAuth endpoint verified in code; end-to-end tested with real credentials | Present but unverified at runtime | ⚠️ Only with qualification: "Google OAuth endpoint verified in code" |
| "Your progress saves automatically" | End-to-end test: save draft → reload → data persists | Not verified at runtime | ❌ No — claim only after verification |
| "AI scoring improves over time" | User feedback loop implemented in backend | Not implemented — scoring is a one-shot Gemini call | ❌ No |
| "No credit card required to start" | No payment endpoint active; free entry is the default state | UI-present (no paywall blocking entry) | ✅ Yes, as a description of current behavior |
| "You can leave at any time" | Cancel mechanism exists / would exist | Unknown — no Stripe integration yet, so no subscriptions to cancel | ⚠️ Only as "future-state" |
| "Built with Google Gemini" | `GEMINI_API_KEY` in `server.ts` L8–22, `package.json` L22 (`@google/genai`) | Verified from repository | ✅ Yes |
| "SQLite database keeps your data fast and local" | `better-sqlite3` in `package.json` L57, `server.ts` L13 `new Database('./creator_os.db')` | Verified from repository, but database initialization is broken (see Launch Readiness Audit L22–28) | ⚠️ Qualified: "SQLite is the backend" but note: "server startup currently has a DB initialization blocker" |
| "Works on web" | Vite dev server + Express backend serve the app | Verified from repository | ✅ Yes |

### Section 7: CTA / Entry Point Options

| Option | Proposed Copy | Backend / Product Requirements | Evidence Status |
|--------|---------------|-------------------------------|-----------------|
| **Waitlist** | [Proposed copy: "Join the waitlist — we'll send you an invite when ready"] | Requires a waitlist email capture endpoint + database table + email service (SendGrid, Mailgun, etc.) | Not present — would need building |
| **Early access** | [Proposed copy: "Get early access — no credit card, no commitment"] | Requires invite-code system + user tracking + email notification | Not present — would need building |
| **Demo video** | [Proposed copy: "Watch how it works (90s)"] | Requires a demo video asset to be produced and hosted | Missing product asset — no demo video exists |
| **Guest exploration** | [Proposed copy: "Try as guest — no sign-in required"] | Requires a guest mode that loads the app with ephemeral/local data | Not implemented — `AppLayout.tsx` L81 renders `LandingHero` + `LoginScreen` when not authenticated; the login screen modal covers the page but has a "Continue as guest" button (L135–141) that just calls `onClose` and returns to the same landing page |
| **Account creation (Google OAuth)** | [Proposed copy: "Continue with Google"] | Google OAuth flow exists in `server.ts` L594–697; `LoginScreen.tsx` L40–71 implements the popup flow | UI-present, backend present, not verified end-to-end |

### Section 8: Footer

**Proposed copy (Proposed copy):**
> [Working name] — guiding creators from first idea to first dollar.  
> [Privacy Policy] [Terms of Service]

**Legal links:** `/privacy` and `/terms` routes exist in `server.ts` (L787–843). Content verified.  
**Attribution:** No specific company name or founder name should appear until approved.

---

## 5. Evidence Required for Every Factual Product Statement

| Factual Statement | Evidence Required | Evidence Status |
|---|---|---|
| "AI helps you find your niche" | End-to-end test: user completes onboarding chat → receives 3 niche suggestions → selects one → brand profile generated | Verified from repository (backend endpoints exist) / Not verified at runtime |
| "AI scores your content" | End-to-end test: user writes script → `/api/ai/score-content` returns a numeric score + feedback string | Verified from repository (endpoint exists) / Not verified at runtime |
| "Content saves as a draft" | End-to-end test: user saves draft → `/api/content` POST returns `{ id }` → `/api/content` GET returns the draft | Verified from repository (endpoints exist) / Not verified at runtime |
| "Streaks track publishing" | End-to-end test: user publishes → streak increments in SQLite `streaks` table → dashboard reflects new streak | Verified from repository (backend logic exists in `server.ts` L328–354) / Not verified at runtime |
| "Google OAuth works" | End-to-end test with real Google credentials: login popup → callback → session cookie → `/api/me` returns user | Present but unverified — OAuth endpoints exist in code but were not tested with real credentials in this session |
| "YouTube publishing works" | End-to-end test: user connects YouTube account → publishes video → video appears on their channel | Prohibited from publication — `server.ts` L728–739: the actual `youtube.videos.insert` call is COMMENTED OUT; returns mock success |
| "Revenue attribution works" | End-to-end test: user publishes video → system tracks per-video revenue from affiliates/sponsors/ads | Not implemented — no `monetization_type` column in `content` table; `estimatedEarnings` is a hardcoded formula in `AppContext.tsx` L446–456 |
| "SQLite database stores everything" | Verify `better-sqlite3` is initialized and `db.exec()` runs schema migrations on boot | Present but unverified — `launch_readiness_audit.md` L23: "Line 3: `import { supabase } from './src/db.ts'` imports Supabase client, not SQLite. No `const db = new Database(...)`." **Server will not start.** |

---

## 6. Evidence Status for Every Claim

| Claim (from current `LandingHero.tsx`) | Evidence Status |
|---|---|
| "The only system that guides YouTube creators from first video to first dollar — then scales to full-time." | Prohibited from publication — "the only system" is a prohibited claim; "YouTube publishing" is mocked; "first dollar" tracking is UI-only/mock |
| "5,247+ creators" | Prohibited from publication — customer counts are prohibited |
| "$2.3M+ earned" | Prohibited from publication — invented revenue figures |
| "4.9★ rating" | Prohibited from publication — invented ratings |
| "SprintBuilder turns strategy into a weekly checklist" | Present but unverified — `SprintBuilderPage.tsx` falls back to mock data; `SprintBuilder.tsx` references components that don't exist |
| "ContentEditor scores your script before you record" | UI-only/mock — AI scoring endpoint exists but returns results from an unverified Gemini API call; the `scoreContent` function in `api.ts` L91–93 calls the endpoint, but the endpoint may fail at runtime |
| "MonetizationHub links every video to revenue" | Prohibited from publication — revenue attribution is not implemented; `content` table has no revenue column |
| "Free until you earn $100" | Prohibited from publication — pricing model not approved |
| "14-day trial" | Prohibited from publication — trial length not approved |
| "Free during beta" | Prohibited from publication — beta pricing not approved |
| "Vertano" (as product name) | Do not select — name not approved; use [Product name] / [Working name] |
| "SOC 2" (from trust bar in rebrand strategy) | Prohibited from publication — certifications are prohibited |
| Testimonials (Sarah Chen, Marcus Johnson, Priya Patel) | Prohibited from publication — invented testimonials |
| "Built with Google Gemini" | Verified from repository — `@google/genai` in `package.json` L22; `server.ts` L11, L18 |
| "Google OAuth login" | Present but unverified — endpoints exist in `server.ts` L594–697 but not tested end-to-end |
| "SQLite database" | Present but unverified — `better-sqlite3` in `package.json` L57, but `server.ts` imports `supabase` instead of initializing SQLite; server won't start |

---

## 7. Product-Evidence Requirements

To make any factual claim on the landing page, the following evidence must be gathered and verified:

1. **OAuth end-to-end test** — Sign in with a real Google account → session cookie is set → `/api/me` returns the correct user → logout works. Currently: code exists but untested.

2. **Content save/publish flow test** — Create a draft → save → reload → draft persists in SQLite → publish → streak updates. Currently: backend endpoints exist but DB layer is broken (server won't start per `launch_readiness_audit.md`).

3. **AI scoring demonstration** — Write a script → `/api/ai/score-content` returns a score in 0–100 and actionable feedback. Currently: endpoint exists in `server.ts` L535 but may fail if Gemini API key is missing or invalid.

4. **AI onboarding test** — Complete onboarding chat → receive niche suggestions → generate brand profile. Currently: endpoints exist in `server.ts` L366, L412 but untested at runtime.

5. **No real user count** — The "5,247 creators" figure does not exist. No user analytics or tracking is implemented (see `DEPLOY_READINESS_REPORT.md` L1: "Analytics and conversion tracking are not currently implemented").

6. **No real revenue data** — `estimatedEarnings` in `AppContext.tsx` L446–456 is a hardcoded formula. No real revenue data is ingested from any source.

7. **No real YouTube integration** — `server.ts` L728: "Mocking the upload for now as we don't have a real video file buffer easily available." The actual upload call is commented out.

8. **No demo video** — No demo video asset exists. `LandingHero.tsx` L109 references "Watch 90s demo" but no video file is present in `public/` or referenced anywhere.

9. **No screenshots** — `LandingHero.tsx` L159–164: placeholder divs that say `{item.title} screenshot`. No real screenshots are available in `public/`, `dist/`, or referenced in any component.

10. **No Stripe integration** — `Reports.tsx` L251 shows a toast "Stripe checkout would open here." No Stripe backend exists.

11. **No waitlist system** — No waitlist email capture, no invite codes, no email service configured.

12. **No analytics/tracking** — No Google Analytics, Plausible, PostHog, or any analytics script. `DEPLOY_READINESS_REPORT.md` confirms this.

---

## 8. Placeholder Inventory

| Placeholder | Location | Type | Safe to Show Publicly? |
|---|---|---|---|
| "SprintBuilder screenshot" | `LandingHero.tsx` L161 | UI placeholder text div | ❌ No — looks like real proof |
| "ContentEditor screenshot" | `LandingHero.tsx` L161 | UI placeholder text div | ❌ No |
| "MonetizationHub screenshot" | `LandingHero.tsx` L161 | UI placeholder text div | ❌ No |
| "Watch 90s demo" | `LandingHero.tsx` L109 | CTA with no video asset | ❌ No — no demo video exists |
| "5,247+ creators" | `LandingHero.tsx` L8 | Invented metric | ❌ Prohibited |
| "$2.3M+ earned" | `LandingHero.tsx` L9 | Invented metric | ❌ Prohibited |
| "4.9★ rating" | `LandingHero.tsx` L10 | Invented rating | ❌ Prohibited |
| Social proof testimonials (Sarah Chen, Marcus Johnson, Priya Patel) | `LandingHero.tsx` L37–56 | Invented testimonials | ❌ Prohibited |
| "Free until you earn $100" | `LandingHero.tsx` L223 | Unapproved pricing | ❌ Prohibited |
| "14-day free trial" | `LandingHero.tsx` L100, L288 | Unapproved trial length | ❌ Prohibited |
| "Free during beta" | `LoginScreen.tsx` L102 | Unapproved beta pricing | ❌ Prohibited |
| "Join 5,000+ creators" | `LandingHero.tsx` L279 | Invented customer count | ❌ Prohibited |
| "Start Free — 14 day trial" | `LandingHero.tsx` L100, L288 | Unapproved pricing/trial | ❌ Prohibited |
| "Free until you earn $100. Then $29/mo" | `LandingHero.tsx` L223–224, L253–254 | Unapproved pricing | ❌ Prohibited |
| "SOC 2" (implied in trust bar per VERTANO_REBRAND_STRATEGY L82) | Design doc reference | Prohibited claim | ❌ Prohibited |
| Leaderboard data (Sarah K., Mike R., etc.) | `Community.tsx` L19–30 | Mock data | ⚠️ UI-only — not on landing page, but present in product |
| `mockSprint` | `SprintBuilderPage.tsx` L22–35 | Mock data | ⚠️ UI-only — fallback when Supabase unavailable |
| `defaultCommunityFeed` | `AppContext.tsx` L229–240 | Mock data | ⚠️ UI-only — hardcoded array |
| `defaultWeeklyBrief` | `AppContext.tsx` L242–253 | Mock data | ⚠️ UI-only — hardcoded array |
| `defaultChallengeDays` | `AppContext.tsx` L183–227 | Mock data | ⚠️ UI-only — generated in frontend |
| Email/password auth form in AuthModal | `AuthModal.tsx` L58–111 | UI-only stub | ⚠️ Shows toast only; no backend endpoint |
| Apple sign-in button in AuthModal | `AuthModal.tsx` L58–63 | UI-only stub | ⚠️ Shows toast only |
| "Stripe checkout would open here" | `Reports.tsx` L251 | UI-only stub | ⚠️ No Stripe integration |
| "Video queued for upload to YouTube" | `server.ts` L741 | Mock return | ❌ Prohibited — YouTube publishing is mocked |
| `estimatedEarnings` formula | `AppContext.tsx` L446–456 | Mock computation | ⚠️ Not real revenue data |

---

## 9. CTA Placement Map

| Location (Proposed) | CTA Type | Proposed Copy | Requirements |
|---|---|---|---|
| Hero (primary, above fold) | Try it | [Get early access] | No waitlist exists; requires backend build |
| Hero (secondary, above fold) | Learn | [Watch how it works — 90s] | No demo video exists; require asset |
| How It Works (floating) | Try it | [See the roadmap] | Roadmap view exists in-app |
| What Works Today (section end) | Try it | [Start the onboarding chat] | Requires auth + API key |
| The Creator Problem (section end) | Learn | [Read how beginners succeed] | No blog/content exists |
| Evidence / Trust Plan (section end) | Try it | [Try as guest — no sign-in] | Guest mode does not exist; `LoginScreen.tsx` "Continue as guest" button just closes the modal and returns to the same page |
| CTA / Entry Point Options (section) | Multiple | [Waitlist] / [Early access] / [Demo] / [Guest] / [Sign in with Google] | Most require backend work; Google OAuth is the only one close to ready |
| Footer (minimal) | Learn | [Privacy Policy] [Terms] | Verified — `/privacy` and `/terms` routes exist in `server.ts` |

---

## 10. Mobile Information Hierarchy

Based on the existing Tailwind config (`tailwind.config.ts` L76–83: `fontSize` with responsive clamp scales, `screens` not customized so defaults apply).

**Critical constraint:** The current `LoginScreen.tsx` (approved UX change) overlays a card on the landing page. On mobile, this card must not cover the entire screen. The current implementation (`AppLayout.tsx` L84) renders `{showLogin && <LoginScreen onClose={() => setShowLogin(false)} />}` — the `onClose` is wired. The card itself (L74–143 of `LoginScreen.tsx`) is `w-full max-w-md` centered, with a close button (L87–93). This satisfies the approved caveat: the user can exit, continue as a guest (L135–141), or inspect the landing page behind the overlay.

**Mobile stacking order (proposed):**

1. **Logo + nav** (Sign In) — collapsed to icon or single button
2. **H1** — single line, large type (`text-display-lg` clamps from 2.5rem to 4rem)
3. **Subhead** — 2–3 lines max
4. **Primary CTA** — full-width button
5. **Secondary CTA** — full-width, below primary
6. **The Hard Truth** — subhead + 1–2 short paragraphs, no illustrations
7. **How It Works** — vertically stacked cards (not grid), each with a 1-line summary
8. **What Works Today** — simplified to a yes/no table (two columns drop to one)
9. **Creator Problem** — 2 short paragraphs
10. **Trust Plan** — collapsed accordion (trust is heavy; mobile users scan)
11. **CTA Options** — stacked vertical list
12. **Footer** — 2-column link list (not 4-column)

**Mobile-specific requirements:**
- No hover-dependent interactions (no hover-to-reveal tooltips, no hover-only menus)
- Touch targets ≥ 44×44px
- No multi-CTA confusion — max 1 primary, 1 secondary above fold
- `prefers-reduced-motion` must be respected (current `tailwind.config.ts` L159–161 handles this for `apple-fade-up`, but check all animations)

---

## 11. Accessibility Requirements

Based on inspection of current components:

1. **Skip link** — Not present. Must add "Skip to main content" at top of page.
2. **Landmark roles** — `main`, `nav`, `section` should have explicit roles. Currently `LandingHero.tsx` uses `<section>` which is semantically correct but could add `aria-label` for screen readers.
3. **Focus management** — `LoginScreen.tsx` has `role="dialog"` and `aria-modal="true"` (L78–80) and `aria-labelledby="login-title"` (L98). This is good. But the "Continue as guest" button (L135–141) needs to ensure focus returns to the triggering element after close.
4. **Color contrast** — `VertanoLogo.tsx` L19–23: `mono` variant uses `bg-foreground text-background`. Must verify 4.5:1 contrast ratio against the theme. `LandingHero.tsx` uses `text-muted-foreground` extensively (L88, L107, etc.) — verify these pass AA contrast on all backgrounds.
5. **Alt text for images** — No images are present (placeholders are divs). If screenshots are added, each needs descriptive `alt` text.
6. **Motion safety** — `tailwind.config.ts` L159–161 handles `prefers-reduced-motion: reduce` for `.apple-fade-up`. Must extend to all animations.
7. **Form labels** — `LoginScreen.tsx` has `aria-label="Close login dialog"` (L91). `AuthModal.tsx` has `DialogTitle` and `DialogDescription` (L36–37) with `VisuallyHidden` (L4). Good pattern.
8. **Keyboard navigation** — `Button` components are `<button>` elements (natively focusable). Nav items in `Navbar.tsx` (L76–91) are `<button>` elements. Good.
9. **ARIA for dynamic content** — `ContentEditor.tsx` uses `aria-hidden="true"` on the SVG icon (L48). `OnboardingModal.tsx` has proper chat message structure but could add `aria-live="polite"` for incoming messages (L148–168 — messages are plain `<div>`s).
10. **Language attribute** — `index.html` L2: `<html lang="en">`. Correct.

---

## 12. SEO Content Implications

**Without inventing search volumes or rankings.** All SEO-relevant content currently present:

| Element | Current Content | Evidence Status |
|---|---|---|
| `<title>` | "Vertano — Your Turning Point from Content to Income" | Proposed copy — name not approved |
| `<meta name="description">` | "The only system that guides YouTube creators from first video to first dollar — then scales to full-time. SprintBuilder, ContentEditor, MonetizationHub in one workflow." | Prohibited — "the only system" is prohibited; YouTube publishing is mocked |
| `og:title` | "Vertano — Your Turning Point from Content to Income" | Proposed copy |
| `og:description` | "The only system that guides YouTube educators from first video to first dollar — then scales to full-time..." | Prohibited |
| `og:url` | "https://vertano.app" | Domain pending (APP_STORE_METADATA.md L60: "domain pending setup") |
| `og:image` | "/og.jpg" | Missing product asset — no OG image file exists in `public/` or `dist/` |
| `canonical` | "https://vertano.app" | Domain pending |
| `twitter:card` | "summary_large_image" | OK |
| `robots.txt` | "User-agent: *\nAllow: /" (in `server.ts` L781–784) | Verified from repository |
| Keywords (per APP_STORE_METADATA.md L30) | "content creation, youtube, creator, education, productivity, learning, dashboard, monetization, sprint, goals, tracking, gamification, beginners, creator tools, educator, expert" | Not in HTML meta; listed in App Store metadata only |
| Structured data (Product, FAQ) | Not present | Future-state — proposed in `VERTANO_REBRAND_STRATEGY.md` L246 |

**SEO content implications for the proposed landing page:**

- **Title tag:** Should clearly state the product's value proposition and target audience. Replace "Vertano" with [Product name] / [Working name]. Must avoid "the only system" and unverified monetization claims.
- **Meta description:** Must be under 160 characters. Should describe the actual product state honestly. Can mention: AI onboarding, milestone-based roadmap, script scoring, draft saving. Must NOT mention: "first dollar," "full-time," "monetization tracking" (not implemented), "the only system."
- **Heading hierarchy:** H1 → H2 → H3. Only one H1 per page (currently correct: L85–90 of `LandingHero.tsx`).
- **Content sections:** Should include keyword-relevant, human-readable content about: YouTube content creation, beginner creator challenges, content planning systems, AI-assisted writing. All as **Strategic hypothesis** or **Proposed copy** — not verified user research.
- **No AI-generated filler:** Avoid vague "AI-powered" content that doesn't explain *what the AI actually does*. Be specific: "AI scoring for your scripts" (verified endpoint exists) vs "AI content generation" (endpoint exists but unverified at runtime).

---

## 13. Beginner-Comprehension Requirements

Based on the target audience described in `VERTANO_BUILD_LOG.md` L3 ("total beginners") and `competitive_analysis.md` L122 ("0-10k subs"):

1. **No jargon above the fold.** Terms like "monetization," "attribution," "sprint builder" should either be explained or deferred below the fold.

2. **Concrete over abstract.** Instead of "guidance," show "a 7-day plan with daily tasks." Instead of "track revenue," show "see which videos made money."

3. **No assumed prior knowledge.** The landing page should not assume the visitor knows what "YouTube Shorts" are, or what "RPM" means, or how OAuth works.

4. **Visual scaffolding.** Screenshots or diagrams should show the actual UI. Currently: NO screenshots exist. This is a **missing product asset**.

5. **Fear-addressing microcopy.** Common beginner fears: "What if I'm not good enough?" "What if this doesn't work for my niche?" "What if I waste time?" These should be addressed in section copy, not dismissed.

6. **Low-commitment entry.** The first CTA should offer the lowest possible commitment (demo video, as-guest browse, short quiz) before asking for email or OAuth.

7. **Progressive disclosure.** Complex features (revenue attribution, multi-platform publishing) should be shown as "future-state" with a clear timeline, not hidden behind vague "coming soon."

8. **Mobile-first mental model.** Many beginners will arrive on mobile. The value proposition must be clear in <3 seconds of scanning on a 375px viewport.

---

## 14. Early-Churn Risks Created by Each Promise

| Section | Promise Made | Churn Risk if Promise Fails | Risk Level |
|---------|-------------|---------------------------|------------|
| Hero | "Guides you from first idea to first dollar" | User signs up expecting revenue, gets only a roadmap. No actual dollar tracking exists. | 🔴 CRITICAL — Revenue attribution is entirely mock/unverified |
| Hero | "One week at a time" | SprintBuilder falls back to mock data when Supabase is unavailable. | 🟡 HIGH — SprintBuilder is UI-present/partial |
| How It Works | "SprintBuilder maps your first 7 days" | Component renders `SprintBuilder.tsx` which references `SprintHeader` and `TaskList` that don't exist as files (TODO L24–26). | 🟡 HIGH — Partial implementation |
| How It Works | "AI feedback that you decide whether to trust" | `ContentEditor.tsx` calls `/api/ai/score-content` but if the endpoint fails or returns garbage, the AI scoring feels broken immediately. | 🟡 HIGH — Backend exists but unverified at runtime |
| What Works Today | "Google OAuth login" | OAuth endpoints exist in code but were never tested with real Google credentials in this session. | 🟡 HIGH — Present but unverified |
| Evidence / Trust | "Your progress saves automatically" | `db` variable in `server.ts` is never initialized (imports `supabase` instead of `better-sqlite3`). **Server will not start.** | 🔴 CRITICAL — DB layer broken per `launch_readiness_audit.md` |
| CTA Options | "Watch how it works (90s)" | No demo video exists. If a video is promised, users will look for it. | 🔴 CRITICAL — Missing product asset |
| Trust Plan | "Built with Google Gemini" | True, but if AI scoring fails on first use, the Gemini integration feels broken. | Medium — Backend exists, runtime unverified |
| Footer | "Privacy Policy" and "Terms of Service" | These exist as server-rendered HTML (`server.ts` L787–843). But domain is `vertano.app` (pending) while code references `vertano.app` everywhere. | Low — Legal pages are real, domain pending |

---

## 15. Claim Ledger

Every proposed public-facing statement, its evidence status, and action required:

| # | Statement (Proposed or Current) | Evidence Status | Action Required |
|---|---|---|---|
| 1 | "[Working name] guides you from your first idea to your first dollar — one week at a time." | Prohibited from publication (unverified revenue attribution + "first dollar" claim) | Rewrite to: "[Working name] guides you through your first 7 days of content creation with a weekly roadmap." |
| 2 | "SprintBuilder maps your first 7 days." | Present but unverified (SprintBuilder component missing sub-components; falls back to mock) | Label as "In development — screenshot is illustrative" or remove until verified |
| 3 | "ContentEditor helps you write, score, and refine your first pieces." | UI-present, backend present but unverified at runtime | Qualify: "AI scoring preview — requires Gemini API key" |
| 4 | "Google OAuth login" | Present but unverified at runtime | Qualify: "via Google OAuth" — but note: "Server DB layer needs fixing before login can persist" |
| 5 | "AI onboarding chat finds your niche" | Verified from repository (endpoints exist in `server.ts`) | Safe with caveat if API key is present |
| 6 | "Built with Google Gemini" | Verified from repository (`@google/genai` in package.json, `server.ts` L11) | ✅ Safe to state |
| 7 | "7-day milestone roadmap" | Verified from repository (`milestones.ts` has 4 milestones) | ✅ Safe — data is static in code |
| 8 | "Streaks track publishing" | Verified from repository (backend logic exists in `server.ts` L328–354) | Safe but note DB initialization is blocked |
| 9 | "No credit card required" | Verified from repository (no payment system exists) | ✅ Safe — currently true by default |
| 9 | "Watch how it works (90s)" | Prohibited — no demo video exists | Remove CTA or mark as "Coming soon" |
| 10 | Any YouTube publishing claim | Prohibited from publication | Never state YouTube publishing as a working feature |
| 11 | Any revenue attribution claim | Prohibited from publication | Never state revenue attribution as a current feature |
| 12 | "Vertano" as product name | Prohibited — not approved | Use [Product name] / [Working name] |
| 13 | "$29/mo" pricing | Prohibited from publication | Show as "Pricing TBC" |
| 14 | "14-day trial" | Prohibited from publication | Show as "Trial period TBC" |
| 15 | "Free until you earn $100" | Prohibited from publication | Show as "Pricing model TBC" |
| 16 | "5,000+ creators" | Prohibited from publication | Remove entirely |
| 17 | "$2.3M earned" | Prohibited from publication | Remove entirely |
| 18 | "4.9★ rating" | Prohibited from publication | Remove entirely |
| 19 | Testimonial quotes (Sarah Chen, etc.) | Prohibited from publication | Remove entirely |
| 20 | "SOC 2" | Prohibited from publication | Remove entirely |
| 21 | "The only system..." | Prohibited from publication | Remove entirely |
| 22 | "SQLite database keeps your data fast and local" | Prohibited — "your data stays on your machine" not technically verified (DB is server-side, not client-side) | Remove or qualify severely |
| 23 | "Free during beta" | Prohibited from publication | Remove entirely |
| 24 | "Vertano.app" domain | Unknown — domain pending (APP_STORE_METADATA.md L60) | Use [Product domain] placeholder |
| 25 | "5,000+ creators who stopped guessing" | Prohibited from publication | Remove entirely |

---

## Unresolved Decisions

1. **Product name** — Vertano is experimental only. Must select a final name before any public copy references it. Use [Product name] / [Working name] in all draft copy until decided.

2. **Pricing model** — The current code shows "$29/mo" and "free until $100 earned" but these are prohibited from publication. Must decide: trial, freemium, outcome-based, or none. No pricing copy should be written until decided.

3. **Trial length** — "14-day trial" appears in UI but is prohibited from publication. Must decide actual trial length (or none).

4. **Demo video** — No demo video asset exists. Must decide: produce one, or remove all "Watch demo" CTAs.

5. **Screenshots** — No product screenshots exist. Must capture real screenshots of: onboarding chat, ContentEditor AI scoring, Roadmap with milestones, Dashboard stats. Placeholders that look like real screenshots are prohibited.

6. **Trust statements** — The trust-content plan (Section 6) lists possible statements but requires evidence for each. Which statements are priority to verify first?

7. **CTA strategy** — Waitlist, early access, demo, guest exploration, or Google-only? Each has different backend requirements (Section 7). Must decide which to implement first.

8. **Mobile approach** — The current page uses a 3-column grid for "Why Vertano" (L144) and trust bar (L115). On mobile these become single-column stacks. Must verify touch targets and tap targets are ≥44px.

9. **Beta/free status** — The current code says "Free during beta" (LoginScreen.tsx L102) but this is prohibited. Must decide whether to state any free/beta status at all.

10. **Competitive claims** — The current page says "The only system" (L89) and compares Vertano to VidIQ/Kajabi (L140). Must remove "the only" claims and reframe competitive positioning as neutral workflow observations.

---

## Claims Requiring Evidence

1. **"5,247 creators"** — No user count exists. No analytics or user tracking implemented. **Evidence needed:** Real active-user count from a verified analytics source.

2. **"$2.3M earned"** — No revenue tracking exists. `estimatedEarnings` is a hardcoded formula. **Evidence needed:** Verified revenue data from real users (if any exist).

3. **"4.9-star rating"** — No ratings exist. **Evidence needed:** Actual user ratings from a review system.

4. **Testimonials (Sarah Chen, Marcus Johnson, Priya Patel)** — No real testimonials exist. **Evidence needed:** Verified quotes from actual users with permission to publish.

5. **"YouTube publishing works"** — `server.ts` L728: the actual upload call is commented out. **Evidence needed:** End-to-end test with real YouTube API credentials.

6. **"Revenue attribution works"** — No revenue column in the `content` table. No `monetization_type` tagging. **Evidence needed:** Working attribution pipeline from content → revenue source.

7. **"Your data stays on your machine"** — SQLite is server-side (`server.ts` L123: `new Database('./creator_os.db')`), not client-side. **Evidence needed:** Either move to client-side storage or stop claiming local data.

8. **"SOC 2"** — No SOC 2 audit exists. **Evidence needed:** Actual SOC 2 Type II certification report.

9. **"Built with Google Gemini"** — ✅ This claim IS verified (`@google/genai` in package.json, `server.ts` L11–22).

10. **"Google OAuth login"** — Endpoints exist in code but were not tested with real credentials. **Evidence needed:** End-to-end login test with a real Google account.

11. **Any customer count, rating, or revenue figure** — None exist in the codebase, database, or analytics. **Evidence needed:** Real data from production usage.

---

## Missing Product Assets

| Asset | Why It's Needed | Current Status |
|---|---|---|
| **Product screenshots (4-6)** | Landing page needs visual proof of the UI. Current placeholders (`<div>...` screenshot`) are prohibited as they look like fake proof. | Missing — no screenshots in `public/`, `dist/`, or referenced in components |
| **Demo video (90s)** | Hero CTA "Watch 90s demo" has no backing asset. | Missing — no video files in `public/` or `dist/` |
| **OG image** | `index.html` references `/og.jpg` (L14) but no such file exists in `public/` or `dist/`. | Missing — `/og.jpg` returns 404 |
| **Logo variants** | `VertanoLogo.tsx` uses an inline SVG (V-shape). No `.svg` or `.png` asset files exist for external use. | Partially present (inline SVG only) |
| **Favicon** | `index.html` L8: `<link rel="icon" type="image/svg+xml" href="/placeholder.svg" />` — references `placeholder.svg` which does not exist. | Missing — references a file that doesn't exist |
| **Brand photography** | Apple-inspired aesthetic needs professional imagery. | Missing |
| **Trust badges/icons** | Current trust bar uses inline `lucide-react` icons (Users, DollarSign, Star) with invented numbers. | Present but unverified data |
| **Email capture backend** | For waitlist/early access CTAs. | Not present — no email service, no waitlist table |

---

## Implementation Dependencies

1. **Fix database initialization** — `server.ts` imports `supabase` from `./src/db.ts` but should use `better-sqlite3`. Per `launch_readiness_audit.md` L23–28: "No `import Database from 'better-sqlite3'` or `const db = new Database(...)`." This blocks ALL backend functionality.

2. **Add test coverage** — Zero test files exist. `launch_readiness_audit.md` L42–49: "find . -name '*.test.*' → 0 results." Need Vitest + Playwright before claiming any feature works.

3. **Implement real YouTube integration** — `server.ts` L728: upload is commented out. Need token refresh + real `youtube.videos.insert()`.

4. **Build email capture / waitlist** — No waitlist endpoint, table, or email service exists.

5. **Produce demo video** — No video editing or recording pipeline exists.

6. **Capture screenshots** — Need access to a running instance (blocked by #1) to capture real screenshots.

7. **Create OG image** — Need design asset pipeline (Figma, Canva, etc.).

8. **Fix favicon** — Need to create and save a `favicon.svg` to `public/`.

9. **Resolve auth identity conflict** — `AppLayout.tsx` uses Firebase auth (`useAuth.ts` imports from `@/firebase`), but `server.ts` uses Google OAuth + session cookies. The `AuthModal.tsx` has stub email/password + Apple buttons that only show toasts. Need to decide on single auth system.

10. **Add analytics/tracking** — No GA, Plausible, PostHog, or any analytics. `DEPLOY_READINESS_REPORT.md` L1 confirms this.

11. **Resolve Supabase vs SQLite conflict** — `package.json` includes `@supabase/supabase-js` (L51), `src/lib/supabaseClient.ts` exists, `src/firebase.ts` exists, and `server.ts` uses `better-sqlite3`. Three competing data layers. Need to choose one.

---

## The Smallest Safe Next Step

Before writing or approving any landing-page copy:

1. **Fix the database initialization** in `server.ts` so the server actually starts. This is the #1 blocker per `launch_readiness_audit.md`. Without it, no feature works and no evidence can be gathered.

2. **Run the server** and verify:
   - `/api/me` returns 401 (not 500) when no session
   - `/api/auth/google/url` returns a valid OAuth URL
   - `/api/ai/onboarding-chat` returns a response with a real Gemini API key

3. **Capture first screenshot** of the onboarding chat or landing page after the server boots.

4. **Write ONE honest headline + subhead** using [Working name], describing only what is verified:
   > "Weekly roadmap for YouTube creators just starting out."  
   > "AI chat finds your niche and maps your first 7 days. No audience, no experience needed."

Only after these steps should copywriting for additional sections begin.

---

## Confirmation

- **No files were modified.** This document was written to the workspace as a planning artifact only. No source code, configuration, package files, metadata, legal text, auth, onboarding, analytics, SEO, or design token files were altered. No files were deleted or renamed.

- **No name was selected.** [Product name] / [Working name] is used throughout. "Vertano" appears only as a reference to the existing experimental name in the repository, never as an approved selection.

- **No pricing was selected.** All pricing-related copy is labeled as "unresolved" or "Prohibited from publication." The proposed CTA options list what backend work each option requires, without committing to any path.

---

## Appendix: Repository Evidence Map

For easy reference, here is where each claim was verified:

| Claim | File | Line(s) | Evidence Label |
|---|---|---|---|
| "5,247 creators" | LandingHero.tsx | L8 | Prohibited from publication |
| "$2.3M earned" | LandingHero.tsx | L9 | Prohibited from publication |
| "4.9★ rating" | LandingHero.tsx | L10 | Prohibited from publication |
| Testimonial: Sarah Chen | LandingHero.tsx | L37–43 | Prohibited from publication |
| Testimonial: Marcus Johnson | LandingHero.tsx | L44–49 | Prohibited from publication |
| Testimonial: Priya Patel | LandingHero.tsx | L50–55 | Prohibited from publication |
| Hero H1 | LandingHero.tsx | L85–87 | Proposed copy |
| Hero subhead | LandingHero.tsx | L88–90 | Proposed copy |
| "14 day trial" | LandingHero.tsx | L100, L288 | Prohibited from publication |
| "Free until $100. Then $29/mo" | LandingHero.tsx | L223–224, L253–254 | Prohibited from publication |
| "Join 5,000+ creators" | LandingHero.tsx | L279 | Prohibited from publication |
| "Vertano" name | LandingHero.tsx, VertanoLogo.tsx, all components | Throughout | Prohibited — not approved |
| "Watch 90s demo" | LandingHero.tsx | L109 | Missing product asset |
| "Screenshot" placeholders | LandingHero.tsx | L159–164 | UI-only/mock |
| ContentEditor AI scoring | ContentEditor.tsx L92, api.ts L91–93, server.ts L535 | Multiple | UI-present, backend verified, runtime unverified |
| ContentEditor publish | ContentEditor.tsx L132–155, api.ts L76–79, server.ts L321–354 | Multiple | Verified from repository |
| Google OAuth URL | api.ts L46–49, server.ts L594–605 | Multiple | Verified from repository |
| OAuth callback | server.ts L623–697 | 175 lines | Present but unverified at runtime |
| YouTube upload (mocked) | server.ts L707–746 | 40 lines | UI-only/mock |
| YouTube analytics | server.ts L748–779 | 32 lines | UI-only/mock |
| Revenue estimation formula | AppContext.tsx L446–456 | 11 lines | UI-only/mock |
| Streaks backend | server.ts L328–354 | 27 lines | Verified from repository |
| Challenge completion | server.ts L356–362 | 7 lines | Verified from repository |
| Habits endpoint | server.ts L586–590 | 5 lines | Verified from repository |
| AI onboarding chat | server.ts L366–410 | 45 lines | Verified from repository |
| AI branding generation | server.ts L412–445 | 34 lines | Verified from repository |
| AI hook generation | server.ts L447–479 | 33 lines | Verified from repository |
| AI milestone briefing | server.ts L481–518 | 38 lines | Verified from repository |
| AI content generation | server.ts L520–533 | 14 lines | Verified from repository |
| AI content scoring | server.ts L535–579 | 45 lines | Verified from repository |
| DB initialization broken | server.ts L3 | 1 line | Present but unverified (audit says broken) |
| Privacy policy | server.ts L787–815 | 29 lines | Verified from repository |
| Terms of service | server.ts L817–843 | 27 lines | Verified from repository |
| Milestones data | milestones.ts L15–64 | 50 lines | Verified from repository |
| Community feed mock | AppContext.tsx L229–240 | 12 lines | UI-only/mock |
| Weekly brief mock | AppContext.tsx L242–253 | 12 lines | UI-only/mock |
| Challenge days mock | AppContext.tsx L183–227 | 45 lines | UI-only/mock |
| Badges mock | AppContext.tsx L170–181 | 12 lines | UI-only/mock |
| Leaderboard mock | Community.tsx L19–30 | 12 lines | UI-only/mock |
| Report data mock | Reports.tsx L11–24 | 14 lines | UI-only/mock |
| AuthModal email/password stub | AuthModal.tsx L58–111 | 54 lines | UI-only/mock |
| AuthModal Apple sign-in stub | AuthModal.tsx L58–63 | 6 lines | UI-only/mock |
| Stripe checkout stub | Reports.tsx L251 | 1 line | UI-only/mock |
| Domain "vertano.app" | APP_STORE_METADATA.md L60 | 1 line | Unknown (domain pending) |
| OG image | index.html L14 | 1 line | Missing product asset |
| Favicon | index.html L8 | 1 line | Missing product asset |
