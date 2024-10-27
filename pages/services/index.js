import ButtonLink from "@/components/ButtonLink";
import Card from "@/components/Card";
import CardBody from "@/components/CardBody";
import CardHeading from "@/components/CardHeading";
import CardLink from "@/components/CardLink";
import Page from "@/components/Page";
import Link from "next/link";

export default function Services() {
    const services = [
        {
            title: "Registrar Services",
            description: "Request documents and school records from the Office of the Registrar.",
            href: "/services/registrar"
        },
        {
            title: "Guidance Counseling",
            description: "Seek guidance, support, and counseling from the Guidance Counselor, and know the policies and disciplinary measures of the school.",
            href: "/services/guidance-counseling"
        },
        {
            title: "Student Services",
            description: "Be informed about the different services that the school offers to students.",
            href: "/services/for-students"
        },
    ]

    return (
        <Page isContent>
            <h1 className="text-4xl font-bold mb-4">Services</h1>
            <p className="mb-4">We offer the following services:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, index) => (
                    <div key={index} className="[&>*]:h-full">
                        <Card>
                            <CardBody>
                                <CardHeading>
                                    <h1 className="text-2xl font-bold">
                                        {service.title}
                                    </h1>
                                </CardHeading>
                                <p>{service.description}</p>
                                <ButtonLink href={service.href} className="mt-4">
                                    Go to <strong>{service.title}</strong>
                                </ButtonLink>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </Page>
    )
}