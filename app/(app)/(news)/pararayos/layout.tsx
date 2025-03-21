import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Logo } from '@/components/Logo'

const leftLinks = [
  { name: 'Balita', href: '#' },
  { name: 'Opinyon', href: '#' },
  { name: 'Lathalain', href: '#' },
  { name: 'Isports', href: '#' },
  { name: 'AgTek', href: '#' }
]

const rightLinks = [{ name: 'Back to Home', href: '/' }]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        basePath="/pararayos"
        leftLinks={leftLinks}
        rightLinks={rightLinks}
        logo={
          <Logo
            publicId={process.env.NEXT_PUBLIC_PARARAYOS_LOGO_PUBLIC_ID || ''}
            alt="Pararayos"
          />
        }
      />
      <div className="flex-grow container p-6">{children}</div>
      <Footer />
    </div>
  )
}
