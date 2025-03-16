'use server'

import {getPayload, TypedCollectionSelect} from 'payload'
import config from '@payload-config'
import {CollectionSlug} from 'payload'

const payload = await getPayload({config})

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
