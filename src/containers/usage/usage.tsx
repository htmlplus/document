import { useRouter } from 'next/router';

import { Button, Code } from '@app/components';
import { Toc } from '@app/containers';
import { components } from '@app/data';
import { ROUTES, getPath } from '@app/utils';

export const Usage = () => {
  const router = useRouter();

  const { component: key, framework } = router.query as any;

  const component = components.find((component) => component.key == key);

  const dependencies = component?.tags?.find((tag: any) => tag.key == 'dependencies')?.value || '';

  return (
    <>
      <h2>
        <Toc.Item level={2}>Usage</Toc.Item>
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
      <Code language="shell">
        {(() => {
          if (framework == 'react-dedicated') {
            return 'npm install @htmlplus/react ' + dependencies;
          }
          return 'npm install @htmlplus/core ' + dependencies;
        })()}
      </Code>
    </>
  );
};
