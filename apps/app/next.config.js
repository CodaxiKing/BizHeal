/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@bizheal/ui', '@bizheal/db'],
  serverExternalPackages: ['@prisma/client', 'bcryptjs'],
  allowedDevOrigins: ['0255687d-6c41-469f-a2ce-da31a249300e-00-1z5hwb35elp0t.kirk.replit.dev', '*'],
  experimental: {
    allowedHosts: true,
  },
}

module.exports = nextConfig