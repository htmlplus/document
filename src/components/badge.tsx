import type { ReactNode } from 'react';

export type BadgeProps = {
	children?: ReactNode;
	className?: string;
};

export function Badge({ children, className }: BadgeProps) {
	return (
		<span
			className={`inline-flex items-center bg-primary-2 text-primary-9 py-0 px-[4px] ${className}`}
		>
			{children}
		</span>
	);
}
