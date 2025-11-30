'use client';

import { useEffect, useRef } from 'react';

import { usePathname } from 'next/navigation';

export function AppLoadingBar() {
	const $ref = useRef<HTMLPlusAppProgressBarElement>(null);

	const pathname = usePathname();

	useEffect(() => {
		pathname;
		$ref.current?.done?.();
		return () => $ref.current?.start?.();
	}, [pathname]);

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const anchor = Array.from(event.composedPath()).find(
				(element) => element instanceof HTMLAnchorElement
			);

			if (!anchor) return;

			const href = (anchor as HTMLAnchorElement).getAttribute('href');

			if (!href?.startsWith('/')) return;

			$ref.current?.start?.();
		};

		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, []);

	return <plus-app-progress-bar color="primary-9" ref={$ref}></plus-app-progress-bar>;
}
