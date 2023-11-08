'use client';

import { Grid } from '@/components';
import { ROUTES } from '@/constants';
import { browsers } from '@/data';
import { getPath } from '@/utils';

export function Browsers() {
  return (
    <Grid gutterY="lg">
      {browsers.map((browser) => (
        <Grid.Item xs="12" sm="grow" key={browser.key}>
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
        </Grid.Item>
      ))}
    </Grid>
  );
}
