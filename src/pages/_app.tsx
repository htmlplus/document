import React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

// @ts-ignore
import { setConfig } from '@htmlplus/core/config.js';

import '../styles/index.scss';

setConfig({
  component: {
    'plus-divider': {
      property: {
        width: 'xs'
      }
    }
  }
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.StrictMode>
      <Head>
        <title>HTMLPLUS</title>

        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" /> */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" /> */}

        {/* TODO */}
        {/* <link rel="manifest" href="/manifest.json" /> */}
      </Head>
      <Component {...pageProps} />
    </React.StrictMode>
  );
};

export default App;
