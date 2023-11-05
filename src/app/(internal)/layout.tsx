// TODO
import { AppLoadingBar } from '@/containers/app-loading-bar';
import { Sidebar } from '@/containers/sidebar';

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
        <plus-grid-item hideXlUp>
          <plus-drawer-toggler connector="main">
            <plus-center>
              <plus-icon name="list" size="2x" />
            </plus-center>
          </plus-drawer-toggler>
        </plus-grid-item>
      </plus-grid>
      <plus-grid>
        <plus-grid-item xs="auto" hideLgDown>
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
                {/* TODO */}
                {/* <Navigation /> */}
              </div>
            </plus-grid-item>
            <plus-grid-item xs="12" md="auto" hideMdDown>
              <plus-sticky className="sidebar-end">
                <br />
                {/* TODO */}
                {/* <Frameworks /> */}
                <br />
                {/* TODO */}
                {/* <Toc /> */}
              </plus-sticky>
            </plus-grid-item>
          </plus-grid>
        </plus-grid-item>
      </plus-grid>
    </div>
  );
}
