import {News} from '@/functions/news'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {ScrollArea} from './ui/scroll-area'
import Image from 'next/image'
import Link from 'next/link'

type NewsListProps = {
  news: News[]
  href: string
}

export function NewsList({news, href}: NewsListProps) {
  return (
    <div>
      <ScrollArea className="h-[25rem] mb-4 transition-shadow hover:shadow-xl rounded-md">
        {news.map((news, index) => (
          <div key={index} className="flex flex-col lg:flex-row gap-4 mb-4">
            {news.thumbnail_url && (
              <Image
                src={news.thumbnail_url}
                alt={news.title}
                width={0}
                height={0}
                className="object-contain w-full lg:w-1/3 h-auto mb-auto"
                sizes="100vw"
              />
            )}
            <div className="flex flex-col">
              <h3 className="text-lg leading-6">
                <Link className="hover:underline" href={`/news/${news.id}`}>
                  {news.title}
                </Link>
              </h3>
              <small className="text-sm font-semibold text-neutral-400">
                {
                  // join the array of authors with a comma and a space
                  news.authors.join(', ')
                }
              </small>
              <small className="text-sm text-neutral-400">
                {new Date(news.created_at).toLocaleString()}
              </small>
              <p className="text-sm line-clamp-2 md:line-clamp-3">
                {news.body}
              </p>
            </div>
          </div>
        ))}
      </ScrollArea>
      <Link
        href={href}
        className="text-md hover:underline font-semibold gap-x-2 flex items-center">
        Read More
        <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
      </Link>
    </div>
  )
}
