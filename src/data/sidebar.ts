import { components, frameworks } from '@app/data';
import { ROUTES, getPath } from '@app/utils';

export const sidebar = (framework: string) => [
  {
    title: 'Introduction',
    items: [
      {
        title: `What's HTMLPLUS?`,
        url: getPath(ROUTES.INTRODUCTION_WHAT, {})
      },
      {
        title: `Why HTMLPLUS?`,
        url: getPath(ROUTES.INTRODUCTION_WHY, {})
      }
    ]
  },
  {
    title: 'Getting started',
    items: [
      {
        title: 'Installation',
        url: getPath(ROUTES.INSTALLATION, {})
      },
      {
        title: 'Browser support',
        url: getPath(ROUTES.BROWSERS, {})
      }
    ]
  },
  {
    title: 'Frameworks',
    items: frameworks.map((framework) => ({
      title: framework.title,
      url: getPath(ROUTES.INSTALLATION_FRAMEWORK, { framework: framework.key })
    }))
  },
  {
    title: 'UI Components',
    items: components
      .filter((component) => {
        if (component.key == component.key.split('-')[0]) return true;
        return !components.some((x) => {
          return x.key == component.key.split('-')[0];
        });
      })
      .map((component) => ({
        stable: component.tags.some((tag: any) => tag.key == 'stable'),
        title: component.title,
        url: getPath(ROUTES.COMPONENT_DETAILS, { framework, component: component.key })
      }))
  },
  {
    title: 'UI Components API',
    items: components.map((component) => ({
      title: component.title,
      url: getPath(ROUTES.API_DETAILS, { framework, component: component.key })
    }))
  },
  {
    title: 'Global Config',
    items: [
      {
        title: 'Overview',
        url: getPath(ROUTES.GLOBAL_CONFIG, {})
      },
      ...frameworks.map((framework) => ({
        title: framework.title,
        url: `/${framework.key}` + getPath(ROUTES.GLOBAL_CONFIG, {})
      }))
    ]
  },
  {
    title: 'Utils',
    items: [
      {
        title: 'Animations',
        url: getPath(ROUTES.ANIMATIONS, {})
      }
    ]
  },
  {
    title: 'Code Completion',
    url: getPath(ROUTES.CODE_COMPLETION, {})
  },
  {
    title: 'Code Of Conduct',
    url: getPath(ROUTES.CODE_OF_CONDUCT, {})
  },
  {
    title: 'Changelog',
    url: getPath(ROUTES.CHANGELOG, {})
  }
];
