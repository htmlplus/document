import { useRouter } from 'next/router';

import { Button } from '@app/components';
import { Toc } from '@app/containers';
import { ROUTES, getPath } from '@app/utils';

export const GlobalConfig = () => {
  const router = useRouter();

  const { component, framework } = router.query as any;

  return (
    <>
      <h2>
        <Toc.Item level={2}>Global Config</Toc.Item>
      </h2>
      <p>
        See the animation's
        <Button link="underline" to={getPath(ROUTES.COMPONENT_CONFIG, { component, framework })}>
          &nbsp;config
        </Button>
        . Full
        <Button link="underline" to={getPath(ROUTES.GLOBAL_CONFIG, {})}>
          &nbsp;documentation&nbsp;
        </Button>
        is available.
      </p>
    </>
  );
};
