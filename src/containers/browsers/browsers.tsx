import { Grid } from '@app/components';
import { browsers } from '@app/data';
import { ROUTES, getPath } from '@app/utils';

export const Browsers = () => {
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
};
