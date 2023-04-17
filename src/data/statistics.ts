/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { components, examples, frameworks } from '@app/data';

export const statistics = {
  platforms: 'TODO',
  themes: 'TODO',
  forks: 1,
  stars: 25,
  watchers: 5,
  dowanloads: undefined,
  downloadsLastWeek: undefined,
  downloadsLastMonth: undefined,
  get components(): number {
    return this.componentsPerFramework * this.frameworks;
  },
  get componentsPerFramework(): number {
    return components.length;
  },
  get examples(): number {
    return this.examplesPerFramework * this.frameworks;
  },
  get examplesPerFramework(): number {
    return examples.filter((example) => example.category == 'preview').length;
  },
  get frameworks(): number {
    return frameworks.length;
  }
};