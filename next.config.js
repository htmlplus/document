/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;
