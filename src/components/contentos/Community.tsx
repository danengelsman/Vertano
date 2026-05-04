import React, { useState } from 'react';
import { useAppContext, Platform } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Users, Trophy, Flame, Target, Search, ExternalLink,
  TrendingUp, Crown, Medal, Award, Star, Share2
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const platformColors: Record<Platform, string> = {
  tiktok: 'bg-pink-100 text-pink-700',
  instagram: 'bg-purple-100 text-purple-700',
  youtube: 'bg-red-100 text-red-700',
  twitter: 'bg-slate-100 text-slate-700',
  linkedin: 'bg-blue-100 text-blue-700',
};

const leaderboardData = [
  { rank: 1, name: 'Sarah K.', niche: 'Fitness', streak: 47, score: 94, earnings: '$342', avatar: 'S' },
  { rank: 2, name: 'Mike R.', niche: 'Tech', streak: 38, score: 91, earnings: '$218', avatar: 'M' },
  { rank: 3, name: 'Jess L.', niche: 'Finance', streak: 35, score: 89, earnings: '$195', avatar: 'J' },
  { rank: 4, name: 'Alex T.', niche: 'Cooking', streak: 30, score: 87, earnings: '$156', avatar: 'A' },
  { rank: 5, name: 'Priya M.', niche: 'Design', streak: 28, score: 86, earnings: '$134', avatar: 'P' },
  { rank: 6, name: 'Chris W.', niche: 'Travel', streak: 25, score: 84, earnings: '$112', avatar: 'C' },
  { rank: 7, name: 'Dana F.', niche: 'Gaming', streak: 22, score: 82, earnings: '$89', avatar: 'D' },
  { rank: 8, name: 'Raj P.', niche: 'SaaS', streak: 19, score: 80, earnings: '$67', avatar: 'R' },
  { rank: 9, name: 'Emma S.', niche: 'Parenting', streak: 16, score: 78, earnings: '$45', avatar: 'E' },
  { rank: 10, name: 'Tom B.', niche: 'Photography', streak: 14, score: 76, earnings: '$28', avatar: 'T' },
];

const cohortGroups = [
  { name: 'Month 1: Audience Builders', members: 234, active: 189, description: 'Creators in their first 30 days building an audience' },
  { name: 'Month 2: Affiliate Explorers', members: 156, active: 128, description: 'Creators exploring affiliate marketing opportunities' },
  { name: 'Month 3: Sponsorship Seekers', members: 89, active: 72, description: 'Creators pitching and landing brand deals' },
  { name: 'Month 4: Product Launchers', members: 45, active: 38, description: 'Creators building and selling digital products' },
];

const Community: React.FC = () => {
  const { communityFeed, userProfile, streak } = useAppContext();
  const [activeTab, setActiveTab] = useState<'feed' | 'leaderboard' | 'cohorts' | 'journey'>('feed');
  const [searchQuery, setSearchQuery] = useState('');
  const [leaderboardSort, setLeaderboardSort] = useState<'streak' | 'score' | 'earnings'>('streak');

  const filteredFeed = communityFeed.filter(post =>
    !searchQuery || post.niche.toLowerCase().includes(searchQuery.toLowerCase()) || post.platform.includes(searchQuery.toLowerCase())
  );

  const sortedLeaderboard = [...leaderboardData].sort((a, b) => {
    if (leaderboardSort === 'streak') return b.streak - a.streak;
    if (leaderboardSort === 'score') return b.score - a.score;
    return parseFloat(b.earnings.replace('$', '')) - parseFloat(a.earnings.replace('$', ''));
  });

  const handleShareJourney = () => {
    toast({ title: 'Journey Link Copied!', description: 'Share your Creator Journey page with others.' });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Community</h2>
          <p className="text-slate-500 mt-1">Connect, compete, and grow with fellow creators</p>
        </div>
        <Button onClick={handleShareJourney} className="gap-2 bg-gradient-to-r from-violet-600 to-indigo-600">
          <Share2 className="w-4 h-4" /> Share My Journey
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-slate-100 rounded-xl w-fit">
        {[
          { id: 'feed' as const, label: 'Activity Feed', icon: <Users className="w-4 h-4" /> },
          { id: 'leaderboard' as const, label: 'Leaderboard', icon: <Trophy className="w-4 h-4" /> },
          { id: 'cohorts' as const, label: 'Cohorts', icon: <Target className="w-4 h-4" /> },
          { id: 'journey' as const, label: 'My Journey', icon: <Star className="w-4 h-4" /> },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {activeTab === 'feed' && (
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Filter by niche or platform..."
              className="pl-10 h-11"
            />
          </div>

          {/* Feed */}
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden divide-y divide-slate-100">
            {filteredFeed.map(post => (
              <div key={post.id} className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white font-bold">
                  {post.niche[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-700">
                    A <span className="font-semibold">{post.niche}</span> creator just posted their{' '}
                    <span className="font-semibold">Day {post.day}</span> content and scored{' '}
                    <span className={`font-bold ${post.score >= 90 ? 'text-emerald-600' : post.score >= 80 ? 'text-blue-600' : 'text-amber-600'}`}>
                      {post.score}/100
                    </span>
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${platformColors[post.platform]}`}>
                      {post.platform}
                    </span>
                    <span className="text-xs text-slate-400">{post.timeAgo}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <Flame className="w-3.5 h-3.5 text-orange-400" />
                  Day {post.day}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'leaderboard' && (
        <div className="space-y-4">
          {/* Sort */}
          <div className="flex gap-2">
            {[
              { id: 'streak' as const, label: 'Streak', icon: <Flame className="w-3.5 h-3.5" /> },
              { id: 'score' as const, label: 'Score', icon: <Target className="w-3.5 h-3.5" /> },
              { id: 'earnings' as const, label: 'Earnings', icon: <TrendingUp className="w-3.5 h-3.5" /> },
            ].map(sort => (
              <button
                key={sort.id}
                onClick={() => setLeaderboardSort(sort.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  leaderboardSort === sort.id
                    ? 'bg-violet-100 text-violet-700'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {sort.icon} {sort.label}
              </button>
            ))}
          </div>

          {/* Top 3 Podium */}
          <div className="grid grid-cols-3 gap-4">
            {sortedLeaderboard.slice(0, 3).map((user, idx) => (
              <div
                key={user.rank}
                className={`rounded-2xl border p-5 text-center ${
                  idx === 0 ? 'bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200 shadow-lg' :
                  idx === 1 ? 'bg-gradient-to-br from-slate-50 to-gray-50 border-slate-200' :
                  'bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200'
                }`}
              >
                <div className="flex justify-center mb-3">
                  {idx === 0 ? <Crown className="w-6 h-6 text-amber-500" /> :
                   idx === 1 ? <Medal className="w-6 h-6 text-slate-400" /> :
                   <Award className="w-6 h-6 text-orange-400" />}
                </div>
                <div className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center text-white font-bold text-lg ${
                  idx === 0 ? 'bg-gradient-to-br from-amber-400 to-yellow-500' :
                  idx === 1 ? 'bg-gradient-to-br from-slate-400 to-gray-500' :
                  'bg-gradient-to-br from-orange-400 to-amber-500'
                }`}>
                  {user.avatar}
                </div>
                <p className="font-semibold text-slate-900 mt-2">{user.name}</p>
                <p className="text-xs text-slate-500">{user.niche}</p>
                <div className="mt-3 space-y-1">
                  <p className="text-lg font-bold text-slate-900">
                    {leaderboardSort === 'streak' ? `${user.streak} days` :
                     leaderboardSort === 'score' ? `${user.score}/100` : user.earnings}
                  </p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                    {leaderboardSort === 'streak' ? 'Streak' : leaderboardSort === 'score' ? 'Avg Score' : 'Earnings'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Rest of leaderboard */}
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden">
            {sortedLeaderboard.slice(3).map((user, idx) => (
              <div key={user.rank} className="flex items-center gap-4 p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                <span className="w-8 text-center text-sm font-bold text-slate-400">{idx + 4}</span>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white font-bold">
                  {user.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">{user.name}</p>
                  <p className="text-xs text-slate-500">{user.niche}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900">
                    {leaderboardSort === 'streak' ? `${user.streak} days` :
                     leaderboardSort === 'score' ? `${user.score}/100` : user.earnings}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'cohorts' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cohortGroups.map((group, idx) => (
            <div key={group.name} className="rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${
                  idx === 0 ? 'from-blue-500 to-cyan-500' :
                  idx === 1 ? 'from-violet-500 to-purple-500' :
                  idx === 2 ? 'from-emerald-500 to-green-500' :
                  'from-amber-500 to-orange-500'
                } flex items-center justify-center text-white`}>
                  <Users className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 text-sm">{group.name}</h4>
                  <p className="text-xs text-slate-500">{group.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-lg font-bold text-slate-900">{group.members}</p>
                    <p className="text-[10px] text-slate-400 uppercase">Members</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-emerald-600">{group.active}</p>
                    <p className="text-[10px] text-slate-400 uppercase">Active</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toast({ title: 'Joined Cohort!', description: `You've joined "${group.name}". Connect with peers!` })}
                  className="gap-1"
                >
                  Join <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'journey' && (
        <div className="max-w-2xl mx-auto">
          {/* Public Journey Card */}
          <div className="rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 p-8 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-50" />
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mx-auto flex items-center justify-center text-3xl font-bold mb-4">
                {(userProfile.name || 'C')[0].toUpperCase()}
              </div>
              <h3 className="text-2xl font-bold">{userProfile.name || 'Creator'}'s Journey</h3>
              <p className="text-white/70 mt-1">{userProfile.niche || 'Content Creator'}</p>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                  <p className="text-2xl font-bold">{streak.current}</p>
                  <p className="text-xs text-white/60">Day Streak</p>
                </div>
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                  <p className="text-2xl font-bold">{streak.totalPublished}</p>
                  <p className="text-xs text-white/60">Published</p>
                </div>
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                  <p className="text-2xl font-bold">Lv.{Math.floor((streak.totalPublished * 50) / 500) + 1}</p>
                  <p className="text-xs text-white/60">Level</p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <p className="text-sm text-white/80">
                  "I'm on Day {streak.current} of my content creation journey. Join me!"
                </p>
              </div>

              <Button
                onClick={handleShareJourney}
                className="mt-6 bg-white text-violet-700 hover:bg-white/90 gap-2"
              >
                <Share2 className="w-4 h-4" /> Share This Page
              </Button>
              <p className="text-xs text-white/50 mt-3">Start your own journey free!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
