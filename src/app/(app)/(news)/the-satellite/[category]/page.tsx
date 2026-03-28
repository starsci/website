import {queryNewsArticles} from '@/lib/news-queries'
import {isValidCategory} from '@/lib/news-categories'
import {notFound} from 'next/navigation'
import Image from 'next/image'
import {isMedia} from '@/lib/media'
import Link from 'next/link'

const CATEGORY_DISPLAY_NAMES = {
  news: 'News',
  opinion: 'Opinion',
  feature: 'Feature',
  sports: 'Sports',
  'sci-and-tech': 'Science and Technology'
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
    title: `${categoryName} | The Satellite`,
    description: `${categoryName} articles from The Satellite`
  }
}

export default async function SatelliteCategoryPage({
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
    publication: 'the-satellite',
    category: resolvedParams.category
  })

  if (articles.length === 0) {
    return (
      <main>
        <h1 className="text-4xl font-bold mb-8">{categoryName}</h1>
        <p className="text-center text-gray-500">
          No articles in this category.
        </p>
      </main>
    )
  }

  return (
    <main>
      <h1 className="text-4xl font-bold mb-8">{categoryName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {articles.map(article => {
          const {id, title, published_at, thumbnail, authors} = article
          return (
            <Link
              key={id}
              href={`/the-satellite/articles/${id}`}
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
                  <h2 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-600">
                    {title}
                  </h2>
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
    </main>
  )
}
