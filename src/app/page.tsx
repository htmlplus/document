import { Fragment } from 'react';
import PACKAGE from '@htmlplus/ui/package.json';
import NextLink from 'next/link';

import { FRAMEWORK_DEFAULT, ROUTES } from '@/constants';
import { getPath } from '@/utils';
import './page.scss';

interface FeatureProps {
  description: string;
  icon: string;
  metric?: string;
  more?: string;
  title: string;
}

const Feature = ({ description, icon, metric, more, title }: FeatureProps) => {
  return (
    <div className="feature">
      <plus-avatar shape="circle" size="48">
        <plus-icon name={icon} size="24"></plus-icon> 
      </plus-avatar>
      <div className="metric">{metric}</div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      {more && <a href={more} className="link">Learn more</a>}
    </div> 
  )
}

interface FeaturesProps {
  items: FeatureProps[]; 
}

const Features = ({ items }: FeaturesProps) => {
  return (
    <plus-grid gutter="lg" justify-content="center">
      {items.map((item) => (
        <plus-grid-item key={item.title} md="4">
          <Feature 
            icon={item.icon}
            title={item.title}
            description={item.description}
            more={item.more}
          /> 
        </plus-grid-item> 
      ))}
    </plus-grid>
  )
}

export default function Home() {
  return (
    <div className="home">
      <header> 
        <plus-stack class="container" gap="2rem" items="center">
          <plus-icon name="htmlplus" size="2rem"></plus-icon>
          <plus-stack gap="1.5rem">
            <a href="#">Home</a>
            <a href="#">Use Cases</a>
            <a href="#">Pricing</a>
            <a href="#">Company</a>
            <a href="#">About</a>
          </plus-stack>
          <plus-spacer></plus-spacer>
          <plus-stack gap="0.75rem">
            <button className="tertiary">Login</button>
            <a 
              className="btn primary"
              href={getPath(ROUTES.GITHUB_URL, {})}
              target="_blank"
            >
              <plus-icon name="github"></plus-icon>
              Github
              {/* Start free trial */}
            </a>
          </plus-stack>
        </plus-stack> 
      </header>
      <main>
        <div className="container">
          <plus-grid gutter="lg" align-items="center">
            <plus-grid-item xs="12" md="6">
              <plus-stack gap="2rem" items="start" vertical>
                <NextLink 
                  className="badge-group" 
                  href={getPath(ROUTES.CHANGELOG, {})!}
                  passHref 
                >
                   <plus-stack gap="0.75rem">
                     <div className="badge">
                      {PACKAGE.version}
                     </div>
                     <div>A new version of HTMLPLUS is out</div>
                     {/* TODO: svg is thin */}
                     <plus-icon name="arrow-right-short" size="1rem"></plus-icon>
                   </plus-stack>
                </NextLink>
                <plus-stack gap="1.5rem" items="start" vertical>
                  <h1>
                    The Most Flexible Open Source Web UI Library!
                    {/* The fastest UI kit and design system */}
                  </h1>
                  <p>
                    HTMLPLUS is framework-less and lightweight. 
                    It's totally native and developed purely with javascript. 
                    All HTMLPLUS elements are customizable and configurable.
                    {/* Join thousands of designers and agencies who kickstart design projects using 4pt. */}
                  </p>
                  <plus-stack gap="1rem" items="start">
                    <div className="code-snippet">
                      <div className="line">npm i {PACKAGE.name}</div>
                    </div>
                    <NextLink
                      className="btn secondary"
                      href={getPath(ROUTES.ELEMENT_DETAILS, { framework: FRAMEWORK_DEFAULT, element: 'accordion' })!}
                      passHref 
                    >
                      Get Started
                    </NextLink>
                  </plus-stack>
                </plus-stack>
                <plus-stack gap="0.75rem" items="center">
                  <plus-avatar-group hoverable stacked>
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Fragment key={item}>
                        <plus-avatar shape="circle" size="2rem">
                          <img src="TODO" alt="TODO" />
                          <a rel="noopener" href="" target="_blank"></a>
                        </plus-avatar>
                        <plus-tooltip>{item}</plus-tooltip>
                      </Fragment>
                    ))}
                  </plus-avatar-group> 
                  <div className="font-2-400 TODO">
                    632 joined today
                  </div>
                </plus-stack>
              </plus-stack>
            </plus-grid-item> 
            <plus-grid-item xs="12" md="6">
              <div style={{ height: '547px'  }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="502" height="493" viewBox="0 0 502 493" fill="none">
                  <rect x="36" y="93.0001" width="64" height="64" rx="32" fill="#6F6F6F"></rect>
                  <rect x="401" y="341" width="64" height="64" rx="32" fill="rgb(217 217 217)"></rect>
                  <rect x="67.8822" y="361.902" width="96" height="256" rx="48" transform="rotate(-135 67.8822 361.902)" fill="#C7C7C7"></rect>
                  <rect x="318.882" y="389.902" width="96" height="256" rx="48" transform="rotate(-135 318.882 389.902)" fill="#171717"></rect>
                  <rect x="76.8822" y="492.146" width="96" height="600" rx="48" transform="rotate(-135 76.8822 492.146)" fill="#e5e5e5"></rect>
                </svg>


                {/* <svg xmlns="http://www.w3.org/2000/svg" width="502" height="493" viewBox="0 0 502 493" fill="none">
                  <rect x="36" y="93.0001" width="64" height="64" rx="32" fill="#6F6F6F"/>
                  <rect x="401" y="341" width="64" height="64" rx="32" fill="#F3F3F3"/>
                  <rect x="67.8822" y="361.902" width="96" height="256" rx="48" transform="rotate(-135 67.8822 361.902)" fill="#C7C7C7"/>
                  <rect x="318.882" y="389.902" width="96" height="256" rx="48" transform="rotate(-135 318.882 389.902)" fill="#171717"/>
                  <rect x="76.8822" y="492.146" width="96" height="600" rx="48" transform="rotate(-135 76.8822 492.146)" fill="#F3F3F3"/>
                </svg> */}
              </div>
            </plus-grid-item> 
          </plus-grid>
        </div>
      </main>


      {/* <main className="base" >
        <div className="container"   style={{paddingTop: '48px'}} >
          <plus-grid gutter="lg" align-items="center">
            <plus-grid-item xs="12" md="6">
              <plus-stack gap="32" items="start" vertical>
                <a href="#" style={{background: '#fff', padding: '4px', borderRadius: '2000px',
                    boxShadow: '0px 1px 1px 0px #0000001F, 0px 0px 4px 0px #0000000A, 0px 4px 8px 0px #00000014'
                   }}>
                   <plus-stack gap="12" >
                     <div className="font-2-500" style={{background: '#EDEDED', padding: '2px 8px', borderRadius: '2000px',
                       }}>2.0.1</div>
                     <div className="font-2-500">A new version of 4pt is out</div>
                     TODO: svg is thin
                     <plus-icon name="arrow-right-short" size="16" color="#6F6F6F"></plus-icon>
                   </plus-stack>
                </a>
                <plus-stack gap="24" items="start" vertical>
                  <div className="font-9-600">
                    The fastest UI kit and design system
                  </div>
                  <div className="font-4-400">
                    Join thousands of designers and agencies who kickstart design projects using 4pt.
                  </div>
                  <div style={{height: '40px'}}></div>
                </plus-stack>
                <plus-stack gap="12" items="center">
                  <plus-avatar-group hoverable stacked>
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Fragment key={item}>
                        <plus-avatar shape="circle" size="32">
                          <img src="" alt="" />
                          <a rel="noopener" href="" target="_blank"></a>
                        </plus-avatar>
                        <plus-tooltip>{item}</plus-tooltip>
                      </Fragment>
                    ))}
                  </plus-avatar-group> 
                  <div className="font-2-400">
                    632 joined today
                  </div>
                </plus-stack>
              </plus-stack>
            </plus-grid-item> 
            <plus-grid-item xs="12" md="6">
              <div style={{height: '547px', background: '#C7C7C7'}}></div>
            </plus-grid-item> 
          </plus-grid>
        </div>
      </main>
      <main className="container">
        <br/>
        <br/>
        <br/>
        <section>  
          <Features 
              items={[
                {
                  icon: "cog",
                  title: "Our Vision",
                  description: "4pt helps designers level up and complete design projects faster than ever before.",
                  more: "#",
                },
                {
                  icon: "cog",
                  title: "Our Vision",
                  description: "4pt helps designers level up and complete design projects faster than ever before.",
                  more: "#",
                },
                {
                  icon: "cog",
                  title: "Our Vision",
                  description: "4pt helps designers level up and complete design projects faster than ever before.",
                  more: "#",
                },
                {
                  icon: "cog",
                  title: "Our Vision",
                  description: "4pt helps designers level up and complete design projects faster than ever before.",
                  more: "#",
                },
                {
                  icon: "cog",
                  title: "Our Vision",
                  description: "4pt helps designers level up and complete design projects faster than ever before.",
                  more: "#",
                }
              ]}
          /> 
        </section>
        <br/>
        <br/>
        <br/>
        <section>  
          <plus-grid gutter="lg" justify-content="center">
            <plus-grid-item md="grow">
              <Feature 
                icon="cog"
                title="The designer"
                description="4pt allows you to work on multiple projects without the creative stress."
                metric="10×"
              /> 
            </plus-grid-item>
            <plus-divider width="xs" vertical></plus-divider>
            <plus-grid-item md="grow">
              <Feature 
                icon="cog"
                title="The designer"
                description="4pt allows you to work on multiple projects without the creative stress."
                metric="10×"
              /> 
            </plus-grid-item>
            <plus-divider width="xs" vertical></plus-divider>
            <plus-grid-item md="grow">
              <Feature 
                icon="cog"
                title="The designer"
                description="4pt allows you to work on multiple projects without the creative stress."
                metric="10×"
              /> 
            </plus-grid-item>
          </plus-grid>
        </section>
      </main> */}
    </div>
  );
}
