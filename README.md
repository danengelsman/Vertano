# Vertano

**Your turning point from content to income.**

Vertano is the guided creator system for YouTube educators. We help subject-matter experts plan, create, and track content that turns expertise into revenue — with AI assistance that scores your scripts before you record.

## 🤖 Working on this repo (read first)

Before any UI, landing-page, or onboarding work, read **VERTANO-BUILD-LOG.md** — the locked design decisions and reasoning. Full build brief: **VERTANO-UI-OVERHAUL-PROMPT.md**. Live-generation system prompt: **VERTANO-EDGE-FUNCTION-PROMPT.md**.

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
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to start building.

## 🛠️ Tech Stack

- **Framework**: React + TypeScript + Vite
- **UI**: Tailwind CSS + shadcn/ui
- **Backend**: Supabase (PostgreSQL + Auth)
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

**Vertano** means "the turning point" — Latin root *verto* (to turn) + Italianate suffix. It's the moment your expertise turns into income.
