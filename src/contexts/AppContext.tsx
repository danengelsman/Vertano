import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@/hooks/useAuth';
import {
  getUser,
  getBrand,
  getContent,
  getHabits,
  getAnalytics,
  getConnectedAccounts,
  addContent,
  updateContent,
  publishContent,
  deleteContent,
  completeChallenge as completeChallengeApi,
} from '@/lib/api';

export type Platform = 'tiktok' | 'instagram' | 'youtube' | 'twitter' | 'linkedin';
export type MonetizationGoal = 'affiliate' | 'sponsorships' | 'products' | 'ads' | 'coaching';
export type ActiveView = 'dashboard' | 'editor' | 'roadmap' | 'community' | 'reports';

export interface UserProfile {
  id: string;
  email: string;
  name?: string; // Optional as it might not be set initially
  niche?: string; // Optional
  platforms?: Platform[]; // Optional
  monetizationGoal?: MonetizationGoal; // Optional
  followerCount?: number; // Optional
  weeklyPosts?: number; // Optional
  onboardingComplete?: boolean; // Optional
}

export interface BrandProfile {
  name: string;
  tagline: string;
  archetype: string;
  personality: string;
  colors: string[];
  typography: string[];
  visual_style: string;
  thumbnail_style: string;
  content_hooks: string[];
  catchphrases: string[];
}

export interface ContentDraft {
  id: string;
  user_id: string; // Added from backend
  title: string;
  body: string;
  type: string; // Added from backend
  platform: Platform;
  status: string; // Added from backend
  score?: number; // Made optional as it might be null
  score_feedback?: string; // Added from backend, made optional
  published: boolean;
  created_at: string; // Changed from createdAt to created_at
}

export interface ConnectedAccount {
  platform: Platform;
  profile: any; // Google profile data
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedAt?: string;
}

export interface StreakData {
  current: number;
  longest: number;
  lastPublishDate: string;
  totalPublished: number;
}

export interface ChallengeDay {
  day: number;
  task: string;
  category: string;
  completed: boolean;
}

export interface CommunityPost {
  id: string;
  niche: string;
  day: number;
  score: number;
  platform: Platform;
  timeAgo: string;
}

export interface WeeklyBrief {
  ideas: string[];
  topPerformingHook: string;
  postsLastWeek: number;
  avgScore: number;
}

interface AppContextType {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  userProfile: UserProfile;
  setUserProfile: (profile: UserProfile) => void;
  brandProfile: BrandProfile;
  setBrandProfile: (brand: BrandProfile) => void;
  showOnboarding: boolean;
  setShowOnboarding: (show: boolean) => void;
  drafts: ContentDraft[];
  addDraft: (draft: ContentDraft) => void;
  updateDraft: (id: string, updates: Partial<ContentDraft>) => void;
  publishDraft: (id: string) => void;
  deleteDraft: (id: string) => void;
  streak: StreakData;
  badges: Badge[];
  earnBadge: (id: string) => void;
  estimatedEarnings: number;
  firstDollarProgress: number;
  challengeDays: ChallengeDay[];
  completeChallenge: (day: number) => void;
  communityFeed: CommunityPost[];
  weeklyBrief: WeeklyBrief;
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
  currentLevel: number;
  xp: number;
  connectedAccounts: ConnectedAccount[];
}

const defaultProfile: UserProfile = {
  id: '',
  email: '',
  name: '',
  niche: '',
  platforms: [],
  monetizationGoal: 'affiliate',
  followerCount: 0,
  weeklyPosts: 0,
  onboardingComplete: false,
};

const defaultStreak: StreakData = {
  current: 0,
  longest: 0,
  lastPublishDate: '',
  totalPublished: 0,
};

const defaultBrand: BrandProfile = {
  name: '',
  tagline: '',
  archetype: '',
  personality: '',
  colors: [],
  typography: [],
  visual_style: '',
  thumbnail_style: '',
  content_hooks: [],
  catchphrases: [],
};

const defaultBadges: Badge[] = [
  { id: 'first-post', name: 'First Post', description: 'Published your very first piece of content', icon: 'pen', earned: false },
  { id: 'streak-3', name: '3-Day Streak', description: 'Published 3 days in a row', icon: 'flame', earned: false },
  { id: 'streak-7', name: 'Week Warrior', description: 'Published 7 days in a row', icon: 'shield', earned: false },
  { id: 'streak-30', name: '30-Day Legend', description: 'Completed the 30-day challenge', icon: 'crown', earned: false },
  { id: 'score-80', name: 'Quality Creator', description: 'Achieved a content score of 80+', icon: 'star', earned: false },
  { id: 'score-95', name: 'Masterpiece', description: 'Achieved a content score of 95+', icon: 'gem', earned: false },
  { id: 'multi-platform', name: 'Multi-Platform', description: 'Published on 3+ platforms', icon: 'globe', earned: false },
  { id: 'first-dollar', name: 'First Dollar', description: 'Earned your first dollar from content', icon: 'dollar', earned: false },
  { id: 'ten-posts', name: 'Prolific Creator', description: 'Published 10 pieces of content', icon: 'layers', earned: false },
  { id: 'community', name: 'Community Star', description: 'Reached the community leaderboard', icon: 'users', earned: false },
];

const defaultChallengeDays: ChallengeDay[] = Array.from({ length: 30 }, (_, i) => {
  const categories = ['Finding Ideas', 'Finding Ideas', 'Finding Ideas', 'Finding Ideas', 'Finding Ideas', 'Finding Ideas',
    'Writing', 'Writing', 'Writing', 'Writing', 'Writing', 'Writing',
    'Publishing', 'Publishing', 'Publishing', 'Publishing', 'Publishing', 'Publishing',
    'Growth', 'Growth', 'Growth', 'Growth', 'Growth', 'Growth',
    'Monetization', 'Monetization', 'Monetization', 'Monetization', 'Monetization', 'Monetization'];
  const tasks = [
    'List 10 topics you could talk about forever',
    'Find 5 creators in your niche and note what works',
    'Write down 3 problems your audience faces',
    'Browse trending topics and pick one to riff on',
    'Create a content idea bank with 20 ideas',
    'Pick your best 7 ideas for this week',
    'Write a hook that stops the scroll',
    'Draft your first post using the AIDA framework',
    'Write a personal story related to your niche',
    'Create a listicle post (Top 5/7/10)',
    'Write a controversial take in your niche',
    'Draft a how-to tutorial post',
    'Publish your first post on your primary platform',
    'Publish and engage with 10 comments in your niche',
    'Cross-post your best content to a second platform',
    'Publish a video or carousel post',
    'Publish a thread or multi-part story',
    'Repurpose your best post into a different format',
    'Analyze your top-performing post and double down',
    'Engage with 20 accounts in your niche daily',
    'Collaborate with another creator (comment, duet, quote)',
    'Create a lead magnet or freebie for your audience',
    'Optimize your bio and profile for conversions',
    'Run a poll or Q&A to boost engagement',
    'Research 3 affiliate programs in your niche',
    'Write a product review or recommendation post',
    'Create a "resources I use" post with affiliate links',
    'Draft your first sponsorship pitch template',
    'Plan a simple digital product (checklist, template, guide)',
    'Celebrate! Review your journey and plan Month 2',
  ];
  return {
    day: i + 1,
    task: tasks[i],
    category: categories[i],
    completed: false,
  };
});

const defaultCommunityFeed: CommunityPost[] = [
  { id: '1', niche: 'Fitness', day: 22, score: 91, platform: 'instagram', timeAgo: '2m ago' },
  { id: '2', niche: 'Tech Reviews', day: 15, score: 87, platform: 'youtube', timeAgo: '5m ago' },
  { id: '3', niche: 'Personal Finance', day: 30, score: 94, platform: 'twitter', timeAgo: '8m ago' },
  { id: '4', niche: 'Cooking', day: 7, score: 78, platform: 'tiktok', timeAgo: '12m ago' },
  { id: '5', niche: 'Photography', day: 19, score: 88, platform: 'instagram', timeAgo: '18m ago' },
  { id: '6', niche: 'SaaS', day: 11, score: 82, platform: 'linkedin', timeAgo: '25m ago' },
  { id: '7', niche: 'Travel', day: 28, score: 90, platform: 'tiktok', timeAgo: '32m ago' },
  { id: '8', niche: 'Parenting', day: 5, score: 73, platform: 'instagram', timeAgo: '45m ago' },
  { id: '9', niche: 'Gaming', day: 14, score: 85, platform: 'youtube', timeAgo: '1h ago' },
  { id: '10', niche: 'Design', day: 21, score: 92, platform: 'twitter', timeAgo: '1h ago' },
];

const defaultWeeklyBrief: WeeklyBrief = {
  ideas: [
    'Share your morning routine and how it fuels creativity',
    'Break down a trending topic in your niche with a hot take',
    'Create a "before and after" transformation post',
    'Interview a follower or peer creator in your niche',
    'Share 3 tools that changed your workflow this month',
  ],
  topPerformingHook: 'The curiosity hook ("Most people don\'t know this about...")',
  postsLastWeek: 4,
  avgScore: 76,
};

const AppContext = createContext<AppContextType>({} as AppContextType);

export const useAppContext = () => useContext(AppContext);



export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState<ActiveView>('dashboard');
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [badges, setBadges] = useState<Badge[]>(defaultBadges);
  const [communityFeed] = useState<CommunityPost[]>(defaultCommunityFeed); // Still using mock for now
  const [weeklyBrief] = useState<WeeklyBrief>(defaultWeeklyBrief); // Still using mock for now
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [xp, setXp] = useState(0);

  const { user } = useAuth();
  const queryClient = useQueryClient();

  // Fetch data using react-query. We only enable these queries when a user is signed in
  // via our Express backend -- there's no point hitting the API if nobody's logged in,
  // and it prevents stale fetches racing against sign-out.
  const isAuthed = !!user;
  const { data: userData, refetch: refetchUser } = useQuery({ queryKey: ['user'], queryFn: getUser, enabled: isAuthed });
  const { data: brandData, refetch: refetchBrand } = useQuery({ queryKey: ['brand'], queryFn: getBrand, enabled: isAuthed });
  const { data: contentData, refetch: refetchContent } = useQuery({ queryKey: ['content'], queryFn: getContent, enabled: isAuthed });
  const { data: habitsData, refetch: refetchHabits } = useQuery({ queryKey: ['habits'], queryFn: getHabits, enabled: isAuthed });
  const { data: accountsData, refetch: refetchAccounts } = useQuery({ queryKey: ['accounts'], queryFn: getConnectedAccounts, enabled: isAuthed });

  const [userProfile, setUserProfile] = useState<UserProfile>(defaultProfile);
  const [brandProfile, setBrandProfile] = useState<BrandProfile>(defaultBrand);
  const [drafts, setDrafts] = useState<ContentDraft[]>([]);
  const [streak, setStreak] = useState<StreakData>(defaultStreak);
  const [challengeDays, setChallengeDays] = useState<ChallengeDay[]>(defaultChallengeDays);
  const [connectedAccounts, setConnectedAccounts] = useState<ConnectedAccount[]>([]);

  useEffect(() => {
    if (userData) {
      setUserProfile({
        // Prefer the real backend identity over whatever the mock API returns.
        id: user?.id || userData.id,
        email: user?.email || userData.email,
        name: userData.name || user?.name || '',
        niche: userData.niche || '',
        platforms: userData.platforms || [],
        monetizationGoal: userData.monetizationGoal || 'affiliate',
        followerCount: userData.followerCount || 0,
        weeklyPosts: userData.weeklyPosts || 0,
        onboardingComplete: userData.onboardingComplete || false,
      });
      setShowOnboarding(!userData.onboardingComplete);
    }
  }, [userData, user]);

  useEffect(() => {
    if (brandData) {
      setBrandProfile({
        name: brandData.name || '',
        tagline: brandData.tagline || '',
        archetype: brandData.archetype || '',
        personality: brandData.personality || '',
        colors: JSON.parse(brandData.colors || '[]'),
        typography: JSON.parse(brandData.typography || '[]'),
        visual_style: brandData.visual_style || '',
        thumbnail_style: brandData.thumbnail_style || '',
        content_hooks: JSON.parse(brandData.content_hooks || '[]'),
        catchphrases: JSON.parse(brandData.catchphrases || '[]'),
      });
    }
  }, [brandData]);

  useEffect(() => {
    if (contentData) {
      setDrafts(contentData.map((d: any) => ({
        id: d.id,
        user_id: d.user_id,
        title: d.title,
        body: d.body,
        type: d.type,
        platform: d.platform,
        status: d.status,
        score: d.score,
        score_feedback: d.score_feedback,
        published: d.status === 'published',
        created_at: d.created_at,
      })));
    }
  }, [contentData]);

  useEffect(() => {
    if (habitsData?.streak) {
      setStreak({
        current: habitsData.streak.current,
        longest: habitsData.streak.longest,
        lastPublishDate: habitsData.streak.last_publish_date,
        totalPublished: habitsData.streak.total_published,
      });
    }
    if (habitsData?.challenge) {
      setChallengeDays(habitsData.challenge.days.map((d: any) => ({ ...d, completed: d.completed === 1 })));
    }
  }, [habitsData]);

  useEffect(() => {
    if (accountsData) {
      setConnectedAccounts(accountsData);
    }
  }, [accountsData]);

  // When the user changes (sign in / sign out), react to it:
  //  - Signed in: overlay their real id/email/name onto userProfile so the
  //    app always shows the correct person, even if the mock API still
  //    returns a placeholder user.
  //  - Signed out: wipe local state and clear the react-query cache so no
  //    data from the previous session sticks around.
  useEffect(() => {
    if (user) {
      setUserProfile(prev => ({
        ...prev,
        id: user.id,
        email: user.email || prev.email,
        name: prev.name || user.name || '',
      }));
    } else {
      // Signed out — reset in-memory state back to defaults.
      setUserProfile(defaultProfile);
      setBrandProfile(defaultBrand);
      setDrafts([]);
      setStreak(defaultStreak);
      setChallengeDays(defaultChallengeDays);
      setConnectedAccounts([]);
      setBadges(defaultBadges);
      setXp(0);
      setShowOnboarding(true);
      setActiveView('dashboard');
      queryClient.clear();
    }
  }, [user, queryClient]);

  const toggleSidebar = useCallback(() => setSidebarOpen(prev => !prev), []);

  const addDraft = useCallback(async (draft: ContentDraft) => {
    const newDraft = await addContent({
      title: draft.title,
      body: draft.body,
      type: draft.type,
      platform: draft.platform,
      score: draft.score,
      score_feedback: draft.score_feedback,
    });
    refetchContent();
    toast({ title: 'Draft saved', description: 'Your content has been saved as a draft.' });
  }, [refetchContent]);

  const updateDraft = useCallback(async (id: string, updates: Partial<ContentDraft>) => {
    await updateContent(id, updates);
    refetchContent();
    toast({ title: 'Draft updated', description: 'Your draft has been updated.' });
  }, [refetchContent]);

  const publishDraft = useCallback(async (id: string) => {
    await publishContent(id);
    refetchContent();
    refetchHabits();
    setXp(prev => prev + 50);
    toast({ title: 'Content Published!', description: '+50 XP earned. Keep the streak going!' });
  }, [refetchContent, refetchHabits]);

  const deleteDraft = useCallback(async (id: string) => {
    await deleteContent(id);
    refetchContent();
    toast({ title: 'Draft deleted', description: 'Your draft has been removed.' });
  }, [refetchContent]);

  const earnBadge = useCallback((id: string) => {
    setBadges(prev => prev.map(b => b.id === id ? { ...b, earned: true, earnedAt: new Date().toISOString() } : b));
    const badge = defaultBadges.find(b => b.id === id);
    setXp(prev => prev + 100);
    if (badge) {
      toast({ title: `Badge Earned: ${badge.name}!`, description: `${badge.description}. +100 XP!` });
    }
  }, []);

  const completeChallenge = useCallback(async (day: number) => {
    await completeChallengeApi(day);
    refetchHabits();
    setXp(prev => prev + 25);
    toast({ title: `Day ${day} Complete!`, description: '+25 XP earned. On to the next challenge!' });
  }, [refetchHabits]);

  const estimatedEarnings = (() => {
    if (!userProfile) return 0; // Handle loading state
    const { followerCount = 0, weeklyPosts = 0 } = userProfile;
    const engagementRate = 0.035;
    const reachMultiplier = 0.15;
    const affiliateRate = 0.02;
    const sponsorRate = (followerCount || 0) > 1000 ? 0.01 : 0;
    const adRate = (followerCount || 0) > 5000 ? 0.003 : 0;
    const monthlyReach = (followerCount || 0) * reachMultiplier * (weeklyPosts || 0) * 4;
    return Math.round((monthlyReach * engagementRate * (affiliateRate + sponsorRate + adRate)) * 100) / 100;
  })();

  const firstDollarProgress = Math.min(100, (estimatedEarnings / 1) * 100);
  const currentLevel = Math.floor(xp / 500) + 1;

  return (
    <AppContext.Provider value={{
      sidebarOpen, toggleSidebar,
      activeView, setActiveView,
      userProfile, setUserProfile,
      brandProfile, setBrandProfile,
      showOnboarding, setShowOnboarding,
      drafts, addDraft, updateDraft, publishDraft, deleteDraft,
      streak, badges, earnBadge,
      estimatedEarnings, firstDollarProgress,
      challengeDays, completeChallenge,
      communityFeed, weeklyBrief,
      showAuthModal, setShowAuthModal,
      currentLevel, xp,
      connectedAccounts,
    }}>
      {children}
    </AppContext.Provider>
  );
};
