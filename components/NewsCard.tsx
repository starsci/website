import { ChevronRight } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import Image from 'next/image'
import Link from 'next/link'
import {
  Media,
  SchoolAnnouncement,
  TheSatelliteNew,
  AngPararayosNew
} from '@/payload-types'
import { CollectionSlug, DataFromCollectionSlug, PaginatedDocs } from 'payload'

export function NewsCard({
  news,
  href
}: {
  news: PaginatedDocs<DataFromCollectionSlug<CollectionSlug>>
  href: string
}) {
  const data = news as PaginatedDocs<
    SchoolAnnouncement | AngPararayosNew | TheSatelliteNew
  >

  return (
    <div>
      {data.docs?.length == 0 && <span>No data</span>}
      <ScrollArea className="max-h-[25rem] overflow-y-auto p-2 mb-4 ">
        {data.docs.map((news, index) => (
          <div key={index} className="flex flex-col lg:flex-row gap-4 mb-4">
            {news.thumbnail && (
              <Image
                src={(news.thumbnail as Media).cdn_url!}
                alt={`${news.title}`}
                width={0}
                height={0}
                className="lg:w-1/3 w-full object-contain mb-auto"
                sizes="100vw"
              />
            )}
            <div className="flex flex-col">
              <h3 className="text-lg leading-6">
                <Link className="hover:underline" href={`${href}/${news.id}`}>
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
                dangerouslySetInnerHTML={{ __html: news.bodyHTML! }}></p>
            </div>
          </div>
        ))}
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
