/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@bizheal/ui', '@bizheal/db'],
  serverExternalPackages: ['@prisma/client', 'bcryptjs'],
  experimental: {
    allowedHosts: true,
  },
}

module.exports = nextConfig