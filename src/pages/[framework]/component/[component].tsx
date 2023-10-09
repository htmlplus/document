import type { GetStaticPropsContext } from 'next/types';

import { capitalCase, headerCase } from 'change-case';

import { Markup } from '@app/containers';
import { components, examples, frameworks } from '@app/data';
import { LayoutDefault } from '@app/layouts';
import { ROUTES, getPath } from '@app/utils';

export default function ComponentDetails({ component, example }: any) {
  return (
    <LayoutDefault>
      <Markup value={component?.readmeContent} scope={{ example }} />
    </LayoutDefault>
  );
}

export function getStaticProps(context: GetStaticPropsContext) {
  const params = context.params! as any;

  const component = components.find((component) => component.key == params.component);

  const example = {} as any;

  const meta = {
    title: component.title || null,
    description: component.description || null,
    url: getPath(ROUTES.COMPONENT_DETAILS, params) || null
  };

  try {
    component.readmeContent = component.readmeContent
      .replace(/<Example value=(".*") /g, `<Example {...(example[$1] || {})} `)
      .replace(/<LastModified/g, `<LastModified value="${component.lastModified}"`);
  } catch {}

  component.readmeContent ||= null;

  for (const current of examples) {
    const [frameworkKey, componentKey, exampleKey] = current.key.split('/');

    if (params.framework != frameworkKey || params.component != componentKey) continue;

    const parameters = Object.assign({}, params, { example: exampleKey });

    const title = capitalCase(exampleKey);

    const tabs: any[] = [];

    const TABS = [
      { key: 'template', language: 'html' },
      { key: 'script', language: 'jsx' },
      { key: 'style', language: 'css' },
      { key: 'config', language: 'js' }
    ];

    for (const TAB of TABS) {
      const { key, language } = TAB;

      if (key == 'template' && params.framework.startsWith('react')) continue;

      const content = current[key] ?? null;

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
        icon: 'download',
        url: getPath(ROUTES.EXAMPLE_DOWNLOAD_LINK, parameters)
      },
      {
        key: 'github',
        title: 'Github',
        icon: 'github',
        url: getPath(ROUTES.EXAMPLE_GITHUB_LINK, parameters)
      },
      {
        key: 'codesandbox',
        title: 'CodeSandbox',
        icon: 'box',
        url: getPath(ROUTES.EXAMPLE_CODE_SANDBOX_LINK, parameters)
      }
    ];

    example[exampleKey] = {
      component: component.key,
      example: exampleKey,
      ...current.settings, // TODO
      links,
      tabs,
      title
    };
  }

  return {
    props: { component, example, meta }
  };
}

export function getStaticPaths() {
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
}
