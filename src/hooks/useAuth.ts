import { useEffect, useState } from 'react';
import { auth, onAuthStateChanged, type FirebaseUser } from '@/firebase';

/**
 * useAuth — a tiny React hook that watches whether someone is signed in.
 *
 * It returns two things:
 *   - user: the signed-in person (or null if nobody is signed in)
 *   - loading: true while Firebase is still figuring out who (if anyone) is signed in
 *
 * Firebase takes a moment on page load to restore an existing session, so we
 * start in a "loading" state and flip it off the first time onAuthStateChanged
 * fires. That way we never flash the login screen at someone who's already
 * signed in.
 */
export function useAuth() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscribe function. We call it when
    // the component using this hook unmounts so we don't leak listeners.
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return { user, loading };
}
