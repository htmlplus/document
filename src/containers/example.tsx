'use client';

import { Suspense, useLayoutEffect, useRef, useState } from 'react';

import { Alert, Button, Code, Grid, Icon, Tabs, Tooltip } from '@/components';
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
    <Tabs className="example" connector={`example:${title}`} value="preview">
      {/* TODO: remove connector and example */}
      <Grid alignItems="center" gutterX="sm">
        <Grid.Item xs="grow">
          <Tabs.Bar>
            <Tabs.Tab value="preview">Preview</Tabs.Tab>
            {tabs?.map((tab) => (
              <Tabs.Tab key={tab.key} disabled={tab.disabled} value={tab.key}>
                {tab.title}
              </Tabs.Tab>
            ))}
          </Tabs.Bar>
        </Grid.Item>
        {rtl && (
          <Grid.Item xs="auto">
            <Button icon text to="#" onClick={onDirection}>
              <Icon name="sign-turn-left"></Icon>
            </Button>
            <Tooltip>Change Direction</Tooltip>
          </Grid.Item>
        )}
        <Grid.Item xs="auto">
          <Button icon text to="#" onClick={onReload}>
            <Icon name="arrow-clockwise"></Icon>
          </Button>
          <Tooltip>Reset</Tooltip>
        </Grid.Item>
        {links?.map((link) => (
          <Grid.Item key={link.key} xs="auto">
            <Button icon text to={link.url} target="_blank">
              <Icon name={link.icon}></Icon>
            </Button>
            <Tooltip>{link.title}</Tooltip>
          </Grid.Item>
        ))}
      </Grid>
      <Tabs.Panels>
        <Tabs.Panel value="preview" dir={direction} ref={$preview}>
          {!visible && <div style={{ height: $preview.current!.clientHeight + 'px' }}></div>}
          {visible && isolate != true && (
            <Suspense fallback={<div className="skeleton" />}>{Preview && <Preview></Preview>}</Suspense>
          )}
          {visible && isolate == true && (
            <div className={loaded ? '' : 'skeleton'}>
              <iframe src={getPath(ROUTES.COMPONENT_EXAMPLE, { component, example })} onLoad={onIframeLoad} />
            </div>
          )}
        </Tabs.Panel>
        {tabs
          ?.filter((tab) => tab.key != 'preview')
          ?.map((tab) => (
            <Tabs.Panel key={tab.key} value={tab.key}>
              <Code language={tab.language as any}>{tab.content}</Code>
            </Tabs.Panel>
          ))}
      </Tabs.Panels>
    </Tabs>
  );
}
