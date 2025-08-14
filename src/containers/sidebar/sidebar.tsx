'use client';

import { MouseEvent, useEffect } from 'react';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import PACKAGE from '@htmlplus/ui/package.json';

import { Badge, Button } from '@/components';
import { ROUTES } from '@/constants';
import { useFrameworks } from '@/containers';
import { getPath } from '@/utils';

import { SidebarItem } from './sidebar.types';
import { useSidebar } from './useSidebar';

export function Sidebar() {
  const frameworks = useFrameworks();

  const pathname = usePathname();

  const sidebar = useSidebar();

  const menu = (items: SidebarItem[], parents: SidebarItem[] = [], expand?: boolean) => {
    return (
      <ul
        className={`nav flex flex-col flex-nowrap pl-0 list-none m-0 ${parents.length ? 'border-0 border-l border-solid border-l-main-4 ml-[1.25rem] pl-[0.5rem]' : ''} ${parents.length && !expand ? 'hidden' : ''}`}
      >
        {items.map((item) => (
          <li key={item.title + item.url} className="m-0">
            <NextLink
              className={`flex items-center justify-between border-0 rounded-[4px] px-[0.75rem] py-[0.4rem] text-inherit transition-colors duration-300 hover:no-underline hover:text-primary-9 focus:text-primary-9 ${!item.expand && item.active ? 'bg-primary-2 text-primary-9 font-semibold' : ''}`}
              href={item.url || '#'}
              onClick={(event) => toggle(event, item)}
            >
              {item.title}
              {item.stable && (
                <Badge className={item.active ? 'bg-transparent' : ''}>
                  <small>Stable</small>
                </Badge>
              )}
              {!!item.items?.length && (
                <plus-icon
                  name="chevron-left"
                  size="0.75rem"
                  style={{
                    transition: 'rotate 0.3s',
                    rotate: item.expand ? '-270deg' : '-90deg',
                  }}
                ></plus-icon>
              )}
            </NextLink>
            {!!item.items?.length && menu(item.items, [item, ...parents], item.expand)}
          </li>
        ))}
      </ul>
    );
  };

  const toggle = (event: MouseEvent<HTMLAnchorElement>, item: SidebarItem) => {
    if (!item || item.url) return;

    event.preventDefault();

    sidebar.toggle(item);
  };

  useEffect(() => {
    sidebar.sync(pathname, frameworks.framework);
  }, [pathname, frameworks.framework]);

  return (
    <div className="w-[300px] h-full overflow-y-auto px-4 relative" style={{ scrollbarGutter: 'stable' }}>
      <br />
      <plus-stack gap="1rem" items="stretch" vertical>
        <plus-center className="text-[20px]">
          <Button block link to={getPath(ROUTES.HOME, {})}>
            <plus-stack gap="1rem">
              <plus-icon name="htmlplus" size="44px"></plus-icon>
              <plus-stack items="end" vertical>
                <div>HTMLPLUS</div>
                <div className="text-[60%] text-main-9">Version {PACKAGE.version}</div>
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
