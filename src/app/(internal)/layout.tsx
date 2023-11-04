import NextLink from 'next/link';

// TODO
import { AppLoadingBar } from '@/containers/app-loading-bar';

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
          {/* TODO */}
          {/* <Sidebar /> */}
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
            {/* TODO */}
            <div>
              <NextLink href="/overview" prefetch={false}>
                overview
              </NextLink>
              <NextLink href="/changelog" prefetch={false}>
                changelog
              </NextLink>
              <NextLink href="/vision" prefetch={false}>
                vision
              </NextLink>
              <NextLink href="/code-completion" prefetch={false}>
                code-completion
              </NextLink>
            </div>
            {/* TODO */}
            {/* <Sidebar /> */}
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
