import {fetchCachedMediaById} from '@/lib/cached'
import {isMedia} from '@/lib/media'
import type {Media} from '@/payload-types'

export async function getMedia(media: Media | number | null | undefined) {
  if (isMedia(media)) {
    return media
  }

  if (typeof media === 'number') {
    return fetchCachedMediaById(media)
  }

  return null
}
