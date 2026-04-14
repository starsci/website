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
    <main className="space-y-8">
      <section className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-brand-blue-default">
          Student publication
        </p>
        <h1 className="text-4xl font-bold text-gray-950">The Satellite</h1>
        <p className="mt-3 text-lg leading-8 text-gray-600">
          Campus reporting, features, opinion, sports, and science stories from
          the school publication.
        </p>
      </section>
      {news.length === 0 ? (
        <p className="rounded-md border border-gray-200 bg-white p-8 text-center text-gray-500 shadow-sm">
          No articles published yet.
        </p>
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
