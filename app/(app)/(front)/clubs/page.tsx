import Link from 'next/link'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {getClubs} from './actions'
import Image from 'next/image'
import {Media} from '@/payload-types'

export const metadata = {
  title:
    'Clubs and Organizations | Santa Rosa Science and Technology High School',
  description: 'List of clubs and organizations in the school'
}

export default async function ClubDirectory() {
  const clubs = await getClubs()

  return (
    <main>
      <h1 className="text-4xl font-bold text-center mb-6">
        Clubs and Organizations
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clubs.docs.map(club => {
          return (
            <div
              className="relative transition-transform hover:scale-105"
              key={club.id}>
              <Card className="shadow-md flex flex-col items-center justify-center">
                <CardHeader>
                  <Image
                    src={(club.logo as Media).cloudinaryURL!}
                    alt={`${club.name} logo`}
                    width={100}
                    height={100}
                    className="mx-auto mb-4"
                  />
                  <CardTitle className="text-center">{club.name}</CardTitle>
                  <CardDescription className="text-center">
                    {club.description}
                  </CardDescription>
                </CardHeader>
              </Card>
              <Link
                href={`/app/(front)/clubs/${club.id}`}
                className="absolute inset-0 z-10"
              />
            </div>
          )
        })}
      </div>
    </main>
  )
}
