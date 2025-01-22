import type { MDXComponents } from 'mdx/types';

import { Alert, Button, Code } from '@/components';
import { Api, Browsers, Example, Examples, GlobalConfig, LastModified, TocItem, Usage } from '@/containers';

function Heading(level: number) {
  return function (props: any) {
    const Tag = `h${level}` as any;

    if (level == 1) return <Tag>{props.children}</Tag>;

    return (
      <Tag>
        <TocItem level={level}>{props.children}</TocItem>
      </Tag>
    );
  };
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Alert,
    Api,
    Browsers,
    Example,
    Examples,
    GlobalConfig,
    LastModified,
    Playground() {
      return null;
    },
    Usage,
    a({ children, href }: any) {
      return (
        <Button to={href} link="underline">
          {children}
        </Button>
      );
    },
    code({ children, className }: any) {
      const language = className?.split('-').pop();

      if (!language) return <code>{children}</code>;

      return <Code language={language}>{children}</Code>;
    },
    h1: Heading(1),
    h2: Heading(2),
    h3: Heading(3),
    h4: Heading(4),
    h5: Heading(5),
    h6: Heading(6),
    pre({ children }: any) {
      return children;
    },
    ...components,
  };
}
