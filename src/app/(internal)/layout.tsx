import { PropsWithChildren } from 'react';

import { AppLoadingBar, Contributors, Frameworks, Navigation, Sidebar, Toc } from '@/containers';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="layout-default">
      <AppLoadingBar></AppLoadingBar>
      <plus-drawer open={false} animation backdrop={true} connector="main" floating="on-lg-down" size="300px">
        <plus-card class="drawer" tile elevation={10}>
          <Sidebar></Sidebar>
        </plus-card>
      </plus-drawer>
      <plus-grid>
        <plus-grid-item hide-xl-up>
          <plus-drawer-toggler connector="main">
            <plus-center>
              <plus-icon name="list" size="2x"></plus-icon>
            </plus-center>
          </plus-drawer-toggler>
        </plus-grid-item>
      </plus-grid>
      <plus-grid>
        <plus-grid-item xs="auto" hide-lg-down>
          <plus-sticky class="sidebar-start">
            <Sidebar></Sidebar>
          </plus-sticky>
        </plus-grid-item>
        <plus-divider width="xs" vertical></plus-divider>
        <plus-grid-item xs="grow">
          <plus-grid>
            <plus-grid-item xs="12" md="grow">
              <div className="content">
                {children}
                <Contributors></Contributors>
                <Navigation></Navigation>
              </div>
            </plus-grid-item>
            <plus-grid-item xs="12" md="auto" hide-md-down>
              <plus-sticky class="sidebar-end">
                <br />
                <Frameworks></Frameworks>
                <br />
                <Toc></Toc>
                <br />
              </plus-sticky>
            </plus-grid-item>
          </plus-grid>
        </plus-grid-item>
      </plus-grid>
    </div>
  );
}
