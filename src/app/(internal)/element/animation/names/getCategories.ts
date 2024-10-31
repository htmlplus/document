'use server';

import { capitalCase } from 'change-case';
import { glob } from 'glob';
import path from 'path';

export type Category = {
  key: string;
  title: string;
  items: Array<Omit<Category, 'items'>>;
}

export async function getCategories(): Promise<Category[]> {
  const categories: Category[] = [];

  const files = (() => {
    const local = glob
      .sync('*/*.js', { cwd: '/node_modules/@htmlplus/ui/dist/elements/animation/names' })
      .filter((file) => !file.endsWith('all.js'));

    const root = glob
      .sync('*/*.js', { cwd: '../../node_modules/@htmlplus/ui/dist/elements/animation/names' })
      .filter((file) => !file.endsWith('all.js'));

    if (local.length) return local;

    return root;
  })();

  for (const file of files) {
    const [directoryName, fileName] = file
      .split('.')
      .slice(0, -1)
      .join('.')
      .split('/')
      .filter((section) => !!section);

    if (!categories.some((category) => category.key == directoryName))
      categories.push({
        key: directoryName,
        title: capitalCase(directoryName),
        items: []
      });

    const category = categories.find((category) => category.key == directoryName);

    category?.items.push({
      key: fileName,
      title: capitalCase(fileName)
    });
  }

  return categories;
} 