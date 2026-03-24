import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'
import {Logo} from '@/components/Logo'
import {fetchCachedMediaByName} from '@/lib/media'

const leftLinks = [
  {name: 'Home', href: '/'},
  {
    name: 'Transparency',
    href: '#',
    children: [{name: "Citizen's Charter", href: '#'}]
  },
  {name: 'Announcements', href: '/announcements'},
  {name: 'Clubs', href: '/clubs'},
  {
    name: 'Publications',
    href: '#',
    children: [
      {name: 'Pararayos', href: '/pararayos'},
      {name: 'The Satellite', href: '/the-satellite'}
    ]
  }
]

const rightLinks = [
  {name: 'About', href: '/about'},
  {name: 'Contact', href: '/contact'}
]

export default async function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const logoSrc = await fetchCachedMediaByName('SRSTHS logo')

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        basePath="/"
        leftLinks={leftLinks}
        rightLinks={rightLinks}
        logo={<Logo src={logoSrc} alt="Logo" />}
      />
      <div className="flex-grow container p-6">{children}</div>
      <Footer />
    </div>
  )
}
