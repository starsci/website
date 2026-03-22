import type {News} from '@/payload-types'

// Extract category types from the News schema
type NewsCategory = News['category']

export type {NewsCategory}

export function isValidCategory(category: string): category is NewsCategory {
  return ['news', 'opinion', 'feature', 'sports', 'sci-and-tech'].includes(
    category
  )
}
