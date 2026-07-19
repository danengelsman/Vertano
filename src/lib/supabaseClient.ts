import { createClient } from '@supabase/supabase-js';

// Vite only exposes env vars prefixed with VITE_ to the browser bundle.
// These are the project's public URL and publishable (anon) key — safe to
// ship to clients because every table is protected by row-level security.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env — see .env.example.',
  );
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '');
