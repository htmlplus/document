import React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

// @ts-ignore
import { setConfig } from '@htmlplus/core/config.js';

import { sidebar } from '@app/data';

import '../styles/index.scss';

setConfig({
  component: {
    'plus-divider': {
      property: {
        // TODO: has conflict with examples
        // width: 'xs'
      }
    }
  }
});

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // TODO
  const { meta } =
    sidebar(router.query?.framework as string)
      .map((item) => item.items)
      .flat()
      .find((item) => item?.url == router.asPath) || ({} as any);

  return (
    <React.StrictMode>
      <Head>
        <title>{meta?.title ? `${meta?.title} - HTMLPLUS` : 'HTMLPLUS'}</title>

        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" /> */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* TODO */}
        {/* <link rel="manifest" href="/manifest.json" /> */}

        {/* TODO */}
        <meta name="description" content={meta?.description} />
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
        <meta property="og:url" content={meta?.url} />
      </Head>
      <Component {...pageProps} />
    </React.StrictMode>
  );
};

export default App;
