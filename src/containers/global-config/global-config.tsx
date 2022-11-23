import { Button } from '@app/components';
import { Toc } from '@app/containers';
import { ROUTES, getPath } from '@app/utils';

export const GlobalConfig = () => {
  return (
    <>
      <h2>
        <Toc.Item level={2}>Global Config</Toc.Item>
      </h2>
      <p>
        Follow the tutorials &nbsp;
        <Button link="underline" to={getPath(ROUTES.GLOBAL_CONFIG, {})}>
          here.
        </Button>
      </p>
    </>
  );
};
