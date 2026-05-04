import React, { useState } from 'react';
import { useAppContext, Platform, MonetizationGoal } from '@/contexts/AppContext';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, ArrowLeft, Zap, Target, Rocket, Landmark } from 'lucide-react';
import EarnestMark from './EarnestMark';

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
        <EarnestMark className="justify-center mb-4" />
        <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-900">Welcome to Earnest</h2>
        <p className="text-slate-500 mt-2">The creator platform that stays aligned with you until the work pays off</p>
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
          <Landmark className="w-8 h-8 text-white" />
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
          <DialogDescription>Set up your Earnest creator profile</DialogDescription>
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
