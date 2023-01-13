import { GetStaticPaths, GetStaticProps } from 'next';

import { capitalCase, headerCase, pascalCase } from 'change-case';

import { Markup } from '@app/containers';
import { components, examples, frameworks } from '@app/data';
import { LayoutDefault } from '@app/layouts';
import { ROUTES, getPath } from '@app/utils';

const ComponentDetails = ({ component, example }: any) => {
  return (
    <LayoutDefault>
      <Markup value={component?.readmeContent} scope={{ example }} />
    </LayoutDefault>
  );
};

export default ComponentDetails;

export const getStaticProps: GetStaticProps = async (context) => {
  const { component, framework } = context.params! as any;

  const current = components.find((x) => x.key == component);

  // TODO
  if (current) {
    try {
      current.readmeContent = current.readmeContent
        .replace(/<Example value=(".*") /g, `<Example value={example[$1]} `)
        .replace(/<LastModified/g, `<LastModified value="${current.lastModified}"`);
    } catch {}
    current.readmeContent ??= null;
  }

  // TODO
  const example = (() => {
    return examples
      ?.filter((example) => example.category == framework && example.component == component)
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

        const rtl = examples?.some((item) => {
          return (
            item.category == 'preview' &&
            item.component == example.component &&
            item.key == example.key &&
            item.detail.rtl
          );
        });

        result[example.key] = {
          componentName,
          links,
          rtl,
          tabs,
          title
        };

        for (const key of ['template', 'script', 'style', 'config']) {
          if (key == 'template' && ['react', 'react@experimental'].includes(framework)) continue;

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
