import Page from "@/components/Page";
import Link from "next/link";

export default function Services() {
    return (
        <Page isContent>
            <h1 className="text-4xl font-bold mb-4">Services</h1>
            <p className="mb-4">The following services are available:</p>
            <ul className="list-disc list-inside">
                <li className="text-blue-700 underline"><Link
                    href="/services/registrar">Registrar</Link></li>
                <li className="text-blue-700 underline"><Link
                    href="/services/guidance-counseling">Guidance
                    Counseling</Link></li>
                <li className="text-blue-700 underline"><Link
                    href="/services/for-students">Services for
                    Students</Link></li>
            </ul>
        </Page>
    )
}