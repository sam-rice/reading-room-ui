/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.openlibrary.org',
        port: ''
      },
    ],
  },
}

export default nextConfig
