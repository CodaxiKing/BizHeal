/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@bizheal/ui'],
  serverExternalPackages: [],
  allowedDevOrigins: ['30382c60-0304-4529-953e-000becf2f7cb-00-1kyts45a68e7a.spock.replit.dev', '127.0.0.1', 'localhost', '*'],
  experimental: {
    allowedHosts: true,
  },
}

module.exports = nextConfig