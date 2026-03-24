'use server'

import {CollectionSlug, TypedCollectionSelect} from 'payload'
import {payload} from '@/lib/payload'

export type Options<TSlug extends CollectionSlug> = Parameters<
  typeof payload.find<TSlug, TypedCollectionSelect[TSlug]>
>[0]

export async function queryCollection<TSlug extends CollectionSlug>(
  options:
    | {
        collection: TSlug
      }
    | Options<TSlug>
) {
  return await payload.find(options)
}
