import Page from "@/components/Page";
import Image from "next/image";
import CardLink from "@/components/CardLink";

const clubs = [
  "BKD",
  "BSP",
  "CACHET",
  "GSP",
  "HUMSS",
  "Hymno",
  "Ikapati",
  "Interact",
  "KaPaRiz",
  "LGDT",
  "Music Club",
  "OBRA",
  "Pararayos",
  "RCY",
  "The Satellite",
  "SMAP",
  "SMS",
  "SPARCS",
  "SSLG",
  "STARS",
  "SYSTEM",
  "Wizards of English",
  "Y-Teens",
  "YES-O",
  "Youth Alert",
];

function toLowerCaseAndRemoveSpaces(str) {
  return str.toLowerCase().replace(/\s/g, "-");
}

export default function Clubs() {
  return (
    <Page isContent title="Club Directory">
      <div className="grid grid-cols-3 lg:grid-cols-8 md:grid-cols-5 gap-4">
        {clubs.map((club, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <Image
              src={`https://via.placeholder.com/150?text=${club}`}
              alt={club}
              width={150}
              height={150}
              className="h-auto object-cover rounded-full"
            />
            <h2 className="text-xl font-bold text-center mt-2">{club}</h2>
            <CardLink href={`/clubs/${toLowerCaseAndRemoveSpaces(club)}`} />
          </div>
        ))}
      </div>
    </Page>
  );
}
