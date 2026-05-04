import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { loginWithGoogle } from '@/firebase';
import { Loader2 } from 'lucide-react';
import EarnestMark from './EarnestMark';

/**
 * LoginScreen — the page people see when nobody is signed in.
 *
 * It's a full-screen welcome page with one button: "Sign in with Google".
 * Clicking it pops open Google's sign-in window. When sign-in succeeds,
 * Firebase updates its internal state, useAuth picks that up, and the app
 * swaps this screen out for the real dashboard.
 */
const LoginScreen: React.FC = () => {
  const [signingIn, setSigningIn] = useState(false);

  const handleGoogle = async () => {
    setSigningIn(true);
    try {
      await loginWithGoogle();
      // On success, Firebase will flip auth state and the app will re-render.
      // No need to navigate manually.
    } catch (err: any) {
      // If the user closes the Google popup, Firebase throws
      // auth/popup-closed-by-user. We don't want to show a scary error for that.
      const code = err?.code as string | undefined;
      if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') {
        // User bailed out — that's fine, just reset the button.
      } else {
        console.error('Google sign-in failed:', err);
        toast({
          title: 'Sign-in failed',
          description: err?.message || 'Something went wrong. Please try again.',
          variant: 'destructive',
        });
      }
    } finally {
      setSigningIn(false);
    }
  };

  return (
    <div className="earnest-auth-shell min-h-screen flex items-center justify-center px-4 py-10">
      <div className="earnest-auth-panel w-full max-w-md rounded-[2rem] border border-white/60 px-7 py-8 shadow-[0_32px_80px_rgba(23,20,17,0.14)] backdrop-blur-sm">
        <div className="mb-8 flex flex-col items-center text-center">
          <EarnestMark className="mb-5" />
          <h1 className="text-3xl font-display font-semibold tracking-[-0.05em] text-foreground">
            From first post to first paycheck.
          </h1>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Sign in to start with the platform that does not get paid until you do.
          </p>
        </div>

        <div className="space-y-4 rounded-[1.5rem] border border-border/70 bg-white/70 p-6 shadow-[0_12px_40px_rgba(23,20,17,0.06)]">
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
