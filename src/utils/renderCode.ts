type Lines = string | Lines[];

export const renderCode = (lines: Lines[], depth = 0): string => {
	return lines
		.map((line) => (Array.isArray(line) ? renderCode(line, depth + 2) : ' '.repeat(depth) + line))
		.join('\n');
};
