'use client';

import { useState } from 'react';

// TODO
import '@htmlplus/core/animation/names/all.js';

export function Box({ name }: { name: string }) {
  const [playing, setPlaying] = useState('');
  return (
    <div
      className={playing == name ? '' : 'stop'}
      onMouseEnter={() => setPlaying(name)}
      onMouseLeave={() => setPlaying('')}
    >
      {playing == name && <plus-animation name={name} run></plus-animation>}
    </div>
  );
}
