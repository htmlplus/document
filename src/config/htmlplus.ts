import { faker } from '@faker-js/faker/locale/en'
// @ts-ignore
import { setConfig } from '@htmlplus/core/config';

if (typeof window != 'undefined' && !location.pathname.match(/\/component\/(.*)\/example\/(.*)/)) {
  setConfig({
    component: {
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
