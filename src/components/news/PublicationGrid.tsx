'use client'

import {News} from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'
import {isMedia} from '@/lib/media'
import type {Publication} from '@/lib/news-queries'

interface PublicationGridProps {
  news: News[]
  publication: Publication
  categoryDisplayNames: Record<string, string>
}

export function PublicationGrid({
  news,
  publication,
  categoryDisplayNames
}: PublicationGridProps) {
  // Group news by category
  const groupedByCategory = news.reduce(
    (acc, article) => {
      const category = article.category
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(article)
      return acc
    },
    {} as Record<string, News[]>
  )

  // Sort articles by published_at in descending order
  Object.keys(groupedByCategory).forEach(category => {
    groupedByCategory[category].sort(
      (a, b) =>
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    )
  })

  // Sort categories to maintain consistent order
  const categoryOrder = [
    'news',
    'opinion',
    'feature',
    'sports',
    'sci-and-tech'
  ] as const
  const sortedEntries = categoryOrder
    .filter(cat => cat in groupedByCategory)
    .map(cat => [cat, groupedByCategory[cat]] as const)

  return (
    <div className="space-y-12">
      {sortedEntries.map(([category, articles]) => (
        <section key={category}>
          <h2 className="text-3xl font-bold mb-6">
            {categoryDisplayNames[category]}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {articles.slice(0, 3).map(article => {
              const {id, title, published_at, thumbnail, authors} = article
              return (
                <Link
                  key={id}
                  href={`/${publication}/articles/${id}`}
                  className="group">
                  <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    {isMedia(thumbnail) && thumbnail.url && (
                      <div className="relative h-48 overflow-hidden bg-gray-100">
                        <Image
                          src={thumbnail.url}
                          alt={title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    )}
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-600">
                        {title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {new Date(published_at).toLocaleDateString()}
                      </p>
                      <p className="text-xs text-gray-700 line-clamp-2 flex-grow">
                        {authors
                          ?.map(a => `${a.first_name} ${a.last_name}`)
                          .join(', ')}
                      </p>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
