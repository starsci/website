'use client'

import {HR} from '@/components/hr'
import {cn} from '@/lib/utils.ts'
import {ChevronDown, X, Menu} from 'lucide-react'
import Link from 'next/link'
import {ReactNode, useState} from 'react'

type LinkType = {
  name: string
  href: string
  children?: LinkType[] | undefined
}

export function Header({
  leftLinks,
  rightLinks,
  logo,
  basePath
}: {
  leftLinks: LinkType[]
  rightLinks: LinkType[]
  logo: ReactNode
  basePath: string
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMenus, setOpenMenus] = useState<string[]>([])

  const toggleMenu = (menuName: string) => {
    setOpenMenus(prevOpenMenus =>
      prevOpenMenus.includes(menuName)
        ? prevOpenMenus.filter(item => item !== menuName)
        : [...prevOpenMenus, menuName]
    )
  }

  const renderNavItems = (items: LinkType[], level = 0) => {
    return items.map(item => (
      <li
        key={item.name}
        className={cn('relative', {
          'pl-4': level > 0
        })}>
        {item.children ? (
          <>
            <button
              onClick={() => toggleMenu(item.name)}
              className="flex items-center justify-between w-full py-2 px-3 hover:bg-brand-blue-dark sm:hover:bg-brand-blue-darker"
              aria-expanded={openMenus.includes(item.name)}>
              {item.name}
              <ChevronDown
                className={cn('ml-2 h-4 w-4 transition-transform', {
                  'rotate-180': openMenus.includes(item.name)
                })}
              />
            </button>
            {openMenus.includes(item.name) && (
              <ul className="mt-2 space-y-2">
                {renderNavItems(item.children, level + 1)}
              </ul>
            )}
          </>
        ) : (
          <a
            href={item.href}
            className="block py-2 px-3 hover:bg-brand-blue-dark sm:hover:bg-brand-blue-darker">
            {item.name}
          </a>
        )}
      </li>
    ))
  }

  const renderDesktopLinks = (links: LinkType[]) => (
    <ul className="flex space-x-4">
      {links.map(item => (
        <li key={item.name} className="relative group">
          {item.children ? (
            <>
              <button
                onClick={() => toggleMenu(item.name)}
                className="flex items-center py-2 px-3 hover:bg-brand-blue-dark"
                aria-expanded={openMenus.includes(item.name)}>
                {item.name}
                <ChevronDown
                  className={cn('ml-2 h-4 w-4 transition-transform', {
                    'rotate-180': openMenus.includes(item.name)
                  })}
                />
              </button>
              {openMenus.includes(item.name) && (
                <div className="absolute left-0 mt-2 w-48 bg-brand-blue-dark shadow-lg z-50">
                  <ul className="py-2">{renderNavItems(item.children)}</ul>
                </div>
              )}
            </>
          ) : (
            <a
              href={item.href}
              className="block py-2 px-3 hover:bg-brand-blue-dark">
              {item.name}
            </a>
          )}
        </li>
      ))}
    </ul>
  )

  const renderMobileLinks = (links: LinkType[]) => (
    <ul className="pt-2 pb-3 space-y-1">{renderNavItems(links)}</ul>
  )

  return (
    <nav className="bg-brand-blue-default shadow text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 space-x-4 justify-between">
          <div className="flex items-center">
            <Link href={basePath}>{logo}</Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:flex-grow">
            <section className="flex flex-grow justify-between">
              {renderDesktopLinks(leftLinks)}
              {renderDesktopLinks(rightLinks)}
            </section>
          </div>
          <div className="sm:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-brand-blue-dark"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        id="mobile-menu">
        {renderMobileLinks(leftLinks)}
        <HR />
        {renderMobileLinks(rightLinks)}
      </div>
    </nav>
  )
}
