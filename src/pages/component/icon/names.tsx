import { memo, useLayoutEffect, useRef, useState } from 'react';

// @ts-ignore
import { setConfig } from '@htmlplus/core/config';
import ICONS from '@htmlplus/core/icon/names.json';
import { useDebounce } from 'use-debounce';

import { Center, Grid, Icon, Spinner } from '@app/components';
import { LayoutDefault } from '@app/layouts';

// TODO
ICONS.forEach((icon) => {
  setConfig({
    asset: {
      icon: {
        [icon.name]: icon.content
      }
    }
  });
});

const Icons = () => {
  const $container = useRef<HTMLElement>(null);

  const [empty, setEmpty] = useState(false);

  const [input, setInput] = useState('');

  const [query] = useDebounce(input, 250);

  useLayoutEffect(() => {
    if (!$container.current) return;

    const children = Array.from($container.current.children);

    let has;

    children.forEach((child: any) => {
      child.hidden = false;

      if (!query) return;

      const tags = [child.getAttribute('data-name'), ',', child.getAttribute('data-tags')].join('');

      const found = tags.indexOf(query) != -1;

      child['hidden'] = !found;

      has ||= found;
    });

    setEmpty(has === false);
  }, [query]);

  return (
    <LayoutDefault>
      <Grid alignItems="center">
        <Grid.Item xs="grow">
          <h1>Icons</h1>
        </Grid.Item>
        <Grid.Item>
          <div className="icons-input">
            <input
              value={input}
              placeholder="Typing to filter ..."
              onInput={(event: any) => setInput(event.target.value)}
            />
          </div>
        </Grid.Item>
      </Grid>
      <p>
        A large range of name for use in the <code>icon</code> component. All icons are based on the popular
        <a href="https://icons.getbootstrap.com" target="_blank">
          &nbsp;Bootstrap Icons&nbsp;
        </a>
        library.
      </p>
      {empty && <Center className="icons-empty">Not Found!</Center>}
      <Grid gutter="md" ref={$container}>
        <Children />
      </Grid>
      <br />
    </LayoutDefault>
  );
};

const Children = memo(() => {
  return (
    <>
      {ICONS.map((icon) => (
        <Grid.Item
          key={icon.name}
          data-name={icon.name}
          data-tags={icon.tags}
          xs="12"
          sm="6"
          md="4"
          lg="3"
          xl="3"
          xxl="2"
        >
          <div className="icons-preview">
            <Icon name={icon.name} size="2x" />
          </div>
          <Center>
            <small>{icon.name}</small>
          </Center>
        </Grid.Item>
      ))}
    </>
  );
});

export default Icons;
