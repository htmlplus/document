import { ReactNode, useEffect, useState } from 'react';

import Router from 'next/router';

import { Card, Center, Drawer, Grid, Icon, ProgressBar, Sticky } from '@app/components';
import { Contributors, Frameworks, Navigation, Sidebar, Toc } from '@app/containers';

interface LayoutDefaultProps {
  children: ReactNode;
}

let timeout: NodeJS.Timeout;

export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  const [progress, setProgress] = useState(0);

  // TODO
  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      setProgress(30);

      const increase = () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setProgress((progress) => progress + 1);
          increase();
        }, 50);
      };

      increase();
    });

    Router.events.on('routeChangeComplete', () => {
      clearTimeout(timeout);
      setProgress(100);
      setTimeout(() => setProgress(0), 1500);
    });

    Router.events.on('routeChangeError', () => {
      clearTimeout(timeout);
      setProgress(100);
      setTimeout(() => setProgress(0), 1500);
    });
  }, []);

  return (
    <div className="layout-default">
      {!!progress && <ProgressBar value={progress} />}
      <Drawer open={false} animation="fade" connector="main" temporary size="300px">
        <Card class="drawer" tile elevation="10">
          <Sidebar />
        </Card>
      </Drawer>
      <Grid>
        <Grid.Item hideXlUp>
          <Drawer.Toggler connector="main">
            <Center>
              <Icon name="list" size="2x" />
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
