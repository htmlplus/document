import { Fragment } from 'react';

import Image from 'next/image';

import PACKAGE from '@htmlplus/ui/package.json';

import { Button } from '@/components';
import { FRAMEWORK_DEFAULT, ROUTES } from '@/constants';
import { statistics } from '@/data';
import { getPath } from '@/utils';

import { Feature } from './Feature';
import { Frameworks } from './Frameworks';

export default async function Home() {
	return (
		<div className="home">
			<header className="flex items-center h-16 bg-main-2">
				<div className="max-w-screen-lg mx-auto px-4 flex grow items-center gap-4">
					<plus-icon name="htmlplus" size="2rem"></plus-icon>
					<div className="hidden sm:flex items-center">
						<Button href={getPath(ROUTES.OVERVIEW)} variant="ghost">
							Document
						</Button>
						<Button
							href={getPath(ROUTES.ELEMENT_DETAILS, {
								framework: FRAMEWORK_DEFAULT,
								element: 'accordion'
							})}
							variant="ghost"
						>
							Elements
						</Button>
						<Button href={getPath(ROUTES.ROADMAP)} variant="ghost">
							Roadmap
						</Button>
					</div>
					<div className="flex grow"></div>
					<div className="hidden lg:flex items-center gap-3">
						<Button href="https://opencollective.com/htmlplus" variant="secondary">
							Become a sponsor
						</Button>
						<Button href={getPath(ROUTES.GITHUB_URL)} target="_blank" variant="main">
							<plus-icon name="github"></plus-icon>
							Github
						</Button>
					</div>
				</div>
			</header>
			<main className="relative pt-12">
				<div className="absolute top-0 left-0 right-0 -z-10 h-[calc(100%+4rem)] bg-main-2 [clip-path:polygon(0_0%,100%_0%,100%_82%,0%_100%)]" />
				<div className="max-w-screen-lg mx-auto px-4">
					<div className="flex flex-col items-center gap-8 lg:flex-row">
						<div className="flex flex-col items-center gap-8 lg:items-start basis-1/2">
							<Button
								className="font-2-500 text-main-11 !h-8 !p-[4px] !rounded-full"
								href={getPath(ROUTES.CHANGELOG)}
								variant="invert"
							>
								<plus-stack gap="0.75rem">
									<div className="font-2-500 px-2 py-[2px] rounded-full text-main-11 bg-main-4">
										{PACKAGE.version}
									</div>
									<div>A new version of HTMLPLUS is out</div>
									{/* TODO: svg is thin */}
									<plus-icon name="arrow-right-short" size="1rem"></plus-icon>
								</plus-stack>
							</Button>
							<div className="flex flex-col items-center gap-6 lg:items-start text-center lg:text-start">
								<h1 className="font-9-600">The Most Flexible Open Source Web UI Library!</h1>
								<p className="font-4-400 text-alpha-black-7">
									A pure JavaScript web UI library delivering lightweight, customizable, and fast
									elements for modern browsers and frameworks.
								</p>
								<div className="w-full">
									<div className="flex flex-col gap-4 sm:flex-row items-stretch justify-center lg:justify-start lg:items-center">
										<plus-snippet symbol="$">npm i {PACKAGE.name}</plus-snippet>
										<Button
											href={getPath(ROUTES.ELEMENT_DETAILS, {
												framework: FRAMEWORK_DEFAULT,
												element: 'accordion'
											})}
											variant="invert"
										>
											Get Started
											<plus-icon name="arrow-right"></plus-icon>
										</Button>
									</div>
								</div>
							</div>
							<div className="w-full">
								<div className="flex flex-col items-center gap-6 sm:flex-row justify-center lg:justify-start">
									<plus-avatar-group hoverable stacked>
										{['hazhirmohammadi', 'mbpmohsen', 'abdolian'].map((contributor) => (
											<Fragment key={contributor}>
												<plus-avatar className="-me-3" shape="circle" size="2rem">
													<Image
														alt={`Contributor ${contributor}`}
														src={getPath(ROUTES.CONTRIBUTOR, { contributor, size: 32 })}
														width="32"
														height="32"
														unoptimized
													/>
													<Button
														href={getPath(ROUTES.CONTRIBUTOR_GITHUB, { contributor })}
														target="_blank"
														variant="raw"
													>
														&nbsp;
													</Button>
												</plus-avatar>
												<plus-tooltip>{contributor}</plus-tooltip>
											</Fragment>
										))}
									</plus-avatar-group>
									<div className="text-alpha-black-7">Top Developers</div>
								</div>
							</div>
						</div>
						<div className="hidden lg:flex items-center basis-1/2 h-[547px] justify-center">
							<Image alt="" src="/assets/shape.png" width="384" height="384" />
						</div>
					</div>
				</div>
			</main>
			<main className="max-w-screen-lg mx-auto px-4">
				<div className="flex flex-col gap-8 items-center justify-center my-24 lg:flex-row lg:items-start">
					<Feature
						className="basis-1/3"
						title="Frameworks"
						description="Supports a wide range of frameworks and libraries, with ongoing efforts to include more."
						icon="puzzle"
						metric={statistics.frameworks}
					/>
					<plus-divider
						className="self-stretch"
						color="main-10"
						size="xs"
						inset="both"
						overrides={{
							lg: {
								inset: 'none',
								orientation: 'vertical'
							}
						}}
					/>
					<Feature
						className="basis-1/3"
						title="Elements"
						description="Powerful set of elements designed to integrate smoothly into any JavaScript project."
						icon="puzzle"
						metric={statistics.elements}
					/>
					<plus-divider
						className="self-stretch"
						color="main-10"
						size="xs"
						inset="both"
						overrides={{
							lg: {
								inset: 'none',
								orientation: 'vertical'
							}
						}}
					/>
					<Feature
						className="basis-1/3"
						title="Examples"
						description="Simplified samples are provided to demonstrate the capabilities of the elements."
						icon="puzzle"
						metric={statistics.examples}
					/>
				</div>
				<Frameworks />
			</main>
		</div>
	);
}
