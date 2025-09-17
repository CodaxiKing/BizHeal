/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@bizheal/ui'],
  serverExternalPackages: [],
  experimental: {
    allowedHosts: true,
  },
}

module.exports = nextConfig