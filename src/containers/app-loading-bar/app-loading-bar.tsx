'use client';

import Router from 'next/router';

import { useEffect, useState } from 'react';

// TODO
let timeout: NodeJS.Timeout;

export function AppLoadingBar() {
  const [progress, setProgress] = useState(0);

  // TODO
  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      setProgress(30);

      const increase = () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setProgress((progress) => progress + 1);
          increase();
        }, 50);
      };

      increase();
    });

    Router.events.on('routeChangeComplete', () => {
      clearTimeout(timeout);
      setProgress(100);
      setTimeout(() => setProgress(0), 1000);
    });

    Router.events.on('routeChangeError', () => {
      clearTimeout(timeout);
      setProgress(100);
      setTimeout(() => setProgress(0), 1500);
    });
  }, []);

  if (!progress) return null;

  return <plus-progress-bar value={progress}></plus-progress-bar>;
}
