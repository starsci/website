import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import {fetchCachedCollection} from '@/lib/cached'
import {getMediaUrl} from '@/lib/media'
import type {Club} from '@/payload-types'

import Image from 'next/image'
import {notFound} from 'next/navigation'
import {Pagination} from '@/components/Pagination'
import {
  interactiveCardClass,
  interactiveCardWrapperClass
} from '@/components/card-styles'

interface ClubGridProps {
  searchParams?: {
    page?: string
    limit?: string
  }
}

export async function ClubGrid({searchParams}: ClubGridProps) {
  const page = Number(searchParams?.page) || 1 // if page is 0 or NaN, default to 1
  const limit = Number(searchParams?.limit) || 12

  let data
  try {
    data = await fetchCachedCollection({
      collection: 'clubs',
      depth: 1,
      pagination: true,
      limit,
      page
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return <p>Failed to load clubs: {message}</p>
  }

  if (!data || data.docs.length === 0) {
    notFound()
  }

  return (
    <div className="flex flex-col gap-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.docs.map((club: Club) => {
          const logoUrl = getMediaUrl(club.logo)

          return (
            <article className={interactiveCardWrapperClass} key={club.id}>
              <Card
                className={`${interactiveCardClass} flex flex-col items-center justify-center`}>
                <CardHeader>
                  {logoUrl && (
                    <Image
                      src={logoUrl}
                      alt={`${club.name} logo`}
                      width={100}
                      height={100}
                      className="mx-auto mb-4 rounded-md object-contain"
                    />
                  )}
                  <CardTitle className="text-center text-xl">
                    {club.name}
                  </CardTitle>
                  <CardDescription className="text-center leading-6">
                    {club.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </article>
          )
        })}
      </div>
      <div className="mx-auto">
        <Pagination totalPages={data.totalPages} />
      </div>
    </div>
  )
}
