import {HR} from '@/components/hr'
import {NewsCard} from '@/components/news-card'
import {CollectionSlug, DataFromCollectionSlug, PaginatedDocs} from 'payload'

export function NewsBit({
  title,
  news,
  href
}: {
  title: string
  news: PaginatedDocs<DataFromCollectionSlug<CollectionSlug>>
  href: string
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <HR />
      <NewsCard news={news} href={href} />
    </div>
  )
}
