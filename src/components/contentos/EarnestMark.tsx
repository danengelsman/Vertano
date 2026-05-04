import React from 'react';
import { cn } from '@/lib/utils';

interface EarnestMarkProps {
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
  showWordmark?: boolean;
  variant?: 'waypoint' | 'keystone' | 'rally';
}

const EarnestMark: React.FC<EarnestMarkProps> = ({
  className,
  iconClassName,
  labelClassName,
  showWordmark = true,
  variant = 'waypoint',
}) => {
  const mark = (() => {
    switch (variant) {
      case 'keystone':
        return (
          <svg viewBox="0 0 40 40" className="relative h-6 w-6 text-[#171411]" fill="none" aria-hidden="true">
            <path d="M20 8.5L28 14V28L20 32L12 28V14L20 8.5Z" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
            <path d="M15.5 23L19 19.5L22 22L26 16.5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'rally':
        return (
          <svg viewBox="0 0 40 40" className="relative h-6 w-6 text-[#171411]" fill="none" aria-hidden="true">
            <path d="M12 30V11.5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M28 30V19" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M12 30H28" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M12 17.5C15.2 14.2 17.8 14.2 20.5 17C23.1 19.7 25 19.5 28 16.5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24.75 13.5L28 16.5L24.75 19.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'waypoint':
      default:
        return (
          <svg viewBox="0 0 40 40" className="relative h-6 w-6 text-[#171411]" fill="none" aria-hidden="true">
            <path d="M13 8.5V31.5" stroke="currentColor" strokeWidth="2.9" strokeLinecap="round" />
            <path d="M27 8.5V31.5" stroke="currentColor" strokeWidth="2.9" strokeLinecap="round" />
            <path d="M13 31.5H27" stroke="currentColor" strokeWidth="2.9" strokeLinecap="round" />
            <path d="M13 13.5L20 20L27 13.5" stroke="currentColor" strokeWidth="2.9" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 20V27.5" stroke="currentColor" strokeWidth="2.9" strokeLinecap="round" />
          </svg>
        );
    }
  })();

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div
        className={cn(
          'relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-[1rem] border border-[rgba(198,146,43,0.15)] bg-[linear-gradient(160deg,rgba(255,255,255,0.9),rgba(245,240,232,0.78))] shadow-[0_18px_48px_rgba(23,20,17,0.12)]',
          iconClassName,
        )}
      >
        <div className="pointer-events-none absolute inset-[1px] rounded-[0.94rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.18))]" />
        <div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-[rgba(255,255,255,0.9)]" />
        {mark}
      </div>

      {showWordmark && (
        <div className={cn('flex flex-col', labelClassName)}>
          <span className="font-display text-[1.1rem] font-semibold tracking-[-0.06em] text-foreground">
            Earnest
          </span>
        </div>
      )}
    </div>
  );
};

export default EarnestMark;
