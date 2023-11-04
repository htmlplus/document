import glob from 'fast-glob';
import path from 'path';
import fs from 'fs';

import { Markup } from '@/containers';

interface IPage {
  params: IParams;
}

interface IParams {
  sections: string[];
}

const base = 'src/content/en';

function getContent(sections: string[]) {
  const url = sections.join('/');

  const main = path.join(base, `${url}.md`);

  const alternative = path.join(base, `${url}/index.md`);

  const final = fs.existsSync(main) ? main : alternative;

  const content = fs.readFileSync(final, 'utf8');

  return content;
}

export function generateStaticParams() {
  return glob.sync(`${base}/**/*.md`).map((file) =>
    file
      .replace(base, '')
      .replace('.md', '')
      .replace(/\/index$/, '')
  );
}

export default function Page({ params }: IPage) {
  return <Markup value={getContent(params.sections)} />;
}
