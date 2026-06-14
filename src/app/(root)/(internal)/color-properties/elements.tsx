import { elements } from '@/data';

export function Elements() {
	const filtered = elements.filter((element) =>
		element.properties.some((property) => property.type.includes('OverridableValue<PlusColor>'))
	);
	return (
		<ul>
			{filtered.map((element) => (
				<li key={element.key}>{element.tag}</li>
			))}
		</ul>
	);
}
