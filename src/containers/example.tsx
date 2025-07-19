'use client';

import { FC, Suspense, useLayoutEffect, useRef, useState } from 'react';

import { Alert, Button } from '@/components';
import { ROUTES } from '@/constants';
import { useFrameworks } from '@/containers';
import { getPath } from '@/utils';

export interface ExampleProps {
  Preview?: FC;
  element?: string;
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
  dock?: boolean;
}

export function Example({ Preview, dock, element, example, isolate, links, rtl, tabs, title }: ExampleProps) {
  const frameworks = useFrameworks();

  const $preview = useRef<HTMLElement>(null);

  const resizeObserver = useRef<ResizeObserver>(null);

  const [direction, setDirection] = useState('ltr');

  const [isLoaded, setIsLoaded] = useState(false);

  const [isVisible, setIsVisible] = useState(true);

  if (!element || !example) return <Alert type="error">NOT FOUND</Alert>;

  const handleChangeDirection = (event: MouseEvent) => {
    event.preventDefault();
    setDirection(direction == 'ltr' ? 'rtl' : 'ltr');
  };

  const handleIframeLoad = (event: any) => {
    const iframe = event.target;

    const body = iframe.contentWindow.document.body;

    resizeObserver.current?.disconnect();

    resizeObserver.current = new ResizeObserver(() => {
      requestAnimationFrame(() => {
        iframe.style.height = body.scrollHeight + 'px';
        setIsLoaded(true);
      });
    });

    resizeObserver.current?.observe(body);
  };

  const handleReload = (event?: MouseEvent) => {
    event?.preventDefault();
    setDirection('ltr');
    setIsVisible(false);
    requestAnimationFrame(() => setIsVisible(true));
    setIsLoaded(false);
  };

  useLayoutEffect(handleReload, [frameworks.framework]);

  useLayoutEffect(() => {
    return () => resizeObserver.current?.disconnect();
  }, [isVisible]);

  return (
    <plus-tabs className="gap-2 leading-none" value="preview">
      <div className="flex gap-2 flex-col sm:flex-row sm:items-center sm:justify-between">
        <plus-tabs-bar
          override={{
            'sm-before': {
              grow: true,
            },
            'sm-up': {
              grow: false,
            },
          }}
        >
          <plus-tabs-tab value="preview">Preview</plus-tabs-tab>
          {tabs?.map((tab) => (
            <plus-tabs-tab key={tab.key} disabled={tab.disabled} value={tab.key}>
              {tab.title}
            </plus-tabs-tab>
          ))}
        </plus-tabs-bar>
        <div className="flex gap-2 justify-center">
          {rtl && (
            <div>
              <Button icon text to="#" onClick={handleChangeDirection}>
                <plus-icon name="sign-turn-left"></plus-icon>
              </Button>
              <plus-tooltip>Change Direction</plus-tooltip>
            </div>
          )}
          <div>
            <Button icon text to="#" onClick={handleReload}>
              <plus-icon name="arrow-clockwise"></plus-icon>
            </Button>
            <plus-tooltip>Reset</plus-tooltip>
          </div>
          {links?.map((link) => (
            <div key={link.key}>
              <Button icon text to={link.url} target="_blank">
                <plus-icon name={link.icon}></plus-icon>
              </Button>
              <plus-tooltip>{link.title}</plus-tooltip>
            </div>
          ))}
        </div>
      </div>
      <plus-tabs-panels>
        <plus-tabs-panel
          className="border border-main-lighten-3 border-solid"
          value="preview"
          dir={direction}
          ref={$preview}
        >
          {!isVisible && <div style={{ height: $preview.current!.clientHeight + 'px' }}></div>}
          {isVisible && isolate != true && (
            <Suspense fallback={<div className="skeleton" />}>
              {Preview && (
                <div className={`${dock ? '' : 'p-[1.5rem]'}`}>
                  <Preview />
                </div>
              )}
            </Suspense>
          )}
          {isVisible && isolate == true && (
            <div className={`p-[1.5rem] ${isLoaded ? '' : 'skeleton'}`}>
              <iframe
                className="border-none block m-0 w-full h-0"
                src={getPath(ROUTES.ELEMENT_EXAMPLE, { element, example })}
                onLoad={handleIframeLoad}
              />
            </div>
          )}
        </plus-tabs-panel>
        {tabs
          ?.filter((tab) => tab.key != 'preview')
          ?.map((tab) => (
            <plus-tabs-panel key={tab.key} value={tab.key}>
              <plus-prism language={tab.language}>{tab.content}</plus-prism>
            </plus-tabs-panel>
          ))}
      </plus-tabs-panels>
    </plus-tabs>
  );
}
