import { Fragment } from 'react';

import NextLink from 'next/link';

import PACKAGE from '@htmlplus/ui/package.json';

import { FRAMEWORK_DEFAULT, ROUTES } from '@/constants';
import { statistics } from '@/data';
import { getPath } from '@/utils';

import { Feature } from './Feature';
import { Frameworks } from './Frameworks';

export default async function Home() {
  return (
    <div className="home">
      <header className="flex items-center h-16 bg-main-2">
        <div className="container mx-auto px-4 flex items-center gap-8">
          <plus-icon name="htmlplus" size="2rem"></plus-icon>
          <div className="hidden sm:flex items-center gap-6">
            <NextLink href={getPath(ROUTES.OVERVIEW, {})!}>Document</NextLink>
            <NextLink href={getPath(ROUTES.ELEMENT_DETAILS, { framework: FRAMEWORK_DEFAULT, element: 'accordion' })!}>
              Elements
            </NextLink>
            <NextLink href={getPath(ROUTES.ROADMAP, {})!}>Roadmap</NextLink>
          </div>
          <div className="flex grow"></div>
          <div className="hidden lg:flex items-center gap-3">
            <a className="btn tertiary" href="https://opencollective.com/htmlplus">
              Become a sponsor
            </a>
            <a className="btn primary" href={getPath(ROUTES.GITHUB_URL, {})} target="_blank">
              <plus-icon name="github"></plus-icon>
              Github
            </a>
          </div>
        </div>
      </header>
      <main className="relative pt-12 main">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8 lg:flex-row">
            <div className="flex flex-col items-center gap-8 lg:items-start basis-1/2">
              <NextLink
                className="font-2-500 shadow-custom inline-flex text-main-11 bg-white p-[4px] rounded-full whitespace-nowrap"
                href={getPath(ROUTES.CHANGELOG, {})!}
              >
                <plus-stack gap="0.75rem">
                  <div className="font-2-500 px-2 py-[2px] rounded-full text-main-11 bg-main-4">{PACKAGE.version}</div>
                  <div>A new version of HTMLPLUS is out</div>
                  {/* TODO: svg is thin */}
                  <plus-icon name="arrow-right-short" size="1rem"></plus-icon>
                </plus-stack>
              </NextLink>
              <div className="flex flex-col items-center gap-6 lg:items-start text-center lg:text-start">
                <h1 className="font-9-600">The Most Flexible Open Source Web UI Library!</h1>
                <p>
                  A pure JavaScript web UI library delivering lightweight, customizable, and fast elements for modern
                  browsers and frameworks.
                </p>
                <div className="w-full">
                  <div className="flex flex-col gap-4 sm:flex-row items-stretch justify-center lg:justify-start lg:items-center">
                    <plus-snippet symbol="$">npm i {PACKAGE.name}</plus-snippet>
                    <NextLink
                      className="btn secondary"
                      href={getPath(ROUTES.ELEMENT_DETAILS, { framework: FRAMEWORK_DEFAULT, element: 'accordion' })!}
                    >
                      Get Started
                      <plus-icon name="arrow-right"></plus-icon>
                    </NextLink>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col items-center gap-6 sm:flex-row justify-center lg:justify-start">
                  <plus-avatar-group hoverable stacked>
                    {['hazhirmohammadi', 'mbpmohsen', 'abdolian'].map((contributor) => (
                      <Fragment key={contributor}>
                        <plus-avatar className="-me-3" shape="circle" size="2rem">
                          <img src={getPath(ROUTES.CONTRIBUTOR, { contributor })} alt={`Contributor ${contributor}`} />
                          <a
                            rel="noopener"
                            href={getPath(ROUTES.CONTRIBUTOR_GITHUB, { contributor })}
                            target="_blank"
                          ></a>
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
              <img className="w-96" src="/assets/shape.png" />
            </div>
          </div>
        </div>
      </main>
      <main className="container mx-auto px-4">
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
            width="xs"
            overrides={{
              'lg-before': {
                variant: 'middle',
                vertical: false,
              },
              'lg-up': {
                variant: 'full',
                vertical: true,
              },
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
            width="xs"
            overrides={{
              'lg-before': {
                variant: 'middle',
                vertical: false,
              },
              'lg-up': {
                variant: 'full',
                vertical: true,
              },
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
