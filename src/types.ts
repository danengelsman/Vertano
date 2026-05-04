import { Platform, MonetizationGoal, ActiveView } from './contexts/AppContext';

export interface UserProfile {
  id: string;
  email: string;
  name?: string;
  niche?: string;
  platforms?: Platform[];
  monetizationGoal?: MonetizationGoal;
  followerCount?: number;
  weeklyPosts?: number;
  onboardingComplete?: boolean;
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
  user_id: string;
  title: string;
  body: string;
  type: string;
  platform: Platform;
  status: string;
  score?: number;
  score_feedback?: string;
  published: boolean;
  created_at: string;
}

export interface StreakData {
  current: number;
  longest: number;
  last_publish_date: string;
  total_published: number;
}

export interface ChallengeDay {
  day: number;
  task: string;
  category: string;
  completed: boolean;
}

export interface Challenge {
  user_id: string;
  days: ChallengeDay[]; // This will likely be a JSON string in SQLite, parsed into an array
  current_day: number;
  completed_days: { [key: number]: number }; // This would be a JSON object in SQLite
}

export interface UserAccount {
  user_id: string;
  platform: Platform;
  access_token: string;
  refresh_token: string | null;
  expiry_date: number;
  profile_data: string; // JSON string of profile data
}

export interface AnalyticsData {
  id: string;
  user_id: string;
  date: string;
  platform: Platform;
  views: number;
  engagements: number;
  followers_gained: number;
}