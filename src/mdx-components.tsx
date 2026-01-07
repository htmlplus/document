import type { ComponentProps, JSX, ReactNode } from 'react';

import type { MDXComponents } from 'mdx/types';

import { Alert, Badge, Button } from '@/components';
import { Browsers, Example, TocItem } from '@/containers';

function Heading(level: 1 | 2 | 3 | 4 | 5 | 6) {
	const Tag = `h${level}` as keyof JSX.IntrinsicElements;

	return ({ children }: { children: ReactNode }) => {
		if (level === 1) {
			return <Tag>{children}</Tag>;
		}

		return (
			<Tag className="group">
				<TocItem level={level}>{children}</TocItem>
			</Tag>
		);
	};
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		Alert,
		Browsers,
		Example,
		a: ({ children, href }: ComponentProps<'a'>) => (
			<Button to={href ?? '#'} link="underline">
				{children}
			</Button>
		),
		code: ({ children, className }: ComponentProps<'code'>) => {
			const language = className?.split('-').pop();

			if (!language) {
				return <Badge>{children}</Badge>;
			}

			return <plus-prism language={language}>{children}</plus-prism>;
		},
		h1: Heading(1),
		h2: Heading(2),
		h3: Heading(3),
		h4: Heading(4),
		h5: Heading(5),
		h6: Heading(6),
		pre: ({ children }: ComponentProps<'pre'>) => {
			return children;
		},
		...components
	};
}
