'use client';

import Image from 'next/image';

import AutoScroll from 'embla-carousel-auto-scroll';

import { ROUTES } from '@/constants';
import { frameworks } from '@/data';
import { getPath } from '@/utils';

const autoScroll = AutoScroll({
	stopOnInteraction: false,
	stopOnMouseEnter: true,
	stopOnFocusIn: false
});

export const Frameworks = () => {
	return (
		<div className="py-20">
			<div>
				<div className="mb-6">
					<h3 className="font-8-600 text-[28px] text-center">All Frameworks, One Place</h3>
				</div>
				<div className="text-sm text-center max-w-[600px] mx-auto mb-6">
					<p className="font-4-400">
						{' '}
						Seamlessly supporting all your favorite frameworks in one powerful library.
					</p>
				</div>
			</div>
			<plus-carousel draggable="free" loop resizable plugins={[autoScroll]}>
				<plus-carousel-slides>
					{frameworks.map((framework) => (
						<plus-carousel-slide className="mx-8" key={framework.key}>
							<a
								className={`select-none flex flex-row gap-x-2 items-center justify-center ${framework.disabled ? 'opacity-25' : ''}`}
								href={
									framework.disabled
										? ''
										: getPath(ROUTES.INSTALLATION_FRAMEWORK, { framework: framework.key })
								}
							>
								<Image
									alt="TODO"
									className="w-12 h-12 m-0"
									src={framework.logo}
									width="48"
									height="48"
								/>
								<div className="text-lg sm:text-2xl font-semibold capitalize">
									{framework.title}
								</div>
							</a>
						</plus-carousel-slide>
					))}
				</plus-carousel-slides>
			</plus-carousel>
		</div>
	);
};
