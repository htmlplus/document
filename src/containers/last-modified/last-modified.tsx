import { Toc } from '@app/containers';

import { LastModifiedProps } from './last-modified.types';

export const LastModified = ({ value }: LastModifiedProps) => {
  return (
    <>
      <h2>
        <Toc.Item level={2}>Last Modified</Toc.Item>
      </h2>
      <p>{new Date(value).toDateString()}</p>
    </>
  );
};
