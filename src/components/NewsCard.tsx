import {ChevronRight} from 'lucide-react'
import {ScrollArea} from '@/components/ui/scroll-area'
import Image from 'next/image'
import Link from 'next/link'
import {News} from '@/payload-types'
import {convertLexicalToHTML} from '@payloadcms/richtext-lexical/html'
import {isMedia} from '@/lib/media'

interface NewsCardProps {
  news: News[]
  href: string
}

export function NewsCard({news, href}: NewsCardProps) {
  return (
    <div>
      {news.length == 0 && <span>No data</span>}
      <ScrollArea className="max-h-[25rem] overflow-y-auto p-2 mb-4 ">
        {news.map(async (doc: News) => {
          const {id, title, body, thumbnail, published_at} = doc
          const bodyHTML = convertLexicalToHTML({data: body})
          const publishedAt = new Date(published_at).toLocaleString()

          return (
            <div key={id} className="flex flex-col lg:flex-row gap-4 mb-4">
              {isMedia(thumbnail) && thumbnail.url && (
                <Image
                  src={thumbnail.url}
                  alt={title}
                  width={0}
                  height={0}
                  className="lg:w-1/3 w-full object-contain mb-auto"
                  sizes="100vw"
                />
              )}
              <div className="flex flex-col">
                <h3 className="text-lg leading-6">
                  <Link
                    className="hover:underline"
                    href={`${href}/articles/${id}`}>
                    {title}
                  </Link>
                </h3>
                <small className="text-sm text-neutral-400">
                  {publishedAt}
                </small>
                <div
                  className="text-sm line-clamp-2 md:line-clamp-3"
                  dangerouslySetInnerHTML={{__html: bodyHTML || ''}}
                />
              </div>
            </div>
          )
        })}
      </ScrollArea>
      <Link
        href={href}
        className="text-md hover:underline font-semibold gap-x-2 flex items-center">
        Read More
        <ChevronRight size={24} />
      </Link>
    </div>
  )
}
