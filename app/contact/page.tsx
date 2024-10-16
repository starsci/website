import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faPhone} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  return (
    <main className="container flex justify-center items-center flex-col flex-1 p-8">
      <h1 className="text-5xl font-semibold text-center mb-6">Get In Touch</h1>
      <p className="mb-4 text-lg text-center">
        If you have any questions, please contact us at{' '}
        <Link
          href="mailto:scitech.santarosa@deped.gov.ph"
          className="hover:underline">
          scitech.santarosa@deped.gov.ph
        </Link>
        .
      </p>
      <p className="mb-4 text-lg text-center">
        If you wish, you may connect with us through:
      </p>
      <ul className="list-none list-inside [&>*]:mb-2 text-left text-lg">
        <li>
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          <Link
            href="https://goo.gl/maps/WpM6ZuczECRqCZdp7"
            className="hover:underline">
            LM Subdivision, Brgy. Market Area, Santa Rosa City, 4026 Laguna,
            Philippines
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} className="mr-2" />
          <Link href="tel:+6349440067" className="hover:underline">
            (049) 544 0067
          </Link>
        </li>
        <li className="mb-2">
          <FontAwesomeIcon icon={faFacebook} className="mr-2" />
          <Link
            href="https://www.facebook.com/DepEdTayoSRSTHS307902"
            className="hover:underline">
            DepEd Tayo Santa Rosa Science and Technology HS - Santa Rosa City
          </Link>
        </li>
      </ul>
    </main>
  )
}
