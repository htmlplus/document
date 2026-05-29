import type { Config } from '@htmlplus/ui/config.js';

import { faker } from '@faker-js/faker/locale/en';

export const config: Config = {
	elements: {
		'plus-faker': {
			properties: {
				instance: {
					default: faker
				}
			}
		},
		'plus-icon': {
			properties: {
				resolver: {
					default: ({ name }: { name: string }) => {
						return import(`./assets/icons/${name}.svg`).then((module) => module.default);
					}
				}
			}
		},
		'plus-prism': {
			properties: {
				theme: {
					default: 'nord'
				},
				resolver: {
					// default: async ({ key, value }: { key: string; value: string }) => {
					// 	switch (key) {
					// 		case 'language': {
					// 			await import(`prismjs/components/prism-${value}.js`);
					// 			break;
					// 		}
					// 		case 'theme': {
					// 			return await import(`prism-themes/themes/prism-${value}.css`).then(
					// 				(module) => module.default
					// 			);
					// 		}
					// 	}
					// }
				}
			}
		}
	}
};
