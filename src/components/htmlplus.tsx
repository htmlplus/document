'use client';

import { useEffect } from 'react';

import { setConfig } from '@htmlplus/ui/config.js';

import { faker } from '@faker-js/faker/locale/en';

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
