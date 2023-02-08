// TODO
import { GetStaticPaths, GetStaticProps } from 'next';

import { pascalCase } from 'change-case';

import { examples } from '@app/data';
import * as Examples from '@app/examples';
import { getPath, ROUTES } from '@app/utils';

const Example = ({ component, example }: any) => {
  const name = pascalCase(component as string) + pascalCase(example as string);

  const Preview = (Examples as any)[name] as any;

  return <Preview />;
};

export default Example;

export const getStaticProps: GetStaticProps = async (context) => {
  const { component, example } = context.params! as any;
  return {
    props: { component, example }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
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
};
