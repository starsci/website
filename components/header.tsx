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
  rightLinks = defaultRightLinks
}: {
  leftLinks?: {name: string; href: string}[]
  rightLinks?: {name: string; href: string}[]
}) {
  return (
    <header className="flex w-full shrink-0 items-center bg-brand-blue-default">
      <div className="py-4 px-6 items-center container flex">
        <MainNav leftLinks={leftLinks} rightLinks={rightLinks} />
        <MobileNav leftLinks={leftLinks} rightLinks={rightLinks} />
      </div>
    </header>
  )
}
