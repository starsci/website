'use client'

import {CollectionSlug, PaginatedDocs, DataFromCollectionSlug} from 'payload'
import {Options, queryCollection} from './server/payload-query'
import {useQuery as useReactQuery} from '@tanstack/react-query'

// Client hook that calls server action for Payload Local API queries
// This provides type-safe data fetching with TanStack Query
export function useQuery<TSlug extends CollectionSlug>(
  options:
    | {
        collection: TSlug
      }
    | Options<TSlug>
) {
  return useReactQuery<PaginatedDocs<DataFromCollectionSlug<TSlug>>>({
    queryKey: [options.collection, options],
    queryFn: () => queryCollection(options)
  })
}
