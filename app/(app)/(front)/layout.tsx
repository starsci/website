import {Header} from '@/components/header'
import {Footer} from '@/components/footer'
import {Logo} from '@/components/logo'

const leftLinks = [
  {name: 'Clubs', href: '/clubs'},
  {
    name: 'News',
    href: '#',
    children: [
      {name: 'Announcements', href: '/announcements'},
      {name: 'Ang Pararayos', href: '/ang-pararayos'},
      {name: 'The Satellite', href: '/the-satellite'}
    ]
  }
]

const rightLinks = [
  {name: 'Services', href: '/services'},
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
            publicId={process.env.NEXT_PUBLIC_SRSTHS_LOGO_PUBLIC_ID!}
            alt="Logo"
          />
        }
      />
      <div className="flex-grow container p-6">{children}</div>
      <Footer />
    </div>
  )
}
