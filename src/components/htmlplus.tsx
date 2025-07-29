'use client';

import { useEffect } from 'react';

import { setConfig } from '@htmlplus/ui/config.js';

import { faker } from '@faker-js/faker/locale/en';

export function HTMLPLUS() {
  useEffect(() => {
    setConfig({
      element: {
        'plus-faker': {
          property: {
            instance: faker,
          },
        },
        'plus-icon': {
          property: {
            resolver({ name }: any) {
              return import(`../../public/assets/icons/${name}.svg`).then((module) => module.default);
            },
          },
        },
        'plus-prism': {
          property: {
            theme: 'nord',
            async resolver({ key, value }: any) {
              switch (key) {
                case 'language': {
                  await import(`prismjs/components/prism-${value}.js`);
                  break;
                }
                case 'plugin': {
                  await import(`prismjs/plugins/${value}/prism-${value}.js`);
                  try {
                    return await import(`!!raw-loader!prismjs/plugins/${value}/prism-${value}.css`);
                  } catch {}
                  break;
                }
                case 'theme': {
                  try {
                    return await import(`!!raw-loader!prism-themes/themes/prism-${value}.css`);
                  } catch {
                    return await import(`!!raw-loader!prismjs/themes/prism-${value}.css`);
                  }
                }
              }
            },
          },
        },
      },
    });
    import('@htmlplus/ui');
  }, []);

  return null;
}
