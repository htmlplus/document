import { Fragment } from 'react';

import { capitalCase } from 'change-case';
import glob from 'fast-glob';

// TODO
import { Code } from '@/components/code';
import { TocItem } from '@/containers/toc';

import { Box } from './box';

function getCategories() {
  const categories: any[] = [];

  const cwd = 'node_modules/@htmlplus/core/animation/names';

  const files = glob.sync('*/*.js', { cwd }).filter((file) => !file.endsWith('all.js'));

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

    category.items.push({
      key: fileName,
      title: capitalCase(fileName)
    });
  }

  return categories;
}

export default function Page() {
  return (
    <>
      <h1>Animations</h1>
      <p>
        A large range of animations for use in the <code>animation</code> component.
      </p>
      <h2>
        <TocItem level={2}>Usage</TocItem>
      </h2>
      <p>Three ways to import a transition.</p>
      <h3>
        <TocItem level={3}>Specific</TocItem>
      </h3>
      <p>Imports a transition from a category.</p>
      <Code language="js">
        {[
          '/* Template */',
          "import '@htmlplus/core/animation/names/[category]/[name].js';",
          '',
          '/* For example */',
          "import '@htmlplus/core/animation/names/flippers/flip.js';"
        ].join('\n')}
      </Code>
      <h3>
        <TocItem level={3}>Category</TocItem>
      </h3>
      <p>Imports a category.</p>
      <Code language="js">
        {[
          '/* Template */',
          "import '@htmlplus/core/animation/names/[category]/all.js';",
          '',
          '/* For example */',
          "import '@htmlplus/core/animation/names/fading-entrance/all.js';"
        ].join('\n')}
      </Code>
      <h3>
        <TocItem level={3}>All</TocItem>
      </h3>
      <p>Imports all categories.</p>
      <Code language="js">{["import '@htmlplus/core/animation/names/transition/all.js';"].join('\n')}</Code>
      <h2>
        <TocItem level={2}>Categories</TocItem>
      </h2>
      <p>
        All animations are based on the popular
        <a href="https://animate.style" target="_blank">
          &nbsp;Animate.css&nbsp;
        </a>
        library.
      </p>
      {getCategories().map((category: any) => (
        <Fragment key={category.key}>
          <h3>
            <TocItem level={3}>{category.title}</TocItem>
          </h3>
          <plus-grid gutter="md">
            {category.items.map((item: any) => (
              <plus-grid-item class="animation" key={`${category.key}:${item.key}`}>
                <Box name={item.key}></Box>
                <small>{item.title}</small>
              </plus-grid-item>
            ))}
          </plus-grid>
        </Fragment>
      ))}
    </>
  );
}
