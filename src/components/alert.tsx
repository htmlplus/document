'use client';

import { classes } from '@/utils';

export interface IAlert {
  children?: React.ReactNode;
  type?: 'error' | 'info' | 'success' | 'warning';
}

export function Alert({ children, type }: IAlert) {
  const className = classes('alert', { type });
  return <div className={className}>{children}</div>;
}
