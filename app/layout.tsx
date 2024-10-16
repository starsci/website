import {Metadata} from 'next'
import {Nunito} from 'next/font/google'
import './globals.css'

import {Header} from './header'
import {Footer} from './footer'

const nextFont = Nunito({subsets: ['latin']})

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
        <div className="flex flex-col min-h-screen bg-neutral-800 text-white">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
