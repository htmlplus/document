'use client';

import { useParams } from 'next/navigation';

import { Button } from '@/components';
import { ROUTES } from '@/constants';
import { getPath } from '@/utils';

export function GlobalConfig() {
  const params = useParams<any>();

  if (!params) return null;

  return (
    <>
      <h2 id="global-config">Global Config</h2>
      <p>
        See the animation's&nbsp;
        <Button link="underline" to={getPath(ROUTES.ELEMENT_CONFIG, { element: params.element })}>
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
