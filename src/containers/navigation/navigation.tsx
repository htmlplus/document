import { useMemo } from 'react';

import { useRouter } from 'next/router';

import { Button, Grid, Icon } from '@app/components';
import { sidebar } from '@app/data';
import { useStore } from '@app/hooks';

export const Navigation = () => {
  const router = useRouter();

  const store = useStore();

  const [prev, current, next] = useMemo(() => {
    const items = sidebar(store.framework!)
      .map((item) => item?.items?.map((sub) => ({ ...sub, category: item.title })))
      .flat()
      .filter((item) => !!item?.url);
    const index = items.findIndex((item) => router.asPath.startsWith(item?.url!));
    return items.slice(index - 1, index + 3);
  }, [router.asPath, store.framework]);

  return (
    <p>
      <Grid justifyContent="between" alignItems="center">
        <Grid.Item xs="auto">
          {!!prev && (
            <Button link to={prev.url}>
              <Grid alignItems="center" gutterX="md" wrap="off">
                <Grid.Item>
                  <Icon name="chevron-left" size="lg" />
                </Grid.Item>
                <Grid.Item>
                  <Grid alignItems="start" vertical>
                    <Grid.Item>
                      <b>Prev</b>
                    </Grid.Item>
                    <Grid.Item>{prev.title}</Grid.Item>
                  </Grid>
                </Grid.Item>
              </Grid>
            </Button>
          )}
        </Grid.Item>
        <Grid.Item xs="auto">
          {!!next && (
            <Button link to={next.url}>
              <Grid alignItems="center" gutterX="md" wrap="off">
                <Grid.Item>
                  <Grid alignItems="end" vertical>
                    <Grid.Item>
                      <b>Next</b>
                    </Grid.Item>
                    <Grid.Item>{next.title}</Grid.Item>
                  </Grid>
                </Grid.Item>
                <Grid.Item>
                  <Icon name="chevron-right" size="lg" />
                </Grid.Item>
              </Grid>
            </Button>
          )}
        </Grid.Item>
      </Grid>
    </p>
  );
};
