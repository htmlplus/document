'use client';

import type { PlusIconProperties } from '@htmlplus/ui';

import { Button } from '@/components';
import { NoSSR } from '@/NoSSR';

type FeatureProps = {
	className?: string;
	description: string;
	icon: PlusIconProperties['name'];
	metric?: number;
	more?: string;
	title: string;
};

export const Feature = ({ className, description, icon, metric, more, title }: FeatureProps) => {
	return (
		<plus-stack className={className} gap="1rem" vertical>
			<plus-avatar className="bg-main-3" shape="circle" size="48">
				<plus-icon className="text-main-11" name={icon} size="24"></plus-icon>
			</plus-avatar>
			{metric && (
				<div className="font-9-600 text-main-11">
					<NoSSR>
						<plus-intersection
							once
							onPlusChange={(event) => {
								const host = event.currentTarget as HTMLElement;

								const counter = host.querySelector('plus-counter');

								if (!counter) return;

								counter.play = event.detail.isIntersecting;
							}}
						>
							<plus-counter to={metric} duration={2500}>
								0
							</plus-counter>
						</plus-intersection>
					</NoSSR>
				</div>
			)}
			<div className="font-5-500">{title}</div>
			<div className="font-3-400 text-alpha-black-7 text-center">{description}</div>
			{more && (
				<Button href={more} variant="link">
					Learn more
				</Button>
			)}
		</plus-stack>
	);
};
