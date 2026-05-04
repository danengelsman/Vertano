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
