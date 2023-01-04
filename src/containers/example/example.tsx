import { useLayoutEffect, useState } from 'react';

import { Button, Code, Grid, Icon, Tabs } from '@app/components';
import { useStore } from '@app/hooks';

import { ExampleProps } from './example.types';
import * as examples from './examples/index';

export const Example = ({ value }: ExampleProps) => {
  if (!value) return <div>TODO</div>;

  const { componentName, links, rtl, tabs, title } = value;

  const [isRTL, setIsRTL] = useState(false);

  const [visible, setVisible] = useState(true);

  const store = useStore();

  const direction = (event: MouseEvent) => {
    event.preventDefault();
    setIsRTL(!isRTL);
  };

  const language = (tab: any) => {
    switch (tab.key) {
      case 'config':
        return 'js';
      case 'script':
        return 'jsx';
      case 'style':
        return 'css';
      case 'template':
        return 'html';
    }
  };

  const reload = (event?: MouseEvent) => {
    event?.preventDefault();
    setVisible(false);
    requestAnimationFrame(() => setVisible(true));
  };

  useLayoutEffect(reload, [store.framework]);

  // TODO
  const Preview = (examples as any)[componentName!] as any;

  return (
    <Tabs className="example" connector={`example:${title}`} value="preview">
      {/* TODO: remove connector and example */}
      <Grid className="toolbar" alignItems="center" gutterX="sm">
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
            <Button icon text to="#" onClick={direction}>
              <Icon size="lg" name="directions" />
            </Button>
          </Grid.Item>
        )}
        <Grid.Item xs="auto">
          <Button icon text to="#" onClick={reload}>
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
        <Tabs.Panel value="preview" dir={isRTL ? 'rtl' : 'ltr'}>
          {visible ? <Preview key="main" /> : <Preview key="alternative" />}
        </Tabs.Panel>
        {tabs
          ?.filter((tab) => tab.key != 'preview')
          ?.map((tab) => (
            <Tabs.Panel key={tab.key} value={tab.key}>
              <Code language={language(tab)!}>{tab.content}</Code>
            </Tabs.Panel>
          ))}
      </Tabs.Panels>
    </Tabs>
  );
};
