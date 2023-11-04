'use client';

import { useEffect, useMemo, useRef } from 'react';

import 'prism-themes/themes/prism-nord.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';

import { Button } from '@/components';

import { ICode } from './code.types';

export function Code({ children, copy = true, language }: ICode) {
  const element = useRef<HTMLPreElement>(null);

  const content = useMemo(() => children?.toString(), [children]);

  const onClick = () => {
    if (!content) return;
    navigator.clipboard.writeText(content);
  };

  useEffect(() => Prism.highlightAllUnder(element.current!), [content, language]);

  return (
    <pre ref={element} className={`language-${language}`} tabIndex={0}>
      <div className="toolbar">
        {copy && (
          <Button icon onClick={onClick}>
            <plus-icon name="clipboard"></plus-icon>
          </Button>
        )}
      </div>
      <code className={`language-${language}`}>{content}</code>
    </pre>
  );
}
