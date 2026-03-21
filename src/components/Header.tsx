'use client'

import {HR} from '@/components/HR'
import {cn} from '@/lib/utils'
import {ChevronDown, X, Menu} from 'lucide-react'
import {ReactNode, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
              className="flex items-center justify-between w-full py-2 px-3 hover:bg-[#393939] md:hover:bg-[#393939]er"
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
            className="block py-2 px-3 hover:bg-[#393939] md:hover:bg-[#393939]er">
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
                className="flex items-center py-2 px-3 hover:bg-[#393939]"
                aria-expanded={openMenus.includes(item.name)}>
                {item.name}
                <ChevronDown
                  className={cn('ml-2 h-4 w-4 transition-transform', {
                    'rotate-180': openMenus.includes(item.name)
                  })}
                />
              </button>
              {openMenus.includes(item.name) && (
                <div className="absolute left-0 mt-2 w-48 bg-[#292929] shadow-lg z-50">
                  <ul className="py-2">{renderNavItems(item.children)}</ul>
                </div>
              )}
            </>
          ) : (
            <a href={item.href} className="block py-2 px-3 hover:bg-[#393939]">
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
    <header className="bg-[#292929] shadow text-neutral-300 text-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-1">
        <div className="flex space-x-4 justify-between">
          <div className="flex items-center">
            <Image
              src="/assets/govph-seal-mono-footer.png"
              alt="Santa Rosa Science and Technology High School"
              width={33}
              height={33}
            />
          </div>
          <nav className="hidden md:flex sm:items-center sm:flex-grow">
            <section className="flex flex-grow justify-between">
              {renderDesktopLinks(leftLinks)}
              {renderDesktopLinks(rightLinks)}
            </section>
          </nav>
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-[#393939]"
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

      <nav
        className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        id="mobile-menu">
        {renderMobileLinks(leftLinks)}
        <hr className="w-full border-[#595959] my-1" />
        {renderMobileLinks(rightLinks)}
      </nav>

      <section className="bg-brand-blue-default text-white text-xs py-1">
        {/*fit masthead 3000px here*/}
        <div className="container py-2 grid grid-cols-4">
          <Image
            src="/assets/masthead.png"
            alt="Santa Rosa Science and Technology High School"
            height={0}
            width={0}
            sizes="100vw"
            className="w-full h-auto col-span-4 lg:col-span-3"
          />
          <div className="my-4 flex flex-col col-span-4 lg:col-span-1">
            <span>Philippine Standard Time</span>
            <iframe
              src="//oras.pagasa.dost.gov.ph/time_display/time/"
              height="14rem"
              width="100%"
              className="block"></iframe>
          </div>
        </div>
      </section>
    </header>
  )
}
