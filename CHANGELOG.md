# Vertano Changelog

## Unreleased (2026-07-19) - Single-backend consolidation

- Consolidated three parallel backends (Firebase, Express+SQLite, Supabase) into Supabase only:
  - Auth moved from Firebase to Supabase Auth (Google OAuth + email/password)
  - All data now in Postgres with owner-scoped row-level security (profiles, brands, content, streaks, challenge progress, analytics, sprints)
  - Publish + streak logic moved into an atomic `publish_content` Postgres function
  - Gemini AI calls moved to JWT-verified Edge Functions (`generate-content`, `score-content`) — the API key no longer ships in the client bundle
- Removed the Express server, SQLite database, Firebase config/rules, committed build artifacts (`dist-server/`), duplicate archives, and `.bak` files; `.env` is no longer tracked
- Fixed the broken TypeScript project-references setup so `npm run lint:ts` works
- Onboarding answers now persist to the database (previously lost on reload)

## v0.0.1 (2026-05-04) - Initial Release

- Launched Vertano content creation platform with:
  - SprintBuilder for focused content campaigns
  - ProgressDashboard for tracking growth metrics
  - MonetizationHub for revenue strategies
  - Gamification elements (badges, challenges)
  - Supabase authentication

- Initial documentation (README, Privacy Policy, Terms of Service) published
- Basic project structure established

## Future Versions

- v0.0.2: Add content calendar integration
- v0.0.3: Implement analytics dashboard
- v0.0.4: Develop mobile app (React Native) companion