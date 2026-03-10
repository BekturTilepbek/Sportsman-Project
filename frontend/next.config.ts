/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/media/**',
      },
    ],
  },

  output: 'standalone',
}

module.exports = nextConfig