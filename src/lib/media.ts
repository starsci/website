import {Media} from '@/payload-types'

export function isMedia(
  media: Media | number | null | undefined
): media is Media {
  if (
    media &&
    typeof media === 'object' &&
    'id' in media &&
    media.id &&
    'url' in media &&
    media.url
  ) {
    return true
  }

  return false
}
