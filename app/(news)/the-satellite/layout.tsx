import {Header} from '@/components/header'
import {Footer} from '@/components/footer'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div> Hello</div>
      <div className="flex-grow container p-6">{children}</div>
      <Footer />
    </div>
  )
}
