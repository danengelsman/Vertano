import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface DoneByAILogoProps {
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
  showWordmark?: boolean;
}

const DoneByAILogo: React.FC<DoneByAILogoProps> = ({
  className,
  iconClassName,
  labelClassName,
  showWordmark = true,
}) => {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div
        className={cn(
          'relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-[0.65rem] bg-primary shadow-[0_4px_12px_rgba(0,0,0,0.05)]',
          iconClassName,
        )}
      >
        <Check className="h-6 w-6 text-white stroke-[3.5]" />
      </div>

      {showWordmark && (
        <div className={cn('flex items-center', labelClassName)}>
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Done by A
            <span className="animate-blink font-light text-primary -ml-[2px]">|</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default DoneByAILogo;
