'use client';

import { Button } from '@/components';
import { useSidebar } from '@/containers';

export function Navigation() {
	const sidebar = useSidebar();
	return (
		<p>
			<plus-stack justify="between">
				<span>
					{!!sidebar.prev && (
						<Button link to={sidebar.prev.url}>
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
						<Button link to={sidebar.next.url}>
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
		</p>
	);
}
