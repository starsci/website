import Link from 'next/link'
import Image from 'next/image'
import {fetchCachedMediaByName} from '@/lib/media'
import {Phone, MailOpen, Facebook, MapPinned} from 'lucide-react'
import {Copyright} from './copyright'

type LinkType = {
  name: string
  content: {
    title: string
    href: string
  }[]
}
const links: LinkType[] = [
  {
    name: 'Essentials',
    content: [
      {title: 'Announcements', href: '/announcements'},
      {title: 'About', href: '/about'},
      {title: 'Contact', href: '/contact'},
      {title: 'Clubs', href: '/clubs'}
    ]
  },
  {
    name: 'Publications',
    content: [
      {title: 'Pararayos', href: '/pararayos'},
      {title: 'The Satellite', href: '/the-satellite'}
    ]
  }
]

export async function Footer() {
  const srsthsLogoSrc = await fetchCachedMediaByName('SRSTHS logo')
  const systemLogoSrc = await fetchCachedMediaByName('SYSTEM logo')

  return (
    <footer>
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-8">
          <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4 md:mx-auto my-auto">
              <div className="flex gap-4">
                <Image
                  src={srsthsLogoSrc}
                  height={96}
                  width={96}
                  alt="Santa Rosa Science and Technology High School"
                />
                <Image
                  src={systemLogoSrc}
                  height={96}
                  width={96}
                  alt="SYSTEM"
                />
              </div>
            </div>
            <nav>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              {/* iterate through links keys and create columns for each key */}
              <div className="flex space-x-8">
                {links.map(link => (
                  <div key={link.name}>
                    <h4 className="text-lg font-semibold mb-2">{link.name}</h4>
                    <ul className="space-y-2">
                      {link.content.map(subLink => (
                        <li key={subLink.href} className="hover:underline">
                          <Link href={subLink.href}>{subLink.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </nav>
            <section>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <table>
                <tbody>
                  <tr>
                    <td className="pr-4">
                      <Phone className="h-5 w-5" />
                    </td>
                    <td>0908 705 1083</td>
                  </tr>
                  <tr>
                    <td className="pr-4">
                      <MailOpen className="h-5 w-5" />
                    </td>
                    <td>
                      <a href="mailto:info@srsths.edu.ph">info@srsths.edu.ph</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pr-4">
                      <MapPinned className="h-5 w-5" />
                    </td>
                    <td>
                      LM Subd., Brgy. Market Area, City of Santa Rosa, Laguna,
                      Philippines
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/DepEdTayoSRSTHS307902"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </section>
          </section>
          <Copyright />
        </div>
      </div>
      <GovPhFooter />
    </footer>
  )
}

function GovPhFooter() {
  return (
    <div className="bg-[#e9e9e9] text-neutral-500 text-xs">
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex space-x-4">
            <Image
              src="/assets/govph-seal-mono-footer.png"
              alt="GOVPH Seal"
              width={150}
              height={150}
            />
            <div>
              <h4 className="font-bold uppercase">
                Republic of the Philippines
              </h4>
              <p>
                All content is in the public domain unless otherwise stated.
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold uppercase">About GOVPH</h4>
            <p>
              Learn more about the Philippine government, its structure, how
              government works, and the people behind it.
            </p>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="http://www.gov.ph/" className="hover:underline">
                  GOV.PH
                </a>
              </li>
              <li>
                <a href="http://www.gov.ph/data" className="hover:underline">
                  Open Data Portal
                </a>
              </li>
              <li>
                <a
                  href="http://www.officialgazette.gov.ph"
                  className="hover:underline">
                  Official Gazette
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase">Government Links</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="http://president.gov.ph/" className="hover:underline">
                  Office of the President
                </a>
              </li>
              <li>
                <a href="http://ovp.gov.ph/" className="hover:underline">
                  Office of the Vice President
                </a>
              </li>
              <li>
                <a href="http://www.senate.gov.ph/" className="hover:underline">
                  Senate of the Philippines
                </a>
              </li>
              <li>
                <a
                  href="http://www.congress.gov.ph/"
                  className="hover:underline">
                  House of Representatives
                </a>
              </li>
              <li>
                <a
                  href="http://sc.judiciary.gov.ph/"
                  className="hover:underline">
                  Supreme Court
                </a>
              </li>
              <li>
                <a
                  href="http://ca.judiciary.gov.ph/"
                  className="hover:underline">
                  Court of Appeals
                </a>
              </li>
              <li>
                <a
                  href="http://sb.judiciary.gov.ph/"
                  className="hover:underline">
                  Sandiganbayan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
