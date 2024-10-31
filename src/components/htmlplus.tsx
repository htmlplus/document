// TODO

'use client';

import { useEffect } from 'react';

import { faker } from '@faker-js/faker/locale/en';
import { setConfig } from '@htmlplus/ui/config.js';

export function HTMLPLUS() {
  useEffect(() => {
    if (!location.pathname.match(/\/element\/(.*)\/example\/(.*)/)) {
      setConfig({
        element: {
          'plus-divider': {
            property: {
              // TODO: has conflict with examples
              // width: 'xs'
            }
          },
          'plus-faker': {
            property: {
              instance: faker
            }
          },
          'plus-icon': {
            property: {
              async resolver(name: string) {
                return import(`../../public/assets/icons/${name}.svg`).then((module) => module.default);
              }
            }
          }
        }
      });
    }
    import('@htmlplus/ui');
  }, []);

  return null;
}
