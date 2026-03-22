import {PublicationGrid} from '@/components/news/PublicationGrid'
import {queryNewsArticles} from '@/lib/news-queries'

const CATEGORY_DISPLAY_NAMES = {
  news: 'Balita',
  opinion: 'Opinyon',
  feature: 'Lathalain',
  sports: 'Isports',
  'sci-and-tech': 'AgTek'
} as const

export const metadata = {
  title: 'Pararayos | Santa Rosa Science and Technology High School',
  description: 'News, articles, and stories from Pararayos'
}

export default async function PararayosPage() {
  const news = await queryNewsArticles({publication: 'pararayos', limit: 3})

  return (
    <main>
      <h1 className="text-4xl font-bold mb-8">Pararayos</h1>
      {news.length === 0 ? (
        <p className="text-center text-gray-500">No articles published yet.</p>
      ) : (
        <PublicationGrid
          news={news}
          publication="pararayos"
          categoryDisplayNames={CATEGORY_DISPLAY_NAMES}
        />
      )}
    </main>
  )
}
