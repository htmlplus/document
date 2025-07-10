import { PropsWithChildren } from 'react';

import { AppLoadingBar, Contributors, Frameworks, Navigation, Sidebar, Toc } from '@/containers';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="layout-default">
      <AppLoadingBar></AppLoadingBar>
      <plus-drawer open={false} animation backdrop={true} connector="main" floating="on-lg-down" size="300px">
        <plus-card className="h-full" tile elevation={10}>
          <Sidebar></Sidebar>
        </plus-card>
      </plus-drawer>
      <plus-drawer-toggler className="p-2 fixed top-0 left-0 block xl:hidden" connector="main">
        <plus-center>
          <plus-icon className="text-primary" name="list" size="2x"></plus-icon>
        </plus-center>
      </plus-drawer-toggler>
      <div className="flex">
        <plus-sticky className="h-screen flex-initial hidden xl:block">
          <Sidebar></Sidebar>
        </plus-sticky>
        <plus-divider className="hidden xl:flex" width="xs" vertical></plus-divider>
        <div className="grow flex min-w-0">
          <div className="max-w-[768px] mx-auto px-8 min-w-0">
            {children}
            <Contributors></Contributors>
            <Navigation></Navigation>
          </div>
          <div className="hidden lg:block">
            <plus-sticky className="pr-4 w-[272px]">
              <br />
              <Frameworks></Frameworks>
              <br />
              <Toc></Toc>
              <br />
            </plus-sticky>
          </div>
        </div>
      </div>
    </div>
  );
}
