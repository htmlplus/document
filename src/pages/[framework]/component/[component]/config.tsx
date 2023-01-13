import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { headerCase } from 'change-case';

import { components, frameworks } from '@app/data';
import { LayoutDefault } from '@app/layouts';
import { ROUTES, getPath } from '@app/utils';

const ComponentConfig = ({}: any) => {
  const router = useRouter();
  const { component, framework } = router.query as any;
  return (
    <LayoutDefault>
      <h1>
        Config the {headerCase(component)} in the {headerCase(framework)}
      </h1>
      <p>TODO</p>
    </LayoutDefault>
  );
};

export default ComponentConfig;

export const getStaticProps: GetStaticProps = async (context) => {
  const { component, framework } = context.params! as any;

  return {
    props: {}
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
