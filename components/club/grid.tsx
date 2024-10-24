'use client'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {useQuery} from '@/hooks/use-query'

import {Media} from '@/payload-types'

import Image from 'next/image'
import Link from 'next/link'

export function ClubGrid() {
  const {data, isLoading, error} = useQuery('clubs', {
    depth: 1,
    pagination: true,
    limit: 8
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Failed to load clubs: {error.message}</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data!.docs!.map(club => {
        return (
          <div
            className="relative transition-transform hover:scale-105"
            key={club.id}>
            <Card className="shadow-md flex flex-col items-center justify-center">
              <CardHeader>
                <Image
                  src={(club.logo as Media).cdn_url!}
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
              href={`/clubs/${club.id}`}
              className="absolute inset-0 z-10"
            />
          </div>
        )
      })}
    </div>
  )
}
