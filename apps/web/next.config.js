/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@bizheal/ui'],
  serverExternalPackages: [],
}

module.exports = nextConfig