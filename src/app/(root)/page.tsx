import { Fragment } from 'react';

import NextLink from 'next/link';

import PACKAGE from '@htmlplus/ui/package.json';

import { FRAMEWORK_DEFAULT, ROUTES } from '@/constants';
import { statistics } from '@/data';
import { getPath } from '@/utils';

import { Feature } from './Feature';

export default async function Home() {
  return (
    <div className="home">
      <header className="flex items-center h-16">
        <div className="container flex items-center gap-8">
          <plus-icon name="htmlplus" size="2rem"></plus-icon>
          <div className="hidden tablet:flex items-center gap-6">
            <NextLink href={getPath(ROUTES.OVERVIEW, {})!}>Document</NextLink>
            <NextLink href={getPath(ROUTES.ELEMENT_DETAILS, { framework: FRAMEWORK_DEFAULT, element: 'accordion' })!}>
              Elements
            </NextLink>
            <NextLink href={getPath(ROUTES.ROADMAP, {})!}>Roadmap</NextLink>
          </div>
          <div className="flex grow"></div>
          <div className="hidden laptop:flex items-center gap-3">
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
        <div className="container">
          <div className="flex flex-col items-center gap-8 laptop:flex-row">
            <div className="flex flex-col items-center gap-8 laptop:items-start basis-1/2">
              <NextLink className="badge-group" href={getPath(ROUTES.CHANGELOG, {})!}>
                <plus-stack gap="0.75rem">
                  <div className="badge">{PACKAGE.version}</div>
                  <div>A new version of HTMLPLUS is out</div>
                  {/* TODO: svg is thin */}
                  <plus-icon name="arrow-right-short" size="1rem"></plus-icon>
                </plus-stack>
              </NextLink>
              <div className="flex flex-col items-center gap-6 laptop:items-start text-center laptop:text-start">
                <h1>The Most Flexible Open Source Web UI Library!</h1>
                <p>
                  A pure JavaScript web UI library delivering lightweight, customizable, and fast elements for modern
                  browsers and frameworks.
                </p>
                <div className="w-full">
                  <div className="flex flex-col gap-4 tablet:flex-row items-stretch justify-center laptop:justify-start laptop:items-center">
                    <div className="code-snippet">
                      <div className="line">npm i {PACKAGE.name}</div>
                    </div>
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
                <div className="flex flex-col items-center gap-6 tablet:flex-row justify-center laptop:justify-start">
                  <plus-avatar-group hoverable stacked>
                    {['hazhirmohammadi', 'mbpmohsen', 'abdolian'].map((contributor) => (
                      <Fragment key={contributor}>
                        <plus-avatar shape="circle" size="2rem">
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
                  <div className="top-developers">Top Developers</div>
                </div>
              </div>
            </div>
            <div className="hidden laptop:flex items-center basis-1/2 h-[547px] justify-center">
              <div className="gooey ml-20"></div>
            </div>
          </div>
        </div>
      </main>
      <main className="container">
        <div className="flex flex-col gap-8 items-center justify-center my-24 laptop:flex-row laptop:items-start">
          <Feature
            className="basis-1/3"
            title="Frameworks"
            description="Supports a wide range of frameworks and libraries, with ongoing efforts to include more."
            icon="puzzle"
            metric={statistics.frameworks}
          />
          <div className="divider mx-4 laptop:mx-0"></div>
          <Feature
            className="basis-1/3"
            title="Elements"
            description="Powerful set of elements designed to integrate smoothly into any JavaScript project."
            icon="puzzle"
            metric={statistics.elements}
          />
          <div className="divider mx-4 laptop:mx-0"></div>
          <Feature
            className="basis-1/3"
            title="Examples"
            description="Simplified samples are provided to demonstrate the capabilities of the elements."
            icon="puzzle"
            metric={statistics.examples}
          />
        </div>
      </main>
    </div>
  );
}
