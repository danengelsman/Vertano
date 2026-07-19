import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import FirstDollarTracker from './FirstDollarTracker';
import StatsCards from './StatsCards';
import WeeklyBriefCard from './WeeklyBriefCard';
import BadgesGrid from './BadgesGrid';
import { Rocket, PenTool, ArrowRight, Clock, Compass, ChevronRight, TrendingUp, Banknote, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard: React.FC = () => {
  const { userProfile, setActiveView, streak, communityFeed, firstDollarProgress, estimatedEarnings, drafts, challengeDays } = useAppContext();
  const publishedCount = drafts.filter(d => d.published).length + streak.totalPublished;
  const completedDays = challengeDays.filter(d => d.completed).length;
  const heroStats = [
    {
      label: 'Revenue signal',
      value: `$${estimatedEarnings.toFixed(2)}`,
      note: estimatedEarnings >= 1 ? 'Profitable' : `${Math.max(0, 1 - estimatedEarnings).toFixed(2)} to first dollar`,
      icon: <Banknote className="h-4 w-4" />,
    },
    {
      label: 'Publishing rhythm',
      value: `${publishedCount}`,
      note: `${streak.current} day streak`,
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      label: 'Challenge pace',
      value: `${completedDays}/30`,
      note: `${Math.round(firstDollarProgress)}% to first dollar`,
      icon: <Target className="h-4 w-4" />,
    },
  ];

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm lg:p-9">
        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_340px] lg:items-start">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-primary">
              <Compass className="h-4 w-4" />
              <span>
                {streak.current > 0 ? `${streak.current}-day streak!` : 'Day 1 starts now'}
              </span>
            </div>
            <h1 className="text-3xl font-display font-semibold tracking-tight text-foreground lg:text-5xl">
              Welcome back, {userProfile.name || 'Creator'}
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-8 text-muted-foreground lg:text-lg">
              {streak.current === 0
                ? "Start with the next concrete move: create your first post, establish a rhythm, and let the rest of the system build from there."
                : `You're on a ${streak.current}-day streak. Keep shipping, keep learning, and let the data tighten your next move.`
              }
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                onClick={() => setActiveView('editor')}
                className="h-11 rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
              >
                <PenTool className="w-4 h-4 mr-2" /> Create Content
              </Button>
              <Button
                onClick={() => setActiveView('roadmap')}
                variant="outline"
                className="h-11 rounded-full border-border bg-background px-6 text-foreground hover:bg-muted"
              >
                <Rocket className="w-4 h-4 mr-2" /> View Roadmap
              </Button>
            </div>
          </div>

          <aside className="relative grid gap-4 rounded-xl border border-border bg-secondary p-5 text-foreground shadow-sm">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Today</p>
              <h2 className="mt-3 text-2xl font-display font-semibold tracking-tight">Operator panel</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Keep the next move visible. This side stays practical while the rest of the dashboard handles context.
              </p>
            </div>
            <div className="grid gap-3">
              {heroStats.map((item) => (
                <div key={item.label} className="rounded-xl border border-border bg-card p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {item.icon}
                      </span>
                      <span className="text-xs font-medium">{item.label}</span>
                    </div>
                    <span className="text-lg font-display font-semibold tracking-tight text-foreground">{item.value}</span>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">{item.note}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-3">
              <button
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 text-left transition-colors hover:bg-muted shadow-sm"
                onClick={() => setActiveView('editor')}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <PenTool className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Open content studio</p>
                  <p className="text-xs text-muted-foreground">Draft, score, and publish your next piece.</p>
                </div>
                <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 text-left transition-colors hover:bg-muted shadow-sm"
                onClick={() => setActiveView('roadmap')}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-foreground border border-border">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Review today's plan</p>
                  <p className="text-xs text-muted-foreground">Check your next challenge and monetization path.</p>
                </div>
                <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </aside>
        </div>
      </section>

      <StatsCards />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="space-y-8 lg:col-span-3">
          <FirstDollarTracker />

          <section className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-white/80 shadow-[0_12px_40px_rgba(23,20,17,0.05)]">
            <div className="flex items-center justify-between border-b border-border/70 px-6 py-5">
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-foreground">Community activity</h3>
                <p className="mt-1 text-sm text-muted-foreground">Recent progress from creators working through the same climb.</p>
              </div>
              <button
                onClick={() => setActiveView('community')}
                className="flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80"
              >
                View All <ArrowRight className="h-3 w-3" />
              </button>
            </div>
            <div className="divide-y divide-border/70">
              {communityFeed.slice(0, 5).map(post => (
                <div key={post.id} className="flex items-center gap-4 px-6 py-4 transition-colors hover:bg-muted/35">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {post.niche[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground/85">
                      A <span className="font-medium">{post.niche}</span> creator just posted their <span className="font-medium">Day {post.day}</span> content
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{post.timeAgo} · {post.platform}</p>
                  </div>
                  <div className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                    post.score >= 90 ? 'bg-accent/18 text-primary' :
                    post.score >= 80 ? 'bg-primary/10 text-primary' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {post.score}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8 lg:col-span-2">
          <WeeklyBriefCard />
          <BadgesGrid />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
