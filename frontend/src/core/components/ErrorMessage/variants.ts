import { clsx } from 'clsx';

export function getErrorMessageClassName(): string {
  return clsx(
    'flex items-center justify-center min-h-[400px] p-8',
    'bg-red-50 rounded-lg border border-red-200'
  );
}
