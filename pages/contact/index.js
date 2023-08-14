import Page from "@/components/Page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Contact() {
    return (
        <Page>
            <div className="flex-grow justify-center items-center flex flex-col text-white">
                <div className="lg:text-center">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="mb-4">
                        If you have any questions, please contact us at <a href="mailto:scitech.santarosa@deped.gov.ph" className="normal-link">scitech.santarosa@deped.gov.ph</a>.
                    </p>
                    <p className="mb-4">
                        If you wish, you may connect with us through:
                    </p>
                    <ul className="list-none list-inside [&>*]:mb-2 text-left">
                        <li>
                            <FontAwesomeIcon icon={faHome} className="mr-2" />
                            <Link href="https://goo.gl/maps/WpM6ZuczECRqCZdp7" className="normal-link">LM Subdivision, Brgy. Market Area, Santa Rosa City, 4026 Laguna, Philippines</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhone} className="mr-2" />
                            <Link href="tel:+6349440067" className="normal-link">(049) 544 0067</Link>
                        </li>
                        <li className="mb-2">
                            <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                            <Link href="https://www.facebook.com/DepEdTayoSRSTHS307902" className="normal-link">DepEd Tayo Santa Rosa Science and Technology HS - Santa Rosa City</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Page>
    )
}