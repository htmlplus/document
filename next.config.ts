import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
	outputFileTracingRoot: __dirname,
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	reactStrictMode: true,
	turbopack: {
		rules: {
			'./src/assets/icons/*.svg': {
				loaders: ['raw-loader'],
				as: '*.js'
			},
			'./node_modules/prism-themes/themes/*.css': {
				loaders: ['raw-loader'],
				as: '*.js'
			}
		}
	}
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [],
		rehypePlugins: []
	}
});

export default withMDX(nextConfig);
