'use client';

import { classes } from '@/utils';

import { IAlert } from './alert.types';

export function Alert({ children, type }: IAlert) {
  const className = classes('alert', { type });
  return <div className={className}>{children}</div>;
}
