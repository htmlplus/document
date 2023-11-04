'use client';

import { useRouter } from 'next/router';

import { Button } from '@/components';
import { TocItem } from '@/containers';
import { ROUTES, getPath } from '@/utils';

export function Api() {
  const router = useRouter();

  const { component, framework } = router.query as any;

  return (
    <>
      <h2>
        <TocItem level={2}>Api</TocItem>
      </h2>
      <p>
        Click&nbsp;
        <Button link="underline" to={getPath(ROUTES.API_DETAILS, { component, framework })}>
          here
        </Button>
        &nbsp;to learn more about the <b>Properties</b>, <b>Slots</b>, <b>Events</b>, <b>CSS Variables</b>,{' '}
        <b>CSS Parts</b>, and <b>Methods</b>.
      </p>
    </>
  );
}
