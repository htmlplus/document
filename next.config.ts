import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
	outputFileTracingRoot: __dirname,
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	reactStrictMode: true,
	experimental: {
		optimizePackageImports: ['@/components', '@/containers', '@/data', '@/examples', '@/utils']
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			loader: 'raw-loader'
		});
		return config;
	}
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [],
		rehypePlugins: []
	}
});

export default withMDX(nextConfig);
