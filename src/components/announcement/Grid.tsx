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
import {isMedia} from '@/lib/media'

import Link from 'next/link'
import {notFound, useSearchParams} from 'next/navigation'
import {Pagination} from '../Pagination'
import {convertLexicalToHTML} from '@payloadcms/richtext-lexical/html'
import {GridContainer} from '@/components/GridContainer'

export function AnnouncementGrid() {
  const searchParams = useSearchParams()
  const page = Number(searchParams.get('page')) || 1 // if page is 0 or NaN, default to 1
  const limit = Number(searchParams.get('limit')) || 12

  const {data} = useQuery({
    collection: 'school-announcements',
    depth: 1,
    pagination: true,
    limit,
    page
  })

  // if (data.docs.length === 0) {
  //   notFound()
  // }

  return (
    <div className="flex flex-col gap-y-4">
      <GridContainer>
        {data.docs.map(ann => {
          const {id, title, body, published_at, thumbnail} = ann
          const html = convertLexicalToHTML({data: body})

          return (
            <div
              className="relative transition-transform hover:scale-105"
              key={id}>
              <Card className="shadow-md h-full">
                {isMedia(thumbnail) && thumbnail.url && (
                  <CardImage
                    src={thumbnail.url}
                    alt={title}
                    className="max-h-48"
                  />
                )}
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>
                    {new Date(published_at).toLocaleString()}
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
                href={`/announcements/${id}`}
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
