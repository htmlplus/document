import { type MDXComponents, MDXRemote } from 'next-mdx-remote-client/rsc';

import { useMDXComponents } from '@/mdx-components';

export type MarkdownProps = {
	components?: MDXComponents;
	scope?: Record<string, unknown>;
	value: string;
};

export function Markdown({ components, scope, value }: MarkdownProps) {
	return <MDXRemote source={value} components={useMDXComponents(components)} options={{ scope }} />;
}
