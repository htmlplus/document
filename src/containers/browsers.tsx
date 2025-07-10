'use client';

import { ROUTES } from '@/constants';
import { browsers } from '@/data';
import { getPath } from '@/utils';

export function Browsers() {
  return (
    <plus-stack
      justify="around"
      override={{
        'sm-down': {
          gap: '1rem',
          vertical: true,
        },
        'sm-and-up': {
          gap: '0',
          vertical: false,
        },
      }}
    >
      {browsers.map((browser) => (
        <plus-stack key={browser.key} vertical>
          <img
            width="64"
            height="64"
            alt={browser.title}
            src={getPath(ROUTES.ASSETS, { filepath: `browsers/${browser.logo}` })}
          />
          <p>{browser.title}</p>
        </plus-stack>
      ))}
    </plus-stack>
  );
}
