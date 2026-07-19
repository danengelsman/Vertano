import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import {
  ArrowRight, PenTool, Target, DollarSign, Users,
  Landmark, ShieldCheck, ChartColumnIncreasing, Play, Check
} from 'lucide-react';
import DoneByAILogo from './DoneByAILogo';

const proofStats = [
  {
    value: 'Native Feel',
    label: 'Looks and performs like a native Apple application.',
  },
  {
    value: 'Automated Workflows',
    label: "Complex AI pipelines hidden behind a simple interface.",
  },
  {
    value: 'Maximum Trust',
    label: 'Clean, reliable, and built for professional results.',
  },
];

const capabilities = [
  {
    icon: <PenTool className="w-5 h-5" />,
    title: 'Content studio',
    description: 'Draft, score, format, and repurpose content without bouncing between disconnected tools.',
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Automated roadmaps',
    description: 'Build around the next profitable move instead of generic creator advice and random tutorials.',
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    title: 'Profit tracking',
    description: 'Tie the work to monetization paths so progress is measured against revenue, not just output.',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Community',
    description: 'Learn alongside creators on the same climb instead of trying to decode the game alone.',
  },
];

const workflow = [
  {
    eyebrow: '01',
    title: 'Set your direction once.',
    description: 'Tell Done by AI what you make, where you publish, and how you want to get paid. The system tightens around that.',
  },
  {
    eyebrow: '02',
    title: 'Ship with a clear next move.',
    description: 'Create content, use guided scoring, and publish without losing the thread between output and strategy.',
  },
  {
    eyebrow: '03',
    title: 'See what earns and double down.',
    description: 'Track performance, revenue signals, and consistency so your next post is informed by what actually works.',
  },
];

const principles = [
  'No generic AI sparkle branding.',
  'Professional results over playful toys.',
  'It just works, and it gets the job done.',
];

const checkpoints = [
  { label: 'First idea bank', value: 'Week 1' },
  { label: 'Publishing rhythm', value: 'Week 2' },
  { label: 'Monetization path', value: 'Week 4' },
  { label: 'First revenue signal', value: 'Month 2+' },
];

const delayClasses = ['earnest-delay-1', 'earnest-delay-2', 'earnest-delay-3', 'earnest-delay-4'];

const LandingHero: React.FC = () => {
  const { setShowOnboarding } = useAppContext();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="overflow-hidden bg-background">
      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-background text-foreground">
        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-between px-4 pb-10 pt-10 lg:px-8 lg:pb-14 lg:pt-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)] lg:items-end">
            <div className="max-w-3xl">
              <div className="earnest-fade-up">
                <DoneByAILogo className="mb-8" />
              </div>
              <div className="earnest-fade-up earnest-delay-1 mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                Automation for Professionals
              </div>
              <h1 className="earnest-fade-up earnest-delay-2 max-w-4xl text-5xl font-display font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                We make complex AI workflows feel simple.
              </h1>
              <p className="earnest-fade-up earnest-delay-3 mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Done by AI gives professionals one place to plan, create, publish, learn what pays, and keep moving without getting lost in the usual maze of clunky tools.
              </p>
              <div className="earnest-fade-up earnest-delay-4 mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={() => setShowOnboarding(true)}
                  size="lg"
                  className="rounded-full bg-primary px-8 text-[0.95rem] font-semibold text-white hover:bg-primary/90"
                >
                  Start free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-border bg-background px-8 text-[0.95rem] font-medium text-foreground hover:bg-muted"
                  onClick={() => scrollTo('how-it-works')}
                >
                  <Play className="mr-2 h-4 w-4" />
                  See how it works
                </Button>
              </div>
            </div>

            <div className="earnest-fade-up earnest-delay-3">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-sm">
                <div className="grid gap-4">
                  <div className="rounded-2xl border border-border bg-secondary p-5">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">Current posture</p>
                    <p className="mt-3 text-2xl font-display font-semibold tracking-tight text-foreground">Aligned from day one.</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      The product is built around one premise: It just works, and it gets the job done.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {proofStats.map((item, index) => (
                      <div
                        key={item.value}
                        className={`rounded-2xl border border-border bg-secondary p-4 earnest-fade-up ${delayClasses[index]}`}
                      >
                        <p className="text-sm font-semibold tracking-tight text-foreground">{item.value}</p>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">Core promise</p>
                        <p className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                          A platform built for professional output.
                        </p>
                      </div>
                      <Landmark className="h-5 w-5 shrink-0 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="earnest-fade-up earnest-delay-4 mt-12 grid gap-3 border-t border-border pt-6 text-sm text-muted-foreground md:grid-cols-3">
            {principles.map(item => (
              <div key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-8">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Why it feels different</p>
            <h2 className="mt-4 text-4xl font-display font-semibold tracking-tight text-foreground sm:text-5xl">
              Most creator tools sell output. Done by AI is built for outcomes.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map((item, index) => (
              <div
                key={item.title}
                className={`earnest-fade-up ${delayClasses[index % 4]} border-t border-border py-5`}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">{item.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-7 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">How it works</p>
            <h2 className="mt-4 text-4xl font-display font-semibold tracking-tight text-foreground sm:text-5xl">
              Built like a guided climb, not a tool dump.
            </h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-3">
            {workflow.map((item, index) => (
              <div
                key={item.eyebrow}
                className={`earnest-fade-up ${delayClasses[index]} flex min-h-[16rem] flex-col justify-between border-t border-border pt-6`}
              >
                <span className="text-sm font-semibold tracking-[0.2em] text-primary">{item.eyebrow}</span>
                <div>
                  <h3 className="text-2xl font-display font-semibold tracking-tight text-foreground">{item.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:px-8">
          <div className="earnest-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What progress looks like</p>
            <h2 className="mt-4 text-4xl font-display font-semibold tracking-tight text-foreground sm:text-5xl">
              Clear checkpoints replace guesswork.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-muted-foreground">
              The goal is not to flood new creators with options. It is to help them reach the next meaningful milestone with less confusion and stronger feedback loops.
            </p>
          </div>
          <div className="space-y-6">
            {checkpoints.map((item, index) => (
              <div
                key={item.label}
                className={`earnest-fade-up ${delayClasses[index]} flex items-baseline justify-between gap-6 border-b border-border pb-5`}
              >
                <div>
                  <p className="text-lg font-semibold tracking-tight text-foreground">{item.label}</p>
                </div>
                <p className="shrink-0 text-sm font-semibold uppercase tracking-[0.18em] text-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-20 border-t border-border lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Aligned pricing</p>
              <h2 className="mt-4 text-4xl font-display font-semibold tracking-tight text-foreground sm:text-5xl">
                The strongest thing we can say is also the business model.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                It just works, and it gets the job done. That changes the relationship from day one. It forces the product to care about progress, not just subscriptions.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={() => setShowOnboarding(true)}
                  size="lg"
                  className="rounded-full bg-primary px-8 text-[0.95rem] font-semibold text-white hover:bg-primary/90"
                >
                  Start with Done by AI
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-border bg-background px-8 text-[0.95rem] font-medium text-foreground hover:bg-muted"
                  onClick={() => scrollTo('how-it-works')}
                >
                  Review the workflow
                </Button>
              </div>
            </div>

            <div className="earnest-fade-up rounded-3xl border border-border bg-secondary p-6 shadow-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <ChartColumnIncreasing className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Early journey economics</span>
              </div>
              <div className="mt-8 space-y-5">
                <div className="flex items-end justify-between border-b border-border pb-4">
                  <span className="text-sm text-muted-foreground">Free while unprofitable</span>
                  <span className="text-2xl font-display font-semibold tracking-tight text-foreground">$0</span>
                </div>
                <div className="flex items-end justify-between border-b border-border pb-4">
                  <span className="text-sm text-muted-foreground">Focus</span>
                  <span className="text-lg font-semibold tracking-tight text-foreground">Profit over noise</span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-sm text-muted-foreground">Relationship</span>
                  <span className="text-lg font-semibold tracking-tight text-foreground">Aligned by design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingHero;
