import type { PropsWithChildren } from 'react';

import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import { HTMLPLUS } from '@/components';
// TODO
import '@/styles/index.scss';

export const metadata: Metadata = {
	title: 'HTMLPLUS'
	// TODO
	// <meta name="description" content={meta?.description} />
	// <meta name="twitter:card" content="summary" />
	// <meta name="twitter:description" content={meta?.description} />
	// <meta name="twitter:image" content="/public/favicon.ico" />
	// <meta name="twitter:title" content={meta?.title} />
	// <meta name="twitter:site" content="@htmlplusio" />
	// <meta property="og:description" content={meta?.description} />
	// <meta property="og:image" content="/public/favicon.ico" />
	// <meta property="og:title" content={meta?.title} />
	// <meta property="og:ttl" content="604800" />
	// <meta property="og:type" content="website" />
	// <meta property="og:url" content={meta?.url} />
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<GoogleAnalytics gaId="G-TTTXW9HNLT" />
			<body>
				{children}
				<HTMLPLUS />
			</body>
		</html>
	);
}
