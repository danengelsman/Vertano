import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { ChevronRight, Lightbulb, TrendingUp, Copy, Check, Compass } from 'lucide-react';
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
    <section className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-white/80 shadow-[0_12px_40px_rgba(23,20,17,0.05)]">
      <div className="border-b border-border/70 bg-[linear-gradient(180deg,rgba(245,240,232,0.88),rgba(255,255,255,0.7))] p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[1rem] bg-primary/10 text-primary">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Weekly brief</h3>
              <p className="text-xs text-muted-foreground">Personalized for {userProfile.niche || 'your niche'}</p>
            </div>
          </div>
          <span className="rounded-full bg-accent/14 px-2.5 py-1 text-xs font-medium text-primary">This Week</span>
        </div>
      </div>

      <div className="border-b border-border/70 p-5">
        <div className="mb-3 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Last week</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[1.1rem] bg-muted/55 p-3">
            <p className="text-2xl font-display font-semibold tracking-[-0.04em] text-foreground">{weeklyBrief.postsLastWeek}</p>
            <p className="text-xs text-muted-foreground">Posts created</p>
          </div>
          <div className="rounded-[1.1rem] bg-muted/55 p-3">
            <p className="text-2xl font-display font-semibold tracking-[-0.04em] text-foreground">{weeklyBrief.avgScore}</p>
            <p className="text-xs text-muted-foreground">Average score</p>
          </div>
        </div>
        <div className="mt-3 rounded-[1.1rem] border border-accent/20 bg-accent/10 p-3">
          <p className="text-xs text-foreground/78">
            <span className="font-semibold">Best hook style:</span> {weeklyBrief.topPerformingHook}
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center gap-2">
          <Lightbulb className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">5 ideas to work from</span>
        </div>
        <div className="space-y-2">
          {weeklyBrief.ideas.map((idea, idx) => (
            <div
              key={idx}
              className="group flex cursor-pointer items-start gap-3 rounded-[1.1rem] p-3 transition-colors hover:bg-muted/35"
              onClick={() => copyIdea(idea, idx)}
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                {idx + 1}
              </span>
              <p className="flex-1 text-sm leading-relaxed text-foreground/85">{idea}</p>
              <div className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100">
                {copiedIdx === idx ? (
                  <Check className="h-4 w-4 text-primary" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            </div>
          ))}
        </div>
        <Button
          onClick={() => setActiveView('editor')}
          className="mt-4 w-full gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/92"
        >
          Start Creating <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};

export default WeeklyBriefCard;
