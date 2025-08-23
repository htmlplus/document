'use client';

import { Fragment, useEffect, useMemo, useState } from 'react';

import Image from 'next/image';
import { useParams, usePathname } from 'next/navigation';

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
				repository: 'ui',
				path: `src/elements/${params.element}`
			});
		}

		if (pathname.match(/\/[^/]+\/element\/[^/]+/)) {
			return getPath(ROUTES.GITHUB_COMMITS, {
				repository: 'ui',
				path: `src/elements/${params.element}`
			});
		}

		if (pathname.match(/\/element\/[^/]+\/config/)) {
			return getPath(ROUTES.GITHUB_COMMITS, {
				repository: 'document',
				path: `src/app/(internal)/element/[element]/config`
			});
		}

		if (pathname.match(/\/element\/animation\/names/)) {
			return getPath(ROUTES.GITHUB_COMMITS, {
				repository: 'document',
				path: 'src/app/(internal)/element/animation/names'
			});
		}

		return getPath(ROUTES.GITHUB_COMMITS, {
			repository: 'document',
			path: `src/app/(internal)/${pathname}`
		});
	}, [params, pathname]);

	useEffect(() => {
		if (!paths) return;

		// TODO
		// if (process && process.env.NODE_ENV === 'development') return;

		// TODO: make it smaller
		const promises = [paths].flat().map((path) => fetch(path));

		Promise.all(promises)
			.then((responses) => Promise.all(responses.map((response) => response.json())))
			.then((responses) =>
				responses
					.flat()
					.map((commit) => commit.author.login)
					.filter((contributor, index, contributors) => {
						return contributors?.indexOf(contributor) === index;
					})
			)
			.then(setContributors)
			.catch(() => {});
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
								<Image
									alt={`Contributor ${contributor}`}
									src={getPath(ROUTES.CONTRIBUTOR, { contributor, size: 32 })}
									width="32"
									height="32"
									unoptimized
								/>
								<a
									rel="noopener"
									href={getPath(ROUTES.CONTRIBUTOR_GITHUB, { contributor })}
									target="_blank"
								>
									&nbsp;
								</a>
							</plus-avatar>
							<plus-tooltip>{contributor}</plus-tooltip>
						</Fragment>
					))}
				</plus-avatar-group>
			</p>
		</>
	);
}
