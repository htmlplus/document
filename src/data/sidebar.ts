import { ROUTES } from '@/constants';
import { elementsLight, frameworks } from '@/data';
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
		items: frameworks
			.filter((framework) => !framework.disabled)
			.map((framework) => ({
				title: framework.title,
				url: getPath(ROUTES.INSTALLATION_FRAMEWORK, { framework: framework.key })
			}))
	},
	{
		title: 'UI Elements',
		items: elementsLight
			.filter((element) => !element.subset)
			.map((element) => ({
				stable: element.stable,
				title: element.title,
				url: getPath(ROUTES.ELEMENT_DETAILS, { framework, element: element.key })
			}))
	},
	{
		title: 'UI Elements API',
		items: elementsLight.map((element) => ({
			title: element.title,
			url: getPath(ROUTES.API_DETAILS, { framework, element: element.key })
		}))
	},
	{
		title: 'Global Config',
		items: [
			{
				title: 'Overview',
				url: getPath(ROUTES.GLOBAL_CONFIG, {})
			},
			...frameworks
				.filter((framework) => !framework.disabled)
				.map((framework) => ({
					title: framework.title,
					url: `/${framework.key}${getPath(ROUTES.GLOBAL_CONFIG, {})}`
				}))
		]
	},
	{
		title: 'Overrides Property',
		url: getPath(ROUTES.OVERRIDES_PROPERTY, {})
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
