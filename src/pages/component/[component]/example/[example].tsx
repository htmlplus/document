import type { GetStaticPropsContext } from 'next/types';

import { pascalCase } from 'change-case';

import { examples } from '@app/data';
import * as Examples from '@app/examples';
import { getPath, ROUTES } from '@app/utils';

export default function Example({ name }: any) {
  const Preview = (Examples as any)[name] as any;
  return <Preview />;
}

export function getStaticProps(context: GetStaticPropsContext) {
  const params = context.params! as any;

  const name = pascalCase(params.component as string) + pascalCase(params.example as string);

  return {
    props: { name }
  };
}

export function getStaticPaths() {
  const paths = examples
    .filter((example) => example.settings?.isolate)
    .map((example) => {
      const [frameworkKey, componentKey, exampleKey] = example.key.split('/');
      return getPath(ROUTES.COMPONENT_EXAMPLE, {
        component: componentKey,
        example: exampleKey
      });
    });
  return {
    paths,
    fallback: false
  };
}
