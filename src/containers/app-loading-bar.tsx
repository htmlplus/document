'use client';

import { useEffect, useRef, useState } from 'react';

import { usePathname } from 'next/navigation';

import { ProgressBar } from '@/components';

export function AppLoadingBar() {
  const timeout = useRef<NodeJS.Timeout>();

  const [progress, setProgress] = useState(0);

  const pathname = usePathname();

  function start() {
    setProgress(30);

    const increase = () => {
      clearTimeout(timeout.current);

      timeout.current = setTimeout(() => {
        setProgress((progress) => progress + 1);
        increase();
      }, 50);
    };

    increase();
  }

  function stop() {
    clearTimeout(timeout.current);

    setProgress(100);

    setTimeout(() => setProgress(0), 1000);
  }

  useEffect(() => {
    stop();
    return () => start();
  }, [pathname]);

  if (!progress) return null;

  return <ProgressBar value={progress}></ProgressBar>;
}
