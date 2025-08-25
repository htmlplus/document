'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

import Image from 'next/image';
import { usePathname, useRouter, useSelectedLayoutSegment } from 'next/navigation';

import { frameworks } from '@/data';

import { useFrameworks } from './useFrameworks';

export const Frameworks = () => {
	const pathname = usePathname();

	const router = useRouter();

	const segment = useSelectedLayoutSegment();

	const store = useFrameworks();

	const $select = useRef<HTMLDivElement>(null);

	const [isOpen, setIsOpen] = useState(false);

	const key = useMemo(() => {
		if (!segment) return;

		if (!frameworks.some((framework) => framework.key === segment)) return;

		return segment;
	}, [segment]);

	const options = useMemo(() => {
		return frameworks.filter((framework) => !framework.disabled);
	}, []);

	const selected = useMemo(() => {
		return options.find((framework) => framework.key === store.framework);
	}, [options, store.framework]);

	const handleSelect = (framework: (typeof frameworks)[number]) => {
		setIsOpen(false);

		const prev = pathname;

		const next = pathname.replace(`/${store.framework}/`, `/${framework.key}/`);

		if (next === prev) return;

		store.setFramework(framework.key);

		router.replace(next);
	};

	useEffect(() => {
		if (!key) return;
		store.setFramework(key);
	}, [key, store.setFramework]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if ($select.current && !$select.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className="relative" ref={$select}>
			<button
				className={`w-full flex items-center justify-between py-2 px-4 border border-solid border-gray-200 rounded-[4px] bg-white focus:ring-2 focus:ring-blue-400 ${key ? 'cursor-pointer' : 'opacity-50'}`}
				disabled={!key}
				type="button"
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<div className="flex items-center gap-2">
					{selected && (
						<Image
							alt={selected?.title}
							className="w-5 h-5 m-0"
							src={selected?.logo}
							width="20"
							height="20"
						/>
					)}
					<span className="text-gray-500">{selected?.title}</span>
				</div>
				<span className="text-gray-300">▼</span>
			</button>
			{isOpen && (
				<ul className="absolute w-full mt-1 py-1 border border-solid border-gray-200 bg-white rounded-[4px] shadow-lg m-0">
					{options.map((option) => (
						<li key={option.key}>
							<button
								className="flex items-center gap-2 py-2 px-4 w-full text-left hover:bg-gray-200"
								type="button"
								onClick={() => handleSelect(option)}
							>
								<Image
									alt={option.title}
									className="w-5 h-5 m-0"
									src={option.logo}
									width="20"
									height="20"
								/>

								{option.title}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
