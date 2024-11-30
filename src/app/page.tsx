import { Fragment } from 'react';

import NextLink from 'next/link';

import PACKAGE from '@htmlplus/ui/package.json';

import { FRAMEWORK_DEFAULT, ROUTES } from '@/constants';
import { getPath } from '@/utils';

export default async function Home() {
  const promises = [
    getPath(ROUTES.GITHUB_COMMITS, { repository: 'ui', path: '/' }),
    getPath(ROUTES.GITHUB_COMMITS, { repository: 'document', path: '/' })
  ].map((path) => fetch(path));

  const contributors = await Promise.all(promises)
    .then((responses) => Promise.all(responses.map((response) => response.json())))
    .then((responses) =>
      responses
        .flat()
        .map((commit) => commit.author.login)
        .filter((contributor, index, contributors) => {
          return contributors?.indexOf(contributor) === index;
        })
    );

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
            <NextLink href="TODO">Roadmap</NextLink>
          </div>
          <div className="flex grow"></div>
          <div className="hidden tablet:flex items-center gap-3">
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
      <main className="relative pt-12">
        <div className="container">
          <div className="flex flex-col items-center gap-8 tablet:flex-row">
            <div className="flex flex-col items-center gap-8 tablet:items-start basis-1/2">
              <NextLink className="badge-group" href={getPath(ROUTES.CHANGELOG, {})!}>
                <plus-stack gap="0.75rem">
                  <div className="badge">{PACKAGE.version}</div>
                  <div>A new version of HTMLPLUS is out</div>
                  {/* TODO: svg is thin */}
                  <plus-icon name="arrow-right-short" size="1rem"></plus-icon>
                </plus-stack>
              </NextLink>
              <div className="flex flex-col items-center gap-6 tablet:items-start text-center tablet:text-start">
                <h1>
                  The Most Flexible Open Source Web UI Library!
                  {/* TODO: The fastest UI kit and design system */}
                </h1>
                <p>
                  HTMLPLUS is framework-less and lightweight. It's totally native and developed purely with javascript.
                  All HTMLPLUS elements are customizable and configurable.
                  {/* TODO: Join thousands of designers and agencies who kickstart design projects using 4pt. */}
                </p>
                <div className="w-full @container">
                  <div className="flex flex-col gap-4 @[20rem]:flex-row justify-center tablet:justify-start">
                    <div className="code-snippet ">
                      <div className="line">npm i {PACKAGE.name}</div>
                    </div>
                    <NextLink
                      className="btn secondary"
                      href={getPath(ROUTES.ELEMENT_DETAILS, { framework: FRAMEWORK_DEFAULT, element: 'accordion' })!}
                    >
                      Get Started
                    </NextLink>
                  </div>
                </div>
              </div>
              <div className="w-full @container">
                <div className="flex flex-col items-center gap-6 @[20rem]:flex-row justify-center tablet:justify-start">
                  <plus-avatar-group hoverable stacked>
                    {contributors
                      .slice(0, 5)
                      .reverse()
                      .map((contributor) => (
                        <Fragment key={contributor}>
                          <plus-avatar shape="circle" size="2rem">
                            <img
                              src={getPath(ROUTES.CONTRIBUTOR, { contributor })}
                              alt={`Contributor ${contributor}`}
                            />
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
                  <div className="font-2-400 TODO">
                    Top Developers
                    {/* 632 joined today */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center basis-1/2 h-[547px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 502 493" fill="none">
                <rect x="36" y="93.0001" width="64" height="64" rx="32" fill="#6F6F6F"></rect>
                <rect x="401" y="341" width="64" height="64" rx="32" fill="rgb(217 217 217)"></rect>
                <rect
                  x="67.8822"
                  y="361.902"
                  width="96"
                  height="256"
                  rx="48"
                  transform="rotate(-135 67.8822 361.902)"
                  fill="#C7C7C7"
                ></rect>
                <rect
                  x="318.882"
                  y="389.902"
                  width="96"
                  height="256"
                  rx="48"
                  transform="rotate(-135 318.882 389.902)"
                  fill="#171717"
                ></rect>
                <rect
                  x="76.8822"
                  y="492.146"
                  width="96"
                  height="600"
                  rx="48"
                  transform="rotate(-135 76.8822 492.146)"
                  fill="#e5e5e5"
                ></rect>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
