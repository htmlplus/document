import { capitalCase, pascalCase, sentenceCase } from 'change-case';

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
    }))
  )
}

export async function generateMetadata({ params } : { params: Params }) {
  const { element: elementKey } = await params;

  const element = elements.find((element) => element.key == elementKey)!;

  return {
      title: element.title,
      description: element.description,
      url: getPath(ROUTES.ELEMENT_DETAILS, params)
  };
}

export default async function Page({ params }: { params: Params }) {
  const { element: elementKey } = await params;

  const element = elements.find((element) => element.key == elementKey)!;

  const example = {} as any;

  element.readmeContent ||= '';

  try {
    element.readmeContent = element.readmeContent
      .replace(/<Example src="examples\/(.*?)"/g, `<Example {...(example["$1"] || {})}`)
      .replace(/<LastModified/g, `<LastModified value="${element.lastModified}"`);
  } catch { }

  for (const current of examples) {
    const [frameworkKey, elementKey, exampleKey] = current.key.split('/');

    if (params.framework != frameworkKey || params.element != elementKey) continue;

    const Preview = Examples[pascalCase(elementKey + ' ' + exampleKey) as keyof typeof Examples];

    const parameters = Object.assign({}, params, { example: exampleKey });

    const title = capitalCase(exampleKey);

    const tabs = [
      { key: 'template', language: 'html' },
      { key: 'script', language: 'jsx' },
      { key: 'style', language: 'css' },
      { key: 'config', language: 'js' }
    ]
      .map((tab) => {
        const { key, language } = tab;

        if (key == 'template' && params.framework.startsWith('react')) return;

        const content = current[key as keyof typeof current] ?? null;

        if (key == 'config' && !content) return;

        return {
          key,
          content,
          disabled: !content,
          language,
          title: sentenceCase(key)
        }
      })
      .filter((tab) => tab);

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
        key: 'stackblitz',
        title: 'StackBlitz',
        icon: 'stackblitz',
        url: getPath(ROUTES.EXAMPLE_STACKBLITZ_LINK, parameters)
      }
    ];

    example[exampleKey] = Object.assign(
      {
        element: element.key,
        example: exampleKey,
        links,
        tabs,
        title,
        Preview
      },
      current.settings,
    );
  }

  return <Markup value={element.readmeContent} scope={{ example }}></Markup>;
}
