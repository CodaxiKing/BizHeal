/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@bizheal/ui', '@bizheal/db'],
  serverExternalPackages: ['@prisma/client', 'bcryptjs'],
  allowedDevOrigins: ['c7c09938-92eb-410a-acfa-9bd7560ee057-00-114dfhvm73ebd.spock.replit.dev', '127.0.0.1', 'localhost', '*'],
  experimental: {
    allowedHosts: true,
  },
}

module.exports = nextConfig