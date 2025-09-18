/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@bizheal/ui', '@bizheal/db'],
  serverExternalPackages: ['@prisma/client', 'bcryptjs'],
  allowedDevOrigins: ['https://88b6a97e-be5a-423d-aa70-5e0130c90d14-00-1uojb1iv6xilo.spock.replit.dev', '*'],
  experimental: {
    // allowedHosts is not needed in Next.js 15, the allowedDevOrigins above handles it
  },
}

module.exports = nextConfig