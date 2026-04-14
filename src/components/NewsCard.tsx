import {ChevronRight} from 'lucide-react'
import {ScrollArea} from '@/components/ui/scroll-area'
import Image from 'next/image'
import Link from 'next/link'
import {News} from '@/payload-types'
import {convertLexicalToHTML} from '@payloadcms/richtext-lexical/html'
import {isMedia} from '@/lib/media'
import {sanitizeRichTextHTML} from '@/lib/sanitize'

interface NewsCardProps {
  news: News[]
  href: string
}

export function NewsCard({news, href}: NewsCardProps) {
  return (
    <div className="mt-4">
      {news.length === 0 && (
        <p className="rounded-md border border-gray-200 bg-gray-50 p-4 text-center text-sm text-gray-500">
          No articles published yet.
        </p>
      )}
      <ScrollArea className="max-h-[25rem] overflow-y-auto pr-3">
        {news.map((doc: News) => {
          const {id, title, body, thumbnail, published_at} = doc
          const bodyHTML = sanitizeRichTextHTML(convertLexicalToHTML({data: body}))
          const publishedAt = new Date(published_at).toLocaleString()

          return (
            <div
              key={id}
              className="mb-4 grid gap-4 rounded-md border border-gray-200 bg-gray-50 p-3 transition hover:-translate-y-1 hover:bg-white hover:shadow-sm lg:grid-cols-[8rem_1fr]">
              {isMedia(thumbnail) && thumbnail.url && (
                <div className="relative h-36 overflow-hidden rounded-md bg-gray-100 lg:h-full">
                  <Image
                    src={thumbnail.url}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 8rem, 100vw"
                  />
                </div>
              )}
              <div className="flex flex-col">
                <h3 className="text-lg leading-6">
                  <Link
                    className="font-bold text-gray-950 hover:text-brand-blue-default"
                    href={`${href}/articles/${id}`}>
                    {title}
                  </Link>
                </h3>
                <small className="text-sm font-medium text-gray-500">
                  {publishedAt}
                </small>
                <div
                  className="prose prose-sm mt-2 line-clamp-2 max-w-none text-gray-600 md:line-clamp-3"
                  dangerouslySetInnerHTML={{__html: bodyHTML || ''}}
                />
              </div>
            </div>
          )
        })}
      </ScrollArea>
      <Link
        href={href}
        className="mt-2 flex items-center gap-x-2 text-sm font-bold text-brand-blue-default hover:underline">
        Read More
        <ChevronRight size={24} />
      </Link>
    </div>
  )
}
