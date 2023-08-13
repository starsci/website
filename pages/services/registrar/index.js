import Page from "@/components/Page";
import ButtonLink from "@/components/ButtonLink";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLink} from "@fortawesome/free-solid-svg-icons";

export default function Registrar() {
    return (
        <Page isContent>
            <h1 className="text-4xl font-bold mb-4">Registrar Services</h1>
            <h2 className="text-2xl font-bold mb-2">Available Documents for
                Request</h2>
            <ul className="mb-4">
                <li><strong>SCI-RF-E1</strong> Certificate of Enrollment</li>
                <li><strong>SCI-RF-E2</strong> Certificate of Registration</li>
                <li><strong>SCI-RF-E3</strong> CAV/Authentication</li>
                <li><strong>SCI-RF-E4</strong> Authorization to Release
                    Documents
                </li>
                <li><strong>SCI-RF-E5</strong> Academic Contact</li>
                <li><strong>SCI-RF-F137a</strong> Form 137/SF10/Permanent Record
                </li>
                <li><strong>SCI-RF-F137b</strong> CTC-SF10/Permanent Record</li>
                <li><strong>SCI-RF-F138a</strong> Form 138/SF9/High School Card
                </li>
                <li><strong>SCI-RF-F138b</strong> CTC-SF9/High School Card</li>
                <li><strong>SCI-RF-HC1</strong> Certificate of Ranking</li>
                <li><strong>SCI-RF-SHS1</strong> Certificate of Expected
                    Graduation
                </li>
                <li><strong>SCI-RF-SHS2</strong> Recommendation Form</li>
                <li><strong>SCI-RF-SHS3</strong> Certificate of English as
                    Medium of Instruction
                </li>
                <li><strong>SCI-RF-SHS4</strong> Diploma (2nd copy)</li>
                <li><strong>SCI-RF-SHS5</strong> Certified True Copy of Diploma
                </li>
                <li><strong>SCI-RF-SHS6</strong> DOST Form</li>
                <li><strong>SCI-RF-SHS7</strong> Certificate of
                    Completion/Graduation (For Graduate Level only)
                </li>
            </ul>
            <div className="inline">
                <ButtonLink
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf5X_f_TDfzMGCElgSEZfc0cb6-VOtWDET7_7UlGA5djIyqSA/viewform">
                <span>Request Forms
                    <FontAwesomeIcon icon={faExternalLink}
                                     className="ms-2 h-4 w-4"/>
                </span>
                </ButtonLink>
            </div>

        </Page>
    )
}