import {queryNewsArticles} from '@/lib/news-queries'
import {isValidCategory} from '@/lib/news-categories'
import {notFound} from 'next/navigation'
import {ArticleCard} from '@/components/news/ArticleCard'

const CATEGORY_DISPLAY_NAMES = {
  news: 'Balita',
  opinion: 'Opinyon',
  feature: 'Lathalain',
  sports: 'Isports',
  'sci-and-tech': 'AgTek'
} as const

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export async function generateMetadata({params}: CategoryPageProps) {
  const resolvedParams = await params
  const categoryName =
    CATEGORY_DISPLAY_NAMES[
      resolvedParams.category as keyof typeof CATEGORY_DISPLAY_NAMES
    ]
  if (!categoryName) return {}

  return {
    title: `${categoryName} | Pararayos`,
    description: `${categoryName} articles from Pararayos`
  }
}

export default async function PararayosCategoryPage({
  params
}: CategoryPageProps) {
  const resolvedParams = await params
  if (!isValidCategory(resolvedParams.category)) {
    notFound()
  }

  const categoryName =
    CATEGORY_DISPLAY_NAMES[
      resolvedParams.category as keyof typeof CATEGORY_DISPLAY_NAMES
    ]!
  const articles = await queryNewsArticles({
    publication: 'pararayos',
    category: resolvedParams.category
  })

  if (articles.length === 0) {
    return (
      <main className="space-y-8">
        <section className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-brand-blue-default">
            Pararayos
          </p>
          <h1 className="text-4xl font-bold text-gray-950">{categoryName}</h1>
        </section>
        <p className="rounded-md border border-gray-200 bg-white p-8 text-center text-gray-500 shadow-sm">
          No articles in this category.
        </p>
      </main>
    )
  }

  return (
    <main className="space-y-8">
      <section className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-brand-blue-default">
          Pararayos
        </p>
        <h1 className="text-4xl font-bold text-gray-950">{categoryName}</h1>
        <p className="mt-3 text-lg leading-8 text-gray-600">
          Stories filed under {categoryName}.
        </p>
      </section>
      <div className="grid grid-cols-1 gap-6 pt-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {articles.map(article => {
          const {id} = article
          return (
            <ArticleCard
              key={id}
              article={article}
              href={`/pararayos/articles/${id}`}
            />
          )
        })}
      </div>
    </main>
  )
}
