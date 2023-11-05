'use client';

import { ROUTES } from '@/constants';
import { browsers } from '@/data';
import { getPath } from '@/utils';

export function Browsers() {
  return (
    <plus-grid gutterY="lg">
      {browsers.map((browser) => (
        <plus-grid-item xs="12" sm="grow" key={browser.key}>
          {/* TODO */}
          <div style={{ textAlign: 'center', minWidth: 100 }}>
            <img
              width="64"
              height="64"
              alt={browser.title}
              src={getPath(ROUTES.ASSETS, { filepath: `browsers/${browser.logo}` })}
            />
            <br />
            <p>{browser.title}</p>
          </div>
        </plus-grid-item>
      ))}
    </plus-grid>
  );
}
