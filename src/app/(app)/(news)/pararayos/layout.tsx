import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'
import {Logo} from '@/components/Logo'
import {getMediaUrlByFilename} from '@/lib/media'

const leftLinks = [
  {name: 'Balita', href: '/pararayos/news'},
  {name: 'Opinyon', href: '/pararayos/opinion'},
  {name: 'Lathalain', href: '/pararayos/feature'},
  {name: 'Isports', href: '/pararayos/sports'},
  {name: 'AgTek', href: '/pararayos/sci-and-tech'}
]

const rightLinks = [{name: 'Back to Home', href: '/'}]

export default async function Layout({children}: {children: React.ReactNode}) {
  const logoSrc = await getMediaUrlByFilename('Pararayos logo')

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        basePath="/pararayos"
        leftLinks={leftLinks}
        rightLinks={rightLinks}
        logo={<Logo src={logoSrc} alt="Pararayos" />}
      />
      <div className="flex-grow container p-6">{children}</div>
      <Footer />
    </div>
  )
}
