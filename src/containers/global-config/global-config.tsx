'use client';

import { useRouter } from 'next/router';

import { Button } from '@/components';
import { ROUTES } from '@/constants';
import { TocItem } from '@/containers';
import { getPath } from '@/utils';

export function GlobalConfig() {
  const router = useRouter();

  const { component, framework } = router.query as any;

  return (
    <>
      <h2>
        <TocItem level={2}>Global Config</TocItem>
      </h2>
      <p>
        See the animation's&nbsp;
        <Button link="underline" to={getPath(ROUTES.COMPONENT_CONFIG, { component, framework })}>
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
