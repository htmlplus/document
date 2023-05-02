import { Button, Grid, Icon } from '@app/components';
import { useSidebar } from '@app/hooks';

export const Navigation = () => {
  const sidebar = useSidebar();
  return (
    <p>
      <Grid justifyContent="between" alignItems="center">
        <Grid.Item xs="auto">
          {!!sidebar.prev && (
            <Button link to={sidebar.prev.url}>
              <Grid alignItems="center" gutterX="md" wrap="off">
                <Grid.Item>
                  <Icon name="chevron-left" size="lg" />
                </Grid.Item>
                <Grid.Item>
                  <Grid alignItems="start" vertical>
                    <Grid.Item>
                      <b>Prev</b>
                    </Grid.Item>
                    <Grid.Item>{sidebar.prev.title}</Grid.Item>
                  </Grid>
                </Grid.Item>
              </Grid>
            </Button>
          )}
        </Grid.Item>
        <Grid.Item xs="auto">
          {!!sidebar.next && (
            <Button link to={sidebar.next.url}>
              <Grid alignItems="center" gutterX="md" wrap="off">
                <Grid.Item>
                  <Grid alignItems="end" vertical>
                    <Grid.Item>
                      <b>Next</b>
                    </Grid.Item>
                    <Grid.Item>{sidebar.next.title}</Grid.Item>
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
