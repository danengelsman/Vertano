import { describe, it, expect } from 'vitest';
import { cn } from '../lib/utils';

describe('cn utility function', () => {
  it('should merge class names correctly', () => {
    expect(cn('btn', 'primary')).toBe('btn primary');
    expect(cn('btn', 'btn-primary')).toBe('btn btn-primary');
    expect(cn(false && 'hidden', 'visible')).toBe('visible');
    expect(cn(null && 'hidden', 'visible')).toBe('visible');
    expect(cn(undefined && 'hidden', 'visible')).toBe('visible');
  });

  it('should handle empty inputs', () => {
    expect(cn()).toBe('');
    expect(cn(null, undefined, false)).toBe('');
  });
});