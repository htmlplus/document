import { ReactNode } from 'react';

export interface BadgeProps {
  children?: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={`inline-flex items-center bg-primary-lighten-5 text-primary py-0 px-[4px] ${className}`}>
      {children}
    </span>
  );
}
