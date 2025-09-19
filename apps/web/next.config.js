/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@bizheal/ui'],
  serverExternalPackages: [],
  experimental: {
    allowedDevOrigins: ['https://0255687d-6c41-469f-a2ce-da31a249300e-00-1z5hwb35elp0t.kirk.replit.dev', '*'],
  },
}

module.exports = nextConfig