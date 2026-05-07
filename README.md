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

**Vertano** means "true" in Italian. Build your content empire with truth, iteration, and measurable progress.