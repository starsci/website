import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'
import {Logo} from '@/components/Logo'
import {getMediaUrlByFilename} from '@/lib/media'

const leftLinks = [
  {name: 'News', href: '/the-satellite/news'},
  {name: 'Feature', href: '/the-satellite/feature'},
  {name: 'Opinion', href: '/the-satellite/opinion'},
  {name: 'Sports', href: '/the-satellite/sports'},
  {name: 'Sci & Tech', href: '/the-satellite/sci-and-tech'}
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
