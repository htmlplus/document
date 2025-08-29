import type { MouseEventHandler, ReactNode } from 'react';

import NextLink, { type LinkProps as NextLinkProps } from 'next/link';

import type { Colors } from '@/types';
import { classes } from '@/utils';

export interface ButtonProps {
	block?: boolean;
	children: ReactNode;
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
	onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

interface CustomLinkProps extends Omit<NextLinkProps, 'href'> {
	to: string;
	children: ReactNode;
	target?: string;
	rel?: string;
	className?: string;
}

function Link({ children, to, target, rel, ...rest }: CustomLinkProps) {
	const linkRel = target === '_blank' && !rel ? 'noopener noreferrer' : rel;
	return (
		<NextLink href={to} target={target} rel={linkRel} prefetch={false} {...rest}>
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
	...rest
}: ButtonProps) {
	const className = classes('button', {
		block,
		color,
		disabled,
		icon,
		link,
		loading,
		outlined,
		size,
		text
	});
	const Tag: React.ElementType = 'to' in rest ? Link : 'button';
	return (
		<Tag
			className={className}
			disabled={disabled}
			{...('to' in rest ? { to: rest.to, target: rest.target } : { onClick: rest.onClick })}
			{...rest}
		>
			{!loading && children}
			{loading && (
				<>
					<span>{children}</span>
					<plus-spinner className="loading" type="dual-ring" size="sm" />
				</>
			)}
		</Tag>
	);
}
