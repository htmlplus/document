import { Suspense, useLayoutEffect, useState } from 'react';

import { pascalCase } from 'change-case';

import { Alert, Button, Code, Grid, Icon, Tabs, Tooltip } from '@app/components';
import * as Examples from '@app/examples';
import { useStore } from '@app/hooks';
import { getPath, ROUTES } from '@app/utils';

import { ExampleProps } from './example.types';

export const Example = ({ component, example, isolate, links, rtl, tabs, title }: ExampleProps) => {
  const store = useStore();

  const [direction, setDirection] = useState('ltr');

  const [loaded, setLoaded] = useState(false);

  const [visible, setVisible] = useState(true);

  if (!component || !example) return <Alert type="error">NOT FOUND</Alert>;

  const componentName = `${pascalCase(component)}${pascalCase(example)}`;

  const Component = (Examples as any)[componentName!] as any;

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
  };

  const onReload = (event?: MouseEvent) => {
    event?.preventDefault();
    setDirection('ltr');
    setVisible(false);
    requestAnimationFrame(() => setVisible(true));
    setLoaded(false);
  };

  useLayoutEffect(onReload, [store.framework]);

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
              <Icon name="sign-turn-left" />
            </Button>
            <Tooltip>Change Direction</Tooltip>
          </Grid.Item>
        )}
        <Grid.Item xs="auto">
          <Button icon text to="#" onClick={onReload}>
            <Icon name="arrow-clockwise" />
          </Button>
          <Tooltip>Reset</Tooltip>
        </Grid.Item>
        {links?.map((link) => (
          <Grid.Item key={link.key} xs="auto">
            <Button icon text to={link.url} target="_blank">
              <Icon name={link.icon} />
            </Button>
            <Tooltip>{link.title}</Tooltip>
          </Grid.Item>
        ))}
      </Grid>
      <Tabs.Panels>
        <Tabs.Panel value="preview" dir={direction}>
          {visible && isolate != true && (
            <Suspense fallback={<div className="skeleton" />}>
              <Component />
            </Suspense>
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
};
