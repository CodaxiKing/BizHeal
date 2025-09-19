/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@bizheal/ui', '@bizheal/db'],
  serverExternalPackages: ['@prisma/client', 'bcryptjs'],
  allowedDevOrigins: ["http://localhost:5000", "https://634edddc-4c18-4800-8086-2964ed9abed6-00-3o5thyux7e52c.kirk.replit.dev"],
}

module.exports = nextConfig