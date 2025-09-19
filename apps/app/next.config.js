/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@bizheal/ui', '@bizheal/db'],
  serverExternalPackages: ['@prisma/client', 'bcryptjs'],
  allowedDevOrigins: ['c5e74ffe-6c54-4e90-9664-9ee5262a62b9-00-3bdxfsen9y0s9.picard.replit.dev', '*'],
  experimental: {
    allowedHosts: true,
  },
}

module.exports = nextConfig