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
    <article className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <HR />
      <NewsCard news={news} href={href} />
    </article>
  )
}
