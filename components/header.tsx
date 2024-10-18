import {MobileNav} from './mobile-nav.tsx'
import {MainNav} from './main-nav.tsx'

const defaultLeftLinks = [
  {name: 'Home', href: '/'},
  {name: 'News', href: '/news'},
  {name: 'Club Directory', href: '/clubs'}
]

const defaultRightLinks = [
  {name: 'Services', href: '/services'},
  {name: 'About', href: '/about'},
  {name: 'Contact', href: '/contact'}
]

export function Header({
  leftLinks = defaultLeftLinks,
  rightLinks = defaultRightLinks,
  publicId = 'srsths-logo_p3p9be',
  logoAlt = 'Santa Rosa Science and Technology High School'
}: {
  leftLinks?: {name: string; href: string}[]
  rightLinks?: {name: string; href: string}[]
  publicId?: string
  logoAlt?: string
}) {
  return (
    <header className="flex w-full shrink-0 items-center bg-brand-blue-default">
      <div className="py-4 px-6 items-center container flex">
        <MainNav
          leftLinks={leftLinks}
          rightLinks={rightLinks}
          publicId={publicId}
          logoAlt={logoAlt}
        />
        <MobileNav
          leftLinks={leftLinks}
          rightLinks={rightLinks}
          publicId={publicId}
          logoAlt={logoAlt}
        />
      </div>
    </header>
  )
}
