import {CollectionSlug, PaginatedDocs, DataFromCollectionSlug} from 'payload'
import {queryCollection} from './server/payload-query'
import {useQuery as useReactQuery} from '@tanstack/react-query'

// basically does a payload query but using useSWR and automatically casts
// the return type to the collection's type
export function useQuery<TSlug extends CollectionSlug>(
  collection: TSlug,
  options: Omit<Parameters<typeof queryCollection>[1], 'collection'>
) {
  return useReactQuery<PaginatedDocs<DataFromCollectionSlug<TSlug>>>({
    queryKey: [collection, options],
    queryFn: () => queryCollection(collection, options)
  })
}
