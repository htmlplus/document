import type { MouseEventHandler, ReactNode } from 'react';

import NextLink, { type LinkProps as NextLinkProps } from 'next/link';

import { classes } from '@/utils';

export type ButtonProps = {
	block?: boolean;
	children: ReactNode;
	color?: string;
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
};

type CustomLinkProps = Omit<NextLinkProps, 'href'> & {
	to: string;
	children: ReactNode;
	target?: string;
	rel?: string;
	className?: string;
};

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
