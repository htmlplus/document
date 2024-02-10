import { capitalCase } from 'change-case';

import { Alert, Button, Code } from '@/components';
import { ROUTES } from '@/constants';
import { elements, frameworks } from '@/data';
import { getPath } from '@/utils';

interface IPage {
  params: IParams;
}

interface IParams {
  element: string;
}

export function generateStaticParams() {
  const params: IParams[] = [];

  for (const framework of frameworks) {
    for (const element of elements) {
      params.push({
        element: element.key
      });
    }
  }

  return params;
}

export default function Page({ params }: IPage) {
  const element = elements.find((element) => element.key == params.element);
  return (
    <>
      <h1>{capitalCase(element.key)} global config</h1>
      <p>
        All of the element's APIs are configurable as below. Full&nbsp;
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
          `    'plus-${element.key}': {`,
          `      property: {`,
          element.properties.map((property: any) => {
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
