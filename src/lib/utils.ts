import {type ClassValue, clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getMediaUrl(value: unknown): string | null {
  if (!value || typeof value !== 'object' || !('url' in value)) {
    return null
  }

  return typeof value.url === 'string' ? value.url : null
}
