# Vertano

**The truth engine for building your content empire.**

Vertano is a step-by-step content creation system that helps beginners build YouTube channels, grow audiences, and monetize their content. Through structured sprints, milestone tracking, and gamification, Vertano turns content dreams into measurable results.

## ✨ Features

- **SprintBuilder**: Create focused content campaigns with daily tasks and deadlines
- **ProgressDashboard**: Track your growth metrics and milestone achievements
- **MonetizationHub**: Discover and implement multiple revenue streams for your content
- **Gamification**: Earn badges, complete challenges, and level up your content game
- **Authentication**: Secure Supabase auth keeps your progress safe

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (for authentication and data storage)

### Installation

```bash
# Clone the repository
git clone https://github.com/danengelsman/Vertano.git
cd Vertano

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Supabase project URL and publishable (anon) key

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to start building.

### Supabase setup

The entire backend is Supabase — Postgres with row-level security, Auth, and Edge Functions:

1. Create (or link) a Supabase project and apply the SQL in `supabase/migrations/`.
2. Enable the **Google** provider under Authentication → Providers (use your Google OAuth client ID/secret, and add `https://<project-ref>.supabase.co/auth/v1/callback` as an authorized redirect URI in Google Cloud Console). Email/password sign-in works out of the box.
3. Deploy the Edge Functions and set the Gemini secret:

   ```bash
   supabase functions deploy generate-content score-content
   supabase secrets set GEMINI_API_KEY=your-key
   ```

4. Put the project URL and publishable key in `.env` as `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY`.

## 🛠️ Tech Stack

- **Framework**: React + TypeScript + Vite
- **UI**: Tailwind CSS + shadcn/ui
- **Backend**: Supabase (Postgres + RLS, Auth, Edge Functions for Gemini AI calls)
- **Data**: React Query + React Hook Form + Zod
- **State**: Zustand (planned)

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── features/         # Feature modules (SprintBuilder, MonetizationHub, etc.)
├── lib/              # Utilities and configurations
├── hooks/            # Custom React hooks
└── types/            # TypeScript type definitions
```

## 🎯 Roadmap

- [ ] User onboarding wizard
- [ ] Content calendar integration
- [ ] Analytics dashboard
- [ ] Team/collaborator support
- [ ] Mobile app (React Native)

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PR's.

## 📄 License

MIT License - see LICENSE file for details.

---

**Vertano** means "true" in Italian. Build your content empire with truth, iteration, and measurable progress.