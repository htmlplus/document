import { ROUTES } from '@/constants';
import { componentsLight, frameworks } from '@/data';
import { getPath } from '@/utils';

export const sidebar = (framework: string) => [
  {
    title: 'Getting started',
    items: [
      {
        title: 'Overview',
        url: getPath(ROUTES.OVERVIEW, {})
      },
      {
        title: 'Installation',
        url: getPath(ROUTES.INSTALLATION, {})
      },
      {
        title: 'Browser support',
        url: getPath(ROUTES.BROWSERS, {})
      },
      {
        title: 'Code Completion',
        url: getPath(ROUTES.CODE_COMPLETION, {})
      },
      {
        title: 'Vision',
        url: getPath(ROUTES.VISION, {})
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
    items: componentsLight
      .filter((component) => {
        const key = component.key.split('-').slice(0, -1).join('-');
        if (component.key == key) return true;
        return !componentsLight.some((component) => component.key == key);
      })
      .map((component) => ({
        stable: component.stable,
        title: component.title,
        url: getPath(ROUTES.COMPONENT_DETAILS, { framework, component: component.key })
      }))
  },
  {
    title: 'UI Components API',
    items: componentsLight.map((component) => ({
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
    title: 'Assets',
    items: [
      {
        title: 'Animations',
        url: getPath(ROUTES.ANIMATIONS, {})
      },
      {
        title: 'Icons',
        url: getPath(ROUTES.ICONS, {})
      }
    ]
  },
  {
    title: 'Changelog',
    url: getPath(ROUTES.CHANGELOG, {})
  }
];
