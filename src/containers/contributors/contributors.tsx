import { useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/router';

import axios from 'axios';

import { Avatar } from '@app/components';
import { Toc } from '@app/containers';
import { ROUTES, getPath } from '@app/utils';

export const Contributors = () => {
  const router = useRouter();

  const [contributors, setContributors] = useState<string[]>([]);

  // TODO
  const paths = useMemo(() => {
    switch (router.route) {
      case '/[...content]':
        return [`packages/document/src/content/en/${(router.query?.content as string[])?.join('/')}.md`];
      case '/component/animation/names':
        return [`packages/document/src/pages/component/animation/names.tsx`];
      case '/[framework]/api/[component]':
      case '/[framework]/component/[component]':
      case '/[framework]/component/[component]/config':
        return [
          `packages/core/src/components/${router.query?.component}`,
          `packages/examples/src/${router.query?.component}`
        ];
    }
  }, [router.asPath, router.route]);

  useEffect(() => {
    if (process && process.env.NODE_ENV === 'development') return;

    if (!paths) return;

    const promises = paths.map((path) => axios.get(getPath(ROUTES.GITHUB_COMMITS, { path })));

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
        <Toc.Item level={2}>Contributors</Toc.Item>
      </h2>
      <Avatar.Group hoverable stacked>
        {contributors.reverse().map((contributor) => (
          <Avatar key={contributor} shape="circle" size="sm">
            <img src={getPath(ROUTES.CONTRIBUTOR, { contributor })} alt={`Contributor ${contributor}`} />
            <a rel="noopener" href={getPath(ROUTES.CONTRIBUTOR_GITHUB, { contributor })} target="_blank"></a>
          </Avatar>
        ))}
      </Avatar.Group>
    </>
  );
};
