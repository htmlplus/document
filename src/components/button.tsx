import NextLink from 'next/link';

import { Colors } from '@/types';
import { classes } from '@/utils';

export interface ButtonProps {
  block?: boolean;
  children: React.ReactNode;
  color?: Colors;
  disabled?: boolean;
  icon?: boolean;
  link?: boolean | 'underline';
  loading?: boolean;
  outlined?: boolean;
  size?: 'sm' | 'md' | 'lg';
  target?: string;
  text?: boolean;
  title?: string;
  to?: string;
  onClick?: any;
}

function Link({ children, to, ...attributes }: any) {
  if (attributes.target === '_blank' && !attributes.rel) {
    attributes.rel = 'noopener noreferrer';
  }
  return (
    <NextLink href={to} {...attributes} prefetch={false}>
      {children}
    </NextLink>
  );
}

export function Button({
  block,
  children,
  color,
  disabled,
  icon,
  link,
  loading,
  outlined,
  size = 'md',
  text,
  ...args
}: ButtonProps) {
  const className = classes('button', { block, color, disabled, icon, link, loading, outlined, size, text });
  const Tag = args.to ? Link : ('button' as any);
  return (
    <Tag className={className} disabled={disabled} {...args}>
      {!loading && children}
      {loading && (
        <>
          <span>{children}</span>
          <plus-spinner class="loading" type="dual-ring" size="sm"></plus-spinner>
        </>
      )}
    </Tag>
  );
}
