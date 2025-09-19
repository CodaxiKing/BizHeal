/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@bizheal/ui'],
  serverExternalPackages: [],
  experimental: {
    allowedDevOrigins: ['c7c09938-92eb-410a-acfa-9bd7560ee057-00-114dfhvm73ebd.spock.replit.dev', '127.0.0.1', 'localhost', '*'],
  },
}

module.exports = nextConfig