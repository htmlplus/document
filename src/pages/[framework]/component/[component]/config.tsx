import type { GetStaticPropsContext } from 'next/types';

import { capitalCase } from 'change-case';

import { Alert, Button, Code } from '@app/components';
import { components, frameworks } from '@app/data';
import { useStore } from '@app/hooks';
import { LayoutDefault } from '@app/layouts';
import { ROUTES, getPath } from '@app/utils';

export default function ComponentConfig({ component }: any) {
  const store = useStore();
  return (
    <LayoutDefault>
      <h1>
        {capitalCase(component.key)} config in the {capitalCase(store.framework as any)}
      </h1>
      <p>
        All of the component's APIs are configurable as below. Full&nbsp;
        <Button link="underline" to={getPath(ROUTES.GLOBAL_CONFIG, {})}>
          documentation
        </Button>
        &nbsp;is available.
      </p>
      <Alert type="warning">Some of properties don't make sense in the global config.</Alert>
      <br />
      <Code language="js">
        {[
          // TODO
          `import { setConfig } from '${
            store.framework == 'javascript' ? 'https://unpkg.com/' : ''
          }@htmlplus/core/config.js';`,
          ``,
          `setConfig({`,
          `  component: {`,
          // TODO: remove plus
          `    'plus-${component.key}': {`,
          `      property: {`,
          component.properties.map((property: any) => {
            return `        ${property.name}: ${property.initializer},`;
          }),
          `      }`,
          `    }`,
          `  }`,
          `});`
        ]
          .flat()
          .join('\n')}
      </Code>
    </LayoutDefault>
  );
}

export function getStaticProps(context: GetStaticPropsContext) {
  const params = context.params! as any;

  const component = components.find((component) => component.key == params.component);

  return {
    props: { component }
  };
}

export function getStaticPaths() {
  const paths = frameworks
    .map((framework) =>
      components.map(
        (component) =>
          getPath(ROUTES.COMPONENT_CONFIG, {
            component: component.key,
            framework: framework.key
          })!
      )
    )
    .flat()
    .filter((path) => !!path);
  return {
    paths,
    fallback: false
  };
}
