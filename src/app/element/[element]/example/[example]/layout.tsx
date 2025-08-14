import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
