import type {News} from '@/payload-types'
import {formatDisplayDate} from '@/lib/date-format'
import {isMedia} from '@/lib/media'
import Image from 'next/image'
import Link from 'next/link'

interface ArticleCardProps {
  article: News
  href: string
}

export function ArticleCard({article, href}: ArticleCardProps) {
  const {title, published_at, thumbnail, authors} = article
  const authorText = authors
    ?.map(author => `${author.first_name} ${author.last_name}`)
    .join(', ')

  return (
    <Link href={href} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        {isMedia(thumbnail) && thumbnail.url && (
          <div className="relative h-48 overflow-hidden bg-gray-100">
            <Image
              src={thumbnail.url}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col p-4">
          <p className="text-sm font-medium text-gray-500">
            {formatDisplayDate(published_at)}
          </p>
          <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-6 text-gray-950 group-hover:text-brand-blue-default">
            {title}
          </h3>
          {authorText && (
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
              {authorText}
            </p>
          )}
        </div>
      </article>
    </Link>
  )
}
