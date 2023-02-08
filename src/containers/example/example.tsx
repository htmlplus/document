import { useLayoutEffect, useState } from 'react';

import { pascalCase } from 'change-case';

import { Alert, Button, Code, Grid, Icon, Tabs } from '@app/components';
import * as Examples from '@app/examples';
import { useStore } from '@app/hooks';
import { getPath, ROUTES } from '@app/utils';

import { ExampleProps } from './example.types';

export const Example = ({ component, example, isolate, links, rtl, tabs, title }: ExampleProps) => {
  const store = useStore();

  if (!component || !example) return <Alert type="error">NOT FOUND</Alert>;

  const componentName = `${pascalCase(component)}${pascalCase(example)}`;

  // TODO
  const Preview = isolate
    ? () => (
        <iframe
          src={getPath(ROUTES.COMPONENT_EXAMPLE, { component, example })}
          style={{ border: 'none', display: 'block', margin: 0, width: '100%' }}
        />
      )
    : ((Examples as any)[componentName!] as any);

  const [direction, setDirection] = useState('ltr');

  const [visible, setVisible] = useState(true);

  const onDirection = (event?: MouseEvent) => {
    event?.preventDefault();
    setDirection(direction == 'ltr' ? 'rtl' : 'ltr');
  };

  const onReload = (event?: MouseEvent) => {
    event?.preventDefault();
    setDirection('ltr');
    setVisible(false);
    requestAnimationFrame(() => setVisible(true));
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
              <Icon size="lg" name="directions" />
            </Button>
          </Grid.Item>
        )}
        <Grid.Item xs="auto">
          <Button icon text to="#" onClick={onReload}>
            <Icon size="lg" name="reset" />
          </Button>
        </Grid.Item>
        {links?.map((link) => (
          <Grid.Item key={link.key} xs="auto">
            <Button icon text to={link.url} target="_blank">
              <Icon size="lg" name={link.icon} />
            </Button>
          </Grid.Item>
        ))}
      </Grid>
      <Tabs.Panels>
        <Tabs.Panel value="preview" dir={direction}>
          {visible ? <Preview key="main" /> : <Preview key="alternative" />}
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
