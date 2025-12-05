import { Fragment, type ReactNode } from 'react';

import { notFound } from 'next/navigation';

import { kebabCase } from 'change-case';

import { Alert, Button } from '@/components';
import { ROUTES } from '@/constants';
import { Markup, TocItem } from '@/containers';
import { elements, frameworks } from '@/data';
import { getPath } from '@/utils';

interface Params {
	framework: string;
	element: string;
}

const Label = ({ children, value }: { children: ReactNode; value: string }) => {
	return (
		<div className="flex flex-col leading-normal">
			<small className="text-main-10">{value}</small>
			<div>{children}</div>
		</div>
	);
};

export function generateStaticParams(): Params[] {
	return frameworks
		.filter((framework) => !framework.disabled)
		.flatMap((framework) =>
			elements.map((element) => ({
				element: element.key,
				framework: framework.key
			}))
		);
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
		url: getPath(ROUTES.API_DETAILS, await params)
	};
}

export default async function Page({ params }: { params: Promise<Params> }) {
	const { element: elementKey } = await params;

	const element = elements.find((element) => element.key === elementKey);

	if (!element) {
		notFound();
	}

	const sections = [
		{
			key: 'property',
			title: 'Properties',
			items: element.properties || []
		},
		{
			key: 'slot',
			title: 'Slots',
			items: element.slots || []
		},
		{
			key: 'event',
			title: 'Events',
			items: (element.events || []).map((event) => ({
				...event,
				name: kebabCase(event.name)
			}))
		},
		{
			key: 'style',
			title: 'CSS Variables',
			items: element.styles || []
		},
		{
			key: 'part',
			title: 'CSS Parts',
			items: element.parts || []
		},
		{
			key: 'method',
			title: 'Methods',
			items: element.methods || []
		}
	];

	return (
		<Fragment>
			<h1>{element.title}</h1>
			<p>
				See below to learn more about properties, slots, events, style variables, CSS parts, and
				methods.
			</p>
			<Alert type="info">
				There is no difference between the APIs of the elements, And the only difference is in the
				names of the events
			</Alert>
			{sections.map((section) => (
				<Fragment key={section.key}>
					<h2>
						<TocItem level={2}>{section.title}</TocItem>
					</h2>
					{!section.items?.length && <p>There are no {section.title}.</p>}
					{section.items.map((input, index) => {
						const item = input as Record<string, string>;

						item.kind ??= section.key;

						item.type = item.detail ?? item.returns ?? item.type;

						item.typeReference = (() => {
							let reference = '';

							switch (item.kind) {
								case 'event':
									reference = item.detailReference;
									break;
								case 'method':
									reference = item.returnsReference;
									break;
								case 'property':
									reference = item.typeReference;
									break;
							}

							if (!reference) return '';

							return getPath(ROUTES.TYPE_GITHUB_LINK, {
								element: element.key,
								fileName: `${reference.slice(2)}.ts`
							});
						})();

						return (
							<Fragment key={item.name}>
								<div className="flex flex-wrap -mx-2 gap-y-2">
									<div className="w-full md:w-1/2 px-2">
										<Label value="Name">
											{item.name}
											{item.experimental && <span> (Experimental)</span>}
										</Label>
									</div>
									{['event', 'method', 'property'].includes(item.kind) && (
										<div className="w-full sm:w-1/2 md:w-auto md:grow px-2">
											{!!item.type && (
												<Label value="Type">
													{!item.typeReference && <span>{item.type}</span>}
													{!!item.typeReference && (
														<Button link target="_blank" to={item.typeReference}>
															{item.type}
														</Button>
													)}
												</Label>
											)}
										</div>
									)}
									{['style'].includes(item.kind) && <div className="hidden sm:block sm:grow"></div>}
									{['property', 'style'].includes(item.kind) && (
										<div className="w-full sm:w-1/2 md:w-auto md:basis-auto md:text-right px-2">
											<Label value="Default">{item.initializer || 'undefined'}</Label>
										</div>
									)}
									<div></div>
									{['event'].includes(item.kind) && (
										<div className="w-full px-2">
											<Label value="Cancelable">{`${!!item.cancelable}`}</Label>
										</div>
									)}
									{['property'].includes(item.kind) && (
										<Fragment>
											<div className="w-full sm:w-1/2 px-2">
												<Label value="Attribute">{item.attribute}</Label>
											</div>
											<div className="w-full sm:w-1/2 px-2">
												<Label value="Reflect">{`${!!item.reflects}`}</Label>
											</div>
										</Fragment>
									)}
									{['method'].includes(item.kind) && !!item.signature && (
										<div className="w-full px-2">
											<Label value="Signature">
												<plus-prism className="mt-1">{item.signature}</plus-prism>
											</Label>
										</div>
									)}
									{!!item.description && (
										<div className="w-full px-2">
											<Label value="Description">
												<Markup value={item.description}></Markup>
											</Label>
										</div>
									)}
								</div>
								{section.items.length - 1 > index && (
									<plus-divider className="mb-3" color="main-10" size="xs"></plus-divider>
								)}
							</Fragment>
						);
					})}
				</Fragment>
			))}
		</Fragment>
	);
}
