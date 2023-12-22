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
};

module.exports = nextConfig;
