import Card from "@/components/Card";
import CardBody from "@/components/CardBody";
import CardHeading from "@/components/CardHeading";
import CardLink from "@/components/CardLink";
import Page from "@/components/Page";

const services = [
  {
    title: "Registrar Services",
    description:
      "Request documents and school records from the Office of the Registrar.",
    href: "/services/registrar",
  },
  {
    title: "Guidance Counseling",
    description:
      "Seek guidance, support, and counseling from the Guidance Counselor, and know the policies and disciplinary measures of the school.",
    href: "/services/guidance-counseling",
  },
  {
    title: "Student Services",
    description:
      "Be informed about the different services that the school offers to students.",
    href: "/services/for-students",
  },
];

export default function Services() {
  return (
    <Page isContent title="Services">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="[&>*]:h-full">
            <Card>
              <CardBody>
                <CardHeading>
                  <h1 className="text-2xl font-bold">{service.title}</h1>
                </CardHeading>
                <p>{service.description}</p>
                <CardLink href={service.href} />
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </Page>
  );
}
