'use client';

import { Button } from '@/components';
import { useSidebar } from '@/containers';

export function Navigation() {
  const sidebar = useSidebar();
  return (
    <p>
      <plus-grid justify-content="between" align-items="center">
        <plus-grid-item xs="auto">
          {!!sidebar.prev && (
            <Button link to={sidebar.prev.url}>
              <plus-grid align-items="center" gutter-x="md" wrap="off">
                <plus-grid-item>
                  <plus-icon name="chevron-left" size="lg"></plus-icon>
                </plus-grid-item>
                <plus-grid-item>
                  <plus-grid align-items="start" vertical>
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
              <plus-grid align-items="center" gutter-x="md" wrap="off">
                <plus-grid-item>
                  <plus-grid align-items="end" vertical>
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
