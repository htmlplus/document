'use client';

import { MDXRemote } from 'next-mdx-remote';

import { tokens } from './markup.tokens';

// TODO: props type
export function MarkupClient(props: any) {
  return <MDXRemote {...props} components={tokens}></MDXRemote>;
}
