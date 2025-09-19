/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@bizheal/ui', '@bizheal/db'],
  serverExternalPackages: ['@prisma/client', 'bcryptjs'],
  allowedDevOrigins: ['d44db1be-7cae-42d0-933f-8ad28e296a47-00-1p5v7vauo7is0.janeway.replit.dev', '*'],
  experimental: {
    allowedHosts: true,
  },
}

module.exports = nextConfig