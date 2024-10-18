import {Header} from '@/components/header'
import {Footer} from '@/components/footer'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header publicId="pararayos-logo_mrdspq" logoAlt="Ang Pararayos" />
      <div className="flex-grow container p-6">{children}</div>
      <Footer />
    </div>
  )
}
