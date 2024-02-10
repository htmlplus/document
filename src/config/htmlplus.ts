// @ts-ignore
import { setConfig } from '@htmlplus/core/config';

import { faker } from '@faker-js/faker/locale/en';

if (typeof window != 'undefined' && !location.pathname.match(/\/element\/(.*)\/example\/(.*)/)) {
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
            return import(`../../public/assets/icons/${name}.svg`).then((module: any) => module.default);
          }
        }
      }
    }
  });
}
