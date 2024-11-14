'use client';

import { useEffect, useRef } from 'react';

import { usePathname } from 'next/navigation';

export function AppLoadingBar() {
  const $ref = useRef<HTMLPlusAppProgressBarElement>();

  const pathname = usePathname(); 

  useEffect(() => {
    $ref.current?.done?.();
    return () => $ref.current?.start?.();
  }, [pathname]);

  return <plus-app-progress-bar ref={$ref}></plus-app-progress-bar>;
}
