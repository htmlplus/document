import React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

// @ts-ignore
import { setConfig } from '@htmlplus/core/config';

import { sidebar } from '@app/data';

import '../styles/index.scss';

// HTMLPLUS CONFIG
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
        resolver(name: string, parser: any) {
          if (name == 'htmlplus') {
            return Promise.resolve(`
              <svg viewBox="0 0 1000 1000" fill="currentColor">
                <path d="M980.8,521.1L783.2,718.5c-12.2,12.2-32,12.2-44.2,0c-12.2-12.2-12.2-31.9,0-44.1L914.6,499L739,323.7c-12.2-12.2-12.2-31.9,0-44.1c12.2-12.2,32-12.2,44.2,0L980.8,477C993.1,489.2,993.1,508.9,980.8,521.1z M332.9,906.5c-9,15.7-28.9,21.1-44.5,12c-15.6-9-20.9-29.1-11.9-44.8L667.1,93.5c9-15.7,28.9-21.1,44.5-12c15.6,9.1,20.9,29.1,11.9,44.8L332.9,906.5z M261,718.5c-12.2,12.2-32,12.2-44.2,0L19.1,521.1C7,508.9,7,489.2,19.1,477l197.7-197.4c12.2-12.2,32-12.2,44.2,0c12.2,12.2,12.2,31.9,0,44.1L85.4,499L261,674.4C273.2,686.6,273.2,706.3,261,718.5z" />
              </svg>
            `);
          }
          return import(`@htmlplus/core/icon/names/${name}.js`).then((module) => module.default);
        }
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
