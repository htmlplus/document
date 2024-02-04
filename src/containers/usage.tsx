'use client';

import { useParams } from 'next/navigation';

import { Button, Code } from '@/components';
import { ROUTES } from '@/constants';
import { TocItem } from '@/containers';
import { componentsLight } from '@/data';
import { getPath } from '@/utils';

export function Usage() {
  const params = useParams<any>();

  if (!params) return null;

  // TODO
  const dependencies = componentsLight.find((item) => item.key == params.component)?.dependencies?.join(' ') || '';

  let dependency = 'npm install @htmlplus/core ';

  dependency += dependencies;

  return (
    <>
      <h2>
        <TocItem level={2}>Usage</TocItem>
      </h2>
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
      <Code language="shell">{dependency}</Code>
    </>
  );
}
