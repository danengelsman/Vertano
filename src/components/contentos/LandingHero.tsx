import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import {
  ArrowRight, PenTool, Target, DollarSign, Users,
  Landmark, ShieldCheck, ChartColumnIncreasing, Play, Check
} from 'lucide-react';
import EarnestMark from './EarnestMark';

const proofStats = [
  {
    value: 'One workspace',
    label: 'Plan, create, publish, and learn in the same loop.',
  },
  {
    value: 'No upfront bet',
    label: "The promise is simple: you don't pay until the work starts paying you.",
  },
  {
    value: 'Built to teach',
    label: 'Guidance that helps beginners stop guessing and start compounding.',
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
    title: 'Roadmap',
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
    description: 'Tell Earnest what you make, where you publish, and how you want to get paid. The system tightens around that.',
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
  'No paying for promises before the work pays back.',
  'No juggling five disconnected products to do one job.',
];

const checkpoints = [
  { label: 'First idea bank', value: 'Week 1' },
  { label: 'Publishing rhythm', value: 'Week 2' },
  { label: 'Monetization path', value: 'Week 4' },
  { label: 'First revenue signal', value: 'Month 2+' },
];

const markVariants: Array<{
  variant: 'waypoint' | 'keystone' | 'rally';
  name: string;
  description: string;
}> = [
  {
    variant: 'waypoint',
    name: 'Waypoint',
    description: 'A guided path inside a stable frame. This feels the most aligned with progress, support, and direction.',
  },
  {
    variant: 'keystone',
    name: 'Keystone',
    description: 'More emblematic and compact. It leans premium and feels closer to a formal seal or trusted badge.',
  },
  {
    variant: 'rally',
    name: 'Rally',
    description: 'More active and momentum-driven. It reads like upward movement and a clear forward push.',
  },
];

const delayClasses = ['earnest-delay-1', 'earnest-delay-2', 'earnest-delay-3', 'earnest-delay-4'];

const LandingHero: React.FC = () => {
  const { setShowOnboarding } = useAppContext();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="overflow-hidden bg-background">
      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(198,146,43,0.16),transparent_38%),linear-gradient(180deg,#171411_0%,#211b17_44%,#31261e_100%)] text-white">
        <div className="earnest-grid absolute inset-0 opacity-35" />
        <div className="earnest-drift absolute -left-16 top-20 h-72 w-72 rounded-full bg-[rgba(198,146,43,0.10)] blur-3xl" />
        <div className="earnest-drift absolute right-[-8rem] top-1/3 h-[26rem] w-[26rem] rounded-full bg-[rgba(245,240,232,0.08)] blur-3xl [animation-delay:1.2s]" />
        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-between px-4 pb-10 pt-10 lg:px-8 lg:pb-14 lg:pt-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)] lg:items-end">
            <div className="max-w-3xl">
              <div className="earnest-fade-up">
                <EarnestMark className="mb-8" iconClassName="text-[#171411]" />
              </div>
              <div className="earnest-fade-up earnest-delay-1 mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[rgba(255,255,255,0.82)]">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                You don&apos;t pay until you start making money
              </div>
              <h1 className="earnest-fade-up earnest-delay-2 max-w-4xl text-5xl font-display font-semibold leading-[0.94] tracking-[-0.07em] text-white sm:text-6xl lg:text-[6.35rem]">
                From first post to first paycheck.
              </h1>
              <p className="earnest-fade-up earnest-delay-3 mt-6 max-w-2xl text-base leading-7 text-[rgba(255,255,255,0.72)] sm:text-lg sm:leading-8">
                Earnest gives new creators one place to plan, create, publish, learn what pays, and keep moving without getting lost in the usual maze of tools.
              </p>
              <div className="earnest-fade-up earnest-delay-4 mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={() => setShowOnboarding(true)}
                  size="lg"
                  className="rounded-full bg-accent px-8 text-[0.95rem] font-semibold text-[#171411] hover:bg-accent/90"
                >
                  Start free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/18 bg-white/6 px-8 text-[0.95rem] font-medium text-white hover:bg-white/10 hover:text-white"
                  onClick={() => scrollTo('how-it-works')}
                >
                  <Play className="mr-2 h-4 w-4" />
                  See how it works
                </Button>
              </div>
            </div>

            <div className="earnest-fade-up earnest-delay-3">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-sm">
                <div className="absolute inset-x-0 top-0 h-px bg-white/30" />
                <div className="grid gap-4">
                  <div className="rounded-[1.6rem] border border-white/10 bg-[rgba(14,12,10,0.38)] p-5">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[rgba(255,255,255,0.45)]">Current posture</p>
                    <p className="mt-3 text-2xl font-display font-semibold tracking-[-0.05em] text-white">Aligned from day one.</p>
                    <p className="mt-2 text-sm leading-6 text-[rgba(255,255,255,0.62)]">
                      The product is built around one premise: if you are not winning yet, we have not earned the right to charge you.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {proofStats.map((item, index) => (
                      <div
                        key={item.value}
                        className={`rounded-[1.35rem] border border-white/10 bg-white/10 p-4 earnest-fade-up ${delayClasses[index]}`}
                      >
                        <p className="text-sm font-semibold tracking-[-0.03em] text-white">{item.value}</p>
                        <p className="mt-2 text-sm leading-6 text-[rgba(255,255,255,0.58)]">{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-[1.35rem] border border-[rgba(198,146,43,0.25)] bg-[rgba(198,146,43,0.10)] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[rgba(255,255,255,0.45)]">Core promise</p>
                        <p className="mt-2 text-lg font-semibold tracking-[-0.04em] text-white">
                          A platform on your side until you are profitable.
                        </p>
                      </div>
                      <Landmark className="h-5 w-5 shrink-0 text-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="earnest-fade-up earnest-delay-4 mt-12 grid gap-3 border-t border-white/10 pt-6 text-sm text-[rgba(255,255,255,0.62)] md:grid-cols-3">
            {principles.map(item => (
              <div key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 bg-background py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-8">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Why it feels different</p>
            <h2 className="mt-4 text-4xl font-display font-semibold tracking-[-0.06em] text-foreground sm:text-5xl">
              Most creator tools sell output. Earnest is built for outcomes.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map((item, index) => (
              <div
                key={item.title}
                className={`earnest-fade-up ${delayClasses[index % 4]} border-t border-border/80 py-5`}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-foreground">{item.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-7 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 bg-[linear-gradient(180deg,rgba(245,240,232,0.55),rgba(255,255,255,0.88))] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Mark study</p>
            <h2 className="mt-4 text-4xl font-display font-semibold tracking-[-0.06em] text-foreground sm:text-5xl">
              Three icon directions for Earnest.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
              Same wordmark, same palette, three different readings of the symbol. Pick the one that best matches the company you want to build.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {markVariants.map((item, index) => (
              <div
                key={item.variant}
                className={`earnest-fade-up ${delayClasses[index]} rounded-[1.8rem] border border-border/70 bg-white/78 p-6 shadow-[0_12px_40px_rgba(23,20,17,0.05)]`}
              >
                <div className="mb-8 flex min-h-[10rem] items-center justify-center rounded-[1.4rem] border border-border/60 bg-[linear-gradient(180deg,rgba(245,240,232,0.72),rgba(255,255,255,0.96))]">
                  <EarnestMark
                    variant={item.variant}
                    iconClassName="h-16 w-16 rounded-[1.45rem] text-[#171411]"
                    labelClassName="text-[1.4rem]"
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{item.name}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[linear-gradient(180deg,rgba(245,240,232,0.75),rgba(245,240,232,1))] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">How it works</p>
            <h2 className="mt-4 text-4xl font-display font-semibold tracking-[-0.06em] text-foreground sm:text-5xl">
              Built like a guided climb, not a tool dump.
            </h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-3">
            {workflow.map((item, index) => (
              <div
                key={item.eyebrow}
                className={`earnest-fade-up ${delayClasses[index]} flex min-h-[16rem] flex-col justify-between border-t border-foreground/10 pt-6`}
              >
                <span className="text-sm font-semibold tracking-[0.2em] text-primary">{item.eyebrow}</span>
                <div>
                  <h3 className="text-2xl font-display font-semibold tracking-[-0.04em] text-foreground">{item.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:px-8">
          <div className="earnest-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What progress looks like</p>
            <h2 className="mt-4 text-4xl font-display font-semibold tracking-[-0.06em] text-foreground sm:text-5xl">
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
                className={`earnest-fade-up ${delayClasses[index]} flex items-baseline justify-between gap-6 border-b border-border/70 pb-5`}
              >
                <div>
                  <p className="text-lg font-semibold tracking-[-0.03em] text-foreground">{item.label}</p>
                </div>
                <p className="shrink-0 text-sm font-semibold uppercase tracking-[0.18em] text-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#171411_0%,#211b17_100%)] py-20 text-white lg:py-24">
        <div className="earnest-grid absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[rgba(255,255,255,0.54)]">Aligned pricing</p>
              <h2 className="mt-4 text-4xl font-display font-semibold tracking-[-0.06em] text-white sm:text-5xl">
                The strongest thing we can say is also the business model.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(255,255,255,0.66)]">
                You do not pay Earnest until you start making money. That changes the relationship from day one. It forces the product to care about progress, not just subscriptions.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={() => setShowOnboarding(true)}
                  size="lg"
                  className="rounded-full bg-accent px-8 text-[0.95rem] font-semibold text-[#171411] hover:bg-accent/90"
                >
                  Start with Earnest
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/18 bg-white/6 px-8 text-[0.95rem] font-medium text-white hover:bg-white/10 hover:text-white"
                  onClick={() => scrollTo('how-it-works')}
                >
                  Review the workflow
                </Button>
              </div>
            </div>

            <div className="earnest-fade-up rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 text-[rgba(255,255,255,0.75)]">
                <ChartColumnIncreasing className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Early journey economics</span>
              </div>
              <div className="mt-8 space-y-5">
                <div className="flex items-end justify-between border-b border-white/10 pb-4">
                  <span className="text-sm text-[rgba(255,255,255,0.58)]">Free while unprofitable</span>
                  <span className="text-2xl font-display font-semibold tracking-[-0.05em] text-white">$0</span>
                </div>
                <div className="flex items-end justify-between border-b border-white/10 pb-4">
                  <span className="text-sm text-[rgba(255,255,255,0.58)]">Focus</span>
                  <span className="text-lg font-semibold tracking-[-0.03em] text-white">Profit over noise</span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-sm text-[rgba(255,255,255,0.58)]">Relationship</span>
                  <span className="text-lg font-semibold tracking-[-0.03em] text-white">Aligned by design</span>
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
