import {Header} from '@/components/header'
import {Footer} from '@/components/footer'
import {Logo} from '@/components/logo'

const leftLinks = [
  {name: 'News', href: '#'},
  {name: 'Feature', href: '#'},
  {name: 'Opinion', href: '#'},
  {name: 'Sports', href: '#'},
  {name: 'Sci & Tech', href: '#'}
]

const rightLinks = [{name: 'Back to Home', href: '/'}]

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        basePath="/the-satellite"
        leftLinks={leftLinks}
        rightLinks={rightLinks}
        logo={
          <Logo
            publicId={process.env.NEXT_PUBLIC_SATELLITE_LOGO_PUBLIC_ID!}
            alt="The Satellite"
          />
        }
      />
      <div className="flex-grow container p-6">{children}</div>
      <Footer />
    </div>
  )
}
