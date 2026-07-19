import { useEffect, useState, useCallback } from 'react';

/**
 * The shape of a logged-in user as returned by the Express backend's
 * GET /api/me endpoint. Mirrors the columns we expose from the users table.
 */
export interface AppUser {
  id: string;
  email: string | null;
  name: string | null;
  picture: string | null;
}

/**
 * useAuth — a tiny React hook that watches whether someone is signed in.
 *
 * It talks to our own Express backend (not Firebase). On mount it asks
 * GET /api/me, which reads the signed session cookie and returns the user
 * (or 401 if nobody is signed in). We start in a "loading" state so we never
 * flash the login screen at someone who actually has a valid session.
 *
 * Returns:
 *   - user:    the signed-in person, or null if nobody is signed in
 *   - loading: true while we're still checking the session
 *   - logout:  clears the session server-side and locally
 *   - refresh: re-checks /api/me (e.g. right after the OAuth popup closes)
 */
export function useAuth() {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch('/api/me', { credentials: 'include' });
      if (res.ok) {
        setUser((await res.json()) as AppUser);
      } else {
        setUser(null);
      }
    } catch {
      // Network error — treat as logged out rather than hanging on the spinner.
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await fetch('/api/logout', { method: 'POST', credentials: 'include' });
    } finally {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { user, loading, logout, refresh };
}
