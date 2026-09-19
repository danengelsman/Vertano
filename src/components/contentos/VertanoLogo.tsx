import React from 'react';
import { cn } from '@/lib/utils';

interface VertanoLogoProps {
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
  showWordmark?: boolean;
  variant?: 'default' | 'light' | 'mono';
}

const VertanoLogo: React.FC<VertanoLogoProps> = ({
  className,
  iconClassName,
  labelClassName,
  showWordmark = true,
  variant = 'default',
}) => {
  const iconStyles = {
    default: 'bg-primary',
    light: 'bg-primary/10 text-primary',
    mono: 'bg-foreground text-background',
  };

  const textStyles = {
    default: 'text-foreground',
    light: 'text-foreground',
    mono: 'text-foreground',
  };

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div
        className={cn(
          'relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-apple',
          iconStyles[variant],
          iconClassName,
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          {/* V shape - turning point arrow */}
          <path d="M6 6l6 6 6-6" />
          <path d="M12 12V4" />
        </svg>
      </div>

      {showWordmark && (
        <div className={cn('flex items-center', labelClassName)}>
          <span className={cn('font-display text-xl font-semibold tracking-tight', textStyles[variant])}>
            Vertano
          </span>
        </div>
      )}
    </div>
  );
};

export default VertanoLogo;