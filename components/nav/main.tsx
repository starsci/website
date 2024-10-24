import Link from 'next/link'
import {Logo} from '@/components/logo'
import {NavProps} from './props'

function NavLink(props: {name: string; href: string}) {
  const {name, href} = props
  return (
    <Link
      href={href}
      className="group inline-flex h-9 w-max items-center justify-center rounded-md text-white px-4 py-2 text-sm font-medium hover:underline">
      {name}
    </Link>
  )
}

function LinkMap(props: {
  className: string
  links: {name: string; href: string}[]
}) {
  const {className, links} = props
  return (
    <nav className={className}>
      <ul className="hidden md:flex gap-4">
        {links.map(link => (
          <li key={link.name}>
            <NavLink name={link.name} href={link.href} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function MainNav(props: NavProps) {
  const {leftLinks, rightLinks} = props
  return (
    <section className="flex-grow flex">
      <Link href={props.basePath} className="mr-6 flex">
        <Logo publicId={props.publicId} alt={props.logoAlt} />
      </Link>
      <div className="flex-grow flex justify-between">
        <LinkMap links={leftLinks} className="mr-auto" />
        <LinkMap links={rightLinks} className="ml-auto" />
      </div>
    </section>
  )
}
