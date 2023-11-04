import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';

import { MarkupClient } from './markup.client';
import { IMarkup } from './markup.types';

export async function Markup({ value }: IMarkup) {
  const options = { mdxOptions: { development: false, remarkPlugins: [remarkGfm] } };

  const serialized = await serialize(value, options);

  return <MarkupClient {...serialized} />;
}
