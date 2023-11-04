'use client';

import { Fragment, useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/router';

import axios from 'axios';

import { TocItem } from '@/containers';
import { ROUTES, getPath } from '@/utils';

export function Contributors() {
  const router = useRouter();

  const [contributors, setContributors] = useState<string[]>([]);

  // TODO
  const paths = useMemo(() => {
    switch (router.route) {
      case '/[...content]':
        return getPath(ROUTES.GITHUB_COMMITS, {
          repository: 'document',
          path: `src/content/en/${(router.query?.content as string[])?.join('/')}.md`
        });

      case '/component/animation/names':
        return getPath(ROUTES.GITHUB_COMMITS, {
          repository: 'document',
          path: 'src/pages/component/animation/names.tsx'
        });

      case '/[framework]/api/[component]':
      case '/[framework]/component/[component]':
      case '/[framework]/component/[component]/config':
        return [
          getPath(ROUTES.GITHUB_COMMITS, {
            repository: 'core',
            path: `src/components/${router.query?.component}`
          }),
          getPath(ROUTES.GITHUB_COMMITS, {
            repository: 'examples',
            path: `src/${router.query?.component}`
          })
        ];
    }
  }, [router.asPath, router.route]);

  useEffect(() => {
    if (process && process.env.NODE_ENV === 'development') return;

    if (!paths) return;

    const promises = [paths].flat().map((path) => axios.get(path));

    Promise.all(promises)
      .then((responses) => {
        return responses
          .map((response) => response.data.map((commit: any) => commit.author?.login))
          .flat()
          .filter((contributor: string, index: number, contributors: string[]) => {
            return contributor && contributors.indexOf(contributor) === index;
          });
      })
      .then(setContributors);
  }, [paths]);

  if (!contributors?.length) return null;

  return (
    <>
      <h2>
        <TocItem level={2}>Contributors</TocItem>
      </h2>
      <p>
        <plus-avatar-group hoverable stacked>
          {contributors.reverse().map((contributor) => (
            <Fragment key={contributor}>
              <plus-avatar shape="circle" size="sm">
                <img src={getPath(ROUTES.CONTRIBUTOR, { contributor })} alt={`Contributor ${contributor}`} />
                <a rel="noopener" href={getPath(ROUTES.CONTRIBUTOR_GITHUB, { contributor })} target="_blank"></a>
              </plus-avatar>
              <plus-tooltip>{contributor}</plus-tooltip>
            </Fragment>
          ))}
        </plus-avatar-group>
      </p>
    </>
  );
}
