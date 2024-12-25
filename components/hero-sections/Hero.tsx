import {HeroButton} from '@/components/HeroButton'
import {Logo} from '@/components/Logo'
import {HeartHandshake, MessageCircleQuestion} from 'lucide-react'

export function Hero() {
  return (
    <section className="flex-grow flex-shrink-0 flex relative -mt-6 -mx-6 w-[100vw] ml-[calc(50%-50vw)]">
      <div className="absolute inset-0 -z-10 bg-hero bg-cover bg-center brightness-[.4]" />
      <div className="flex-grow">
        <div className="flex flex-col gap-4 mx-auto justify-center items-center text-white p-10 w-full lg:w-2/3">
          <Logo
            publicId={process.env.NEXT_PUBLIC_SRSTHS_LOGO_PUBLIC_ID || ''}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <HeroButton href="/contact" icon={<HeartHandshake />}>
              Get in Touch
            </HeroButton>
            <HeroButton href="/about" icon={<MessageCircleQuestion />}>
              About Us
            </HeroButton>
          </div>
        </div>
      </div>
    </section>
  )
}
