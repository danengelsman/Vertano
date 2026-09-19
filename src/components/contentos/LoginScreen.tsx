import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { Loader2 } from 'lucide-react';
import VertanoLogo from './VertanoLogo';

interface LoginScreenProps {
  onClose: () => void;
}

/**
 * LoginScreen — shown as a modal overlay on the landing page when nobody is signed in.
 *
 * It's a centered card with one button: "Sign in with Google".
 * Clicking it asks our Express backend for a Google OAuth URL, opens Google's
 * consent screen in a popup, and waits for the backend's callback page to
 * postMessage OAUTH_AUTH_SUCCESS. At that point the session cookie is set, so
 * we re-check /api/me via useAuth().refresh() and the app swaps this screen
 * out for the real dashboard.
 */
const LoginScreen: React.FC<LoginScreenProps> = ({ onClose }) => {
  const [signingIn, setSigningIn] = useState(false);
  const { refresh } = useAuth();

  // Listen for the success message posted by /api/auth/google/callback.
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.data?.type === 'OAUTH_AUTH_SUCCESS') {
        setSigningIn(false);
        // Session cookie is now set server-side; re-check who we are.
        refresh();
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [refresh]);

  const handleGoogle = async () => {
    setSigningIn(true);
    try {
      const res = await fetch('/api/auth/google/url', { credentials: 'include' });
      if (!res.ok) throw new Error('Could not start Google sign-in');
      const { url } = await res.json();

      const popup = window.open(url, 'google-oauth', 'width=500,height=650');
      if (!popup) {
        // Popup blocked — fall back to a full-page redirect.
        window.location.href = url;
        return;
      }

      // If the user closes the popup without finishing, reset the button.
      const poll = setInterval(() => {
        if (popup.closed) {
          clearInterval(poll);
          setSigningIn(false);
          // They may have completed it; re-check just in case.
          refresh();
        }
      }, 700);
    } catch (err: any) {
      console.error('Google sign-in failed:', err);
      toast({
        title: 'Sign-in failed',
        description: err?.message || 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
      setSigningIn(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10 bg-background/95 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-title"
    >
      <div
        className="bg-card w-full max-w-md rounded-2xl border border-border px-7 py-8 shadow-[0_4px_24px_rgba(0,0,0,0.1)] animate-slide-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-accent text-muted-foreground transition-colors"
            aria-label="Close login dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-8 flex flex-col items-center text-center">
          <VertanoLogo className="mb-5" />
          <h1 id="login-title" className="text-3xl font-display font-semibold tracking-tight text-foreground">
            Your turning point from content to income.
          </h1>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Early access for YouTube educators. Free during beta. No credit card required.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={handleGoogle}
            disabled={signingIn}
            size="lg"
            className="w-full gap-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/92"
          >
            {signingIn ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Signing in...
              </>
            ) : (
              <>
                <GoogleIcon />
                Continue with Google
              </>
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground pt-2">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Google sign-in is live now. More sign-in options can follow later.
        </p>

        <Button
          variant="ghost"
          onClick={onClose}
          className="mt-4 w-full text-sm text-muted-foreground hover:text-foreground"
        >
          Continue as guest →
        </Button>
      </div>
    </div>
  );
};

/**
 * Google's multi-colored "G" logo, inlined as SVG so we don't depend on an
 * external asset.
 */
const GoogleIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
    <path
      fill="#FFC107"
      d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
    />
    <path
      fill="#FF3D00"
      d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.2 0 9.9-2 13.5-5.2l-6.2-5.3c-2 1.5-4.6 2.5-7.3 2.5-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.7l6.2 5.3C41 35 44 29.9 44 24c0-1.3-.1-2.4-.4-3.5z"
    />
  </svg>
);

export default LoginScreen;