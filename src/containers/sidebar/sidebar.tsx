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
                  <Icon name="htmlplus" size="44px" />
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
                <Icon name="brand-github" />
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
