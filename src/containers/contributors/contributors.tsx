'use client';

import { Fragment, useEffect, useMemo, useState } from 'react';

import { useParams, usePathname } from 'next/navigation';

import axios from 'axios';

import { ROUTES } from '@/constants';
import { TocItem } from '@/containers';
import { getPath } from '@/utils';

export function Contributors() {
  const params = useParams();

  const pathname = usePathname();

  const [contributors, setContributors] = useState<string[]>([]);

  // TODO
  const paths = useMemo(() => {
    if (pathname.match(/\/[^/]+\/api\/[^/]+/)) {
      return getPath(ROUTES.GITHUB_COMMITS, {
        repository: 'core',
        path: `src/components/${params.component}`
      });
    }

    if (pathname.match(/\/[^/]+\/component\/[^/]+/)) {
      return getPath(ROUTES.GITHUB_COMMITS, {
        repository: 'core',
        path: `src/components/${params.component}`
      });
    }

    if (pathname.match(/\/component\/[^/]+\/config/)) {
      return getPath(ROUTES.GITHUB_COMMITS, {
        repository: 'document',
        path: `src/app/(internal)/component/[component]/config`
      });
    }

    if (pathname.match(/\/component\/animation\/names/)) {
      return getPath(ROUTES.GITHUB_COMMITS, {
        repository: 'document',
        path: 'src/app/(internal)/component/animation/names'
      });
    }

    return getPath(ROUTES.GITHUB_COMMITS, {
      repository: 'document',
      path: `src/content/en${pathname}.md`
    });
  }, [params, pathname]);

  useEffect(() => {
    if (!paths) return;

    // TODO
    // if (process && process.env.NODE_ENV === 'development') return;

    const promises = [paths].flat().map((path) => axios.get(path));

    Promise.all(promises)
      .then((responses) => {
        return responses
          .map((response) => response.data.map((commit: any) => commit.author?.login as string))
          .flat()
          .filter((contributor, index, contributors) => {
            return contributors?.indexOf(contributor) === index;
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
