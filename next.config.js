/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  trailingSlash: false,
  output: 'standalone',
};

module.exports = nextConfig;
