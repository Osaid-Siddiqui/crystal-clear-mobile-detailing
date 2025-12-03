/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  onDemandEntries: {
    maxInactiveAge: 25000,
    pagesBufferLength: 5,
  },
  experimental: {
    allowedDevOrigins: ['.fly.dev', 'localhost', '127.0.0.1'],
  },
}

export default nextConfig
