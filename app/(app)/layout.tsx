import {Metadata} from 'next'
import {Open_Sans} from 'next/font/google'
import {Toaster} from '@/components/ui/toaster'

import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'

import './globals.css'

const queryClient = new QueryClient()
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
        <QueryClientProvider client={queryClient}>
          {children}
          <Toaster />
        </QueryClientProvider>
      </body>
    </html>
  )
}
