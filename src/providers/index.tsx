'use client'

import {ReactQueryClientProvider} from '@/components/QueryClientProvider'
import {AuthProvider} from '@/providers/Auth'
import {CookiesProvider} from 'react-cookie'

export function Providers({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ReactQueryClientProvider>
      <AuthProvider>
        <CookiesProvider>{children}</CookiesProvider>
      </AuthProvider>
    </ReactQueryClientProvider>
  )
}
