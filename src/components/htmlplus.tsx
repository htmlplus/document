'use client';

import { useEffect } from 'react';

import { setConfig } from '@htmlplus/ui/config.js';

import { faker } from '@faker-js/faker/locale/en';

declare module '@htmlplus/ui' {
	interface ColorOverrides {
		'alpha-black-1': true;
		'alpha-black-2': true;
		'alpha-black-3': true;
		'alpha-black-4': true;
		'alpha-black-6': true;
		'alpha-black-7': true;
		'alpha-black-8': true;
		'alpha-black-9': true;
		'alpha-black-10': true;
		'alpha-black-11': true;
		'alpha-black-12': true;

		'main-1': true;
		'main-2': true;
		'main-3': true;
		'main-4': true;
		'main-5': true;
		'main-6': true;
		'main-7': true;
		'main-8': true;
		'main-9': true;
		'main-10': true;
		'main-11': true;
		'main-12': true;

		'primary-1': true;
		'primary-2': true;
		'primary-3': true;
		'primary-4': true;
		'primary-5': true;
		'primary-6': true;
		'primary-7': true;
		'primary-8': true;
		'primary-9': true;
		'primary-10': true;
		'primary-11': true;
		'primary-12': true;
	}
}

export function HTMLPLUS() {
	useEffect(() => {
		setConfig({
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
								return import(`../../public/assets/icons/${name}.svg`).then(
									(module) => module.default
								);
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
							default: async ({ key, value }: { key: string; value: string }) => {
								switch (key) {
									case 'language': {
										await import(`prismjs/components/prism-${value}.js`);
										break;
									}
									case 'plugin': {
										await import(`prismjs/plugins/${value}/prism-${value}.js`);
										try {
											return await import(
												`!!raw-loader!prismjs/plugins/${value}/prism-${value}.css`
											);
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
							}
						}
					}
				}
			}
		});
		import('@htmlplus/ui');
	}, []);

	return null;
}
