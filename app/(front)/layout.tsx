import {Header} from '@/components/header'
import {Footer} from '@/components/footer'

const leftLinks = [
  {name: 'Home', href: '/'},
  {name: 'The Satellite', href: '/the-satellite'},
  {name: 'Ang Pararayos', href: '/ang-pararayos'},
  {name: 'Club Directory', href: '/clubs'}
]

const RightLinks = [
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
        leftLinks={leftLinks}
        rightLinks={RightLinks}
        publicId="srsths-logo_p3p9be"
        logoAlt="Santa Rosa Science and Technology High School"
      />
      <div className="flex-grow container p-6">{children}</div>
      <Footer />
    </div>
  )
}
