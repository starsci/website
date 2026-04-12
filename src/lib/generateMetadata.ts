import {queryCollection} from '@/hooks/server/payload-query'
import {Media, News} from '@/payload-types'
import {CollectionSlug} from 'payload'
import {ResolvingMetadata} from 'next'
import {convertLexicalToHTML} from '@payloadcms/richtext-lexical/html'
import {isMedia} from '@/lib/media'
import {sanitizeRichTextHTML} from '@/lib/sanitize'

export function metadataFunction(
  collection: CollectionSlug,
  path: string,
  slugName: string = 'slug',
  publication?: News['publication']
) {
  return async function (
    {params}: {params: Promise<{[key: string]: string}>},
    parent: ResolvingMetadata
  ) {
    const slug = (await params)[slugName]
    const result = await queryCollection({
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
      limit: 1,
      pagination: false,
      depth: 1
    })

    const article = result.docs[0]

    if (!article) {
      return {
        title: 'Not Found'
      }
    }

    const {title, body, thumbnail} = article as {
      title: string
      body?: any
      thumbnail?: Media | number | null
    }
    const bodyHTML = body
      ? sanitizeRichTextHTML(convertLexicalToHTML({data: body}))
      : ''
    const description =
      bodyHTML
        ?.replace(/<\s*br[^>]?>/gm, '\n')
        .replace(/(<([^>]+)>)/gm, '')
        .slice(0, 160) || ''
    const thumbnailUrl = isMedia(thumbnail) ? thumbnail.url : undefined

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: 'article',
        url: `${process.env.API_BASE}/${path}/${slug}`,
        siteName: 'Santa Rosa Science and Technology High School',
        images: [
          ...(thumbnailUrl ? [thumbnailUrl] : []),
          ...((await parent).openGraph?.images || [])
        ]
      }
    }
  }
}
