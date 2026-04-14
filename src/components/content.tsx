'use client'

import Image from 'next/image'
import {useQuery} from '@/hooks/use-query'
import {isMedia} from '@/lib/media'
import {News} from '@/payload-types'
import {convertLexicalToHTML} from '@payloadcms/richtext-lexical/html'
import {notFound} from 'next/navigation'
import {Skeleton} from '@/components/ui/skeleton'
import {sanitizeRichTextHTML} from '@/lib/sanitize'

export function ContentSkeleton() {
  return (
    <article>
      <Skeleton className="h-10 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/4 mb-4" />
      <Skeleton className="w-full h-64 my-4" />
      <div className="flex flex-col gap-2 mt-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </article>
  )
}

export function Content({
  slug,
  collection,
  publication
}: {
  slug: string
  collection: 'school-announcements' | 'club-announcements' | 'news'
  publication?: News['publication']
}) {
  const {data} = useQuery({
    collection,
    where: {
      id: {
        equals: slug
      },
      ...(publication
        ? {
            publication: {
              equals: publication
            }
          }
        : {})
    },
    depth: 1,
    pagination: false
  })

  const [doc] = data.docs

  if (!doc) {
    notFound()
  }

  const {title, published_at, thumbnail, body} = doc
  const html = sanitizeRichTextHTML(convertLexicalToHTML({data: body}))

  return (
    <article className="rounded-md border border-gray-200 bg-white p-6 shadow-sm md:p-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue-default">
        {new Date(published_at).toLocaleDateString()}
      </p>
      <h1 className="mt-2 text-4xl font-bold leading-tight text-gray-950">
        {title}
      </h1>
      {isMedia(thumbnail) && thumbnail.url && (
        <Image
          src={thumbnail.url}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="my-6 h-auto w-full rounded-md object-contain"
        />
      )}
      <div
        className="prose prose-neutral mt-6 max-w-none"
        dangerouslySetInnerHTML={{__html: html || ''}}
      />
    </article>
  )
}
