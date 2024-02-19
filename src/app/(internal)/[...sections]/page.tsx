import glob from 'fast-glob';
import fs from 'fs';
import path from 'path';

import { Markup } from '@/containers';

interface IPage {
  params: IParams;
}

interface IParams {
  sections: string[];
}

const ROOT = 'src/content/en';

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

  const main = path.resolve(`${key}.md`);

  const alternative = path.resolve(`${key}/index.md`);

  const final = fs.existsSync(main) ? main : alternative;

  const content = fs.readFileSync(final, 'utf8');

  return <Markup value={content}></Markup>;
}
