'use client';

import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

import PACKAGE from '@htmlplus/core/package.json';

import { Button, Center, Divider, Icon, Stack } from '@/components';
import { ROUTES } from '@/constants';
import { useFrameworks } from '@/containers';
import { classes, getPath } from '@/utils';

import { ISidebarItem } from './sidebar.types';
import { useSidebar } from './useSidebar';

export function Sidebar() {
  const frameworks = useFrameworks();

  const pathname = usePathname();

  const sidebar = useSidebar();

  const menu = (items: ISidebarItem[], parents: ISidebarItem[] = []) => {
    return (
      <ul className="nav">
        {items.map((item) => (
          <li
            key={item.title + item.url}
            className={classes({
              active: item.active,
              expand: item.expand,
              navItem: true
            })}
          >
            <Button block text to={item.url || '#'} onClick={(event: MouseEvent) => toggle(event, item)}>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between ' }}>
                {/* TODO */}
                {/* {item.icon && (
                  <>
                    <Icon name={item.icon as any}></Icon> &nbsp;
                  </>
                )} */}
                {item.title}
                {!!item.items?.length && <span className="nav-link-toggle"></span>}
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

  const toggle = (event: MouseEvent, item: ISidebarItem) => {
    if (!item || item.url) return;

    event.preventDefault();

    sidebar.toggle(item);
  };

  useEffect(() => {
    sidebar.sync(pathname, frameworks.framework);
  }, [pathname, frameworks.framework]);

  return (
    <div className="sidebar">
      <br />
      <Stack gap="1rem" alignItems="stretch" vertical>
        <Center>
          <Button block link to={getPath(ROUTES.HOME, {})}>
            <Stack gap="1rem">
              <Icon name="htmlplus" size="44px"></Icon>
              <Stack alignItems="end" vertical>
                <div>HTMLPLUS</div>
                <div className="version">Version {PACKAGE.version}</div>
              </Stack>
            </Stack>
          </Button>
        </Center>
        <Button block outlined to={getPath(ROUTES.GITHUB_URL, {})} target="_blank">
          <Icon name="github"></Icon>
          Github
        </Button>
        <Divider></Divider>
        {menu(sidebar.items)}
      </Stack>
    </div>
  );
}
