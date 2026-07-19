import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { Flame, FileText, Target, Trophy, TrendingUp } from 'lucide-react';

const StatsCards: React.FC = () => {
  const { streak, drafts, challengeDays, badges, currentLevel, xp } = useAppContext();
  const publishedCount = drafts.filter(d => d.published).length;
  const avgScore = drafts.length > 0
    ? Math.round(drafts.reduce((sum, d) => sum + (d.score ?? 0), 0) / drafts.length)
    : 0;
  const completedDays = challengeDays.filter(d => d.completed).length;
  const earnedBadges = badges.filter(b => b.earned).length;

  const stats = [
    {
      label: 'Current streak',
      value: `${streak.current} days`,
      icon: <Flame className="w-5 h-5" />,
      change: streak.current > 0 ? `Best: ${streak.longest}` : 'Start today!',
    },
    {
      label: 'Published',
      value: `${publishedCount + streak.totalPublished}`,
      icon: <FileText className="w-5 h-5" />,
      change: `${drafts.filter(d => !d.published).length} drafts`,
    },
    {
      label: 'Average score',
      value: avgScore > 0 ? `${avgScore}/100` : '--',
      icon: <Target className="w-5 h-5" />,
      change: avgScore >= 80 ? 'Excellent!' : avgScore > 0 ? 'Keep improving' : 'Create content',
    },
    {
      label: 'Challenge',
      value: `${completedDays}/30`,
      icon: <Trophy className="w-5 h-5" />,
      change: `${earnedBadges} badges earned`,
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="rounded-[1.6rem] border border-border/70 bg-white/72 p-5 shadow-[0_8px_28px_rgba(23,20,17,0.04)] transition-colors hover:bg-white"
        >
          <div className="flex items-start justify-between mb-3">
            <div className={`flex h-11 w-11 items-center justify-center rounded-[1rem] ${index === 0 ? 'bg-accent/16 text-primary' : 'bg-primary/10 text-primary'}`}>
              {stat.icon}
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3" />
              <span>{stat.change}</span>
            </div>
          </div>
          <p className="text-2xl font-display font-semibold tracking-[-0.04em] text-foreground">{stat.value}</p>
          <p className="mt-0.5 text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsCards;
