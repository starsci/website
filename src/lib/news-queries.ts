'use server'

import {queryCollection} from '@/hooks/server/payload-query'
import type {News} from '@/payload-types'
import {Where} from 'payload'

export type Publication = 'pararayos' | 'the-satellite'

interface QueryArticlesOptions {
  publication: Publication
  category?: string
  limit?: number
}

export async function queryNewsArticles({
  publication,
  category,
  limit
}: QueryArticlesOptions): Promise<News[]> {
  const whereConditions: Where = {
    publication: {
      equals: publication
    }
  }

  if (category) {
    return (
      await queryCollection({
        collection: 'news',
        where: {
          and: [whereConditions, {category: {equals: category}}]
        },
        sort: '-published_at',
        pagination: false,
        depth: 1,
        ...(limit ? {limit} : {})
      })
    ).docs
  }

  return (
    await queryCollection({
      collection: 'news',
      where: whereConditions,
      sort: '-published_at',
      pagination: false,
      depth: 1,
      ...(limit ? {limit} : {})
    })
  ).docs
}
