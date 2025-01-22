import { PropsWithChildren } from 'react';

import dynamic from 'next/dynamic';

export const NoSSR = dynamic(
  async () =>
    ({ children }: PropsWithChildren) =>
      children,
  { ssr: false },
);
