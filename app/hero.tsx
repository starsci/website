import {HeroButton} from '@/components/HeroButton'
import {Logo} from '@/components/Logo'
import {Button} from '@/components/ui/button'
import {
  faScrewdriverWrench,
  faHandshake,
  faClockRotateLeft
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="flex-grow flex-shrink-0 flex bg-gradient-to-tr from-brand-blue-darker to-brand-red-darker">
      <div className="flex-grow">
        <div className="flex flex-col gap-4 mx-auto justify-center items-center text-white p-10 w-full lg:w-2/3">
          <Logo height={128} width={128} />
          <h1 className="text-4xl text-center mt-6">
            Empowering Tomorrow&apos;s Leaders
          </h1>
          <p className="text-lg text-center mb-6">
            Santa Rosa Science and Technology High School is the premier public
            science and technology high school in Santa Rosa, Laguna.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Button
              size="lg"
              className="w-full text-white transition-colors bg-brand-blue-default hover:bg-brand-blue-darker">
              <Link href="/services" className="flex items-center">
                <FontAwesomeIcon
                  icon={faScrewdriverWrench}
                  className="mr-3 h-6 w-6"
                />
                Explore Our Services
              </Link>
            </Button>
            <HeroButton href="/contact">
              <FontAwesomeIcon icon={faHandshake} className="mr-3 h-6 w-6" />
              Get in Touch
            </HeroButton>
            <HeroButton href="/about">
              <FontAwesomeIcon
                icon={faClockRotateLeft}
                className="mr-3 h-6 w-6"
              />
              About Us
            </HeroButton>
          </div>
        </div>
      </div>
    </section>
  )
}
