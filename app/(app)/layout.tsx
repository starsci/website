import {Metadata} from 'next'
import {Mulish} from 'next/font/google'
import {Toaster} from '@/components/ui/toaster'
import {ReactQueryClientProvider} from '@/components/QueryClientProvider'

import './globals.css'
import {v2} from 'cloudinary'

const nextFont = Mulish({weight: ['400', '700'], subsets: ['latin']})
const title = 'Santa Rosa Science and Technology High School'
const description =
  'Public science and technology high school in Santa Rosa, Laguna'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: process.env.API_BASE || '',
    siteName: 'Santa Rosa Science and Technology High School',
    images: [
      {
        url: v2.url(process.env.NEXT_PUBLIC_HERO_PUBLIC_ID || '', {
          width: 1200,
          height: 630,
          crop: 'fill'
        }),
        width: 1200,
        height: 630
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={nextFont.className}>
          {children}
          <Toaster />
        </body>
      </html>
    </ReactQueryClientProvider>
  )
}
