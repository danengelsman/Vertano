import { useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabaseClient';

/**
 * useAuth — a tiny React hook that watches whether someone is signed in.
 *
 * It returns two things:
 *   - user: the signed-in person (or null if nobody is signed in)
 *   - loading: true while Supabase is still restoring an existing session
 *
 * Supabase takes a moment on page load to restore a stored session, so we
 * start in a "loading" state and flip it off once the session is known.
 * That way we never flash the login screen at someone who's already
 * signed in.
 */
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { user, loading };
}
