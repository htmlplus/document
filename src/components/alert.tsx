import { ReactNode } from 'react';

import { classes } from '@/utils';

export interface AlertProps {
  children?: ReactNode;
  type?: 'error' | 'info' | 'success' | 'warning';
}

export function Alert({ children, type }: AlertProps) {
  const className = classes('alert', { type });
  return <div className={className}>{children}</div>;
}
