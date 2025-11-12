/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/marketing-materials' : '',
  assetPrefix: isProd ? '/marketing-materials' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
