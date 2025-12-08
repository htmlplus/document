import { notFound } from 'next/navigation';

import { capitalCase } from 'change-case';

import { Alert, Button } from '@/components';
import { ROUTES } from '@/constants';
import { elements } from '@/data';
import { getPath } from '@/utils';

interface Params {
	element: string;
}

export function generateStaticParams() {
	return elements.map<Params>((element) => ({ element: element.key }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
	const { element: elementKey } = await params;

	const element = elements.find((element) => element.key === elementKey);

	if (!element) {
		notFound();
	}

	return {
		title: element.title,
		description: element.description,
		url: getPath(ROUTES.ELEMENT_CONFIG, await params)
	};
}

export default async function Page({ params }: { params: Promise<Params> }) {
	const { element: elementKey } = await params;

	const element = elements.find((element) => element.key === elementKey);

	if (!element) {
		notFound();
	}

	return (
		<>
			<h1>{capitalCase(element.key)} global config</h1>
			<p>
				All of the element's APIs are configurable as below. Full&nbsp;
				<Button link="underline" to={getPath(ROUTES.GLOBAL_CONFIG)}>
					documentation
				</Button>
				&nbsp;is available.
			</p>
			<Alert type="warning">Some of properties don't make sense in the global config.</Alert>
			<br />
			<plus-prism>
				{[
					// TODO
					`import { setConfig } from '@htmlplus/ui/config.js';`,
					``,
					`setConfig({`,
					`  elements: {`,
					// TODO: remove plus
					`    'plus-${element.key}': {`,
					`      properties: {`,
					element.properties.map((property) => {
						return `        ${property.name}: { \n          default: ${'initializer' in property ? property.initializer : 'undefined'}\n        },`;
					}),
					`      }`,
					`    }`,
					`  }`,
					`});`
				]
					.flat()
					.join('\n')}
			</plus-prism>
		</>
	);
}
