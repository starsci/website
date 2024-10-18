import {Header} from '@/components/header'
import {Footer} from '@/components/footer'

const leftLinks = [
  {name: 'Club Directory', href: '/clubs'},
  {name: 'The Satellite', href: '/the-satellite'},
  {name: 'Ang Pararayos', href: '/ang-pararayos'}
]

const rightLinks = [
  {name: 'Announcements', href: '/announcements'},
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
        publicId="srsths-logo_p3p9be"
        logoAlt="Santa Rosa Science and Technology High School"
      />
      <div className="flex-grow container p-6">{children}</div>
      <Footer />
    </div>
  )
}
