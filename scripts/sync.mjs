import axios from 'axios';
import { paramCase, pascalCase } from 'change-case';
import fs from 'fs';
import path from 'path';
import * as url from 'url';
import document from '@htmlplus/core/json/document.json' assert { type: 'json' };

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

// changelog
(async () => {
  const DESTINATION = './src/content/en/changelog.md';
  const LOCAL = path.join(__dirname, '../../core/CHANGELOG.md');
  const REMOTE = 'https://github.com/htmlplus/core/raw/main/CHANGELOG.md';

  const content = await load(LOCAL, REMOTE);

  fs.writeFileSync(DESTINATION, content, 'utf8');
})();

// components light
(async () => {
  const DESTINATION = './src/data/components.light.ts'; 

  const lines = [
    '/**************************************************',
    ' * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY',
    ' **************************************************/',
    '',
    'export const componentsLight = ' + 
    JSON.stringify(
      document
        ?.components
        ?.map((component) => ({
          key: component.key,
          stable: component.tags.some((tag) => tag.key == 'stable') || undefined,
          title: component.title,
          dependencies: component
            ?.tags
            ?.find((tag) => tag.key == 'dependencies')
            ?.value
            ?.split(',')
            ?.map((dependency) => dependency.trim())
            ?.filter((dependency) => !!dependency)
        })),
      null,
      2
    ),
  ];

  const content = lines.join('\n');

  fs.writeFileSync(DESTINATION, content, 'utf8');
})();

// examples
(async () => {
  const DIRECTORY = './src/examples';
  const FILE = './src/data/examples.ts';
  const LOCAL = path.join(__dirname, '../../examples.new/dist/db.json'); // TODO
  const REMOTE = 'https://github.com/htmlplus/examples/raw/main/dist/db.json';
  const HEADER = [
    '/**************************************************',
    ' * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY',
    ' **************************************************/',
    ''
  ];

  const db = JSON.parse(await load(LOCAL, REMOTE));

  (() => {
    fs.rmSync(FILE, { force: true, recursive: true });

    fs.mkdirSync(path.dirname(FILE), { recursive: true });

    const lines = [...HEADER, `export const examples: any[] = ${JSON.stringify(db, null, 2)};`];

    const content = lines.join('\n');

    fs.writeFileSync(FILE, content, 'utf8');
  })();

  (() => {
    fs.rmSync(DIRECTORY, { force: true, recursive: true });

    fs.mkdirSync(DIRECTORY, { recursive: true });

    const lines = [...HEADER, `import dynamic from 'next/dynamic';`, ''];

    for (const item of db) {
      if (!item.key.startsWith('react-dedicated')) continue;

      const name = pascalCase(item.key.replace('react-dedicated/', ''));

      const className = `ex-${paramCase(name)}`;

      let { config, script, style } = item;

      // TODO
      const settings = {};

      if (style) {
        style = scoped(style, `.${className}`);
      }

      script = script.split('export default ')[0].trim();
      script += '\n\n';
      script += `const ${name}Example = () => {\n`;
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
      script += `export default ${name}Example;\n`;

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
    '/**************************************************',
    ' * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY',
    ' **************************************************/',
    '',
    'export const statistics = {',
    "  platforms: 'TODO',",
    "  themes: 'TODO',",
    `  forks: ${first.forks},`,
    `  stars: ${first.stargazers_count},`,
    `  watchers: ${first.subscribers_count},`,
    `  dowanloads: ${second.downloads},`,
    `  downloadsLastWeek: ${fourth.downloads},`,
    `  downloadsLastMonth: ${third.downloads},`,
    '  get components(): number {',
    '    return this.componentsPerFramework * this.frameworks;',
    '  },',
    `  componentsPerFramework: ${10},`,
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
