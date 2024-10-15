import {setupDevPlatform} from '@cloudflare/next-on-pages/next-dev'

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

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform()
}

export default nextConfig
