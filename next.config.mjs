/** @type {import('next').NextConfig} */
const nextConfig = {
  // configure picsum.photos as a domain
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos'
      },
      {
        hostname: 'example.com'
      }
    ]
  }
}

export default nextConfig
