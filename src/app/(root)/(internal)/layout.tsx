import type { PropsWithChildren } from 'react';

import { AppLoadingBar, Contributors, Frameworks, Navigation, Sidebar, Toc } from '@/containers';

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div>
			<AppLoadingBar></AppLoadingBar>
			<plus-drawer-toggler className="p-2 fixed top-0 left-0 block xl:hidden" connector="main">
				<plus-center>
					<plus-icon className="text-primary-9" name="list" size="2x"></plus-icon>
				</plus-center>
			</plus-drawer-toggler>
			<div className="flex">
				<plus-drawer
					animation
					backdrop
					connector="main"
					size="300px"
					overrides={{
						xs: {
							backdrop: true,
							floating: true,
							open: false
						},
						lg: {
							backdrop: false,
							floating: false,
							open: true
						}
					}}
				>
					<plus-sticky className="h-screen">
						<plus-card className="h-full" tile elevation={1}>
							<Sidebar></Sidebar>
						</plus-card>
					</plus-sticky>
				</plus-drawer>
				<div className="grow flex min-w-0">
					<div className="typography max-w-[768px] mx-auto px-8 min-w-0 w-full">
						{children}
						<Contributors></Contributors>
						<br />
						<Navigation></Navigation>
					</div>
					<div className="hidden md:block">
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
