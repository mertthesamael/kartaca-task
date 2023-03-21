/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.pixabay.com','doublethedonation.com','www.thesprucecrafts.com'],
  },
}

module.exports = nextConfig
