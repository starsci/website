'use cache'

import {Options, queryCollection} from '@/hooks/server/payload-query'
import {cacheLife, cacheTag} from 'next/cache'
import {CollectionSlug} from 'payload'
import {Publication, queryNewsArticles} from './news-queries'

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
