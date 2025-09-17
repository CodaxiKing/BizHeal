/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@bizheal/ui'],
  serverExternalPackages: [],
  allowedDevOrigins: ['*'],
  experimental: {
    allowedHosts: true,
  },
}

module.exports = nextConfig