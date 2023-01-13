import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { capitalCase } from 'change-case';

import { Code } from '@app/components';
import { components, frameworks } from '@app/data';
import { LayoutDefault } from '@app/layouts';
import { ROUTES, getPath } from '@app/utils';

const ComponentConfig = ({ component }: any) => {
  const router = useRouter();
  return (
    <LayoutDefault>
      <h1>
        {capitalCase(component.key)} config in the {capitalCase(router.query!.framework as any)}
      </h1>
      <p>TODO</p>
      <Code language="js">
        {[
          `import { setConfig } from '@htmlplus/core/config.js';`,
          ``,
          `setConfig({`,
          `  component: {`,
          // TODO: remove plus
          `    'plus-${component.key}': {`,
          `      property: {`,
          ...component.properties.map((property: any) => `        ${property.name}: ${property.initializer},`),
          `      }`,
          `    }`,
          `  }`,
          `});`
        ].join('\n')}
      </Code>
    </LayoutDefault>
  );
};

export default ComponentConfig;

export const getStaticProps: GetStaticProps = async (context) => {
  const component = components.find((component) => {
    return component.key == context.params!.component;
  });
  return {
    props: { component }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
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
};
