/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@bizheal/ui', '@bizheal/db'],
  serverExternalPackages: ['@prisma/client', 'bcryptjs'],
  allowedDevOrigins: ['https://acf3b17f-f391-48fd-a64c-a59fc75fbf68-00-2q2yk7rd1i41e.kirk.replit.dev', '*'],
  experimental: {
    allowedHosts: true,
  },
}

module.exports = nextConfig