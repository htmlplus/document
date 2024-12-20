'use client';

import { TocItem } from '@/containers';

export interface ILastModified {
  value: Date;
}

export function LastModified({ value }: ILastModified) {
  return (
    <>
      <h2>
        <TocItem level={2}>Last Modified</TocItem>
      </h2>
      <p>
        <plus-relative-time value={value}></plus-relative-time>
      </p>
    </>
  );
}
