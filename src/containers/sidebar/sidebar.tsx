import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import PACKAGE from '@htmlplus/core/package.json';

import { Button, Center, Divider, Icon, Stack } from '@app/components';
import { useSidebar, useStore } from '@app/hooks';
import * as Utils from '@app/utils';
import { ROUTES, getPath } from '@app/utils';

import { SidebarItem } from './sidebar.types';

export const Sidebar = () => {
  const router = useRouter();

  const sidebar = useSidebar();

  const store = useStore();

  const menu = (items: SidebarItem[], parents: SidebarItem[] = []) => {
    return (
      <ul className="nav">
        {items.map((item) => (
          <li
            key={item.title + item.url}
            className={Utils.classes({
              active: item.active,
              expand: item.expand,
              navItem: true
            })}
          >
            <Button block text to={item.url || '#'} onClick={(event: MouseEvent) => toggle(event, item)}>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between ' }}>
                {/* {item.icon && (
                <>
                  <Icon name={item.icon as any} /> &nbsp;
                </>
              )} */}
                {item.title}
                {!!item.items?.length && <span className="nav-link-toggle" />}
                {item.stable && (
                  <code>
                    <small>Stable</small>
                  </code>
                )}
              </div>
            </Button>
            {!!item.items?.length && menu(item.items, [item, ...parents])}
          </li>
        ))}
      </ul>
    );
  };

  const toggle = (event: MouseEvent, item: SidebarItem) => {
    if (!item || item.url) return;

    event.preventDefault();

    sidebar.toggle(item);
  };

  useEffect(() => {
    sidebar.sync(router.asPath, store.framework!);
  }, [router.asPath, store.framework]);

  return (
    <div className="sidebar">
      <br />
      <Stack gap="1rem" alignItems="stretch" vertical>
        <Center>
          <Button block link to={getPath(ROUTES.HOME, {})}>
            <Stack gap="1rem">
              <Icon name="htmlplus" size="44px" />
              <Stack alignItems="end" vertical>
                <div>HTMLPLUS</div>
                <div className="version">Version {PACKAGE.version}</div>
              </Stack>
            </Stack>
          </Button>
        </Center>
        <Button block outlined to={getPath(ROUTES.GITHUB_URL, {})} target="_blank">
          <Icon name="github" />
          Github
        </Button>
        <Divider />
        {menu(sidebar.items)}
      </Stack>
    </div>
  );
};
