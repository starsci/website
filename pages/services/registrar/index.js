import Page from "@/components/Page";
import ButtonLink from "@/components/ButtonLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const documents = [
  { code: "SCI-RF-E1", name: "Certificate of Enrollment" },
  { code: "SCI-RF-E2", name: "Certificate of Registration" },
  { code: "SCI-RF-E3", name: "CAV/Authentication" },
  { code: "SCI-RF-E4", name: "Authorization to Release Documents" },
  { code: "SCI-RF-E5", name: "Academic Contact" },
  { code: "SCI-RF-F137a", name: "Form 137/SF10/Permanent Record" },
  { code: "SCI-RF-F137b", name: "CTC-SF10/Permanent Record" },
  { code: "SCI-RF-F138a", name: "Form 138/SF9/High School Card" },
  { code: "SCI-RF-F138b", name: "CTC-SF9/High School Card" },
  { code: "SCI-RF-HC1", name: "Certificate of Ranking" },
  { code: "SCI-RF-SHS1", name: "Certificate of Expected Graduation" },
  { code: "SCI-RF-SHS2", name: "Recommendation Form" },
  {
    code: "SCI-RF-SHS3",
    name: "Certificate of English as Medium of Instruction",
  },
  { code: "SCI-RF-SHS4", name: "Diploma (2nd copy)" },
  { code: "SCI-RF-SHS5", name: "Certified True Copy of Diploma" },
  { code: "SCI-RF-SHS6", name: "DOST Form" },
  {
    code: "SCI-RF-SHS7",
    name: "Certificate of Completion/Graduation (For Graduate Level only)",
  },
];

export default function Registrar() {
  return (
    <Page isContent title="Registrar Services">
      <h2 className="text-2xl font-bold mb-2">
        Available Documents for Request
      </h2>
    <table className="mb-4">
        <thead>
            <tr className="[&>*]:bg-transparent">
                <th>Code</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {documents.map((document) => (
                <tr key={document.code}>
                    <td>{document.code}</td>
                    <td>{document.name}</td>
                </tr>
            ))}
        </tbody>
    </table>
      <div className="inline">
        <ButtonLink href="https://docs.google.com/forms/d/e/1FAIpQLSf5X_f_TDfzMGCElgSEZfc0cb6-VOtWDET7_7UlGA5djIyqSA/viewform">
          <span>
            Request Forms
            <FontAwesomeIcon icon={faExternalLink} className="ms-2 h-4 w-4" />
          </span>
        </ButtonLink>
      </div>
    </Page>
  );
}
