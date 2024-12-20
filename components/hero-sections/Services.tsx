import {ServiceCard} from '@/components/ServiceCard'
import {HeroSection} from '@/components/HeroSection'
import {FilePen, GraduationCap, HeartHandshake} from 'lucide-react'

export function Services() {
  return (
    <HeroSection>
      <h2 className="text-2xl text-center font-semibold">School Services</h2>
      <p className="text-lg text-center lg:w-1/2 md:mx-auto">
        Discover the wide range of services we offer to support our
        students&apos; academic and personal growth.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8 mt-4 place-items-center">
        <ServiceCard icon={<FilePen />} title="Registrar Services">
          Learn more about our registrar services, including enrollment,
          records, and more.
        </ServiceCard>
        <ServiceCard icon={<HeartHandshake />} title="Counseling Services">
          Explore our counseling services, including guidance, mental health,
          and more.
        </ServiceCard>
        <ServiceCard icon={<GraduationCap />} title="Academic Services">
          Discover our academic services, including tutoring, scholarships, and
          more.
        </ServiceCard>
      </div>
    </HeroSection>
  )
}
