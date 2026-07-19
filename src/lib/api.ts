import { supabase } from '@/lib/supabaseClient';

/**
 * Data layer — talks straight to Supabase (Postgres + RLS + Edge Functions).
 * Every query runs as the signed-in user, so row-level security scopes all
 * reads and writes to that user's own rows.
 */

async function requireUserId(): Promise<string> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not signed in');
  return user.id;
}

// --- Profile ---

export const getUser = async () => {
  const userId = await requireUserId();
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .maybeSingle();
  if (error) throw error;
  return data;
};

export const upsertProfile = async (profile: {
  name?: string;
  niche?: string;
  platforms?: string[];
  monetization_goal?: string;
  follower_count?: number;
  weekly_posts?: number;
  onboarding_complete?: boolean;
}) => {
  const userId = await requireUserId();
  const { error } = await supabase
    .from('profiles')
    .upsert({ id: userId, ...profile });
  if (error) throw error;
  return { success: true };
};

// --- Brand ---

export const getBrand = async () => {
  const userId = await requireUserId();
  const { data, error } = await supabase
    .from('brands')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle();
  if (error) throw error;
  return data;
};

export const updateBrand = async (brandData: {
  name?: string;
  tagline?: string;
  archetype?: string;
  personality?: string;
  colors?: string[];
  typography?: string[];
  visual_style?: string;
  thumbnail_style?: string;
  content_hooks?: string[];
  catchphrases?: string[];
}) => {
  const userId = await requireUserId();
  const { error } = await supabase
    .from('brands')
    .upsert({ user_id: userId, ...brandData, updated_at: new Date().toISOString() });
  if (error) throw error;
  return { success: true };
};

// --- Content ---

export const getContent = async () => {
  const userId = await requireUserId();
  const { data, error } = await supabase
    .from('content')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data ?? [];
};

export const addContent = async (contentData: {
  title: string;
  body: string;
  type: string;
  platform: string;
  score?: number;
  score_feedback?: string;
}) => {
  const userId = await requireUserId();
  const { data, error } = await supabase
    .from('content')
    .insert({ user_id: userId, status: 'draft', ...contentData })
    .select('id')
    .single();
  if (error) throw error;
  return { id: data.id };
};

export const updateContent = async (id: string, contentData: {
  title?: string;
  body?: string;
  type?: string;
  platform?: string;
  status?: string;
  score?: number;
  score_feedback?: string;
}) => {
  const { error } = await supabase
    .from('content')
    .update(contentData)
    .eq('id', id);
  if (error) throw error;
  return { success: true };
};

export const deleteContent = async (id: string) => {
  const { error } = await supabase
    .from('content')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return { success: true };
};

export const publishContent = async (id: string) => {
  // Atomic publish + streak update in Postgres (see publish_content migration).
  const { error } = await supabase.rpc('publish_content', { p_content_id: id });
  if (error) throw error;
  return { success: true };
};

// --- Habits (streak + 30-day challenge) ---

export const getHabits = async () => {
  const userId = await requireUserId();
  const [streakRes, challengeRes] = await Promise.all([
    supabase.from('streaks').select('*').eq('user_id', userId).maybeSingle(),
    supabase.from('challenge_progress').select('day').eq('user_id', userId),
  ]);
  if (streakRes.error) throw streakRes.error;
  if (challengeRes.error) throw challengeRes.error;

  const completedDays = new Set((challengeRes.data ?? []).map(r => r.day));
  return {
    streak: streakRes.data
      ? {
          current: streakRes.data.current_streak,
          longest: streakRes.data.longest_streak,
          last_publish_date: streakRes.data.last_publish_date,
          total_published: streakRes.data.total_published,
        }
      : null,
    challenge: {
      days: Array.from({ length: 30 }, (_, i) => ({
        day: i + 1,
        completed: completedDays.has(i + 1),
      })),
    },
  };
};

export const completeChallenge = async (day: number) => {
  const userId = await requireUserId();
  const { error } = await supabase
    .from('challenge_progress')
    .upsert({ user_id: userId, day });
  if (error) throw error;
  return { success: true };
};

// --- Analytics ---

export const getAnalytics = async () => {
  const userId = await requireUserId();
  const { data, error } = await supabase
    .from('analytics')
    .select('*')
    .eq('user_id', userId)
    .order('date', { ascending: true });
  if (error) throw error;
  return data ?? [];
};

// --- AI (Edge Functions — Gemini key stays server-side) ---

export const generateAIContent = async (prompt: string, niche: string, platform: string) => {
  const { data, error } = await supabase.functions.invoke('generate-content', {
    body: { prompt, niche, platform },
  });
  if (error) throw error;
  return data.content as string;
};

export const scoreContent = async (content: string) => {
  const { data, error } = await supabase.functions.invoke('score-content', {
    body: { content },
  });
  if (error) throw error;
  return data as { score: number; feedback: string };
};
