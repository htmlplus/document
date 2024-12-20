import NextLink from 'next/link';

import { FRAMEWORK_DEFAULT, ROUTES } from '@/constants';
import { getPath } from '@/utils';

export default function Home() {
  return (
    <div
      style={{
        background: 'linear-gradient(165deg, rgba(255,255,255,0) 64%, rgba(238,110,115,1) 100%)',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        textAlign: 'center',
        padding: '1.75rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={{ flexGrow: '1' }} />
      <div>
        <div>
          <plus-icon name="htmlplus" size="60px"></plus-icon>
          &nbsp; &nbsp;
          <h1 style={{ border: 'none', display: 'inline', verticalAlign: 'middle', padding: 0 }}>HTMLPLUS</h1>
        </div>
        <h1 style={{ border: 'none' }}>The Most Flexible Open Source Web UI Library!</h1>
        <p style={{ maxWidth: '700px', margin: 'auto' }}>
          HTMLPLUS is framework-less and lightweight. It's totally native and developed purely with javascript. All
          HTMLPLUS elements are customizable and configurable.
        </p>
        <div>
          <NextLink
            href={getPath(ROUTES.ELEMENT_DETAILS, { framework: FRAMEWORK_DEFAULT, element: 'accordion' })!}
            passHref
            style={{
              padding: '0.75rem 2rem',
              background: '#ee6e73',
              color: 'white',
              display: 'inline-block',
              margin: '2rem 1rem',
              borderRadius: '4px',
              fontWeight: 700
            }}
          >
            Get Started
          </NextLink>
          <a
            style={{
              padding: '0.75rem 2rem',
              border: 'solid 1px #ee6e73',
              color: '#ee6e73',
              display: 'inline-block',
              margin: '2rem 1rem',
              borderRadius: '4px',
              fontWeight: 700
            }}
            href={getPath(ROUTES.GITHUB_URL, {})}
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
      <div style={{ flexGrow: '1' }} />
    </div>
  );
}
