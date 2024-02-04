import { capitalCase } from 'change-case';

import { Alert, Button, Code } from '@/components';
import { ROUTES } from '@/constants';
import { components, frameworks } from '@/data';
import { getPath } from '@/utils';

interface IPage {
  params: IParams;
}

interface IParams {
  component: string;
}

export function generateStaticParams() {
  const params: IParams[] = [];

  for (const framework of frameworks) {
    for (const component of components) {
      params.push({
        component: component.key
      });
    }
  }

  return params;
}

export default function Page({ params }: IPage) {
  const component = components.find((component) => component.key == params.component);
  return (
    <>
      <h1>{capitalCase(component.key)} global config</h1>
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
          `import { setConfig } from '@htmlplus/core/config.js';`,
          ``,
          `setConfig({`,
          `  element: {`,
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
    </>
  );
}
