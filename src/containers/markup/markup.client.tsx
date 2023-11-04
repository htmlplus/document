'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { tokens } from './markup.tokens';

export function MarkupClient(props: MDXRemoteSerializeResult) {
  return <MDXRemote {...props} components={tokens} />;
}
