import {MobileNav} from '@/app/components/MobileNav'
import {MainNav} from '@/app/components/MainNav'

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
    <header className="flex w-full shrink-0 items-center px-6 bg-brand-blue-default">
      <div className="py-4 px-6 items-center container flex">
        <MainNav leftLinks={leftLinks} rightLinks={rightLinks} />
        <MobileNav leftLinks={leftLinks} rightLinks={rightLinks} />
      </div>
    </header>
  )
}
