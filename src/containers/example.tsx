'use client';

import { Suspense, useLayoutEffect, useRef, useState } from 'react';

import { Alert, Button, Code } from '@/components';
import { ROUTES } from '@/constants';
import { useFrameworks } from '@/containers';
import { getPath } from '@/utils';

export interface IExample {
  Preview?: React.FC;
  component?: string;
  example?: string;
  isolate?: boolean;
  links?: Array<{
    icon?: string;
    key?: string;
    title?: string;
    url?: string;
  }>;
  rtl?: boolean;
  tabs?: Array<{
    content?: string;
    disabled?: boolean;
    key?: string;
    language?: string;
    title?: string;
  }>;
  title?: string;
}

export function Example({ Preview, component, example, isolate, links, rtl, tabs, title }: IExample) {
  const frameworks = useFrameworks();

  const $preview = useRef<HTMLElement>(null);

  const [direction, setDirection] = useState('ltr');

  const [loaded, setLoaded] = useState(false);

  const [visible, setVisible] = useState(true);

  if (!component || !example) return <Alert type="error">NOT FOUND</Alert>;

  const onDirection = (event?: MouseEvent) => {
    event?.preventDefault();
    setDirection(direction == 'ltr' ? 'rtl' : 'ltr');
  };

  const onIframeLoad = (event: any) => {
    const iframe = event.target;

    const body = iframe.contentWindow.document.body;

    const onChange = () => {
      if (!body.scrollHeight) {
        setTimeout(onChange, 1000);
        return;
      }
      iframe.style.height = body.scrollHeight + 'px';
      setLoaded(true);
    };

    new MutationObserver(onChange).observe(body, { childList: true });

    iframe.contentWindow.addEventListener('resize', onChange);

    onChange();
  };

  const onReload = (event?: MouseEvent) => {
    event?.preventDefault();
    setDirection('ltr');
    setVisible(false);
    requestAnimationFrame(() => setVisible(true));
    setLoaded(false);
  };

  useLayoutEffect(onReload, [frameworks.framework]);

  return (
    <plus-tabs class="example" connector={`example:${title}`} value="preview">
      {/* TODO: remove connector and example */}
      <plus-grid align-items="center" gutter-x="sm">
        <plus-grid-item xs="grow">
          <plus-tabs-bar>
            <plus-tabs-tab value="preview">Preview</plus-tabs-tab>
            {tabs?.map((tab) => (
              <plus-tabs-tab key={tab.key} disabled={tab.disabled} value={tab.key}>
                {tab.title}
              </plus-tabs-tab>
            ))}
          </plus-tabs-bar>
        </plus-grid-item>
        {rtl && (
          <plus-grid-item xs="auto">
            <Button icon text to="#" onClick={onDirection}>
              <plus-icon name="sign-turn-left"></plus-icon>
            </Button>
            <plus-tooltip>Change Direction</plus-tooltip>
          </plus-grid-item>
        )}
        <plus-grid-item xs="auto">
          <Button icon text to="#" onClick={onReload}>
            <plus-icon name="arrow-clockwise"></plus-icon>
          </Button>
          <plus-tooltip>Reset</plus-tooltip>
        </plus-grid-item>
        {links?.map((link) => (
          <plus-grid-item key={link.key} xs="auto">
            <Button icon text to={link.url} target="_blank">
              <plus-icon name={link.icon}></plus-icon>
            </Button>
            <plus-tooltip>{link.title}</plus-tooltip>
          </plus-grid-item>
        ))}
      </plus-grid>
      <plus-tabs-panels>
        <plus-tabs-panel value="preview" dir={direction} ref={$preview}>
          {!visible && <div style={{ height: $preview.current!.clientHeight + 'px' }}></div>}
          {visible && isolate != true && (
            <Suspense fallback={<div className="skeleton" />}>{Preview && <Preview />}</Suspense>
          )}
          {visible && isolate == true && (
            <div className={loaded ? '' : 'skeleton'}>
              <iframe src={getPath(ROUTES.COMPONENT_EXAMPLE, { component, example })} onLoad={onIframeLoad} />
            </div>
          )}
        </plus-tabs-panel>
        {tabs
          ?.filter((tab) => tab.key != 'preview')
          ?.map((tab) => (
            <plus-tabs-panel key={tab.key} value={tab.key}>
              <Code language={tab.language as any}>{tab.content}</Code>
            </plus-tabs-panel>
          ))}
      </plus-tabs-panels>
    </plus-tabs>
  );
}
