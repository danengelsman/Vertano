import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import {
  PenTool, Flame, Shield, Crown, Star, Gem, Globe, DollarSign, Layers, Users, Lock
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  pen: <PenTool className="w-5 h-5" />,
  flame: <Flame className="w-5 h-5" />,
  shield: <Shield className="w-5 h-5" />,
  crown: <Crown className="w-5 h-5" />,
  star: <Star className="w-5 h-5" />,
  gem: <Gem className="w-5 h-5" />,
  globe: <Globe className="w-5 h-5" />,
  dollar: <DollarSign className="w-5 h-5" />,
  layers: <Layers className="w-5 h-5" />,
  users: <Users className="w-5 h-5" />,
};

const BadgesGrid: React.FC = () => {
  const { badges } = useAppContext();
  const earnedCount = badges.filter(b => b.earned).length;

  return (
    <section className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-white/80 shadow-[0_12px_40px_rgba(23,20,17,0.05)]">
      <div className="border-b border-border/70 p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground">Achievements</h3>
          <span className="text-xs font-medium text-muted-foreground">{earnedCount}/{badges.length} earned</span>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-3 p-5">
        {badges.map(badge => (
          <div
            key={badge.id}
            className="group relative flex flex-col items-center"
            title={`${badge.name}: ${badge.description}`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
              badge.earned
                ? 'bg-accent text-accent-foreground shadow-[0_10px_22px_rgba(198,146,43,0.22)] scale-100'
                : 'bg-muted text-muted-foreground'
            }`}>
              {badge.earned ? iconMap[badge.icon] : <Lock className="w-4 h-4" />}
            </div>
            <p className={`text-[10px] mt-1.5 text-center leading-tight font-medium ${
              badge.earned ? 'text-foreground' : 'text-muted-foreground'
            }`}>
              {badge.name}
            </p>
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              <div className="whitespace-nowrap rounded-lg bg-foreground px-3 py-1.5 text-xs text-background shadow-lg">
                {badge.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BadgesGrid;
