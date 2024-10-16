/** @type {import('next').NextConfig} */
const nextConfig = {
  // configure picsum.photos as a domain
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com'
      }
    ]
  }
}

export default nextConfig
