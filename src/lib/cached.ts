'use cache'

import {Options, queryCollection} from '@/hooks/server/payload-query'
import {cacheLife, cacheTag} from 'next/cache'
import {CollectionSlug} from 'payload'
import {Publication, queryNewsArticles} from './news-queries'
import {payload} from '@/lib/payload'

export async function fetchCachedCollection<TSlug extends CollectionSlug>(
  options:
    | {
        collection: TSlug
      }
    | Options<TSlug>
) {
  // cache for "days" profile
  cacheLife('days')
  cacheTag(options.collection) // if any entry in this collection changes, we want to invalidate this cache

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
  // cache for "days" profile
  cacheLife('days')
  cacheTag(options.publication) // if any news article changes, we want to invalidate this cache

  return await queryNewsArticles(options)
}

// get cached Media object
export async function fetchCachedMediaById(id: number) {
  // set cache time and tag
  cacheLife('weeks') // this doesn't change too much, so we can cache for a long time
  cacheTag('media') // if any media changes, we want to invalidate this cache

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
  // set cache time and tag
  cacheLife('weeks') // this doesn't change too much, so we can cache for a long time
  cacheTag('media') // if any media changes, we want to invalidate this cache

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
