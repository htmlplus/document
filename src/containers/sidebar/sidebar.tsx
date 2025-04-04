'use client';

import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

import PACKAGE from '@htmlplus/ui/package.json';

import { Button } from '@/components';
import { ROUTES } from '@/constants';
import { useFrameworks } from '@/containers';
import { classes, getPath } from '@/utils';

import { SidebarItem } from './sidebar.types';
import { useSidebar } from './useSidebar';

export function Sidebar() {
  const frameworks = useFrameworks();

  const pathname = usePathname();

  const sidebar = useSidebar();

  const menu = (items: SidebarItem[], parents: SidebarItem[] = []) => {
    return (
      <ul className="nav">
        {items.map((item) => (
          <li
            key={item.title + item.url}
            className={classes({
              active: item.active,
              expand: item.expand,
              navItem: true,
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

  const toggle = (event: MouseEvent, item: SidebarItem) => {
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
      <plus-stack gap="1rem" items="stretch" vertical>
        <plus-center>
          <Button block link to={getPath(ROUTES.HOME, {})}>
            <plus-stack gap="1rem">
              <plus-icon name="htmlplus" size="44px"></plus-icon>
              <plus-stack items="end" vertical>
                <div>HTMLPLUS</div>
                <div className="version">Version {PACKAGE.version}</div>
              </plus-stack>
            </plus-stack>
          </Button>
        </plus-center>
        <Button block outlined to={getPath(ROUTES.GITHUB_URL, {})} target="_blank">
          <plus-icon name="github"></plus-icon>
          Github
        </Button>
        <plus-divider width="xs"></plus-divider>
        {menu(sidebar.items)}
      </plus-stack>
    </div>
  );
}
