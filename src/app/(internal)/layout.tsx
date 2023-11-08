'use client';

// TODO
import { Card, Center, Drawer, Grid, Icon, Sticky } from '@/components';
import { AppLoadingBar } from '@/containers/app-loading-bar';
import { Contributors } from '@/containers/contributors';
import { Frameworks } from '@/containers/frameworks';
import { Navigation } from '@/containers/navigation';
import { Sidebar } from '@/containers/sidebar';
import { Toc } from '@/containers/toc';

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <div className="layout-default">
      <div className="app-loading-bar">
        <AppLoadingBar></AppLoadingBar>
      </div>
      <Drawer open={false} animation="fade" connector="main" temporary size="300px">
        <Card className="drawer" tile elevation={10}>
          <Sidebar></Sidebar>
        </Card>
      </Drawer>
      <Grid>
        <Grid.Item hideXlUp>
          <Drawer.Toggler connector="main">
            <Center>
              <Icon name="list" size="2x"></Icon>
            </Center>
          </Drawer.Toggler>
        </Grid.Item>
      </Grid>
      <Grid>
        <Grid.Item xs="auto" hideLgDown>
          <Sticky className="sidebar-start">
            <Sidebar></Sidebar>
          </Sticky>
        </Grid.Item>
        <Grid.Item xs="grow">
          <Grid>
            <Grid.Item xs="12" md="grow">
              <div className="content">
                {children}
                <Contributors></Contributors>
                <Navigation></Navigation>
              </div>
            </Grid.Item>
            <Grid.Item xs="12" md="auto" hideMdDown>
              <Sticky className="sidebar-end">
                <br />
                <Frameworks></Frameworks>
                <br />
                <Toc></Toc>
              </Sticky>
            </Grid.Item>
          </Grid>
        </Grid.Item>
      </Grid>
    </div>
  );
}
