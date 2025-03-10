'use client';

export interface LastModifiedProps {
  value: Date;
}

export function LastModified({ value }: LastModifiedProps) {
  return (
    <>
      <h2 id="last-modified">Last Modified</h2>
      <p>
        <plus-relative-time value={value}></plus-relative-time>
      </p>
    </>
  );
}
