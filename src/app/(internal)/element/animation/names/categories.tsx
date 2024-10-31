'use client';

import { Fragment, useEffect, useState } from 'react';
import assets from '@htmlplus/ui/animation/assets.json';
import '@htmlplus/ui/animation/names/all.js';

import { TocItem } from '@/containers';
import { capitalCase } from 'change-case';

export type Category = {
  key: string;
  title: string;
  items: Array<Omit<Category, 'items'>>;
}

export function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  const [playing, setPlaying] = useState('');
  
  useEffect(() => {
    const categories: Category[] = [];
  
    for (const file of assets) {
      if (!file.startsWith('names') || file.endsWith('all.js') || file.endsWith('register.js')) continue;

      const [directoryName, fileName] = file
        .split('names/')
        .at(1)!
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

    setCategories(categories);
  }, []);

  return categories.map((category) => (
    <Fragment key={category.key}>
      <h3>
        <TocItem level={3}>{category.title}</TocItem>
      </h3>
      <plus-grid gutter="md">
        {category.items.map((item) => (
          <plus-grid-item class="animation" key={`${category.key}:${item.key}`}>
            <div
              className={playing == item.key ? '' : 'stop'}
              onMouseEnter={() => setPlaying(item.key)}
              onMouseLeave={() => setPlaying('')}
            >
              {playing == item.key && <plus-animation name={item.key} run></plus-animation>}
            </div>
            <small>{item.title}</small>
          </plus-grid-item>
        ))}
      </plus-grid>
    </Fragment>
  ))
}
