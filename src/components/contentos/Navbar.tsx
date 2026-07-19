import React from 'react';
import { useAppContext, ActiveView } from '@/contexts/AppContext';
import { useAuth } from '@/hooks/useAuth';
import { logout } from '@/firebase';
import { toast } from '@/components/ui/use-toast';
import {
  LayoutDashboard, PenTool, Map, Users, BarChart3,
  Menu, X, Zap, Bell, LogOut, User as UserIcon
} from 'lucide-react';
import DoneByAILogo from './DoneByAILogo';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navItems: { view: ActiveView; label: string; icon: React.ReactNode }[] = [
  { view: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
  { view: 'editor', label: 'Create', icon: <PenTool className="w-4 h-4" /> },
  { view: 'roadmap', label: 'Roadmap', icon: <Map className="w-4 h-4" /> },
  { view: 'community', label: 'Community', icon: <Users className="w-4 h-4" /> },
  { view: 'reports', label: 'Reports', icon: <BarChart3 className="w-4 h-4" /> },
];

const Navbar: React.FC = () => {
  const { activeView, setActiveView, sidebarOpen, toggleSidebar, streak, currentLevel, xp, userProfile } = useAppContext();
  const { user } = useAuth();

  const handleSignOut = async () => {
    try {
      await logout();
      toast({ title: 'Signed out', description: 'See you soon!' });
    } catch (err: any) {
      console.error('Sign-out failed:', err);
      toast({
        title: 'Sign-out failed',
        description: err?.message || 'Please try again.',
        variant: 'destructive',
      });
    }
  };

  // Build a simple set of initials from the display name / email for the
  // avatar fallback (used when we don't have a picture).
  const initials = (() => {
    const source = user?.name || user?.email || '';
    if (!source) return 'U';
    const parts = source.split(/\s+|@/).filter(Boolean);
    const first = parts[0]?.[0] || '';
    const second = parts[1]?.[0] || '';
    return (first + second).toUpperCase() || 'U';
  })();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Left: Logo + Mobile Menu */}
        <div className="flex items-center gap-3">
          <button onClick={toggleSidebar} className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors">
            {sidebarOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
          </button>
          <button className="cursor-pointer" onClick={() => setActiveView('dashboard')}>
            <DoneByAILogo
              iconClassName="h-9 w-9"
              labelClassName="hidden sm:flex"
            />
          </button>
        </div>

        {/* Center: Nav Items (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map(item => (
            <button
              key={item.view}
              onClick={() => setActiveView(item.view)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeView === item.view
                  ? 'bg-primary/10 text-primary shadow-sm'
                  : 'text-foreground hover:text-primary hover:bg-muted'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right: Stats + Auth */}
        <div className="flex items-center gap-3">
          {userProfile.onboardingComplete && (
            <>
              {/* Streak Badge */}
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20">
                <div className="w-4 h-4 text-secondary">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 23c-3.866 0-7-3.134-7-7 0-3.866 3.134-7 7-7s7 3.134 7 7c0 3.866-3.134 7-7 7zm0-2c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm-1-8V7.5c0-.276.224-.5.5-.5h1c.276 0 .5.224.5.5V13h-2z"/></svg>
                </div>
                <span className="text-xs font-bold text-secondary-foreground">{streak?.current || 0}</span>
              </div>

              {/* Level Badge */}
              <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <Zap className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold text-primary-foreground">Lv.{currentLevel}</span>
                <span className="text-xs text-primary-foreground/70">{xp} XP</span>
              </div>

              {/* Notifications */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="w-5 h-5 text-foreground/70" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-72">
                  <div className="p-3 border-b border-border">
                    <p className="text-sm font-semibold text-foreground">Notifications</p>
                  </div>
                  <DropdownMenuItem className="p-3 cursor-pointer hover:bg-muted/50">
                    <div>
                      <p className="text-sm font-medium">Weekly Brief Ready</p>
                      <p className="text-xs text-muted-foreground">5 new content ideas for your niche</p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-3 cursor-pointer hover:bg-muted/50">
                    <div>
                      <p className="text-sm font-medium">Streak Reminder</p>
                      <p className="text-xs text-muted-foreground">Don't forget to publish today!</p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-3 cursor-pointer hover:bg-muted/50">
                    <div>
                      <p className="text-sm font-medium">New Badge Available</p>
                      <p className="text-xs text-muted-foreground">You're close to earning "Week Warrior"</p>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground font-semibold text-sm shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                aria-label="Open user menu"
              >
                {user?.picture ? (
                  <img
                    src={user.picture}
                    alt={user.name || user.email || 'User'}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  initials
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground truncate">
                    {user?.name || 'Signed in'}
                  </span>
                  {user?.email && (
                    <span className="text-xs text-muted-foreground truncate">{user.email}</span>
                  )}
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2 cursor-pointer" disabled>
                <UserIcon className="w-4 h-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleSignOut}
                className="gap-2 cursor-pointer text-destructive focus:text-destructive"
              >
                <LogOut className="w-4 h-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Nav */}
      {sidebarOpen && (
        <div className="lg:hidden border-t border-border bg-background p-2 transition-all duration-300 ease-in-out">
          {navItems.map(item => (
            <button
              key={item.view}
              onClick={() => { setActiveView(item.view); toggleSidebar(); }}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeView === item.view
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
