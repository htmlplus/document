import { GetStaticPaths, GetStaticProps } from 'next';

import { capitalCase, headerCase } from 'change-case';

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

  try {
    current.readmeContent = current.readmeContent
      .replace(/<Example value=(".*") /g, `<Example {...(example[$1] || {})} `)
      .replace(/<LastModified/g, `<LastModified value="${current.lastModified}"`);
  } catch {}

  current.readmeContent ||= null;

  const result: any = {};

  for (const example of examples) {
    if (example.plugin != framework || example.component != component) continue;

    const title = capitalCase(example.example);

    const tabs: any[] = [];

    const TABS = [
      { key: 'template', language: 'html' },
      { key: 'script', language: 'jsx' },
      { key: 'style', language: 'css' },
      { key: 'config', language: 'js' }
    ];

    for (const TAB of TABS) {
      const { key, language } = TAB;

      if (key == 'template' && framework.startsWith('react')) continue;

      const content = example.output?.[key] ?? null;

      if (key == 'config' && !content) continue;

      tabs.push({
        key,
        content,
        disabled: !content,
        language,
        title: headerCase(key)
      });
    }

    const links = [
      {
        key: 'download',
        title: 'Download',
        icon: 'app/download',
        url: getPath(ROUTES.EXAMPLE_DOWNLOAD_LINK, { component, framework, example: example.example })
      },
      {
        key: 'github',
        title: 'Github',
        icon: 'app/github',
        url: getPath(ROUTES.EXAMPLE_GITHUB_LINK, { component, framework, example: example.example })
      },
      {
        key: 'codesandbox',
        title: 'CodeSandbox',
        icon: 'app/codesandbox',
        url: getPath(ROUTES.EXAMPLE_CODE_SANDBOX_LINK, { component, framework, example: example.example })
      }
    ];

    // TODO
    const { isolate = false, rtl = false } =
      examples
        .find((item) => item.plugin == 'prepare' && item.component == component && item.example == example.example)
        ?.output?.find?.((output: any) => output.key == 'settings')?.content || {};

    result[example.example] = {
      component,
      example: example.example,
      isolate,
      links,
      rtl,
      tabs,
      title
    };
  }

  return {
    props: {
      component: current,
      example: result
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
