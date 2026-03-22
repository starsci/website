'use client'

import Image from 'next/image'
import {useQuery} from '@/hooks/use-query'
import {getMediaUrl} from '@/lib/utils'
import {News} from '@/payload-types'
import {convertLexicalToHTML} from '@payloadcms/richtext-lexical/html'

export function Content({
  slug,
  collection,
  publication
}: {
  slug: string
  collection: 'school-announcements' | 'club-announcements' | 'news'
  publication?: News['publication']
}) {
  const {data, isLoading, error} = useQuery({
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

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Failed to load collection: {error.message}</p>
  }

  if (!data) {
    return <p>No data</p>
  }

  const {title, createdAt, thumbnail, body} = data.docs[0]
  const thumbnailUrl = getMediaUrl(thumbnail)
  const html = convertLexicalToHTML({data: body})

  return (
    <article>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-sm text-gray-500 mb-2">
        {new Date(createdAt).toLocaleDateString()}
      </p>
      {thumbnailUrl && (
        <Image
          src={thumbnailUrl}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="object-contain w-full h-auto my-4"
        />
      )}
      <div
        className="prose prose-neutral"
        dangerouslySetInnerHTML={{__html: html || ''}}
      />
    </article>
  )
}
