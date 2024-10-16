import Link from 'next/link'
import {Logo} from '@/app/logo'

export type NavProps = {
  leftLinks: {name: string; href: string}[]
  rightLinks: {name: string; href: string}[]
}

function NavLink(props: {name: string; href: string}) {
  const {name, href} = props
  return (
    <Link
      href={href}
      className="group inline-flex h-9 w-max items-center justify-center rounded-md text-white px-4 py-2 text-sm font-medium hover:underline"
      prefetch={false}>
      {name}
    </Link>
  )
}

export function MainNav(props: NavProps) {
  const {leftLinks, rightLinks} = props
  return (
    <>
      <Link href="#" className="mr-6 flex" prefetch={false}>
        <Logo />
      </Link>
      <nav className="mr-auto hidden md:flex gap-4">
        {leftLinks.map(link => (
          <NavLink key={link.name} name={link.name} href={link.href} />
        ))}
      </nav>
      <nav className="ml-auto hidden md:flex gap-4">
        {rightLinks.map(link => (
          <NavLink key={link.name} name={link.name} href={link.href} />
        ))}
      </nav>
    </>
  )
}
