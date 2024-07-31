import Page from "@/components/Page";
import Image from "next/image";

export default function Clubs() {
  // generate 18 clubs
  let clubs = [];
  for (let i = 0; i < 18; i++) {
    clubs.push({
      name: `Club ${i}`,
      imageUrl: `https://via.placeholder.com/150?text=Club+${i}`,
    });
  }
  return (
    <Page isContent>
      <div className="grid grid-cols-3 lg:grid-cols-8 md:grid-cols-5 gap-4">
        {clubs.map((club, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <Image
              src={club.imageUrl}
              alt={club.name}
              width={150}
              height={150}
              className="h-auto object-cover rounded-full"
            />
            <h2 className="text-xl font-bold">{club.name}</h2>
          </div>
        ))}
      </div>
    </Page>
  );
}
