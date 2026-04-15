import {NewsCard} from '@/components/NewsCard'
import {News} from '@/payload-types'

interface NewsBitProps {
  title: string
  news: News[]
  href: string
}

export function NewsBit({title, news, href}: NewsBitProps) {
  return (
    <section>
      <div className="mb-5">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue-default">
          Latest
        </p>
        <h2 className="mt-2 text-2xl font-bold text-gray-950">{title}</h2>
      </div>
      <NewsCard news={news} href={href} />
    </section>
  )
}
