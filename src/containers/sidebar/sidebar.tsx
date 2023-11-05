'use client';

import PACKAGE from '@htmlplus/core/package.json';

import { Button } from '@/components';
import { ROUTES } from '@/constants';
import { classes, getPath } from '@/utils';

import { ISidebarItem } from './sidebar.types';

export function Sidebar() {
  // TODO
  // const router = useRouter();
  // const sidebar = useSidebar();
  // const store = useStore();

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
                    <plus-icon name={item.icon as any}></plus-icon> &nbsp;
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

  const toggle = (event: MouseEvent, item: ISidebarItem) => {
    if (!item || item.url) return;

    event.preventDefault();

    // TODO
    // sidebar.toggle(item);
  };

  // TODO
  // useEffect(() => {
  //   sidebar.sync(router.asPath, store.framework!);
  // }, [router.asPath, store.framework]);

  return (
    <div className="sidebar">
      <br />
      <plus-stack gap="1rem" alignItems="stretch" vertical>
        <plus-center>
          <Button block link to={getPath(ROUTES.HOME, {})}>
            <plus-stack gap="1rem">
              <plus-icon name="htmlplus" size="44px"></plus-icon>
              <plus-stack alignItems="end" vertical>
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
        <plus-divider></plus-divider>
        {/* TODO */}
        {/* {menu(sidebar.items)} */}
      </plus-stack>
    </div>
  );
}
