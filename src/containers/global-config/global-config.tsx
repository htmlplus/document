'use client';

import { useParams } from 'next/navigation';

import { Button } from '@/components';
import { ROUTES } from '@/constants';
import { TocItem } from '@/containers';
import { getPath } from '@/utils';

export function GlobalConfig() {
  const params = useParams<any>();

  if (!params) return null;
  return (
    <>
      <h2>
        <TocItem level={2}>Global Config</TocItem>
      </h2>
      <p>
        See the animation's&nbsp;
        <Button link="underline" to={getPath(ROUTES.COMPONENT_CONFIG, { component: params.component })}>
          config
        </Button>
        . Full&nbsp;
        <Button link="underline" to={getPath(ROUTES.GLOBAL_CONFIG, {})}>
          documentation
        </Button>
        &nbsp;is available.
      </p>
    </>
  );
}
