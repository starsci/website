import {HR} from '@/components/HR'
import {NewsCard} from '@/components/NewsCard'
import {News} from '@/payload-types'

interface NewsBitProps {
  title: string
  news: News[]
  href: string
}

export function NewsBit({title, news, href}: NewsBitProps) {
  return (
    <article className="rounded-md border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue-default">
          Latest
        </p>
        <h2 className="mt-2 text-2xl font-bold text-gray-950">{title}</h2>
      </div>
      <HR />
      <NewsCard news={news} href={href} />
    </article>
  )
}
