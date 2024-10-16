import {News} from '@/functions/news'
import {NewsList} from '@/components/news-list'

export type NewsSectionProps = {
  title: string
  news: News[]
  href: string
}

export function NewsSection({title, news, href}: NewsSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <hr className="border-t border-neutral-500" />
      <NewsList news={news} href={href} />
    </div>
  )
}
