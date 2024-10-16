import Link from 'next/link'
import {Card, CardContent, CardHeader} from '../ui/card'
import {getClubLogoUrl, getClubs} from './actions'
import Image from 'next/image'

export default async function ClubDirectory() {
  const clubs = await getClubs()

  return (
    <main>
      <h1 className="text-4xl font-bold text-center mb-6">
        Clubs and Organizations
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clubs.map(async club => {
          const url = await getClubLogoUrl(club.id)

          return (
            <div
              className="relative transition-transform hover:scale-105"
              key={club.id}>
              <Card className="shadow-md flex flex-col items-center justify-center">
                <CardHeader>
                  <Image
                    src={url}
                    alt={`${club.name} logo`}
                    width={100}
                    height={100}
                  />
                </CardHeader>
                <CardContent>
                  <h2 className="text-xl font-semibold text-center">
                    {club.name}
                  </h2>
                </CardContent>
              </Card>
              <Link
                href={`/clubs/${club.id}`}
                prefetch={false}
                className="absolute inset-0 z-10"
              />
            </div>
          )
        })}
      </div>
    </main>
  )
}
