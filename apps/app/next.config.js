/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@bizheal/ui', '@bizheal/db'],
  serverExternalPackages: ['@prisma/client', 'bcryptjs'],
  allowedDevOrigins: ['*', 'https://40f5cbbb-0c94-466f-90e0-d6a413fa8e83-00-3elh5h96t1bp1.picard.replit.dev'],
}

module.exports = nextConfig