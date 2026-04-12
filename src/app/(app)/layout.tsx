import {Metadata} from 'next'
import {Mulish} from 'next/font/google'
import {Toaster} from '@/components/ui/toaster'
import {UserAudienceModal} from '@/components/UserAudienceModal'
import {Providers} from '@/providers'

import './globals.css'

const nextFont = Mulish({weight: ['400', '700'], subsets: ['latin']})
const title = 'Santa Rosa Science and Technology High School'
const description =
  'Public science and technology high school in Santa Rosa, Laguna'

export const dynamic = 'force-dynamic'

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
        url: process.env.NEXT_PUBLIC_HERO_URL || '',
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
    <html lang="en">
      <body className={nextFont.className}>
        <Providers>
          {children}
          <UserAudienceModal />
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
