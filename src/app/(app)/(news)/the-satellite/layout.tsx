import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'
import {Logo} from '@/components/Logo'
import {getMediaUrlByFilename} from '@/lib/media'

const leftLinks = [
  {name: 'News', href: '#'},
  {name: 'Feature', href: '#'},
  {name: 'Opinion', href: '#'},
  {name: 'Sports', href: '#'},
  {name: 'Sci & Tech', href: '#'}
]

const rightLinks = [{name: 'Back to Home', href: '/'}]

export default async function Layout({children}: {children: React.ReactNode}) {
  const logoSrc = await getMediaUrlByFilename('The Satellite logo')

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        basePath="/the-satellite"
        leftLinks={leftLinks}
        rightLinks={rightLinks}
        logo={<Logo src={logoSrc} alt="The Satellite" />}
      />
      <div className="flex-grow container p-6">{children}</div>
      <Footer />
    </div>
  )
}
