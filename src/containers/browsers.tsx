'use client';

import { ROUTES } from '@/constants';
import { browsers } from '@/data';
import { getPath } from '@/utils';

export function Browsers() {
  return (
    <div className="flex flex-col justify-around gap-4 sm:gap-0 sm:flex-row">
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
    </div>
  );
}
