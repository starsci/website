import {PublicationGrid} from '@/components/news/PublicationGrid'
import {queryNewsArticles} from '@/lib/news-queries'

const CATEGORY_DISPLAY_NAMES = {
  news: 'News',
  opinion: 'Opinion',
  feature: 'Feature',
  sports: 'Sports',
  'sci-and-tech': 'Science and Technology'
} as const

export const metadata = {
  title: 'The Satellite | Santa Rosa Science and Technology High School',
  description: 'News, articles, and stories from The Satellite'
}

export default async function TheSatellitePage() {
  const news = await queryNewsArticles({publication: 'the-satellite', limit: 3})

  return (
    <main>
      <h1 className="text-4xl font-bold mb-8">The Satellite</h1>
      {news.length === 0 ? (
        <p className="text-center text-gray-500">No articles published yet.</p>
      ) : (
        <PublicationGrid
          news={news}
          publication="the-satellite"
          categoryDisplayNames={CATEGORY_DISPLAY_NAMES}
        />
      )}
    </main>
  )
}
