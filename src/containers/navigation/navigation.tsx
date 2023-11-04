'use client';

import { Button } from '@/components';

// TODO
// import { useSidebar } from '@/hooks';

export function Navigation() {
  // TODO
  // const sidebar = useSidebar();
  const sidebar = { prev: { url: '', title: '' }, next: { url: '', title: '' } };

  return (
    <p>
      <plus-grid justifyContent="between" alignItems="center">
        <plus-grid-item xs="auto">
          {!!sidebar.prev && (
            <Button link to={sidebar.prev.url}>
              <plus-grid alignItems="center" gutterX="md" wrap="off">
                <plus-grid-item>
                  <plus-icon name="chevron-left" size="lg"></plus-icon>
                </plus-grid-item>
                <plus-grid-item>
                  <plus-grid alignItems="start" vertical>
                    <plus-grid-item>
                      <b>Prev</b>
                    </plus-grid-item>
                    <plus-grid-item>{sidebar.prev.title}</plus-grid-item>
                  </plus-grid>
                </plus-grid-item>
              </plus-grid>
            </Button>
          )}
        </plus-grid-item>
        <plus-grid-item xs="auto">
          {!!sidebar.next && (
            <Button link to={sidebar.next.url}>
              <plus-grid alignItems="center" gutterX="md" wrap="off">
                <plus-grid-item>
                  <plus-grid alignItems="end" vertical>
                    <plus-grid-item>
                      <b>Next</b>
                    </plus-grid-item>
                    <plus-grid-item>{sidebar.next.title}</plus-grid-item>
                  </plus-grid>
                </plus-grid-item>
                <plus-grid-item>
                  <plus-icon name="chevron-right" size="lg"></plus-icon>
                </plus-grid-item>
              </plus-grid>
            </Button>
          )}
        </plus-grid-item>
      </plus-grid>
    </p>
  );
}
