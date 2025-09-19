/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@bizheal/ui', '@bizheal/db'],
  serverExternalPackages: ['@prisma/client', 'bcryptjs'],
  allowedDevOrigins: ['0a009443-385b-4233-8b30-7c463180947f-00-2y7ww6v9b3rth.riker.replit.dev', '127.0.0.1', 'localhost', '*'],
  experimental: {
    allowedHosts: true,
  },
}

module.exports = nextConfig