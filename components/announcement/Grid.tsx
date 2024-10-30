'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardImage,
  CardTitle
} from '@/components/ui/card'

import {useQuery} from '@/hooks/use-query'

import {Media} from '@/payload-types'

import Link from 'next/link'
import {useSearchParams} from 'next/navigation'
import {Pagination} from '../Pagination'

export function AnnouncementGrid() {
  const searchParams = useSearchParams()
  const defaultLimit = 12
  const page = parseInt(searchParams.get('page') || '1') // if page is 0 or NaN, default to 1
  const limit = parseInt(searchParams.get('limit') || defaultLimit.toString())

  const {data, isLoading, error} = useQuery({
    collection: 'school-announcements',
    depth: 1,
    pagination: true,
    limit,
    page
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Failed to load announcements: {error.message}</p>
  }

  if (!data) {
    return <p>No data</p>
  }

  return (
    <div className="flex flex-col gap-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.docs.map(ann => {
          return (
            <article
              className="relative transition-transform hover:scale-105"
              key={ann.id}>
              <Card className="shadow-md h-full">
                {ann.thumbnail && (
                  <CardImage src={(ann.thumbnail as Media).cdn_url!} alt={ann.title} className="max-h-48" />
                )}
                <CardHeader>
                  <CardTitle>{ann.title}</CardTitle>
                  <CardDescription>
                    {new Date(ann.createdAt).toLocaleString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    className="prose line-clamp-3"
                    dangerouslySetInnerHTML={{__html: ann.bodyHTML!}}
                  />
                </CardContent>
              </Card>
              <Link
                href={`/announcements/${ann.id}`}
                className="absolute inset-0 z-10"
              />
            </article>
          )
        })}
      </div>
      <div className="mx-auto">
        <Pagination
          totalPages={data.totalPages}
          hasPrevPage={data.hasPrevPage}
          hasNextPage={data.hasNextPage}
          defaultLimit={defaultLimit}
        />
      </div>
    </div>
  )
}
