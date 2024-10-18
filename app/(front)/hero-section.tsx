import {HeroButton} from '@/components/hero-button.tsx'
import {Logo} from '@/components/logo.tsx'
import {
  faScrewdriverWrench,
  faHandshake,
  faClockRotateLeft
} from '@fortawesome/free-solid-svg-icons'

export function HeroSection() {
  return (
    <main className="flex-grow flex-shrink-0 flex relative -mt-6 -mx-6">
      <div className="absolute inset-0 -z-10 bg-hero bg-cover brightness-50" />
      <div className="flex-grow">
        <div className="flex flex-col gap-4 mx-auto justify-center items-center text-white p-10 w-full lg:w-2/3">
          <Logo
            publicId="srsths-logo_p3p9be"
            height={128}
            width={128}
            alt="Santa Rosa Science and Technology High School"
          />
          <h1 className="text-4xl text-center mt-6">
            Empowering Tomorrow&apos;s Leaders
          </h1>
          <p className="text-lg text-center mb-6">
            Santa Rosa Science and Technology High School is the premier public
            science and technology high school in Santa Rosa, Laguna.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <HeroButton href="/services" icon={faScrewdriverWrench} main>
              Explore Our Services
            </HeroButton>
            <HeroButton href="/contact" icon={faHandshake}>
              Get in Touch
            </HeroButton>
            <HeroButton href="/about" icon={faClockRotateLeft}>
              About Us
            </HeroButton>
          </div>
        </div>
      </div>
    </main>
  )
}
