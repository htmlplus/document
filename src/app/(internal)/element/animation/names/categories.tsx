'use client';

import { Fragment, useEffect, useState } from 'react';
import '@htmlplus/ui/animation/names/all.js';

import { TocItem } from '@/containers';

import { Category, getCategories } from './getCategories';

export function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  const [playing, setPlaying] = useState('');
  
  useEffect(() => {
    getCategories().then(setCategories);
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
