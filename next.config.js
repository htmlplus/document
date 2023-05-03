/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      loader: 'raw-loader'
    });
    return config;
  }
};

module.exports = nextConfig;
