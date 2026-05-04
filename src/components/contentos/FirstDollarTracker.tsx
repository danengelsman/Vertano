import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { DollarSign, TrendingUp, ArrowUpRight } from 'lucide-react';


const FirstDollarTracker: React.FC = () => {
  const { estimatedEarnings, firstDollarProgress, userProfile } = useAppContext();
  const remaining = Math.max(0, 1 - estimatedEarnings);

  return (
    <section className="relative overflow-hidden rounded-[1.9rem] border border-border/70 bg-[linear-gradient(180deg,#171411_0%,#211b17_100%)] p-6 text-white shadow-[0_24px_70px_rgba(23,20,17,0.22)] lg:p-8">
      <div className="earnest-grid absolute inset-0 opacity-20" />
      <div className="absolute right-[-4rem] top-[-4rem] h-40 w-40 rounded-full bg-accent/12 blur-3xl" />

      <div className="relative">
        <div className="mb-7 flex items-start justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-[1rem] bg-white/10">
                <DollarSign className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-[rgba(255,255,255,0.78)]">First dollar tracker</span>
            </div>
            <h3 className="text-3xl font-display font-semibold tracking-[-0.05em] lg:text-4xl">
              ${estimatedEarnings.toFixed(2)}
            </h3>
            <p className="mt-1 text-sm text-[rgba(255,255,255,0.68)]">
              {remaining > 0
                ? `$${remaining.toFixed(2)} away from your first dollar`
                : 'Congratulations! You reached your first dollar!'
              }
            </p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+12%</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="mb-2 flex justify-between text-xs text-[rgba(255,255,255,0.7)]">
            <span>Progress to $1.00</span>
            <span>{Math.round(firstDollarProgress)}%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-white/12">
            <div
              className="h-full rounded-full bg-[linear-gradient(90deg,#C6922B,#E0B75A)] transition-all duration-1000 ease-out"
              style={{ width: `${firstDollarProgress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Affiliate', value: (estimatedEarnings * 0.5).toFixed(2), growth: '+8%' },
            { label: 'Sponsors', value: (estimatedEarnings * 0.3).toFixed(2), growth: '+15%' },
            { label: 'Ads', value: (estimatedEarnings * 0.2).toFixed(2), growth: '+5%' },
          ].map(item => (
            <div key={item.label} className="rounded-[1.1rem] border border-white/10 bg-white/8 p-3">
              <p className="text-xs text-[rgba(255,255,255,0.58)]">{item.label}</p>
              <p className="text-lg font-semibold tracking-[-0.03em]">${item.value}</p>
              <div className="mt-0.5 flex items-center gap-0.5 text-xs text-[#E0B75A]">
                <ArrowUpRight className="h-3 w-3" />
                {item.growth}
              </div>
            </div>
          ))}
        </div>

        {userProfile.onboardingComplete && (
          <div className="mt-4 rounded-[1.15rem] border border-white/10 bg-white/8 p-3">
            <p className="text-xs text-[rgba(255,255,255,0.8)]">
              <span className="font-semibold text-[#E0B75A]">Guidance:</span> Increasing your posting frequency from {userProfile.weeklyPosts} to {userProfile.weeklyPosts + 2} posts/week could boost your estimated earnings by roughly 35%.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FirstDollarTracker;
