const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lipsum.app',
        port: '',
        pathname: '/id/**',
      },
    ],
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    plugins: [
      (config.module.generator.asset.publicPath = '/_next/'),
      new MiniCssExtractPlugin({
        experimentalUseImportModule: false,
      }),
    ];
    return config;
  },
};

module.exports = nextConfig;
