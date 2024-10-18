import Link from 'next/link'
import Image from 'next/image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {Logo} from './logo'

const links = [
  {
    title: 'About Us',
    href: '/about'
  },
  {
    title: 'Services',
    href: '/services'
  },
  {
    title: 'Announcements',
    href: '/announcements'
  },
  {
    title: 'The Satellite',
    href: '/the-satellite'
  },
  {
    title: 'Ang Pararayos',
    href: '/ang-pararayos'
  }
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 md:mx-auto my-auto">
            <div className="flex gap-4">
              <Logo
                publicId="srsths-logo_p3p9be"
                height={96}
                width={96}
                alt="Santa Rosa Science and Technology High School"
              />
              <Logo
                publicId="system-logo_ba99no"
                height={96}
                width={96}
                alt="SYSTEM"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index} className="hover:underline">
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>LM Subd., Brgy. Market Area</li>
              <li>City of Santa Rosa, Laguna, Philippines</li>
              <li className="flex gap-2">
                <FontAwesomeIcon icon={faPhone} className="h-5 w-5" />
                0908 705 1083
              </li>
              <li className="flex gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                info@srsths.edu.ph
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/DepEdTayoSRSTHS307902"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300">
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Santa Rosa Science and Technology
            High School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
