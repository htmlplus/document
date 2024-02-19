import glob from 'fast-glob';
import fs from 'fs';

import { Markup } from '@/containers';

interface IPage {
  params: IParams;
}

interface IParams {
  sections: string[];
}

const ROOT = 'src/content/en';

function getContent(key: string) {
  const main = `${key}.md`;

  const alternative = `${key}/index.md`;

  const final = fs.existsSync(main) ? main : alternative;

  const content = fs.readFileSync(final, 'utf8');

  return content;
}

export function generateStaticParams() {
  return glob.sync(ROOT + '/**/*.md').map((file) =>
    file
      .replace(ROOT, '')
      .replace('.md', '')
      .replace(/\/index$/, '')
  );
}

export default function Page({ params }: IPage) {
  const key = ROOT + '/' + params.sections.join('/');

  const content = getContent(key);

  return <div>{content}</div>;
}
