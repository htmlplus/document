import { notFound } from 'next/navigation';

import { capitalCase } from 'change-case';

import { Alert, Button } from '@/components';
import { ROUTES } from '@/constants';
import { elements } from '@/data';
import { getPath, renderCode } from '@/utils';

type Params = {
	element: string;
};

export function generateStaticParams() {
	return elements.map<Params>((element) => ({ element: element.key }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
	const { element: elementKey } = await params;

	const element = elements.find((element) => element.key === elementKey);

	if (!element) notFound();

	return {};
}

export default async function Page({ params }: { params: Promise<Params> }) {
	const { element: elementKey } = await params;

	const element = elements.find((element) => element.key === elementKey);

	if (!element) notFound();

	return (
		<>
			<h1>{capitalCase(element.key)} global config</h1>
			<p>
				All of the element's APIs are configurable as below. Full&nbsp;
				<Button href={getPath(ROUTES.GLOBAL_CONFIGURATION)} variant="link">
					documentation
				</Button>
				&nbsp;is available.
			</p>
			<Alert type="warning">Some of properties don't make sense in the global config.</Alert>
			<br />
			<plus-prism>
				{renderCode([
					`import { setConfig } from '@htmlplus/ui/config.js';`,
					``,
					`setConfig({`,
					[
						`elements: {`,
						[
							`'${element.tag}': {`,
							[
								`properties: {`,
								...element.properties.map((property) => [
									`'${property.name}': {`,
									[`default: ${'initializer' in property ? property.initializer : 'undefined'}`],
									`},`
								]),
								`}`
							],
							`}`
						],
						`}`
					],
					`});`
				])}
			</plus-prism>
		</>
	);
}
