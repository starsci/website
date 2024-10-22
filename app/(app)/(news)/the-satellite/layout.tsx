import {Header} from '@/components/header'
import {Footer} from '@/components/footer'

const leftLinks = [
  {name: 'News', href: '#'},
  {name: 'Sports', href: '#'},
  {name: 'Editorial', href: '#'}
]

const rightLinks = [{name: 'Back to Home', href: '/'}]

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        basePath="/the satellite"
        leftLinks={leftLinks}
        rightLinks={rightLinks}
        publicId="pararayos-logo_mrdspq"
        logoAlt="The Satellite"
      />
      <div className="flex-grow container p-6">{children}</div>
      <Footer />
    </div>
  )
}
