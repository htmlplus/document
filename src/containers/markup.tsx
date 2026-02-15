import { type MDXComponents, MDXRemote } from 'next-mdx-remote-client/rsc';

import { useMDXComponents } from '@/mdx-components';

export type MarkupProps = {
	components?: MDXComponents;
	scope?: Record<string, unknown>;
	value: string;
};

export function Markup({ components, scope, value }: MarkupProps) {
	return <MDXRemote source={value} components={useMDXComponents(components)} options={{ scope }} />;
}
