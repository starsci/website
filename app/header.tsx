import {MobileNav} from './mobile-nav'
import {MainNav} from './main-nav'

const leftLinks = [
  {name: 'Home', href: '/'},
  {name: 'News', href: '/news'},
  {name: 'Club Directory', href: '/clubs'}
]

const rightLinks = [
  {name: 'Services', href: '/services'},
  {name: 'About', href: '/about'},
  {name: 'Contact', href: '/contact'}
]

export function Header() {
  return (
    <header className="flex w-full shrink-0 items-center bg-brand-blue-default">
      <div className="py-4 px-6 items-center container flex">
        <MainNav leftLinks={leftLinks} rightLinks={rightLinks} />
        <MobileNav leftLinks={leftLinks} rightLinks={rightLinks} />
      </div>
    </header>
  )
}
