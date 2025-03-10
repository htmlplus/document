'use client';

import { useParams } from 'next/navigation';

import { Button } from '@/components';
import { ROUTES } from '@/constants';
import { elementsLight } from '@/data';
import { getPath } from '@/utils';

export function Usage() {
  const params = useParams<any>();

  if (!params) return null;

  // TODO
  const dependencies = elementsLight.find((item) => item.key == params.element)?.dependencies?.join(' ') || '';

  let dependency = 'npm install @htmlplus/ui ';

  dependency += dependencies;

  return (
    <>
      <h2 id="usage">Usage</h2>
      <p>
        Follow the tutorials &nbsp;
        <Button link="underline" to={getPath(ROUTES.INSTALLATION_FRAMEWORK, { framework: params.framework })}>
          here
        </Button>
        &nbsp; to use the &nbsp;
        <b>HTMLPLUS</b>
        &nbsp; library on &nbsp;
        <b>{params.framework?.toUpperCase()}</b>
        &nbsp; projects.
      </p>
      <plus-prism language="markup">{dependency}</plus-prism>
    </>
  );
}
