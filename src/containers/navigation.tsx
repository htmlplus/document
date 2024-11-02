'use client';

import { Button } from '@/components';
import { useSidebar } from '@/containers';

export function Navigation() {
  const sidebar = useSidebar();
  return (
    <p>
      <plus-stack justify="between">
        <div>
          {!!sidebar.prev && (
            <Button link to={sidebar.prev.url}>
              <plus-stack gap="1rem">
                <plus-icon name="chevron-left" size="lg"></plus-icon>
                <plus-stack items="start" vertical>
                  <b>Prev</b>
                  <div>{sidebar.prev.title}</div>
                </plus-stack>
              </plus-stack>
            </Button>
          )}
        </div>
        <div>
          {!!sidebar.next && (
            <Button link to={sidebar.next.url}>
              <plus-stack gap="1rem">
                <plus-stack items="end" vertical>
                  <b>Next</b>
                  <div>{sidebar.next.title}</div>
                </plus-stack>
                <plus-icon name="chevron-right" size="lg"></plus-icon>
              </plus-stack>
            </Button>
          )}
        </div>
      </plus-stack>
    </p>
  );
}
