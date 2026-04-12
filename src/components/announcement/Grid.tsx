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
import {sanitizeRichTextHTML} from '@/lib/sanitize'

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
          const html = sanitizeRichTextHTML(convertLexicalToHTML({data: body}))

          return (
            <div
              className="relative transition-transform hover:-translate-y-1"
              key={id}>
              <Card className="h-full border-gray-200 shadow-sm transition-shadow hover:shadow-lg">
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
                    className="prose prose-sm line-clamp-3 max-w-none text-gray-600"
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
