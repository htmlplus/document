import { GetStaticPaths, GetStaticProps } from 'next';

import { capitalCase, headerCase, pascalCase } from 'change-case';
import fs from 'fs';

import { LastModified, Markup } from '@app/containers';
import { components, examples, frameworks } from '@app/data';
import { LayoutDefault } from '@app/layouts';
import { ROUTES, getPath } from '@app/utils';

const ComponentDetails = ({ component, example }: any) => {
  return (
    <LayoutDefault>
      <Markup value={component?.readmeContent} scope={{ example }} />
      <LastModified value={component.lastModified} />
    </LayoutDefault>
  );
};

export default ComponentDetails;

export const getStaticProps: GetStaticProps = async (context) => {
  const { component, framework } = context.params! as any;

  const current = components.find((x) => x.key == component);

  if (current) {
    current.readmeContent =
      fs
        .readFileSync(`src/content/en/components/${component}.md`, 'utf8')
        .replace(/<Example value=(".*") /g, `<Example value={example[$1]} `) || null;
  }

  // TODO
  const example = (() => {
    return examples
      ?.filter((example) => example.category.startsWith(framework) && example.component == component)
      ?.reduce((result, example) => {
        const links = [
          {
            key: 'download',
            title: 'Download',
            icon: 'download',
            url: getPath(ROUTES.EXAMPLE_DOWNLOAD_LINK, { component, framework, example: example.key })
          },
          {
            key: 'github',
            title: 'Github',
            icon: 'github',
            url: getPath(ROUTES.EXAMPLE_GITHUB_LINK, { component, framework, example: example.key })
          },
          {
            key: 'codesandbox',
            title: 'CodeSandbox',
            icon: 'sandbox',
            url: getPath(ROUTES.EXAMPLE_CODE_SANDBOX_LINK, { component, framework, example: example.key })
          }
        ];

        const tabs: any[] = [];

        const title = capitalCase(example.key);

        const componentName = `${pascalCase(example.component)}${pascalCase(example.key)}`;

        result[example.key] = {
          componentName,
          links,
          tabs,
          title
        };

        for (const key of ['template', 'script', 'style', 'config']) {
          if (framework == 'react' && key == 'template') continue;

          const content = example.detail?.[key] ?? null;

          if (key == 'config' && !content) continue;

          tabs.push({
            key,
            content,
            disabled: !content,
            title: headerCase(key)
          });
        }

        return result;
      }, {});
  })();

  return {
    props: {
      component: current,
      example
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = frameworks
    .map((framework) =>
      components.map(
        (component) =>
          getPath(ROUTES.COMPONENT_DETAILS, {
            framework: framework.key,
            component: component.key
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
