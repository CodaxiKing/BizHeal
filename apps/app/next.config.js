/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@bizheal/ui', '@bizheal/db'],
  experimental: {
    serverExternalPackages: ['@prisma/client', 'bcryptjs'],
  },
}

module.exports = nextConfig