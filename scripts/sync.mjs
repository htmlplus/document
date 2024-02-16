import axios from 'axios';
import { kebabCase, pascalCase } from 'change-case';
import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const load = (local, remote) => {
  return new Promise((resolve, reject) => {
    const has = fs.existsSync(local);
    if (has) {
      resolve(fs.readFileSync(local, 'utf8'));
    } else {
      axios
        .get(remote)
        .then((response) => resolve(response.data))
        .catch(reject);
    }
  });
};

const scoped = (styles, className) => {
  try {
    var classLen = className.length,
      char,
      nextChar,
      isAt,
      isIn;
    className += ' ';
    styles = styles.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '');
    styles = styles.replace(/}(\s*)@/g, '}@');
    styles = styles.replace(/}(\s*)}/g, '}}');
    for (var i = 0; i < styles.length - 2; i++) {
      char = styles[i];
      nextChar = styles[i + 1];
      if (char === '@') isAt = true;
      if (!isAt && char === '{') isIn = true;
      if (isIn && char === '}') isIn = false;
      if (
        !isIn &&
        nextChar !== '@' &&
        nextChar !== '}' &&
        (char === '}' || char === ',' || ((char === '{' || char === ';') && isAt))
      ) {
        styles = styles.slice(0, i + 1) + className + styles.slice(i + 1);
        i += classLen;
        isAt = false;
      }
    }
    if (styles.indexOf(className) !== 0 && styles.indexOf('@') !== 0) styles = className + styles;
    return styles;
  } catch {}
};

const HEADER = [
  '/**************************************************',
  ' * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY',
  ' **************************************************/',
  ''
];

// changelog
(async () => {
  const DESTINATION = './src/content/en/changelog.md';
  const LOCAL = path.join(__dirname, '../../core/CHANGELOG.md');
  const REMOTE = 'https://github.com/htmlplus/core/raw/main/CHANGELOG.md';

  const content = await load(LOCAL, REMOTE);

  fs.writeFileSync(DESTINATION, content, 'utf8');
})();

// elements light
(async () => {
  const DESTINATION = './src/data/elements.light.ts';
  const LOCAL = path.join(__dirname, '../../core/dist/json/document.json');
  const REMOTE = 'https://github.com/htmlplus/core/raw/main/dist/json/document.json';

  const document = JSON.parse(await load(LOCAL, REMOTE));

  const lines = [
    ...HEADER,
    'export const elementsLight = ' +
      JSON.stringify(
        document?.elements?.map((element) => ({
          key: element.key,
          stable: element.tags.some((tag) => tag.key == 'stable') || undefined,
          title: element.title,
          dependencies: element?.tags
            ?.find((tag) => tag.key == 'dependencies')
            ?.value?.split(',')
            ?.map((dependency) => dependency.trim())
            ?.filter((dependency) => !!dependency)
        })),
        null,
        2
      )
  ];

  const content = lines.join('\n');

  fs.writeFileSync(DESTINATION, content, 'utf8');
})();

// examples data
(async () => {
  const FILE = './src/data/examples.ts';
  const LOCAL = path.join(__dirname, '../../examples/dist/db.json');
  const REMOTE = 'https://github.com/htmlplus/examples/raw/main/dist/db.json';

  const db = JSON.parse(await load(LOCAL, REMOTE));

  fs.rmSync(FILE, { force: true, recursive: true });

  fs.mkdirSync(path.dirname(FILE), { recursive: true });

  const lines = [...HEADER, `export const examples: any[] = ${JSON.stringify(db, null, 2)};`];

  const content = lines.join('\n');

  fs.writeFileSync(FILE, content, 'utf8');
})();

// examples element
(async () => {
  const DIRECTORY = './src/examples';
  const LOCAL = path.join(__dirname, '../../examples/dist/db.json');
  const REMOTE = 'https://github.com/htmlplus/examples/raw/main/dist/db.json';

  const db = JSON.parse(await load(LOCAL, REMOTE));

  fs.rmSync(DIRECTORY, { force: true, recursive: true });

  fs.mkdirSync(DIRECTORY, { recursive: true });

  const lines = ["'use client';", '', ...HEADER, `import dynamic from 'next/dynamic';`, ''];

  for (const item of db) {
    if (!item.key.startsWith('react/')) continue;

    const name = pascalCase(item.key.replace('react/', ''));

    const className = `ex-${kebabCase(name)}`;

    let { config, script, settings, style } = item;

    if (style) {
      style = scoped(style, `.${className}`);
    }

    script = script.split('export default ')[0].trim();
    script += '\n\n';
    script += `const ${name} = () => {\n`;
    if (config) {
      script += '  const [ready, setReady] = useState(false);\n';
      script += '  useEffect(() => setReady(true), []);\n';
    }
    script += '  return (\n';
    script += `    <div className="${className}${settings?.dock ? ' dock' : ''}">\n`;
    if (config) {
      script += `      {ready && <App />}\n`;
    } else {
      script += `      <App />\n`;
    }
    script += style ? `      <style>{\`${style}\`}</style>\n` : '';
    script += '    </div>\n';
    script += '  )\n';
    script += '};\n';
    script += '\n';
    script += `export default ${name};\n`;

    if (config) {
      const i = script.lastIndexOf('import');

      const j = script.indexOf('\n', i);

      const react = `import { useEffect, useState } from 'react';`;

      script = [react, script.slice(0, j), config, script.slice(j)].join('\n');
    }

    lines.push(`export const ${name} = dynamic(() => import('./${name}'), { suspense: true });`);

    const script1 = [...HEADER, script].join('\n');

    fs.writeFileSync(`${DIRECTORY}/${name}.js`, script1);
  }

  const content = lines.join('\n');

  fs.writeFileSync(`${DIRECTORY}/index.js`, content);
})();

// vision
(async () => {
  const DESTINATION = './src/content/en/vision.md';
  const LOCAL = path.join(__dirname, '../../core/VISION.md');
  const REMOTE = 'https://github.com/htmlplus/core/raw/main/VISION.md';

  const content = await load(LOCAL, REMOTE);

  fs.writeFileSync(DESTINATION, content, 'utf8');
})();

// statistics
(async () => {
  const DESTINATION = './src/data/statistics.ts';

  const responses = await Promise.all(
    [
      'https://api.github.com/repos/htmlplus/core',
      'https://api.npmjs.org/downloads/point/2021-02-10:2050-01-01/@htmlplus/core',
      'https://api.npmjs.org/downloads/point/last-month/@htmlplus/core',
      'https://api.npmjs.org/downloads/point/last-week/@htmlplus/core'
    ].map((url) => axios.get(url).then((response) => response.data))
  );

  const [first, second, third, fourth] = responses;

  const lines = [
    ...HEADER,
    'export const statistics = {',
    `  forks: ${first.forks},`,
    `  stars: ${first.stargazers_count},`,
    `  watchers: ${first.subscribers_count},`,
    `  dowanloads: ${second.downloads},`,
    `  downloadsLastWeek: ${fourth.downloads},`,
    `  downloadsLastMonth: ${third.downloads},`,
    '  get elements(): number {',
    '    return this.elementsPerFramework * this.frameworks;',
    '  },',
    `  elementsPerFramework: ${10},`,
    '  get examples(): number {',
    '    return this.examplesPerFramework * this.frameworks;',
    '  },',
    `  examplesPerFramework: ${60},`,
    `  frameworks: ${6},`,
    '}'
  ];

  const content = lines.join('\n');

  fs.writeFileSync(DESTINATION, content, 'utf8');
})();
