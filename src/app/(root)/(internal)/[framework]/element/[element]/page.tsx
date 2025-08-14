import { camelCase, capitalCase, pascalCase, sentenceCase } from 'change-case';

import { ROUTES } from '@/constants';
import { Markup } from '@/containers';
import { elements, examples, frameworks } from '@/data';
import * as Examples from '@/examples';
import { getPath } from '@/utils';

interface Params {
  element: string;
  framework: string;
}

export function generateStaticParams(): Params[] {
  return frameworks.flatMap((framework) =>
    elements.map((element) => ({
      element: element.key,
      framework: framework.key,
    })),
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { element: elementKey } = await params;

  const element = elements.find((element) => element.key == elementKey)!;

  return {
    title: element.title,
    description: element.description,
    url: getPath(ROUTES.ELEMENT_DETAILS, await params),
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { framework: frameworkKey, element: elementKey } = await params;

  const element = elements.find((element) => element.key == elementKey)!;

  const scope = {} as any;

  const sections = [];

  sections.push(`# ${element.title}`);

  sections.push(element.description);

  sections.push(
    '## Usage',
    `Follow the tutorials [here](${getPath(ROUTES.INSTALLATION_FRAMEWORK, { framework: frameworkKey })}) to use the **HTMLPLUS** library on **${frameworkKey.toUpperCase()}** projects.`,
    `<plus-prism language="markup">npm install @htmlplus/ui ${element.dependencies || ''}</plus-prism>`,
  );

  sections.push(
    '## Api',
    `Click [here](${getPath(ROUTES.API_DETAILS, { framework: frameworkKey, element: elementKey })}) to learn more about the **Properties**, **Slots**, **Events**, **CSS Variables**, **CSS Parts**, and **Methods**.`,
  );

  sections.push(
    '## Global Config',
    `See the animation's [config](${getPath(ROUTES.ELEMENT_CONFIG, { element: elementKey })}). Full [documentation](${getPath(ROUTES.GLOBAL_CONFIG, {})}) is available.`,
  );

  sections.push('## Examples', 'Below is a collection of simple to complex examples.');

  for (const current of examples) {
    const [frameworkKey, elementKey, exampleKey] = current.key.split('/');

    const parameters = Object.assign({}, await params, { example: exampleKey });

    if (parameters.framework != frameworkKey || parameters.element != elementKey) continue;

    const Preview = Examples[pascalCase(elementKey + ' ' + exampleKey) as keyof typeof Examples];

    const title = capitalCase(exampleKey);

    const tabs = [
      { key: 'template', language: 'html' },
      { key: 'script', language: 'jsx' },
      { key: 'style', language: 'css' },
      { key: 'config', language: 'js' },
    ]
      .map((tab) => {
        const { key, language } = tab;

        if (key == 'template' && parameters.framework.startsWith('react')) return;

        const content = current[key as keyof typeof current] ?? null;

        if (key == 'config' && !content) return;

        return {
          key,
          content,
          disabled: !content,
          language,
          title: sentenceCase(key),
        };
      })
      .filter((tab) => tab);

    const links = [
      {
        key: 'download',
        title: 'Download',
        icon: 'download',
        url: getPath(ROUTES.EXAMPLE_DOWNLOAD_LINK, parameters),
      },
      {
        key: 'github',
        title: 'Github',
        icon: 'github',
        url: getPath(ROUTES.EXAMPLE_GITHUB_LINK, parameters),
      },
      {
        key: 'stackblitz',
        title: 'StackBlitz',
        icon: 'stackblitz',
        url: getPath(ROUTES.EXAMPLE_STACKBLITZ_LINK, parameters),
      },
    ];

    sections.push(`### ${title}`);

    sections.push(current.description || '');

    const key = camelCase(`example_${exampleKey}`);

    sections.push(`<Example {...${key}} />`);

    scope[key] = Object.assign(
      {
        element: element.key,
        example: exampleKey,
        links,
        tabs,
        title,
        Preview,
      },
      current.settings,
    );
  }

  sections.push('## Last Modified', `<plus-relative-time value="${element.lastModified}"></plus-relative-time>`);

  return <Markup value={sections.join('\n\n')} scope={scope}></Markup>;
}
