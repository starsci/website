import {Metadata} from 'next'
import {PT_Sans} from 'next/font/google'
import {Toaster} from '@/components/ui/toaster'
import {ReactQueryClientProvider} from '@/components/QueryClientProvider'

import './globals.css'

const nextFont = PT_Sans({weight: ['400', '700']})

export const metadata: Metadata = {
  title: 'Santa Rosa Science and Technology High School',
  description: 'Public science and technology high school in Santa Rosa, Laguna'
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
