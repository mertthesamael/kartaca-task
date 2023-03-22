/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.pixabay.com','doublethedonation.com','www.thesprucecrafts.com','media.istockphoto.com'],
  },
}

module.exports = nextConfig
