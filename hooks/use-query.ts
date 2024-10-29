import {CollectionSlug, PaginatedDocs, DataFromCollectionSlug} from 'payload'
import {Options, queryCollection} from './server/payload-query'
import {useQuery as useReactQuery} from '@tanstack/react-query'

// basically does a payload query but using useSWR and automatically casts
// the return type to the collection's type
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
