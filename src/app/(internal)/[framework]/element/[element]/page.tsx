import { capitalCase, pascalCase, sentenceCase } from 'change-case';

import { ROUTES } from '@/constants';
import { Markup } from '@/containers';
import { elements, examples, frameworks } from '@/data';
import * as Examples from '@/examples';
import { getPath } from '@/utils';

interface IPage {
  params: IParams;
}

interface IParams {
  element: string;
  framework: string;
}

export function generateStaticParams() {
  const params: IParams[] = [];

  for (const framework of frameworks) {
    for (const element of elements) {
      params.push({
        element: element.key,
        framework: framework.key
      });
    }
  }

  return params;
}

export default function Page({ params }: IPage) {
  const element = elements.find((element) => element.key == params.element);

  // TODO
  if (!element) return null;

  const example = {} as any;

  // TODO
  // const meta = {
  //   title: element.title || null,
  //   description: element.description || null,
  //   url: getPath(ROUTES.ELEMENT_DETAILS, params) || null
  // };

  try {
    element.readmeContent = element.readmeContent
      .replace(/<Example src="examples\/(.*?)"/g, `<Example {...(example["$1"] || {})}`)
      .replace(/<LastModified/g, `<LastModified value="${element.lastModified}"`);
  } catch { }

  element.readmeContent ||= '';

  for (const current of examples) {
    const [frameworkKey, elementKey, exampleKey] = current.key.split('/');

    if (params.framework != frameworkKey || params.element != elementKey) continue;

    const Preview = Examples[pascalCase(elementKey + ' ' + exampleKey) as keyof typeof Examples];

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
        title: sentenceCase(key)
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
        key: 'stackblitz',
        title: 'StackBlitz',
        icon: 'stackblitz',
        url: getPath(ROUTES.EXAMPLE_STACKBLITZ_LINK, parameters)
      }
    ];

    example[exampleKey] = {
      element: element.key,
      example: exampleKey,
      ...(current.settings || {}), // TODO
      links,
      tabs,
      title,
      Preview
    };
  }

  return <Markup value={element.readmeContent} scope={{ example }}></Markup>;
}
