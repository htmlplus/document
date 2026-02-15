// import { pascalCase } from 'change-case';

// biome-ignore lint: TODO
export const generateInterfaceNext = (...elements: any[]) => {
	// const aaa = elements
	// 	.map((element) => [element.events, element.methods, element.properties])
	// 	.flat(2)
	// 	.map((item) => item.name)
	// 	.sort((a, b) => b.length - a.length)
	// 	.at(0).length;
	return [
		`declare module '@htmlplus/ui' {`,
		// elements.flatMap((element) => [
		// 	`/**`,
		// 	` * <${element.tag}> element APIs`,
		// 	` */`,
		// 	`interface ${pascalCase(element.tag)}Disables {`,
		// 	(() => {
		// 		const items: string[][] = [];

		// 		element.properties.forEach((property) => {
		// 			items.push([property.name, `false`]);
		// 		});

		// 		element.methods.forEach((method) => {
		// 			items.push([method.name, `false`]);
		// 		});

		// 		element.events.forEach((event) => {
		// 			items.push([event.name, `false`]);
		// 		});

		// 		return items.map(([key, value]) => `// ${key}${' '.repeat(aaa - key.length)}: ${value};`);
		// 	})(),
		// 	`}`,
		// 	`interface ${pascalCase(element.tag)}Overrides {`,
		// 	(() => {
		// 		const items: string[][] = [];

		// 		element.properties
		// 			.filter((property) => {
		// 				return property.type.startsWith('OverridableValue<');
		// 			})
		// 			.forEach((property) => {
		// 				items.push([property.name, `any`]);
		// 			});

		// 		return items.map(([key, value]) => `// ${key}${' '.repeat(aaa - key.length)}: ${value};`);
		// 	})(),
		// 	`}`,
		// 	``
		// ]),
		`}`,
		``,
		`export {};`
	];
};
