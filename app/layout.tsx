import type {Metadata} from 'next'
import {Nunito} from 'next/font/google'
import './globals.css'

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
      <body className={nextFont.className}>{children}</body>
    </html>
  )
}
