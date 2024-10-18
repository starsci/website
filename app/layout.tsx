import {Metadata} from 'next'
import {Open_Sans} from 'next/font/google'
import './globals.css'

import {Header} from '../components/header.tsx'
import {Footer} from '../components/footer.tsx'
import {Toaster} from '@/components/ui/toaster'

const nextFont = Open_Sans({subsets: ['latin']})

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
    <html lang="en">
      <body className={nextFont.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow container p-6">{children}</div>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  )
}
