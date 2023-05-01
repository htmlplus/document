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
  const { component, example } = context.params!;

  const name = pascalCase(component as string) + pascalCase(example as string);

  return {
    props: { name }
  };
}

export function getStaticPaths() {
  const paths = examples
    .filter((example) => {
      return example.output?.find?.((output: any) => output.key == 'settings')?.content?.isolate;
    })
    .map((example) => {
      return getPath(ROUTES.COMPONENT_EXAMPLE, example);
    });
  return {
    paths,
    fallback: false
  };
}
