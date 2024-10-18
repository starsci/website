import {Header} from '@/components/header'
import {Footer} from '@/components/footer'

const leftLinks = [{name: 'Home', href: '/'}]

const rightLinks = [
  {name: 'Lathalain', href: '#'},
  {name: 'Isports', href: '#'},
  {name: 'Editoryal', href: '#'}
]

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        leftLinks={leftLinks}
        rightLinks={rightLinks}
        publicId="pararayos-logo_mrdspq"
        logoAlt="Ang Pararayos"
      />
      <div className="flex-grow container p-6">{children}</div>
      <Footer />
    </div>
  )
}
