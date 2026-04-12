import {HeroButton} from '@/components/HeroButton'
import {Logo} from '@/components/Logo'
import {fetchCachedMediaByName} from '@/lib/cached'
import {HeartHandshake, MessageCircleQuestion} from 'lucide-react'

export async function Hero() {
  const logoSrc = await fetchCachedMediaByName('SRSTHS logo')
  const heroImageSrc = await fetchCachedMediaByName('Hero image')

  return (
    <section className="relative -mx-6 -mt-6 flex min-h-[62vh] w-[100vw] flex-shrink-0 flex-grow ml-[calc(50%-50vw)] overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{backgroundImage: `url(${heroImageSrc})`}}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
      <div className="flex-grow">
        <div className="flex min-h-[62vh] w-full flex-col items-start justify-center gap-5 p-8 text-white sm:p-12 lg:w-2/3 lg:p-16">
          <Logo
            src={logoSrc}
            height={128}
            width={128}
            alt="Santa Rosa Science and Technology High School"
          />
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-yellow-default">
            Santa Rosa Science and Technology High School
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Empowering tomorrow&apos;s science and technology leaders.
          </h1>
          <p className="mb-4 max-w-2xl text-lg leading-8 text-white/90">
            A public science and technology high school serving learners,
            families, and the Santa Rosa community.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <HeroButton href="/contact" icon={<HeartHandshake />} main>
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
