# Project Context — part 2 of 4 — content-monetize-beginner

**Files in this part:**

- `src/components/contentos/LandingHero.tsx`
- `src/components/contentos/Navbar.tsx`
- `src/components/contentos/OnboardingModal.tsx`
- `src/components/contentos/Reports.tsx`
- `src/components/contentos/Roadmap.tsx`
- `src/components/contentos/StatsCards.tsx`
- `src/components/contentos/WeeklyBriefCard.tsx`
- `src/components/ui/accordion.tsx`
- `src/components/ui/alert-dialog.tsx`
- `src/components/ui/alert.tsx`
- `src/components/ui/aspect-ratio.tsx`
- `src/components/ui/avatar.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/breadcrumb.tsx`
- `src/components/ui/button.tsx`
- `src/components/ui/calendar.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/carousel.tsx`

---

### src/components/contentos/LandingHero.tsx

```typescript
import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import {
  Zap, ArrowRight, PenTool, Target, DollarSign, Users,
  Sparkles, Trophy, Star, Play
} from 'lucide-react';


const features = [
  {
    icon: <PenTool className="w-6 h-6" />,
    title: 'AI Content Studio',
    description: 'Write, score, and format content for any platform with real-time AI feedback and a Content Score that helps you improve.',
    color: 'from-violet-500 to-indigo-600',
    bg: 'bg-violet-50',
    text: 'text-violet-600',
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'First Dollar Tracker',
    description: 'See exactly how close you are to earning your first dollar. We estimate revenue from affiliates, sponsors, and ads.',
    color: 'from-emerald-500 to-green-600',
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Personalized Roadmap',
    description: 'A month-by-month plan tailored to your niche and goals. From audience building to monetization.',
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
    text: 'text-amber-600',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'AI Niche Coach',
    description: 'Weekly content briefs, performance reviews, and personalized ideas matched to trending topics in your niche.',
    color: 'from-blue-500 to-cyan-600',
    bg: 'bg-blue-50',
    text: 'text-blue-600',
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: '30-Day Challenge',
    description: 'A gamified journey from finding ideas to monetization. Earn badges, build streaks, and share your progress.',
    color: 'from-pink-500 to-rose-600',
    bg: 'bg-pink-50',
    text: 'text-pink-600',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Creator Community',
    description: 'Join cohorts, climb leaderboards, and share your Creator Journey page. Grow together with fellow creators.',
    color: 'from-purple-500 to-violet-600',
    bg: 'bg-purple-50',
    text: 'text-purple-600',
  },
];

const testimonials = [
  { name: 'Sarah K.', niche: 'Fitness', quote: 'I went from zero posts to earning $342/month in just 3 months. The AI coach kept me accountable.', streak: 47, avatar: 'S' },
  { name: 'Mike R.', niche: 'Tech Reviews', quote: 'The Content Score changed everything. I finally understand what makes a post perform well.', streak: 38, avatar: 'M' },
  { name: 'Jess L.', niche: 'Personal Finance', quote: 'The 30-day challenge got me hooked. Now I can\'t stop creating. My first sponsorship came on Day 25!', streak: 35, avatar: 'J' },
];

const stats = [
  { value: '12,000+', label: 'Active Creators' },
  { value: '$2.4M', label: 'Creator Earnings' },
  { value: '850K+', label: 'Posts Published' },
  { value: '94%', label: 'Completion Rate' },
];

const LandingHero: React.FC = () => {
  const { setShowOnboarding } = useAppContext();

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-950 py-20 lg:py-28">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-white/80 mb-8">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>AI-Powered Content Creation Platform</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              From First Post to{' '}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                First Dollar
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Vertano is your AI-powered mentor that helps YouTube educators build a content habit,
              grow their audience, and earn their first dollar — all in one system.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => setShowOnboarding(true)}
                size="lg"
                className="gap-2 bg-white text-slate-900 hover:bg-white/90 shadow-2xl h-12 px-8 text-base"

              >
                Start Free — No Credit Card <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-white/20 text-white hover:bg-white/10 h-12 px-8 text-base"

                onClick={() => {
                  const el = document.getElementById('features');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Play className="w-4 h-4" /> See How It Works
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
            {stats.map(stat => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <p className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">Features</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-4">Everything You Need to Succeed</h2>
            <p className="text-lg text-slate-500 mt-3 max-w-2xl mx-auto">
              A complete toolkit designed specifically for beginner creators who want to turn their passion into income.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(feature => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.text} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">How It Works</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-4">Three Steps to Your First Dollar</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Tell Us About You', desc: 'Answer a few questions about your niche, platforms, and monetization goals. We personalize everything.', icon: <Target className="w-8 h-8" />, color: 'from-blue-500 to-cyan-500' },
              { step: 2, title: 'Create & Publish', desc: 'Use our AI-powered editor to write, score, and format content. The 30-day challenge keeps you consistent.', icon: <PenTool className="w-8 h-8" />, color: 'from-violet-500 to-purple-500' },
              { step: 3, title: 'Earn Your First Dollar', desc: 'Follow your personalized roadmap to monetize through affiliates, sponsors, and digital products.', icon: <DollarSign className="w-8 h-8" />, color: 'from-emerald-500 to-green-500' },
            ].map(item => (
              <div key={item.step} className="relative text-center">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mx-auto mb-6 shadow-xl`}>
                  {item.icon}
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-sm font-bold text-slate-600">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">Testimonials</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-4">Creators Love Vertano</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.niche} · {t.streak}-day streak</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Earn Your First Dollar?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Join the Vertano creator community — it's free to begin.
          </p>
          <Button
            onClick={() => setShowOnboarding(true)}
            size="lg"
            className="gap-2 bg-white text-violet-700 hover:bg-white/90 shadow-2xl h-12 px-8 text-base"

          >
            Start Your Journey Free <ArrowRight className="w-5 h-5" />
          </Button>
          <p className="text-xs text-white/50 mt-4">No credit card required. Free tier includes 7 days of full access.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingHero;

```

### src/components/contentos/Navbar.tsx

```typescript
import React from 'react';
import { useAppContext, ActiveView } from '@/contexts/AppContext';
import {
  LayoutDashboard, PenTool, Map, Users, BarChart3,
  Menu, X, Zap, Bell, LogIn
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navItems: { view: ActiveView; label: string; icon: React.ReactNode }[] = [
  { view: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
  { view: 'editor', label: 'Create', icon: <PenTool className="w-4 h-4" /> },
  { view: 'roadmap', label: 'Roadmap', icon: <Map className="w-4 h-4" /> },
  { view: 'community', label: 'Community', icon: <Users className="w-4 h-4" /> },
  { view: 'reports', label: 'Reports', icon: <BarChart3 className="w-4 h-4" /> },
];

const Navbar: React.FC = () => {
  const { activeView, setActiveView, sidebarOpen, toggleSidebar, streak, currentLevel, xp, setShowAuthModal, userProfile } = useAppContext();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Left: Logo + Mobile Menu */}
        <div className="flex items-center gap-3">
          <button onClick={toggleSidebar} className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors">
            {sidebarOpen ? <X className="w-5 h-5 text-slate-600" /> : <Menu className="w-5 h-5 text-slate-600" />}
          </button>
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setActiveView('dashboard')}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-200">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text text-transparent hidden sm:block">
              Vertano
            </span>
          </div>
        </div>

        {/* Center: Nav Items (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map(item => (
            <button
              key={item.view}
              onClick={() => setActiveView(item.view)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeView === item.view
                  ? 'bg-violet-100 text-violet-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right: Stats + Auth */}
        <div className="flex items-center gap-3">
          {userProfile.onboardingComplete && (
            <>
              {/* Streak Badge */}
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200">
                <div className="w-4 h-4 text-orange-500">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 23c-3.866 0-7-3.134-7-7 0-3.866 3.134-7 7-7s7 3.134 7 7c0 3.866-3.134 7-7 7zm0-2c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm-1-8V7.5c0-.276.224-.5.5-.5h1c.276 0 .5.224.5.5V13h-2z"/></svg>
                </div>
                <span className="text-xs font-bold text-orange-700">{streak.current}</span>
              </div>

              {/* Level Badge */}
              <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-200">
                <Zap className="w-3.5 h-3.5 text-violet-500" />
                <span className="text-xs font-bold text-violet-700">Lv.{currentLevel}</span>
                <span className="text-xs text-violet-500">{xp} XP</span>
              </div>

              {/* Notifications */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors">
                    <Bell className="w-5 h-5 text-slate-500" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-72">
                  <div className="p-3 border-b">
                    <p className="text-sm font-semibold text-slate-900">Notifications</p>
                  </div>
                  <DropdownMenuItem className="p-3 cursor-pointer">
                    <div>
                      <p className="text-sm font-medium">Weekly Brief Ready</p>
                      <p className="text-xs text-slate-500">5 new content ideas for your niche</p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-3 cursor-pointer">
                    <div>
                      <p className="text-sm font-medium">Streak Reminder</p>
                      <p className="text-xs text-slate-500">Don't forget to publish today!</p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-3 cursor-pointer">
                    <div>
                      <p className="text-sm font-medium">New Badge Available</p>
                      <p className="text-xs text-slate-500">You're close to earning "Week Warrior"</p>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}

          {/* Auth Button */}
          <Button
            onClick={() => setShowAuthModal(true)}
            variant="outline"
            size="sm"
            className="gap-2 border-violet-200 text-violet-700 hover:bg-violet-50"
          >
            <LogIn className="w-4 h-4" />
            <span className="hidden sm:inline">Sign In</span>
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {sidebarOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white p-2">
          {navItems.map(item => (
            <button
              key={item.view}
              onClick={() => { setActiveView(item.view); toggleSidebar(); }}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeView === item.view
                  ? 'bg-violet-100 text-violet-700'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;

```

### src/components/contentos/OnboardingModal.tsx

```typescript
import React, { useState } from 'react';
import { useAppContext, Platform, MonetizationGoal } from '@/contexts/AppContext';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, ArrowLeft, Zap, Sparkles, Target, Rocket } from 'lucide-react';

const platformOptions: { id: Platform; label: string; color: string }[] = [
  { id: 'tiktok', label: 'TikTok', color: 'from-pink-500 to-rose-500' },
  { id: 'instagram', label: 'Instagram', color: 'from-purple-500 to-pink-500' },
  { id: 'youtube', label: 'YouTube', color: 'from-red-500 to-red-600' },
  { id: 'twitter', label: 'Twitter / X', color: 'from-slate-700 to-slate-900' },
  { id: 'linkedin', label: 'LinkedIn', color: 'from-blue-600 to-blue-700' },
];

const goalOptions: { id: MonetizationGoal; label: string; desc: string }[] = [
  { id: 'affiliate', label: 'Affiliate Marketing', desc: 'Earn commissions promoting products' },
  { id: 'sponsorships', label: 'Brand Sponsorships', desc: 'Get paid by brands for content' },
  { id: 'products', label: 'Digital Products', desc: 'Sell courses, templates, or guides' },
  { id: 'ads', label: 'Ad Revenue', desc: 'Monetize through platform ads' },
  { id: 'coaching', label: 'Coaching / Services', desc: 'Offer 1-on-1 or group coaching' },
];

const nicheOptions = [
  'Fitness & Health', 'Tech & Software', 'Personal Finance', 'Cooking & Food',
  'Travel', 'Fashion & Beauty', 'Gaming', 'Education', 'Photography',
  'Business & Entrepreneurship', 'Parenting', 'Design & Art', 'Music',
  'Real Estate', 'Sustainability', 'Other',
];

const OnboardingModal: React.FC = () => {
  const { showOnboarding, setShowOnboarding, setUserProfile, userProfile } = useAppContext();
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [niche, setNiche] = useState('');
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [goal, setGoal] = useState<MonetizationGoal>('affiliate');
  const [followerCount, setFollowerCount] = useState('0');
  const [weeklyPosts, setWeeklyPosts] = useState('0');

  const togglePlatform = (p: Platform) => {
    setPlatforms(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]);
  };

  const handleComplete = () => {
    setUserProfile({
      ...userProfile,
      name: name || 'Creator',
      niche,
      platforms,
      monetizationGoal: goal,
      followerCount: parseInt(followerCount) || 0,
      weeklyPosts: parseInt(weeklyPosts) || 0,
      onboardingComplete: true,
    });
    setShowOnboarding(false);
  };

  const canProceed = () => {
    if (step === 0) return name.trim().length > 0;
    if (step === 1) return niche.length > 0;
    if (step === 2) return platforms.length > 0;
    if (step === 3) return true;
    if (step === 4) return true;
    return true;
  };

  const steps = [
    // Step 0: Name
    <div key="name" className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-violet-200">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Welcome to Vertano</h2>
        <p className="text-slate-500 mt-2">Your AI-powered mentor for going from first post to first dollar</p>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">What should we call you?</label>
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name or creator handle"
          className="h-12 text-base"
          autoFocus
        />
      </div>
    </div>,

    // Step 1: Niche
    <div key="niche" className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-xl shadow-orange-200">
          <Target className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Pick Your Niche</h2>
        <p className="text-slate-500 mt-2">This helps us personalize your content ideas and monetization path</p>
      </div>
      <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
        {nicheOptions.map(n => (
          <button
            key={n}
            onClick={() => setNiche(n)}
            className={`p-3 rounded-xl text-sm font-medium text-left transition-all border-2 ${
              niche === n
                ? 'border-violet-500 bg-violet-50 text-violet-700 shadow-sm'
                : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            {n}
          </button>
        ))}
      </div>
    </div>,

    // Step 2: Platforms
    <div key="platforms" className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-xl shadow-blue-200">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Choose Your Platforms</h2>
        <p className="text-slate-500 mt-2">Select where you want to build your audience</p>
      </div>
      <div className="space-y-3">
        {platformOptions.map(p => (
          <button
            key={p.id}
            onClick={() => togglePlatform(p.id)}
            className={`flex items-center gap-4 w-full p-4 rounded-xl transition-all border-2 ${
              platforms.includes(p.id)
                ? 'border-violet-500 bg-violet-50 shadow-sm'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center`}>
              <span className="text-white font-bold text-sm">{p.label[0]}</span>
            </div>
            <span className="font-medium text-slate-800">{p.label}</span>
            {platforms.includes(p.id) && (
              <div className="ml-auto w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>,

    // Step 3: Monetization Goal
    <div key="goal" className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-xl shadow-green-200">
          <Rocket className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Your Monetization Goal</h2>
        <p className="text-slate-500 mt-2">How do you want to earn your first dollar?</p>
      </div>
      <div className="space-y-3">
        {goalOptions.map(g => (
          <button
            key={g.id}
            onClick={() => setGoal(g.id)}
            className={`w-full p-4 rounded-xl text-left transition-all border-2 ${
              goal === g.id
                ? 'border-violet-500 bg-violet-50 shadow-sm'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <p className="font-medium text-slate-800">{g.label}</p>
            <p className="text-sm text-slate-500 mt-0.5">{g.desc}</p>
          </button>
        ))}
      </div>
    </div>,

    // Step 4: Current Stats
    <div key="stats" className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900">Almost There!</h2>
        <p className="text-slate-500 mt-2">Tell us where you're starting from (it's okay to be at zero!)</p>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Current total followers (across all platforms)</label>
          <Input
            type="number"
            value={followerCount}
            onChange={e => setFollowerCount(e.target.value)}
            placeholder="0"
            className="h-12 text-base"
            min="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">How many times do you post per week?</label>
          <Input
            type="number"
            value={weeklyPosts}
            onChange={e => setWeeklyPosts(e.target.value)}
            placeholder="0"
            className="h-12 text-base"
            min="0"
          />
        </div>
      </div>
      <div className="p-4 rounded-xl bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-200">
        <p className="text-sm font-medium text-violet-800">
          Perfect starting point! We'll build your personalized roadmap to your first dollar.
        </p>
      </div>
    </div>,
  ];

  return (
    <Dialog open={showOnboarding} onOpenChange={setShowOnboarding}>
      <DialogContent className="sm:max-w-lg p-0 gap-0 overflow-hidden border-0 shadow-2xl">
        <VisuallyHidden>
          <DialogTitle>Onboarding</DialogTitle>
          <DialogDescription>Set up your Vertano creator profile</DialogDescription>
        </VisuallyHidden>
        {/* Progress Bar */}
        <div className="h-1.5 bg-slate-100">

          <div
            className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-500 ease-out"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>

        <div className="p-6 sm:p-8">
          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === step ? 'w-6 bg-violet-500' : i < step ? 'bg-violet-300' : 'bg-slate-200'
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <div className="min-h-[340px]">
            {steps[step]}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
            {step > 0 ? (
              <Button variant="ghost" onClick={() => setStep(s => s - 1)} className="gap-2">
                <ArrowLeft className="w-4 h-4" /> Back
              </Button>
            ) : (
              <Button variant="ghost" onClick={() => setShowOnboarding(false)} className="text-slate-400">
                Skip for now
              </Button>
            )}
            {step < steps.length - 1 ? (
              <Button
                onClick={() => setStep(s => s + 1)}
                disabled={!canProceed()}
                className="gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg shadow-violet-200"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleComplete}
                className="gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg shadow-violet-200"
              >
                Start My Journey <Rocket className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OnboardingModal;

```

### src/components/contentos/Reports.tsx

```typescript
import React, { useState } from 'react';
import { useAppContext, Platform } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import {
  BarChart3, TrendingUp, DollarSign, Eye, Users, Heart,
  Link2, Unlink, Lock, ArrowUpRight, FileText, Download,
  ChevronRight, Sparkles, Calendar
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const platformAccounts = [
  { id: 'twitter' as Platform, name: 'Twitter / X', followers: '1,234', growth: '+12%', connected: false, color: 'from-slate-700 to-slate-900' },
  { id: 'instagram' as Platform, name: 'Instagram', followers: '3,456', growth: '+18%', connected: false, color: 'from-purple-500 to-pink-500' },
  { id: 'youtube' as Platform, name: 'YouTube', followers: '567', growth: '+8%', connected: false, color: 'from-red-500 to-red-600' },
  { id: 'tiktok' as Platform, name: 'TikTok', followers: '2,890', growth: '+25%', connected: false, color: 'from-pink-500 to-rose-500' },
  { id: 'linkedin' as Platform, name: 'LinkedIn', followers: '890', growth: '+5%', connected: false, color: 'from-blue-600 to-blue-700' },
];

const weeklyData = [
  { week: 'Week 1', posts: 3, avgScore: 62, reach: 450, engagement: 2.1 },
  { week: 'Week 2', posts: 5, avgScore: 68, reach: 890, engagement: 3.2 },
  { week: 'Week 3', posts: 4, avgScore: 74, reach: 1200, engagement: 3.8 },
  { week: 'Week 4', posts: 6, avgScore: 79, reach: 2100, engagement: 4.5 },
];

const Reports: React.FC = () => {
  const { userProfile, streak, drafts, estimatedEarnings, badges } = useAppContext();
  const [connectedAccounts, setConnectedAccounts] = useState<Record<string, boolean>>({});
  const [activeSection, setActiveSection] = useState<'overview' | 'income' | 'accounts'>('overview');

  const toggleConnection = (platformId: string) => {
    setConnectedAccounts(prev => {
      const newState = { ...prev, [platformId]: !prev[platformId] };
      if (newState[platformId]) {
        toast({ title: 'Account Connected!', description: `Your ${platformId} account has been linked via OAuth.` });
      } else {
        toast({ title: 'Account Disconnected', description: `Your ${platformId} account has been unlinked.` });
      }
      return newState;
    });
  };

  const publishedDrafts = drafts.filter(d => d.published);
  const avgScore = publishedDrafts.length > 0
    ? Math.round(publishedDrafts.reduce((s, d) => s + d.score, 0) / publishedDrafts.length)
    : 0;
  const earnedBadges = badges.filter(b => b.earned).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Reports & Analytics</h2>
          <p className="text-slate-500 mt-1">Track your growth, income, and connected platforms</p>
        </div>
        <Button
          variant="outline"
          className="gap-2"
          onClick={() => toast({ title: 'Report Downloaded', description: 'Your monthly creator income report has been exported as PDF.' })}
        >
          <Download className="w-4 h-4" /> Export Report
        </Button>
      </div>

      {/* Section Tabs */}
      <div className="flex gap-1 p-1 bg-slate-100 rounded-xl w-fit">
        {[
          { id: 'overview' as const, label: 'Overview' },
          { id: 'income' as const, label: 'Income Report' },
          { id: 'accounts' as const, label: 'Connected Accounts' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveSection(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeSection === tab.id ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeSection === 'overview' && (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Total Reach', value: '4,640', icon: <Eye className="w-5 h-5" />, change: '+45%', color: 'bg-blue-50 text-blue-600' },
              { label: 'Engagement Rate', value: '3.4%', icon: <Heart className="w-5 h-5" />, change: '+0.8%', color: 'bg-pink-50 text-pink-600' },
              { label: 'Followers Gained', value: '+127', icon: <Users className="w-5 h-5" />, change: '+22%', color: 'bg-emerald-50 text-emerald-600' },
              { label: 'Est. Earnings', value: `$${estimatedEarnings.toFixed(2)}`, icon: <DollarSign className="w-5 h-5" />, change: '+12%', color: 'bg-amber-50 text-amber-600' },
            ].map(stat => (
              <div key={stat.label} className="rounded-2xl bg-white border border-slate-200 p-5">
                <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mb-3`}>
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm text-slate-500">{stat.label}</p>
                  <span className="flex items-center gap-0.5 text-xs font-medium text-emerald-600">
                    <ArrowUpRight className="w-3 h-3" /> {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Weekly Progress Chart (simplified) */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-slate-900">Weekly Progress</h3>
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <Calendar className="w-3.5 h-3.5" /> Last 4 weeks
              </div>
            </div>
            <div className="space-y-4">
              {weeklyData.map((week, idx) => (
                <div key={week.week} className="flex items-center gap-4">
                  <span className="w-16 text-sm text-slate-500 flex-shrink-0">{week.week}</span>
                  <div className="flex-1 grid grid-cols-4 gap-3">
                    <div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-violet-500 rounded-full" style={{ width: `${(week.posts / 7) * 100}%` }} />
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1">{week.posts} posts</p>
                    </div>
                    <div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${week.avgScore}%` }} />
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1">Score: {week.avgScore}</p>
                    </div>
                    <div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.min((week.reach / 2500) * 100, 100)}%` }} />
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1">{week.reach} reach</p>
                    </div>
                    <div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-pink-500 rounded-full" style={{ width: `${(week.engagement / 5) * 100}%` }} />
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1">{week.engagement}% eng.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-6 mt-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-violet-500" /><span className="text-xs text-slate-500">Posts</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-500" /><span className="text-xs text-slate-500">Score</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500" /><span className="text-xs text-slate-500">Reach</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-pink-500" /><span className="text-xs text-slate-500">Engagement</span></div>
            </div>
          </div>

          {/* Weekly Snapshot */}
          <div className="rounded-2xl bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-violet-500" />
              <h3 className="font-semibold text-violet-900">Weekly Progress Snapshot</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center p-3 rounded-xl bg-white/60">
                <p className="text-2xl font-bold text-violet-700">{publishedDrafts.length + streak.totalPublished}</p>
                <p className="text-xs text-violet-500">Posts Created</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/60">
                <p className="text-2xl font-bold text-violet-700">{avgScore || '--'}</p>
                <p className="text-xs text-violet-500">Avg Score</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/60">
                <p className="text-2xl font-bold text-violet-700">{streak.current}</p>
                <p className="text-xs text-violet-500">Streak Length</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/60">
                <p className="text-2xl font-bold text-violet-700">{earnedBadges}</p>
                <p className="text-xs text-violet-500">Badges Earned</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'income' && (
        <div className="space-y-6">
          {/* Income Report Card */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-green-700 p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-5 h-5" />
                <span className="text-sm font-medium text-white/80">Monthly Creator Income Report</span>
              </div>
              <h3 className="text-3xl font-bold mb-1">${estimatedEarnings.toFixed(2)}</h3>
              <p className="text-white/70 text-sm">Estimated monthly earnings potential</p>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                  <p className="text-lg font-bold">${(estimatedEarnings * 0.5).toFixed(2)}</p>
                  <p className="text-xs text-white/60">Affiliate</p>
                </div>
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                  <p className="text-lg font-bold">${(estimatedEarnings * 0.3).toFixed(2)}</p>
                  <p className="text-xs text-white/60">Sponsors</p>
                </div>
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                  <p className="text-lg font-bold">${(estimatedEarnings * 0.2).toFixed(2)}</p>
                  <p className="text-xs text-white/60">Ad Revenue</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Items */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900 mb-4">3 Personalized Action Items</h3>
            <div className="space-y-3">
              {[
                { title: 'Increase posting frequency', desc: `Post ${userProfile.weeklyPosts + 2}x per week instead of ${userProfile.weeklyPosts}x to grow reach by ~35%`, priority: 'High' },
                { title: 'Join affiliate programs', desc: `Sign up for 3 affiliate programs in the ${userProfile.niche || 'your'} niche to start earning commissions`, priority: 'High' },
                { title: 'Optimize content hooks', desc: 'Your best-performing hook style is the curiosity hook. Use it in 60% of your posts.', priority: 'Medium' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    item.priority === 'High' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'
                  }`}>
                    <span className="text-xs font-bold">{idx + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                    item.priority === 'High' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'
                  }`}>
                    {item.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Upgrade CTA */}
          <div className="rounded-2xl bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-200 p-6 text-center">
            <Lock className="w-8 h-8 text-violet-400 mx-auto mb-3" />
            <h3 className="font-semibold text-violet-900">Unlock Full Income Report</h3>
            <p className="text-sm text-violet-600 mt-1 mb-4">Get detailed analytics, revenue projections, and personalized coaching with Pro.</p>
            <Button className="gap-2 bg-gradient-to-r from-violet-600 to-indigo-600" onClick={() => toast({ title: 'Upgrade to Pro', description: 'Stripe checkout would open here for subscription.' })}>
              Upgrade to Pro <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {activeSection === 'accounts' && (
        <div className="space-y-4">
          <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 p-5 mb-6">
            <div className="flex items-start gap-3">
              <Link2 className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-800">Connect Your Social Accounts</p>
                <p className="text-xs text-blue-600 mt-1">
                  Link your accounts via OAuth to enable one-click publishing, scheduling, and real-time analytics tracking.
                  You can disconnect at any time.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {platformAccounts.map(account => (
              <div key={account.id} className="rounded-2xl bg-white border border-slate-200 p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${account.color} flex items-center justify-center text-white font-bold text-lg`}>
                  {account.name[0]}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900">{account.name}</p>
                  {connectedAccounts[account.id] ? (
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm text-slate-600">{account.followers} followers</span>
                      <span className="flex items-center gap-0.5 text-xs text-emerald-600 font-medium">
                        <ArrowUpRight className="w-3 h-3" /> {account.growth}
                      </span>
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400 mt-0.5">Not connected</p>
                  )}
                </div>
                <Button
                  variant={connectedAccounts[account.id] ? 'outline' : 'default'}
                  size="sm"
                  onClick={() => toggleConnection(account.id)}
                  className={connectedAccounts[account.id]
                    ? 'gap-1.5 text-red-600 border-red-200 hover:bg-red-50'
                    : 'gap-1.5 bg-gradient-to-r from-violet-600 to-indigo-600'
                  }
                >
                  {connectedAccounts[account.id] ? (
                    <><Unlink className="w-3.5 h-3.5" /> Disconnect</>
                  ) : (
                    <><Link2 className="w-3.5 h-3.5" /> Connect</>
                  )}
                </Button>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
            <p className="text-xs text-slate-500 leading-relaxed">
              <span className="font-semibold">Privacy Notice:</span> Vertano uses official OAuth protocols to connect your accounts.
              We only access the data you explicitly authorize. You have granular control over what data is collected and displayed,
              and you can disconnect any account at any time from this page.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;

```

### src/components/contentos/Roadmap.tsx

```typescript
import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import {
  Map, CheckCircle2, Circle, Lock, ChevronRight, Lightbulb,
  PenTool, Send, TrendingUp, DollarSign, Sparkles, Trophy
} from 'lucide-react';

const levelConfig = [
  { name: 'Finding Ideas', color: 'from-blue-500 to-cyan-500', icon: <Lightbulb className="w-5 h-5" />, days: '1-6' },
  { name: 'Writing', color: 'from-violet-500 to-purple-500', icon: <PenTool className="w-5 h-5" />, days: '7-12' },
  { name: 'Publishing', color: 'from-emerald-500 to-green-500', icon: <Send className="w-5 h-5" />, days: '13-18' },
  { name: 'Growth', color: 'from-amber-500 to-orange-500', icon: <TrendingUp className="w-5 h-5" />, days: '19-24' },
  { name: 'Monetization', color: 'from-pink-500 to-rose-500', icon: <DollarSign className="w-5 h-5" />, days: '25-30' },
];

const monthlyMilestones = [
  { month: 1, title: 'Build Your Audience', tasks: ['Complete 30-day challenge', 'Publish 20+ posts', 'Reach 100 followers', 'Find your content style'], color: 'from-blue-500 to-cyan-500' },
  { month: 2, title: 'Affiliate Offers', tasks: ['Join 3 affiliate programs', 'Create 5 review posts', 'Add links to bio', 'Track click-through rates'], color: 'from-violet-500 to-purple-500' },
  { month: 3, title: 'Sponsorships', tasks: ['Create media kit', 'Pitch 10 brands', 'Land first sponsorship', 'Negotiate fair rates'], color: 'from-emerald-500 to-green-500' },
  { month: 4, title: 'Digital Products', tasks: ['Identify audience pain points', 'Create a simple guide or template', 'Set up payment processing', 'Launch and promote'], color: 'from-amber-500 to-orange-500' },
];

const Roadmap: React.FC = () => {
  const { challengeDays, completeChallenge, userProfile } = useAppContext();
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [viewMode, setViewMode] = useState<'challenge' | 'roadmap'>('challenge');

  const completedCount = challengeDays.filter(d => d.completed).length;
  const progressPercent = Math.round((completedCount / 30) * 100);

  const levelDays = (levelIdx: number) => {
    const start = levelIdx * 6;
    return challengeDays.slice(start, start + 6);
  };

  const levelProgress = (levelIdx: number) => {
    const days = levelDays(levelIdx);
    return days.filter(d => d.completed).length;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Your Roadmap</h2>
          <p className="text-slate-500 mt-1">From first post to first dollar — your personalized path</p>
        </div>
        <div className="flex gap-1 p-1 bg-slate-100 rounded-xl">
          <button
            onClick={() => setViewMode('challenge')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              viewMode === 'challenge' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
            }`}
          >
            30-Day Challenge
          </button>
          <button
            onClick={() => setViewMode('roadmap')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              viewMode === 'roadmap' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
            }`}
          >
            Monetization Path
          </button>
        </div>
      </div>

      {viewMode === 'challenge' ? (
        <>
          {/* Overall Progress */}
          <div className="rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold">30-Day Content Challenge</h3>
                <p className="text-white/70 text-sm mt-1">
                  {completedCount === 0 ? 'Start your journey today!' : `${completedCount} of 30 days completed`}
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">{progressPercent}%</p>
                <p className="text-xs text-white/60">Complete</p>
              </div>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full transition-all duration-700"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Level Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {levelConfig.map((level, idx) => (
              <button
                key={level.name}
                onClick={() => setSelectedLevel(idx)}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  selectedLevel === idx
                    ? 'border-violet-500 bg-violet-50 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${level.color} flex items-center justify-center text-white mb-2`}>
                  {level.icon}
                </div>
                <p className="text-sm font-semibold text-slate-900">{level.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">Days {level.days}</p>
                <div className="flex items-center gap-1 mt-2">
                  <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${level.color} rounded-full transition-all`}
                      style={{ width: `${(levelProgress(idx) / 6) * 100}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">{levelProgress(idx)}/6</span>
                </div>
              </button>
            ))}
          </div>

          {/* Day Tasks */}
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden">
            <div className="p-5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${levelConfig[selectedLevel].color} flex items-center justify-center text-white`}>
                  {levelConfig[selectedLevel].icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{levelConfig[selectedLevel].name}</h3>
                  <p className="text-xs text-slate-500">Days {levelConfig[selectedLevel].days}</p>
                </div>
              </div>
            </div>
            <div className="divide-y divide-slate-100">
              {levelDays(selectedLevel).map(day => (
                <div
                  key={day.day}
                  className={`flex items-center gap-4 p-4 transition-colors ${
                    day.completed ? 'bg-emerald-50/50' : 'hover:bg-slate-50'
                  }`}
                >
                  <button
                    onClick={() => !day.completed && completeChallenge(day.day)}
                    className="flex-shrink-0"
                    disabled={day.completed}
                  >
                    {day.completed ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    ) : (
                      <Circle className="w-6 h-6 text-slate-300 hover:text-violet-400 transition-colors" />
                    )}
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400">DAY {day.day}</span>
                      {day.completed && (
                        <span className="text-[10px] font-medium text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded">DONE</span>
                      )}
                    </div>
                    <p className={`text-sm mt-0.5 ${day.completed ? 'text-slate-500 line-through' : 'text-slate-800 font-medium'}`}>
                      {day.task}
                    </p>
                  </div>
                  {!day.completed && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => completeChallenge(day.day)}
                      className="gap-1 text-xs"
                    >
                      Complete
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* Monetization Roadmap */
        <div className="space-y-6">
          <div className="rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-5">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-amber-800">Personalized for {userProfile.niche || 'your niche'}</p>
                <p className="text-xs text-amber-600 mt-1">
                  Based on your goal of {userProfile.monetizationGoal || 'monetization'}, here's your 4-month path to sustainable income.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 hidden sm:block" />

            <div className="space-y-6">
              {monthlyMilestones.map((milestone, idx) => (
                <div key={milestone.month} className="relative flex gap-6">
                  {/* Timeline dot */}
                  <div className={`hidden sm:flex flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${milestone.color} items-center justify-center text-white font-bold text-lg shadow-lg z-10`}>
                    {milestone.month}
                  </div>
                  {/* Card */}
                  <div className="flex-1 rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`sm:hidden w-8 h-8 rounded-lg bg-gradient-to-br ${milestone.color} flex items-center justify-center text-white font-bold text-sm`}>
                        {milestone.month}
                      </span>
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Month {milestone.month}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{milestone.title}</h3>
                    <div className="space-y-2">
                      {milestone.tasks.map((task, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full border-2 border-slate-200 flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-slate-200" />
                          </div>
                          <span className="text-sm text-slate-600">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Final milestone */}
              <div className="relative flex gap-6">
                <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 items-center justify-center text-white shadow-lg z-10">
                  <Trophy className="w-6 h-6" />
                </div>
                <div className="flex-1 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 p-6">
                  <h3 className="text-lg font-bold text-amber-900">First Dollar Milestone</h3>
                  <p className="text-sm text-amber-700 mt-1">
                    By following this roadmap consistently, most creators in {userProfile.niche || 'your niche'} earn their first dollar within 2-4 months.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roadmap;

```

### src/components/contentos/StatsCards.tsx

```typescript
import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { Flame, FileText, Target, Trophy, TrendingUp, ArrowUpRight } from 'lucide-react';

const StatsCards: React.FC = () => {
  const { streak, drafts, challengeDays, badges, currentLevel, xp } = useAppContext();
  const publishedCount = drafts.filter(d => d.published).length;
  const avgScore = drafts.length > 0
    ? Math.round(drafts.reduce((sum, d) => sum + d.score, 0) / drafts.length)
    : 0;
  const completedDays = challengeDays.filter(d => d.completed).length;
  const earnedBadges = badges.filter(b => b.earned).length;

  const stats = [
    {
      label: 'Current Streak',
      value: `${streak.current} days`,
      icon: <Flame className="w-5 h-5" />,
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      change: streak.current > 0 ? `Best: ${streak.longest}` : 'Start today!',
    },
    {
      label: 'Content Published',
      value: `${publishedCount + streak.totalPublished}`,
      icon: <FileText className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      change: `${drafts.filter(d => !d.published).length} drafts`,
    },
    {
      label: 'Avg. Content Score',
      value: avgScore > 0 ? `${avgScore}/100` : '--',
      icon: <Target className="w-5 h-5" />,
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      change: avgScore >= 80 ? 'Excellent!' : avgScore > 0 ? 'Keep improving' : 'Create content',
    },
    {
      label: 'Challenge Progress',
      value: `${completedDays}/30`,
      icon: <Trophy className="w-5 h-5" />,
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50',
      textColor: 'text-violet-600',
      change: `${earnedBadges} badges earned`,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(stat => (
        <div
          key={stat.label}
          className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-5 hover:shadow-lg hover:border-slate-300 transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-3">
            <div className={`w-11 h-11 rounded-xl ${stat.bgColor} flex items-center justify-center ${stat.textColor}`}>
              {stat.icon}
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <TrendingUp className="w-3 h-3" />
              <span>{stat.change}</span>
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
          <p className="text-sm text-slate-500 mt-0.5">{stat.label}</p>
          {/* Hover gradient accent */}
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
        </div>
      ))}
    </div>
  );
};

export default StatsCards;

```

### src/components/contentos/WeeklyBriefCard.tsx

```typescript
import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { Sparkles, ChevronRight, Lightbulb, TrendingUp, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const WeeklyBriefCard: React.FC = () => {
  const { weeklyBrief, userProfile, setActiveView } = useAppContext();
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const copyIdea = (idea: string, idx: number) => {
    navigator.clipboard.writeText(idea).catch(() => {});
    setCopiedIdx(idx);
    toast({ title: 'Idea copied!', description: 'Paste it into the editor to start creating.' });
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-slate-100 bg-gradient-to-r from-violet-50 to-indigo-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-200">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">AI Weekly Brief</h3>
              <p className="text-xs text-slate-500">Personalized for {userProfile.niche || 'your niche'}</p>
            </div>
          </div>
          <span className="text-xs font-medium text-violet-600 bg-violet-100 px-2.5 py-1 rounded-full">This Week</span>
        </div>
      </div>

      {/* Performance Summary */}
      <div className="p-5 border-b border-slate-100">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-4 h-4 text-emerald-500" />
          <span className="text-sm font-medium text-slate-700">Last Week's Performance</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-slate-50">
            <p className="text-2xl font-bold text-slate-900">{weeklyBrief.postsLastWeek}</p>
            <p className="text-xs text-slate-500">Posts Created</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-50">
            <p className="text-2xl font-bold text-slate-900">{weeklyBrief.avgScore}</p>
            <p className="text-xs text-slate-500">Avg. Score</p>
          </div>
        </div>
        <div className="mt-3 p-3 rounded-xl bg-amber-50 border border-amber-100">
          <p className="text-xs text-amber-800">
            <span className="font-semibold">Best hook style:</span> {weeklyBrief.topPerformingHook}
          </p>
        </div>
      </div>

      {/* Ideas */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="w-4 h-4 text-amber-500" />
          <span className="text-sm font-medium text-slate-700">5 Content Ideas for This Week</span>
        </div>
        <div className="space-y-2">
          {weeklyBrief.ideas.map((idea, idx) => (
            <div
              key={idx}
              className="group flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
              onClick={() => copyIdea(idea, idx)}
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-violet-100 text-violet-600 text-xs font-bold flex items-center justify-center mt-0.5">
                {idx + 1}
              </span>
              <p className="text-sm text-slate-700 flex-1 leading-relaxed">{idea}</p>
              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                {copiedIdx === idx ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4 text-slate-400" />
                )}
              </div>
            </div>
          ))}
        </div>
        <Button
          onClick={() => setActiveView('editor')}
          className="w-full mt-4 gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg shadow-violet-200"
        >
          Start Creating <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default WeeklyBriefCard;

```

### src/components/ui/accordion.tsx

```typescript
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-border/50", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:text-primary [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:text-primary",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-300 ease-in-out text-muted-foreground" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm text-muted-foreground transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

```

### src/components/ui/alert-dialog.tsx

```typescript
import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-card p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-primary/90", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground mt-2", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}

```

### src/components/ui/alert.tsx

```typescript
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        success:
          "border-green-500/50 text-green-600 dark:text-green-400 [&>svg]:text-green-600 dark:[&>svg]:text-green-400 bg-green-50 dark:bg-green-950/20",
        warning:
          "border-yellow-500/50 text-yellow-600 dark:text-yellow-400 [&>svg]:text-yellow-600 dark:[&>svg]:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/20",
        info:
          "border-primary/50 text-primary dark:text-primary-foreground [&>svg]:text-primary bg-primary/10 dark:bg-primary/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed opacity-90", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }

```

### src/components/ui/aspect-ratio.tsx

```typescript
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

const AspectRatio = AspectRatioPrimitive.Root

export { AspectRatio }

```

### src/components/ui/avatar.tsx

```typescript
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    size?: "sm" | "md" | "lg" | "xl"
  }
>(({ className, size = "md", ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex shrink-0 overflow-hidden rounded-full border border-border/30 ring-offset-background",
      size === "sm" && "h-8 w-8",
      size === "md" && "h-10 w-10",
      size === "lg" && "h-12 w-12",
      size === "xl" && "h-16 w-16",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }

```

### src/components/ui/badge.tsx

```typescript
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border-border",
        success:
          "border-transparent bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30",
        warning:
          "border-transparent bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/30",
        info:
          "border-transparent bg-primary/10 text-primary border-primary/30",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-[10px]",
        lg: "px-3 py-0.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

```

### src/components/ui/breadcrumb.tsx

```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-primary focus-visible:text-primary", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-medium text-foreground", className)}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5 text-muted-foreground/50", className)}
    {...props}
  >
    {children ?? <ChevronRight className="h-3.5 w-3.5" />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center text-muted-foreground", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}

```

### src/components/ui/button.tsx

```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

```

### src/components/ui/calendar.tsx

```typescript
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium text-foreground",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "h-7 w-7 bg-transparent p-0 opacity-70 hover:opacity-100 transition-opacity"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:text-accent-foreground"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground rounded-md transition-colors",
        day_today: "bg-accent/50 text-accent-foreground rounded-md",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/30 aria-selected:text-muted-foreground aria-selected:opacity-40",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent/60 aria-selected:text-accent-foreground rounded-none",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };

```

### src/components/ui/card.tsx

```typescript
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-border/40 bg-background shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight text-foreground",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

```

### src/components/ui/carousel.tsx

```typescript
import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full border border-border/40 opacity-80 hover:opacity-100 transition-opacity",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full border border-border/40 opacity-80 hover:opacity-100 transition-opacity",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}

```

