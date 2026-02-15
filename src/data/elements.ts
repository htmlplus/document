import document from '@htmlplus/ui/json/document.json';

export const elements = document.elements.map((element) => ({
	...element,
	tag: element.key,
	key: element.key.replace('plus-', ''),
	title: element.title.replace('Plus ', '')
}));
