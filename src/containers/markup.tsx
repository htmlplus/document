'use client';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useEffect, useState } from 'react';

import { useMDXComponents } from '@/mdx-components';

export interface MarkupProps {
  scope?: any;
  value: string;  
}

export function Markup({ scope, value }: MarkupProps) {
  const components = useMDXComponents({});

  const [source, setSource] = useState<MDXRemoteSerializeResult>();

  useEffect(() => {
    serialize(value).then(setSource);
  }, [value]);

  if (!source) return null;

  return <MDXRemote {...source} components={components} scope={scope} />
}