import type { MouseEventHandler, ReactNode } from 'react';

import NextLink, { type LinkProps as NextLinkProps } from 'next/link';

import classNames from 'classnames';

export type ButtonProps = {
	block?: boolean;
	children: ReactNode;
	className?: string;
	disabled?: boolean;
	href?: string;
	icon?: boolean;
	target?: string;
	title?: string;
	variant?: 'ghost' | 'invert' | 'link' | 'main' | 'outline' | 'primary' | 'raw' | 'secondary';
	onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};

type CustomLinkProps = NextLinkProps & {
	children: ReactNode;
	className?: string;
	rel?: string;
	target?: string;
};

function Link({ children, target, rel, ...rest }: CustomLinkProps) {
	const linkRel = target === '_blank' && !rel ? 'noopener noreferrer' : rel;
	return (
		<NextLink target={target} rel={linkRel} prefetch={false} {...rest}>
			{children}
		</NextLink>
	);
}

export function Button({
	block,
	children,
	className,
	disabled,
	icon,
	variant = 'main',
	...rest
}: ButtonProps) {
	const classes = classNames(
		'inline-flex items-center justify-center gap-2',
		'text-[16px] font-[500] leading-[22px] tracking-[-0.013em]',
		'outline-none focus:outline-none select-none whitespace-nowrap',
		{
			'w-full !flex': block,
			'!px-[9px]': icon,
			'opacity-50 pointer-events-none': disabled,
			'h-9 px-[14px] border border-transparent no-underline shadow-none   bg-transparent   text-main-11       rounded-lg':
				variant === 'ghost',
			'h-9 px-[14px] border border-transparent no-underline shadow-custom bg-white         text-alpha-black-7 rounded-lg hover:text-alpha-black-12':
				variant === 'invert',
			'              border border-transparent              shadow-none   bg-transparent   text-primary-9':
				variant === 'link',
			'h-9 px-[14px] border border-transparent no-underline shadow-custom bg-main-12       text-white         rounded-lg hover:opacity-90':
				variant === 'main',
			'h-9 px-[14px] border border-main-8      no-underline shadow-none   bg-transparent   text-main-10       rounded-lg border-solid':
				variant === 'outline',
			'h-9 px-[14px] border border-transparent no-underline shadow-none   bg-transparent   text-primary-9     rounded-lg':
				variant === 'primary',
			'              border border-transparent no-underline shadow-none   bg-transparent':
				variant === 'raw',
			'h-9 px-[14px] border border-transparent no-underline shadow-none   bg-alpha-black-2 text-alpha-black-7 rounded-lg hover:bg-alpha-black-3 hover:text-alpha-black-12':
				variant === 'secondary'
		},
		className
	);

	const Tag: React.ElementType = 'href' in rest ? Link : 'button';

	return (
		<Tag
			className={classes}
			disabled={disabled}
			{...('href' in rest ? { href: rest.href, target: rest.target } : { onClick: rest.onClick })}
			{...rest}
		>
			{children}
		</Tag>
	);
}
