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
import {getMediaUrl} from '@/lib/utils'

import Link from 'next/link'
import {notFound, useSearchParams} from 'next/navigation'
import {Pagination} from '../Pagination'
import {convertLexicalToHTML} from '@payloadcms/richtext-lexical/html'
import {GridContainer} from '@/components/GridContainer'
import {GridSkeleton} from '../GridSkeleton'

export function AnnouncementGrid() {
  const searchParams = useSearchParams()
  const page = Number(searchParams.get('page')) || 1 // if page is 0 or NaN, default to 1
  const limit = Number(searchParams.get('limit')) || 12

  const {data, isLoading, error} = useQuery({
    collection: 'school-announcements',
    depth: 1,
    pagination: true,
    limit,
    page
  })

  if (isLoading) {
    // return skeleton loader
    return <GridSkeleton count={limit} />
  }

  if (error) {
    return <p>Failed to load announcements: {error.message}</p>
  }

  if (!data || data.docs.length === 0) {
    notFound()
  }

  return (
    <div className="flex flex-col gap-y-4">
      <GridContainer>
        {data.docs.map(ann => {
          const html = convertLexicalToHTML({data: ann.body})
          const thumbnailUrl = getMediaUrl(ann.thumbnail)

          return (
            <div
              className="relative transition-transform hover:scale-105"
              key={ann.id}>
              <Card className="shadow-md h-full">
                {thumbnailUrl && (
                  <CardImage
                    src={thumbnailUrl}
                    alt={ann.title}
                    className="max-h-48"
                  />
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
                    dangerouslySetInnerHTML={{__html: html || ''}}
                  />
                </CardContent>
              </Card>
              <Link
                href={`/announcements/${ann.id}`}
                className="absolute inset-0 z-10"
              />
            </div>
          )
        })}
      </GridContainer>
      <div className="mx-auto">
        <Pagination totalPages={data.totalPages} />
      </div>
    </div>
  )
}
