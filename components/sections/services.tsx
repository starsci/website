import {
  faFileSignature,
  faHandHoldingHand,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons'
import {ServiceCard} from '@/components/service-card.tsx'
import {Section} from '@/components/section.tsx'

export function Services() {
  return (
    <Section>
      <h2 className="text-2xl text-center font-semibold">School Services</h2>
      <p className="text-lg text-center lg:w-1/2 md:mx-auto">
        Discover the wide range of services we offer to support our
        students&apos; academic and personal growth.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8 mt-4 place-items-center">
        <ServiceCard icon={faFileSignature} title="Registrar Services">
          Learn more about our registrar services, including enrollment,
          records, and more.
        </ServiceCard>
        <ServiceCard icon={faHandHoldingHand} title="Counseling Services">
          Explore our counseling services, including guidance, mental health,
          and more.
        </ServiceCard>
        <ServiceCard icon={faGraduationCap} title="Academic Services">
          Discover our academic services, including tutoring, scholarships, and
          more.
        </ServiceCard>
      </div>
    </Section>
  )
}
