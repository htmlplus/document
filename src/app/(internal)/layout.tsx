// TODO
import { AppLoadingBar } from '@/containers/app-loading-bar';
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
        <AppLoadingBar />
      </div>
      <plus-drawer open={false} animation="fade" connector="main" temporary size="300px">
        <plus-card class="drawer" tile elevation={10}>
          <Sidebar />
        </plus-card>
      </plus-drawer>
      <plus-grid>
        <plus-grid-item hide-xs-up>
          <plus-drawer-toggler connector="main">
            <plus-center>
              <plus-icon name="list" size="2x" />
            </plus-center>
          </plus-drawer-toggler>
        </plus-grid-item>
      </plus-grid>
      <plus-grid>
        <plus-grid-item xs="auto" hide-lg-down>
          <plus-sticky class="sidebar-start">
            <Sidebar />
          </plus-sticky>
        </plus-grid-item>
        <plus-grid-item xs="grow">
          <plus-grid>
            <plus-grid-item xs="12" md="grow">
              <div className="content">
                {children}
                {/* TODO */}
                {/* <Contributors /> */}
                <Navigation />
              </div>
            </plus-grid-item>
            <plus-grid-item xs="12" md="auto" hide-md-down>
              <plus-sticky class="sidebar-end">
                <br />
                <Frameworks />
                <br />
                <Toc />
              </plus-sticky>
            </plus-grid-item>
          </plus-grid>
        </plus-grid-item>
      </plus-grid>
    </div>
  );
}
