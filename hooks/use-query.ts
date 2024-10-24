import useSWR from 'swr'
import {CollectionSlug, PaginatedDocs, DataFromCollectionSlug} from 'payload'
import {queryCollection} from './server/payload-query'

// basically does a payload query but using useSWR and automatically casts
// the return type to the collection's type
export function useQuery<TSlug extends CollectionSlug>(
  collection: TSlug,
  options: Parameters<typeof queryCollection>[1]
) {
  return useSWR<PaginatedDocs<DataFromCollectionSlug<TSlug>>>(collection, () =>
    queryCollection(collection, options)
  )
}
