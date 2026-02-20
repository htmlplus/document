'use client';

import { Button } from '@/components';
import { useSidebar } from '@/containers';

export function Navigation() {
	const sidebar = useSidebar();
	return (
		<plus-stack justify="between">
			<span>
				{!!sidebar.prev && (
					<Button href={sidebar.prev.url} variant="ghost">
						<plus-stack gap="1rem">
							<plus-icon name="chevron-left" size="lg"></plus-icon>
							<plus-stack items="start" vertical>
								<b>Prev</b>
								<span>{sidebar.prev.title}</span>
							</plus-stack>
						</plus-stack>
					</Button>
				)}
			</span>
			<span>
				{!!sidebar.next && (
					<Button href={sidebar.next.url} variant="ghost">
						<plus-stack gap="1rem">
							<plus-stack items="end" vertical>
								<b>Next</b>
								<span>{sidebar.next.title}</span>
							</plus-stack>
							<plus-icon name="chevron-right" size="lg"></plus-icon>
						</plus-stack>
					</Button>
				)}
			</span>
		</plus-stack>
	);
}
