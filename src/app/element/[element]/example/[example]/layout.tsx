import type { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<body style={{ margin: 0 }}>{children}</body>
		</html>
	);
}
