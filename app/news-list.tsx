import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {News} from '@/functions/news'
import {ScrollArea} from '../components/ui/scroll-area'
import Image from 'next/image'
import Link from 'next/link'

type NewsListProps = {
  news: News[]
  href: string
}

export function NewsList({news, href}: NewsListProps) {
  return (
    <div>
      <ScrollArea className="h-80 mb-4">
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
              <h4 className="text-sm text-neutral-400">
                {new Date(news.created_at).toLocaleDateString()}
              </h4>
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
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  )
}
