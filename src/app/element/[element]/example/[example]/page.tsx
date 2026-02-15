import { notFound } from 'next/navigation';

import { pascalCase } from 'change-case';

import { examples } from '@/data';
import * as Examples from '@/examples';

type Params = {
	element: string;
	example: string;
};

export function generateStaticParams() {
	return examples.map<Params>((example) => ({
		element: example.key.split('/').at(1) || '',
		example: example.key.split('/').at(2) || ''
	}));
}

export default async function Page({ params }: { params: Promise<Params> }) {
	const { element, example } = await params;

	const name = pascalCase(`${element} ${example}`);

	if (!(name in Examples)) notFound();

	// biome-ignore lint: TODO
	const Preview = Examples[name as keyof typeof Examples];

	return <Preview />;
}
