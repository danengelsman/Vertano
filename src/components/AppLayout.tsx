import React, { useState } from 'react';
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
  const [showLogin, setShowLogin] = useState(true);

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

  // While auth is restoring, show a blank loader
  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  // Signed in — show the app
  if (user) {
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
  }

  // NOT signed in — show PUBLIC marketing landing page with login modal
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <LandingHero />
      <Footer />
      {showLogin && <LoginScreen onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default AppLayout;