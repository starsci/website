import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'
import {clsx} from 'clsx'

type PageProps = {
  children: React.ReactNode
  className?: string
}

export function Page({children, className}: PageProps) {
  return (
    <div
      className={clsx(
        'flex flex-col min-h-screen bg-neutral-800 text-white',
        className
      )}
    >
      <Header />
      {children}
      <Footer />
    </div>
  )
}
