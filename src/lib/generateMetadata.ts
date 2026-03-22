import {queryCollection} from '@/hooks/server/payload-query'
import {News} from '@/payload-types'
import {CollectionSlug} from 'payload'
import {ResolvingMetadata} from 'next'

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

    const {title, bodyHTML, thumbnail} = article as {
      title: string
      bodyHTML?: string | null
      thumbnail?: {cdn_url?: string | null} | null
    }
    const description =
      bodyHTML
        ?.replace(/<\s*br[^>]?>/gm, '\n')
        .replace(/(<([^>]+)>)/gm, '')
        .slice(0, 160) || ''
    const thumbnailUrl = thumbnail?.cdn_url

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: 'article',
        url: `${process.env.API_BASE}/${path}/${slug}`,
        siteName: 'Santa Rosa Science and Technology High School',
        images: [thumbnailUrl, ...((await parent).openGraph?.images || [])]
      }
    }
  }
}
