'use client';

import { useState } from 'react';

import '@htmlplus/core/animation/names/all.js';

export function Box({ category }: { category: any }) {
  const [playing, setPlaying] = useState('');
  return (
    <plus-grid gutter="md">
      {category.items.map((item: any) => (
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
  );
}
