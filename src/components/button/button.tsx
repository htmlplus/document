import NextLink from 'next/link';

import { classes } from '@/utils';

import { IButton } from './button.types';

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
}: IButton) {
  const className = classes('button', { block, color, disabled, icon, link, loading, outlined, size, text });
  const Tag = args.to ? Link : ('button' as any);
  return (
    <Tag className={className} disabled={disabled} {...args}>
      {!loading && children}
      {loading && (
        <>
          <span>{children}</span>
          <plus-spinner className="loading" type="dual-ring" size="sm"></plus-spinner>
        </>
      )}
    </Tag>
  );
}
