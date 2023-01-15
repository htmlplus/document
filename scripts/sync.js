// TODO

const axios = require('axios');
const { pascalCase } = require('change-case');
const fs = require('fs');
const path = require('path');

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

// changelog
(async () => {
  const DESTINATION = './src/content/en/changelog.md';
  const LOCAL = path.join(__dirname, '../../core/CHANGELOG.md');
  const REMOTE = 'https://github.com/htmlplus/core/raw/main/CHANGELOG.md';

  const content = await load(LOCAL, REMOTE);

  fs.writeFileSync(DESTINATION, content, 'utf8');
})();

// code of conduct
(async () => {
  const DESTINATION = './src/content/en/code-of-conduct.md';
  const LOCAL = path.join(__dirname, '../../core/CODE_OF_CONDUCT.md');
  const REMOTE = 'https://github.com/htmlplus/core/raw/main/CODE_OF_CONDUCT.md';

  const content = await load(LOCAL, REMOTE);

  fs.writeFileSync(DESTINATION, content, 'utf8');
})();

// examples
(async () => {
  const DIRECTORY = './src/containers/example/examples';
  const FILE = './src/data/examples.ts';
  const LOCAL = path.join(__dirname, '../../examples/dist/db.json');
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

    for (const example of db) {
      if (example.category != 'preview') continue;

      const name = `${pascalCase(example.component)}${pascalCase(example.key)}`;

      lines.push(`export const ${name} = dynamic(() => import('./${name}'));`);

      const script = [...HEADER, example.detail.script].join('\n');

      fs.writeFileSync(`${DIRECTORY}/${name}.js`, script);
    }

    const content = lines.join('\n');

    fs.writeFileSync(`${DIRECTORY}/index.js`, content);
  })();
})();

// statistics
(async () => {
  const DESTINATION = './src/data/statistics.ts';

  const responses = await Promise.all([
    axios.get('https://api.github.com/repos/htmlplus/core'),
    axios.get('https://api.npmjs.org/downloads/point/2021-02-10:2050-01-01/@htmlplus%2Fcore'),
    axios.get('https://api.npmjs.org/downloads/point/last-month/@htmlplus%2Fcore'),
    axios.get('https://api.npmjs.org/downloads/point/last-week/@htmlplus%2Fcore')
  ]);

  const [first, second, third, fourth] = responses;

  const lines = [
    '/**************************************************',
    ' * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY',
    ' **************************************************/',
    '',
    "import { components, examples, frameworks } from '@app/data';",
    '',
    'export const statistics = {',
    "  platforms: 'TODO',",
    "  themes: 'TODO',",
    `  forks: ${first.data.forks},`,
    `  stars: ${first.data.stargazers_count},`,
    `  watchers: ${first.data.subscribers_count},`,
    `  dowanloads: ${second.data.downloads},`,
    `  downloadsLastWeek: ${fourth.data.downloads},`,
    `  downloadsLastMonth: ${third.data.downloads},`,
    '  get components(): number {',
    '    return this.componentsPerFramework * this.frameworks;',
    '  },',
    '  get componentsPerFramework(): number {',
    '    return components.length;',
    '  },',
    '  get examples(): number {',
    '    return this.examplesPerFramework * this.frameworks;',
    '  },',
    '  get examplesPerFramework(): number {',
    "    return examples.filter((example) => example.category == 'preview').length;",
    '  },',
    '  get frameworks(): number {',
    '    return frameworks.length;',
    '  }',
    '};'
  ];

  const content = lines.join('\n');

  fs.writeFileSync(DESTINATION, content, 'utf8');
})();
