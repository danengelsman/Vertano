import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Only initialize if real credentials are present — avoids crashing the app
// when Supabase hasn't been configured yet.
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey &&
  !supabaseUrl.includes('your_') && !supabaseAnonKey.includes('your_')
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
