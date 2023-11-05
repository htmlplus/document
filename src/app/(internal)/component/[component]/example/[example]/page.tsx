import { pascalCase } from 'change-case';

import { examples } from '@/data';
import * as Examples from '@/examples';

interface IPage {
  params: IParams;
}

interface IParams {
  component: string;
  example: string;
}

export function generateStaticParams() {
  const params: IParams[] = [];

  for (const example of examples) {
    if (!example.settings?.isolate) continue;

    const [frameworkKey, componentKey, exampleKey] = example.key.split('/');

    params.push({
      component: componentKey,
      example: exampleKey
    });
  }

  return params;
}

export default function Page({ params }: IPage) {
  const name = pascalCase(params.component) + pascalCase(params.example);

  const Preview = (Examples as any)[name] as any;

  return <Preview />;
}
