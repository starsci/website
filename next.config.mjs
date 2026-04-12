import {withPayload} from '@payloadcms/next/withPayload'

// import redirects from './redirects.js'

const NEXT_PUBLIC_SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowLocalIP: process.env.NODE_ENV !== 'production',
    qualities: [75, 90],
    remotePatterns: [
      ...[
        NEXT_PUBLIC_SERVER_URL,
        'https://placehold.co'
      ].map(item => {
        const url = new URL(item)

        return {hostname: url.hostname, protocol: url.protocol.replace(':', '')}
      }),
    ],
    localPatterns: [{pathname: '/assets/**'}, {pathname: '/api/media/**'}],
  },
  reactStrictMode: true,
  // redirects,
  webpack: webpackConfig => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  cacheComponents: false
}

export default withPayload(nextConfig, {devBundleServerPackages: false})
