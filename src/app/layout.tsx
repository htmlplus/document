'use client';

// TODO
import '@/config/htmlplus';
import '@/styles/index.scss';

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <html lang="en">
      <head>
        <title>HTMLPLUS</title>

        <link rel="icon" href="/favicon.ico" />

        {/* TODO */}
        {/* <meta name="description" content={meta?.description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={meta?.description} />
        <meta name="twitter:image" content="/public/favicon.ico" />
        <meta name="twitter:title" content={meta?.title} />
        <meta name="twitter:site" content="@htmlplusio" />
        <meta property="og:description" content={meta?.description} />
        <meta property="og:image" content="/public/favicon.ico" />
        <meta property="og:title" content={meta?.title} />
        <meta property="og:ttl" content="604800" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta?.url} /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
