import {MobileNav} from './mobile-nav.tsx'
import {MainNav} from './main-nav.tsx'

export function Header({
  leftLinks,
  rightLinks,
  publicId,
  logoAlt,
  basePath
}: {
  leftLinks: {name: string; href: string}[]
  rightLinks: {name: string; href: string}[]
  publicId: string
  logoAlt: string
  basePath: string
}) {
  return (
    <header className="flex w-full shrink-0 items-center bg-brand-blue-default">
      <div className="py-4 px-6 items-center container flex">
        <MainNav
          leftLinks={leftLinks}
          rightLinks={rightLinks}
          publicId={publicId}
          logoAlt={logoAlt}
          basePath={basePath}
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
