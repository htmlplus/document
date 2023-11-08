'use client';

import { useState } from 'react';

// TODO
import '@htmlplus/core/animation/names/all.js';

import { Animation, Grid } from '@/components';

export function Box({ category }: { category: any }) {
  const [playing, setPlaying] = useState('');
  return (
    <Grid gutter="md">
      {category.items.map((item: any) => (
        <Grid.Item className="animation" key={`${category.key}:${item.key}`}>
          <div
            className={playing == item.key ? '' : 'stop'}
            onMouseEnter={() => setPlaying(item.key)}
            onMouseLeave={() => setPlaying('')}
          >
            {playing == item.key && <Animation name={item.key} run></Animation>}
          </div>
          <small>{item.title}</small>
        </Grid.Item>
      ))}
    </Grid>
  );
}
