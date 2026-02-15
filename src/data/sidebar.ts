import { ROUTES } from '@/constants';
import { elementsLight, frameworks } from '@/data';
import { getPath } from '@/utils';

export const sidebar = (framework: string) => [
	{
		title: 'Getting started',
		items: [
			{
				title: 'Overview',
				url: getPath(ROUTES.OVERVIEW)
			},
			{
				title: 'Installation',
				url: getPath(ROUTES.INSTALLATION)
			},
			// {
			// 	title: 'Setup',
			// 	url: getPath(ROUTES.SETUP)
			// },
			{
				title: 'Browser support',
				url: getPath(ROUTES.BROWSERS)
			},
			{
				title: 'Code Completion',
				url: getPath(ROUTES.CODE_COMPLETION)
			},
			{
				title: 'Vision',
				url: getPath(ROUTES.VISION)
			},
			{
				title: 'Changelog',
				url: getPath(ROUTES.CHANGELOG)
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
		title: 'Elements',
		items: elementsLight
			.filter((element) => !element.subset)
			.map((element) => ({
				stable: element.stable,
				title: element.title,
				url: getPath(ROUTES.ELEMENT_DETAILS, { framework, element: element.key })
			}))
	},
	{
		title: 'Element APIs',
		items: elementsLight.map((element) => ({
			title: element.title,
			url: getPath(ROUTES.API_DETAILS, { framework, element: element.key })
		}))
	},
	{
		title: 'Customization',
		items: [
			{
				title: 'Breakpoints',
				url: getPath(ROUTES.BREAKPOINTS)
			},
			{
				title: 'Global Configuration',
				url: getPath(ROUTES.GLOBAL_CONFIGURATION)
			},
			{
				title: 'Overrides Property',
				url: getPath(ROUTES.OVERRIDES_PROPERTY)
			},
			// {
			// 	title: 'Variant Property',
			// 	url: getPath(ROUTES.VARIANT_PROPERTY)
			// },
			// {
			// 	title: 'Disable APIs',
			// 	url: getPath(ROUTES.DISABLE_APIS)
			// },
			{
				title: 'Color Properties',
				url: getPath(ROUTES.COLOR_PROPERTIES)
			}
		]
	},
	{
		title: 'Assets',
		items: [
			{
				title: 'Animations',
				url: getPath(ROUTES.ANIMATIONS)
			},
			{
				title: 'Icons',
				url: getPath(ROUTES.ICONS)
			}
		]
	}
];
