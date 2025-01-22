'use client';

import { useParams } from 'next/navigation';

import { Button } from '@/components';
import { ROUTES } from '@/constants';
import { TocItem } from '@/containers';
import { getPath } from '@/utils';

export function Api() {
  const params = useParams<any>();

  if (!params) return null;

  return (
    <>
      <h2>
        <TocItem level={2}>Api</TocItem>
      </h2>
      <p>
        Click&nbsp;
        <Button
          link="underline"
          to={getPath(ROUTES.API_DETAILS, { element: params.element, framework: params.framework })}
        >
          here
        </Button>
        &nbsp;to learn more about the <b>Properties</b>, <b>Slots</b>, <b>Events</b>, <b>CSS Variables</b>,{' '}
        <b>CSS Parts</b>, and <b>Methods</b>.
      </p>
    </>
  );
}
