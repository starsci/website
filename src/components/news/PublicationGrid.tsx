'use client'

import {News} from '@/payload-types'
import Link from 'next/link'
import type {Publication} from '@/lib/news-queries'
import {ArticleCard} from '@/components/news/ArticleCard'

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
        <section
          key={category}
          className="rounded-md border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue-default">
                Section
              </p>
              <h2 className="mt-2 text-3xl font-bold text-gray-950">
                {categoryDisplayNames[category]}
              </h2>
            </div>
            <Link
              href={`/${publication}/${category}`}
              className="text-sm font-bold text-brand-blue-default hover:underline">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 pt-1 sm:grid-cols-2 md:grid-cols-3">
            {articles.slice(0, 3).map(article => {
              const {id} = article
              return (
                <ArticleCard
                  key={id}
                  article={article}
                  href={`/${publication}/articles/${id}`}
                />
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
