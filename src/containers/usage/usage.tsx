'use client';

// TODO
// import { useRouter } from 'next/router';
import { Button, Code } from '@/components';
import { ROUTES } from '@/constants';
import { TocItem } from '@/containers';
import { getPath } from '@/utils';

export function Usage() {
  // TODO
  // const router = useRouter();

  // TODO
  const { component = 'avatar', framework = 'svelte' } = {} as any;

  // TODO
  // const dependencies = componentsLight.find((item) => item.key == component)?.dependencies?.join(' ') || '';
  const dependencies = '';

  let dependency;

  if (framework == 'react-dedicated') {
    dependency = 'npm install @htmlplus/react ';
  } else {
    dependency = 'npm install @htmlplus/core ';
  }

  dependency += dependencies;

  return (
    <>
      <h2>
        <TocItem level={2}>Usage</TocItem>
      </h2>
      <p>
        Follow the tutorials &nbsp;
        <Button link="underline" to={getPath(ROUTES.INSTALLATION_FRAMEWORK, { framework })}>
          here
        </Button>
        &nbsp; to use the &nbsp;
        <b>HTMLPLUS</b>
        &nbsp; library on &nbsp;
        <b>{(framework as string).toUpperCase()}</b>
        &nbsp; projects.
      </p>
      <Code language="shell">{dependency}</Code>
    </>
  );
}
