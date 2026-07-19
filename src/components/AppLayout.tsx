import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/hooks/useAuth';
import { Loader2 } from 'lucide-react';
import Navbar from './contentos/Navbar';
import Dashboard from './contentos/Dashboard';
import ContentEditor from './contentos/ContentEditor';
import Roadmap from './contentos/Roadmap';
import Community from './contentos/Community';
import Reports from './contentos/Reports';
import OnboardingModal from './contentos/OnboardingModal';
import AuthModal from './contentos/AuthModal';
import LandingHero from './contentos/LandingHero';
import Footer from './contentos/Footer';
import LoginScreen from './contentos/LoginScreen';

const AppLayout: React.FC = () => {
  const { activeView, userProfile } = useAppContext();
  const { user, loading: authLoading } = useAuth();
  const isMobile = useIsMobile();

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'editor':
        return <ContentEditor />;
      case 'roadmap':
        return <Roadmap />;
      case 'community':
        return <Community />;
      case 'reports':
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  // Step 1: while Firebase is restoring the previous session, show a blank
  // loader so we don't flash the login screen at someone who's already signed
  // in.
  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  // Step 2: nobody is signed in — show the login screen.
  if (!user) {
    return <LoginScreen />;
  }

  // Step 3: signed in — show the real app.
  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">

      {/* Modals */}
      <OnboardingModal />
      <AuthModal />

      {/* Navbar - always visible */}
      <Navbar />

      {/* Main Content */}
      {!userProfile?.onboardingComplete && activeView === 'dashboard' ? (
        <>
          <LandingHero />
          <Footer />
        </>
      ) : (
        <main className="relative flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-8">
          {renderView()}
        </main>
      )}

      {/* Footer for authenticated views */}
      {userProfile?.onboardingComplete && <Footer />}
    </div>
  );
};

export default AppLayout;
