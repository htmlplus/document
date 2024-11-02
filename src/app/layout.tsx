import type { Metadata } from 'next';

import { HTMLPLUS } from '@/components';
import { GoogleAnalytics } from '@next/third-parties/google'

// TODO
import '@/styles/index.scss';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'HTMLPLUS',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* TODO */}
      {/* <GoogleAnalytics gaId="G-TTTXW9HNLT" /> */}
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-TTTXW9HNLT"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TTTXW9HNLT');
        `}
      </Script>
      <body>
        {children}
        <HTMLPLUS />
      </body>
    </html>
  );
} 