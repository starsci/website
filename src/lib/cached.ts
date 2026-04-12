import {Options, queryCollection} from '@/hooks/server/payload-query'
import {CollectionSlug} from 'payload'
import {Publication, queryNewsArticles} from './news-queries'
import {getPayloadClient} from '@/lib/payload'

export async function fetchCachedCollection<TSlug extends CollectionSlug>(
  options: Options<TSlug>
) {
  return await queryCollection(options)
}

interface FetchCachedNewsArticlesOptions {
  publication: Publication
  category?: string
  limit?: number
}

export async function fetchCachedNewsArticles(
  options: FetchCachedNewsArticlesOptions
) {
  return await queryNewsArticles(options)
}

// get cached Media object
export async function fetchCachedMediaById(id: number) {
  const payload = await getPayloadClient()

  const media = await payload.find({
    collection: 'media',
    where: {
      id: {
        equals: id
      }
    },
    limit: 1,
    pagination: false,
    depth: 0
  })

  if (media.docs.length === 1) {
    return media.docs[0]
  }

  return null
}

export async function fetchCachedMediaByName(filename: string) {
  const payload = await getPayloadClient()

  const media = await payload.find({
    collection: 'media',
    where: {
      filename: {
        contains: filename
      }
    },
    limit: 1,
    pagination: false,
    depth: 0,
    sort: '-createdAt'
  })

  if (media.docs[0]?.url) {
    return media.docs[0].url
  }

  return `https://placehold.co/400x400.png?text=${encodeURIComponent(filename)}`
}
