import {ChevronRight} from 'lucide-react'
import {ScrollArea} from '@/components/ui/scroll-area'
import {getMediaUrl} from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import {News} from '@/payload-types'
import {PaginatedDocs} from 'payload'
import {convertLexicalToHTML} from '@payloadcms/richtext-lexical/html'

export function NewsCard({
  news,
  href
}: {
  news: PaginatedDocs<News>
  href: string
}) {
  return (
    <div>
      {news.docs?.length == 0 && <span>No data</span>}
      <ScrollArea className="max-h-[25rem] overflow-y-auto p-2 mb-4 ">
        {news.docs.map((news, index) => {
          const thumbnailUrl = getMediaUrl(news.thumbnail)
          const bodyHTML = convertLexicalToHTML({data: news.body})

          return (
            <div key={index} className="flex flex-col lg:flex-row gap-4 mb-4">
              {thumbnailUrl && (
                <Image
                  src={thumbnailUrl}
                  alt={`${news.title}`}
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
                    href={`${href}/articles/${news.id}`}>
                    {news.title}
                  </Link>
                </h3>
                {/* <small className="text-sm font-semibold text-neutral-400">
                {
                  // join the array of authors with a comma and a space
                  news.authors.join(', ')
                }
              </small> */}
                <small className="text-sm text-neutral-400">
                  {new Date(news.createdAt).toLocaleString()}
                </small>
                <p
                  className="text-sm line-clamp-2 md:line-clamp-3"
                  dangerouslySetInnerHTML={{__html: bodyHTML || ''}}></p>
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
