import { notFound } from 'next/navigation';

import { capitalCase } from 'change-case';

import { elements } from '@/data';
import { generateInterfaceNext, renderCode } from '@/utils';

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
			<h1>{capitalCase(element.key)} disable APIs</h1>
			TODO
			<plus-prism>{renderCode(generateInterfaceNext(element))}</plus-prism>
		</>
	);
}
