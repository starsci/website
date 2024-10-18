import {Sheet, SheetContent, SheetTrigger} from '@/app/ui/sheet'
import {Button} from '@/app/ui/button'
import {Logo} from './logo'
import {NavProps} from './main-nav'
import {MenuIcon} from 'lucide-react'
import Link from 'next/link'

function NavLink(props: {name: string; href: string}) {
  const {name, href} = props
  return (
    <Link
      href={href}
      className="flex w-full items-center py-2 text-lg font-semibold hover:underline">
      {name}
    </Link>
  )
}

function LinkMap(props: {links: {name: string; href: string}[]}) {
  const {links} = props
  return (
    <ul>
      {links.map(link => (
        <li key={link.name}>
          <NavLink name={link.name} href={link.href} />
        </li>
      ))}
    </ul>
  )
}

export function MobileNav(props: NavProps) {
  const {leftLinks, rightLinks} = props
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden ml-auto bg-brand-blue-default text-white">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-neutral-800">
        <Link href="#" className="mr-6 lg:flex">
          <Logo alt="Santa Rosa Science and Technology High School" />
        </Link>
        <nav className="grid gap-2 py-6 text-white">
          <LinkMap links={leftLinks} />
          <hr className="border-t border-neutral-500" />
          <LinkMap links={rightLinks} />
        </nav>
      </SheetContent>
    </Sheet>
  )
}
