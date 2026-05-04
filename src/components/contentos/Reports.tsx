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
              <span className="font-semibold">Privacy Notice:</span> ContentOS uses official OAuth protocols to connect your accounts.
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
