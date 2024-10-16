import { Card } from "@/components/ui/card";
import { faFileSignature, faHandHoldingHand, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ServicesSection() {
  return (
    <section className="px-8 py-14 w-full text-white flex flex-col gap-4">
      <h2 className="text-2xl text-center font-semibold">School Services</h2>
      <p className="text-lg text-center lg:w-1/2 md:mx-auto">
        Discover the wide range of services we offer to support our
        students&apos; academic and personal growth.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8 mt-8 place-items-center">
        <Card className="p-6 bg-transparent text-white flex flex-col gap-2 w-2/3 lg:w-full">
          <FontAwesomeIcon
            className="h-12 w-12 mx-auto"
            icon={faFileSignature}
          />
          <h3 className="text-xl font-semibold text-center">
            Registrar Services
          </h3>
          <p className="text-center">
            Learn more about our registrar services, including enrollment,
            records, and more.
          </p>
        </Card>
        <Card className="p-6 bg-transparent text-white flex flex-col gap-2 w-2/3 lg:w-full">
          <FontAwesomeIcon
            className="h-12 w-12 mx-auto"
            icon={faHandHoldingHand}
          />
          <h3 className="text-xl font-semibold text-center">
            Counseling Services
          </h3>
          <p className="text-center">
            Explore our counseling services, including guidance, mental health,
            and more.
          </p>
        </Card>
        <Card className="p-6 bg-transparent text-white flex flex-col gap-2 w-2/3 lg:w-full">
          <FontAwesomeIcon
            className="h-12 w-12 mx-auto"
            icon={faGraduationCap}
          />
          <h3 className="text-xl font-semibold text-center">
            Academic Services
          </h3>
          <p className="text-center">
            Discover our academic services, including tutoring, scholarships,
            and more.
          </p>
        </Card>
      </div>
    </section>
  )
}
