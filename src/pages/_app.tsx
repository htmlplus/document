import React from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';

// @ts-ignore
import { setConfig } from '@htmlplus/core/config';

import '../styles/index.scss';

// HTMLPLUS CONFIG
if (typeof window != 'undefined' && !location.pathname.match(/\/component\/(.*)\/example\/(.*)/)) {
  setConfig({
    component: {
      'plus-divider': {
        property: {
          // TODO: has conflict with examples
          // width: 'xs'
        }
      },
      'plus-icon': {
        property: {
          async resolver(name: string) {
            return import(`../../public/assets/icons/${name}.svg`).then((module: any) => module.default);
          }
        }
      }
    }
  });
}

export default function App({ Component, pageProps }: AppProps) {
  const meta = pageProps?.meta;
  return (
    <React.StrictMode>
      <Head>
        <title>HTMLPLUS</title>

        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

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
}
