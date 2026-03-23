'use client'

import {cn} from '@/lib/utils'
import {COOKIE_NAME} from '@/lib/cookies'
import {useAuth} from '@/providers/Auth'
import {ChevronDown, X, Menu} from 'lucide-react'
import {ReactNode, useState, useEffect} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import {useCookies} from 'react-cookie'

type LinkType = {
  name: string
  href: string
  children?: LinkType[] | undefined
  onClick?: () => Promise<void>
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
  const [showTeacherLogin, setShowTeacherLogin] = useState(false)
  const [realRightLinks, setRealRightLinks] = useState<LinkType[]>(rightLinks)
  const {user, logout} = useAuth()
  const [cookies] = useCookies([COOKIE_NAME])
  const router = useRouter()
  const authenticated = Boolean(user)

  useEffect(() => {
    const audience = cookies[COOKIE_NAME]
    setShowTeacherLogin(audience === 'teacher-employee')
  }, [cookies])

  useEffect(() => {
    setRealRightLinks([
      ...rightLinks,
      ...(showTeacherLogin && !authenticated
        ? [{name: 'Login', href: '/employee/login'}]
        : []),
      ...(authenticated
        ? [
            {
              name: 'Logout',
              href: '#',
              onClick: async () => {
                await logout()
                router.push('/')
              }
            }
          ]
        : [])
    ])
  }, [user, showTeacherLogin, rightLinks, logout, router])

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
              className="flex items-center justify-between w-full py-2 px-3 hover:bg-brand-nav-hover md:hover:bg-brand-nav-hover"
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
            className="block py-2 px-3 hover:bg-brand-nav-hover md:hover:bg-brand-nav-hover"
            onClick={item.onClick ?? (() => {})}>
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
                className="flex items-center py-2 px-3 hover:bg-brand-nav-hover"
                aria-expanded={openMenus.includes(item.name)}>
                {item.name}
                <ChevronDown
                  className={cn('ml-2 h-4 w-4 transition-transform', {
                    'rotate-180': openMenus.includes(item.name)
                  })}
                />
              </button>
              {openMenus.includes(item.name) && (
                <div className="absolute left-0 mt-2 w-48 bg-brand-nav-bg shadow-lg z-50">
                  <ul className="py-2">{renderNavItems(item.children)}</ul>
                </div>
              )}
            </>
          ) : (
            <a
              href={item.href}
              className="block py-2 px-3 hover:bg-brand-nav-hover"
              onClick={item.onClick ?? (() => {})}>
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
    <header className="bg-brand-nav-bg shadow text-neutral-300 text-sm">
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
          <nav className="hidden lg:flex sm:items-center sm:flex-grow">
            <section className="flex flex-grow justify-between">
              {renderDesktopLinks(leftLinks)}
              <div className="flex items-center gap-2">
                {renderDesktopLinks(realRightLinks)}
              </div>
            </section>
          </nav>
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-brand-nav-hover"
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
        className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        id="mobile-menu">
        {renderMobileLinks(leftLinks)}
        <hr className="w-full border-[#595959] my-1" />
        {renderMobileLinks(realRightLinks)}
      </nav>

      <section className="bg-brand-blue-default text-white text-xs py-1">
        {/*fit masthead 3000px here*/}
        <div className="container px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row gap-x-6 gap-y-4 my-2">
          <Image
            src="/assets/masthead.png"
            alt="Santa Rosa Science and Technology High School"
            height={0}
            width={0}
            sizes="100vw"
            className="w-full lg:w-[70%] h-auto"
          />
          <div className="my-4 w-full flex flex-col items-right">
            <PSTWidget />
          </div>
        </div>
      </section>
    </header>
  )
}

function PSTWidget() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const pst = new Date().toLocaleString('en-PH', {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
      setTime(pst)
    }

    tick() // run immediately
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-right">
      <p>Philippine Standard Time</p>
      <p>{time}</p>
    </div>
  )
}
