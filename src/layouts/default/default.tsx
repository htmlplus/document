import { ReactNode } from 'react';

import { Card, Center, Drawer, Grid, Icon, Sticky } from '@app/components';
import { Contributors, Frameworks, Navigation, Sidebar, Toc } from '@app/containers';

interface LayoutDefaultProps {
  children: ReactNode;
}

export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <div className="layout-default">
      <Drawer open={false} animation="fade" connector="main" temporary size="300px">
        <Card class="drawer" tile elevation="10">
          <Sidebar />
        </Card>
      </Drawer>
      <Grid>
        <Grid.Item hideXlUp>
          <Drawer.Toggler connector="main">
            <Center>
              <Icon name="app/menu" size="2x" />
            </Center>
          </Drawer.Toggler>
        </Grid.Item>
      </Grid>
      <Grid>
        <Grid.Item xs="auto" hideLgDown>
          <Sticky class="sidebar-start">
            <Sidebar />
          </Sticky>
        </Grid.Item>
        <Grid.Item xs="grow">
          <Grid>
            <Grid.Item xs="12" md="grow">
              <div className="content">
                {children}
                <Contributors />
                <Navigation />
              </div>
            </Grid.Item>
            <Grid.Item xs="12" md="auto" hideMdDown>
              <Sticky className="sidebar-end">
                <br />
                <Frameworks />
                <br />
                <Toc />
              </Sticky>
            </Grid.Item>
          </Grid>
        </Grid.Item>
      </Grid>
    </div>
  );
};
