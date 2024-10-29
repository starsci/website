'use server'

import {getPayloadHMR} from '@payloadcms/next/utilities'
import config from '@payload-config'
import {CollectionSlug} from 'payload'

const payload = await getPayloadHMR({config})

export type Options<TSlug extends CollectionSlug> = Parameters<
  typeof payload.find<TSlug>
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
