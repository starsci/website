import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'
import {Logo} from '@/components/Logo'

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

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        basePath="/"
        leftLinks={leftLinks}
        rightLinks={rightLinks}
        logo={
          <Logo
            publicId={process.env.NEXT_PUBLIC_SRSTHS_LOGO_PUBLIC_ID || ''}
            alt="Logo"
          />
        }
      />
      <div className="flex-grow container p-6">{children}</div>
      <Footer />
    </div>
  )
}
