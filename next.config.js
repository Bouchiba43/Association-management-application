/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com','plus.unsplash.com','hydeparkwinterwonderland.com','wembleypark.com','media.istockphoto.com'],
  },
}

module.exports = nextConfig
