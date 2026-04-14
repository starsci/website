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
import {useSearchParams} from 'next/navigation'
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

  return (
    <div className="flex flex-col gap-y-8">
      {data.docs.length === 0 && (
        <p className="rounded-md border border-gray-200 bg-white p-8 text-center text-gray-500 shadow-sm">
          No announcements posted yet.
        </p>
      )}
      <GridContainer>
        {data.docs.map(ann => {
          const {id, title, body, published_at, thumbnail} = ann
          const html = sanitizeRichTextHTML(convertLexicalToHTML({data: body}))

          return (
            <div
              className="group relative transition hover:-translate-y-1"
              key={id}>
              <Card className="h-full rounded-md border-gray-200 bg-white shadow-sm transition-shadow group-hover:shadow-md">
                {isMedia(thumbnail) && thumbnail.url && (
                  <CardImage
                    src={thumbnail.url}
                    alt={title}
                    className="h-48 transition-transform duration-300 group-hover:scale-105"
                  />
                )}
                <CardHeader className="p-5">
                  <CardDescription className="font-medium">
                    {new Date(published_at).toLocaleDateString()}
                  </CardDescription>
                  <CardTitle className="line-clamp-2 text-xl leading-7 text-gray-950 group-hover:text-brand-blue-default">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-5">
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
