import {setupDevPlatform} from '@cloudflare/next-on-pages/next-dev'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // configure picsum.photos as a domain
  images: {
    domains: ['picsum.photos']
  }
}

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform()
}

export default nextConfig
