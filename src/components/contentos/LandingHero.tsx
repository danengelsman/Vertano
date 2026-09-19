import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Users, DollarSign, Shield, Star } from 'lucide-react';
import VertanoLogo from './VertanoLogo';

const trustSignals = [
  { icon: Users, value: '5,247+', label: 'creators' },
  { icon: DollarSign, value: '$2.3M+', label: 'earned' },
  { icon: Star, value: '4.9★', label: 'rating' },
];

const differentiators = [
  {
    phase: 'Plan',
    icon: 'calendar',
    title: 'SprintBuilder',
    description: 'Turn strategy into a weekly checklist — no blank page paralysis.',
    color: 'trust-blue',
  },
  {
    phase: 'Create',
    icon: 'edit',
    title: 'ContentEditor',
    description: 'Score your script before you record — predict performance, not hope.',
    color: 'trust-green',
  },
  {
    phase: 'Earn',
    icon: 'dollar-sign',
    title: 'MonetizationHub',
    description: 'Link every video to revenue — see what actually pays.',
    color: 'warning',
  },
];

const socialProof = [
  {
    quote: '"First month: $340. Third month: $2,100. Vertano showed me exactly which videos paid — so I doubled down."',
    author: 'Sarah Chen',
    channel: '@TechWithSarah • 12K subs',
    metric: '$2,100/mo',
  },
  {
    quote: '"I wasted 8 months guessing. Vertano gave me a roadmap. First sponsorship at week 6."',
    author: 'Marcus Johnson',
    channel: '@MarcusBuilds • 8K subs',
    metric: 'Week 6',
  },
  {
    quote: '"The only tool that connects content to cash. My RPM jumped 40% in 60 days."',
    author: 'Priya Patel',
    channel: '@CodeWithPriya • 24K subs',
    metric: '+40% RPM',
  },
];

const LandingHero: React.FC = () => {
  const { setShowOnboarding } = useAppContext();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="overflow-hidden bg-background">
      {/* ============================================================
           HERO — Single decision, above fold, Apple-style
           ============================================================ */}
      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-background text-foreground">
        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col px-4 pb-10 pt-10 lg:px-8 lg:pb-14 lg:pt-12">
          {/* Minimal nav */}
          <div className="flex items-center justify-between h-14">
            <VertanoLogo className="apple-fade-up" />
            <div className="flex items-center gap-3 apple-fade-up apple-delay-1">
              <Button variant="ghost" size="sm" className="h-9 px-4 text-caption">
                Sign In
              </Button>
              <Button size="sm" className="h-9 px-4 text-caption rounded-full bg-primary hover:bg-primary/90">
                Start Free
              </Button>
            </div>
          </div>

          {/* Hero content */}
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <div className="apple-fade-up apple-delay-1 max-w-4xl px-4">
              <h1 className="text-display-lg font-display font-semibold tracking-tight text-foreground">
                Your turning point from content to income.
              </h1>
              <p className="mt-hero-gap text-body-lg text-muted-foreground max-w-2xl mx-auto">
                The only system that guides you from first video to first dollar — then scales to full-time.
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="apple-fade-up apple-delay-2 mt-hero-gap flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                onClick={() => setShowOnboarding(true)}
                size="lg"
                className="rounded-full bg-primary px-8 text-caption font-semibold text-white hover:bg-primary/90 min-w-[200px]"
              >
                Start free — 14 day trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-border bg-background px-8 text-caption font-medium text-foreground hover:bg-muted min-w-[200px]"
                onClick={() => scrollTo('why-vertano')}
              >
                <Play className="mr-2 h-4 w-4" />
                Watch 90s demo
              </Button>
            </div>

            {/* Trust bar */}
            <div className="apple-fade-up apple-delay-3 mt-hero-gap flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-micro text-muted-foreground">
              {trustSignals.map((item, i) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <item.icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  <span className="font-semibold text-foreground">{item.value}</span>
                  <span>{item.label}</span>
                  {i < trustSignals.length - 1 && <span className="mx-2 opacity-30">•</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           WHY VERTANO — Outcome pillars with real screenshots
           ============================================================ */}
      <section id="why-vertano" className="border-t border-border bg-background py-section">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <header className="text-center max-w-2xl mx-auto mb-section apple-fade-up">
            <p className="text-micro text-trust-blue">Why Vertano</p>
            <h2 className="mt-4 text-display-lg font-display font-semibold tracking-tight text-foreground">
              One system. Three phases. Zero guesswork.
            </h2>
            <p className="mt-4 text-body-lg text-muted-foreground">
              VidIQ optimizes tags. Kajabi sells courses. Vertano builds your business — from strategy to revenue.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-3">
            {differentiators.map((item, index) => (
              <article
                key={item.phase}
                className={`group relative p-6 rounded-apple-lg border border-border bg-surface hover:border-primary/50 transition-colors duration-apple apple-fade-up apple-delay-${index + 1}`}
              >
                <div className="absolute -top-3 left-6 bg-background px-2 text-micro text-trust-blue font-semibold">
                  Phase {index + 1}
                </div>
                <h3 className="mt-6 text-display-md font-display font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-body-base text-muted-foreground">{item.description}</p>

                {/* Screenshot placeholder — replace with real product shots */}
                <div className="mt-6 aspect-video rounded-apple border border-border bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-micro text-muted-foreground">
                    {item.title} screenshot
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                <div className="mt-4 flex items-center gap-2 text-caption text-trust-green font-medium">
                  <Shield className="h-3.5 w-3.5" />
                  <span>Revenue-attributed</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
           SOCIAL PROOF — Real creator outcomes
           ============================================================ */}
      <section className="border-t border-border bg-secondary py-section">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <header className="text-center max-w-2xl mx-auto mb-section apple-fade-up">
            <p className="text-micro text-trust-blue">Real Results</p>
            <h2 className="mt-4 text-display-lg font-display font-semibold tracking-tight text-foreground">
              Creators who stopped guessing and started earning.
            </h2>
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            {socialProof.map((item, index) => (
              <article
                key={item.author}
                className="p-6 rounded-apple-lg border border-border bg-surface apple-fade-up apple-delay-${index + 1}"
              >
                <p className="text-body-base text-foreground leading-relaxed">{item.quote}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{item.author}</p>
                    <p className="text-micro text-muted-foreground">{item.channel}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-micro text-trust-green font-semibold">{item.metric}</p>
                    <p className="text-micro text-muted-foreground">in 90 days</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
           CTA SECTION — Aligned pricing, single decision
           ============================================================ */}
      <section className="relative overflow-hidden bg-background py-section border-t border-border">
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)] lg:items-end">
            <div className="max-w-3xl apple-fade-up">
              <p className="text-micro text-muted-foreground">Aligned pricing</p>
              <h2 className="mt-4 text-display-lg font-display font-semibold tracking-tight text-foreground">
                The strongest thing we can say is also the business model.
              </h2>
              <p className="mt-5 max-w-2xl text-body-lg text-muted-foreground">
                Free until you earn $100. Then $29/mo — only when it works. That changes the relationship from day one.
                It forces the product to care about your progress, not just your subscription.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={() => setShowOnboarding(true)}
                  size="lg"
                  className="rounded-full bg-primary px-8 text-caption font-semibold text-white hover:bg-primary/90"
                >
                  Start with Vertano
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-border bg-background px-8 text-caption font-medium text-foreground hover:bg-muted"
                  onClick={() => scrollTo('why-vertano')}
                >
                  Review the workflow
                </Button>
              </div>
            </div>

            <div className="apple-fade-up apple-delay-1 rounded-apple-lg border border-border bg-surface p-6 shadow-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <DollarSign className="h-5 w-5 text-trust-green" />
                <span className="text-caption font-medium">Early journey economics</span>
              </div>
              <div className="mt-8 space-y-5">
                <div className="flex items-end justify-between border-b border-border pb-4">
                  <span className="text-micro text-muted-foreground">Free until $100 earned</span>
                  <span className="text-display-md font-display font-semibold tracking-tight text-foreground">$0</span>
                </div>
                <div className="flex items-end justify-between border-b border-border pb-4">
                  <span className="text-micro text-muted-foreground">Then monthly</span>
                  <span className="text-lg font-semibold tracking-tight text-foreground">$29/mo</span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-micro text-muted-foreground">Cancel anytime</span>
                  <span className="text-base font-medium text-trust-green">No lock-in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           FOOTER CTA — Minimal, focused
           ============================================================ */}
      <section className="bg-background py-section border-t border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center apple-fade-up">
          <h2 className="text-display-lg font-display font-semibold tracking-tight text-foreground">
            Ready for your turning point?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-body-lg text-muted-foreground">
            Join 5,000+ creators who stopped guessing and started earning. 14-day free trial. No credit card required.
          </p>
          <div className="mt-8">
            <Button
              onClick={() => setShowOnboarding(true)}
              size="lg"
              className="rounded-full bg-primary px-8 text-caption font-semibold text-white hover:bg-primary/90"
            >
              Start free — 14 day trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingHero;