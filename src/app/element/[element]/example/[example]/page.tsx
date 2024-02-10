import { pascalCase } from 'change-case';

import { examples } from '@/data';
import * as Examples from '@/examples';

interface IPage {
  params: IParams;
}

interface IParams {
  element: string;
  example: string;
}

export function generateStaticParams() {
  const params: IParams[] = [];

  for (const example of examples) {
    if (!example.settings?.isolate) continue;

    const [frameworkKey, elementKey, exampleKey] = example.key.split('/');

    params.push({
      element: elementKey,
      example: exampleKey
    });
  }

  return params;
}

export default function Page({ params }: IPage) {
  const name = pascalCase(params.element + ' ' + params.example);

  const Preview = Examples[name as keyof typeof Examples];

  return <Preview></Preview>;
}
