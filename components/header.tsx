import {MobileNav} from './nav/mobile'
import {MainNav} from './nav/main'
import {NavProps} from './nav/props'

export function Header({
  leftLinks,
  rightLinks,
  publicId,
  logoAlt,
  basePath
}: NavProps) {
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
          basePath={basePath}
        />
      </div>
    </header>
  )
}
