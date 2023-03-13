import React, { useEffect, useMemo } from 'react';

import { useRouter } from 'next/router';

import PACKAGE from '@htmlplus/core/package.json';

import { Button, Center, Divider, Grid, Icon } from '@app/components';
import { sidebar as sidebarData } from '@app/data';
import { useSidebar, useStore } from '@app/hooks';
import * as Utils from '@app/utils';
import { getPath, ROUTES } from '@app/utils';

import { SidebarItem } from './sidebar.types';

export const Sidebar = () => {
  const router = useRouter();

  const sidebar = useSidebar();

  const store = useStore();

  const items = useMemo(() => sidebarData(store.framework!), [store.framework]);

  const actives: SidebarItem[] = useMemo(() => {
    const run = (...items: SidebarItem[]): SidebarItem[] => {
      for (const item of items) {
        if (router.asPath.startsWith(item.url!!)) return [item];
        if (!item.items) continue;
        const result = run(...item.items);
        if (!result.length) continue;
        return [item, ...result];
      }
      return [];
    };
    return run(...items);
  }, [items, router.asPath]);

  const key = (item: SidebarItem) => item.title;

  const isActive = (item: SidebarItem) => {
    return actives.some((active) => (item.url ? active.url == item.url : key(item) == key(active)));
  };

  const isCollapse = (item: SidebarItem) => {
    return !sidebar.expands.some((x) => key(x) == key(item));
  };

  const menu = (items: SidebarItem[], parents: SidebarItem[] = []) => {
    return (
      <ul className="nav">
        {items.map((item) => (
          <li
            key={key(item)}
            className={Utils.classes({
              active: isActive(item),
              collapse: isCollapse(item),
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
                {key(item)}
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
    const exists = sidebar.expands.some((expand) => key(expand) == key(item));
    if (exists) sidebar.setExpands(sidebar.expands.filter((expand) => key(expand) != key(item)));
    else sidebar.setExpands([...sidebar.expands, item]);
  };

  useEffect(
    () =>
      sidebar.setExpands(
        actives
          .slice(0, -1)
          .concat(sidebar.expands)
          .filter((item, index, items) => items.findIndex((x) => key(x) == key(item)) == index)
      ),
    [actives]
  );

  return (
    <div className="sidebar">
      <br />
      <Grid alignItems="center" gutterY="md">
        <Grid.Item xs="12">
          <Center>
            <Button block link to={getPath(ROUTES.HOME, {})}>
              <Grid alignItems="center" gutterX="sm">
                <Grid.Item>
                  <svg
                    className="logo"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 1000 1000"
                    enableBackground="new 0 0 1000 1000"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path d="M980.8,521.1L783.2,718.5c-12.2,12.2-32,12.2-44.2,0c-12.2-12.2-12.2-31.9,0-44.1L914.6,499L739,323.7c-12.2-12.2-12.2-31.9,0-44.1c12.2-12.2,32-12.2,44.2,0L980.8,477C993.1,489.2,993.1,508.9,980.8,521.1z M332.9,906.5c-9,15.7-28.9,21.1-44.5,12c-15.6-9-20.9-29.1-11.9-44.8L667.1,93.5c9-15.7,28.9-21.1,44.5-12c15.6,9.1,20.9,29.1,11.9,44.8L332.9,906.5z M261,718.5c-12.2,12.2-32,12.2-44.2,0L19.1,521.1C7,508.9,7,489.2,19.1,477l197.7-197.4c12.2-12.2,32-12.2,44.2,0c12.2,12.2,12.2,31.9,0,44.1L85.4,499L261,674.4C273.2,686.6,273.2,706.3,261,718.5z" />
                    </g>
                  </svg>
                </Grid.Item>
                <Grid.Item>
                  <Grid alignItems="end" vertical>
                    <Grid.Item>HTMLPLUS</Grid.Item>
                    <Grid.Item>
                      <div className="version">Version {PACKAGE.version}</div>
                    </Grid.Item>
                  </Grid>
                </Grid.Item>
              </Grid>
            </Button>
          </Center>
        </Grid.Item>
        <Grid.Item xs="12">
          <Grid gutterX="md">
            <Grid.Item xs="12">
              <Button block outlined to={getPath(ROUTES.GITHUB_URL, {})} target="_blank">
                <Icon name="github" />
                Github
              </Button>
            </Grid.Item>
          </Grid>
        </Grid.Item>
        <Grid.Item xs="12">
          <Divider />
        </Grid.Item>
        <Grid.Item xs="12">{menu(items)}</Grid.Item>
      </Grid>
    </div>
  );
};
