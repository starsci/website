'use client'

import { useQuery } from '@/hooks/use-query'
import { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'

export function Services() {
  const { data, isLoading, error } = useQuery({
    collection: 'school-announcements',
    where: {
      frontPage: {
        equals: true
      }
    }
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Failed to load front page announcement: {error.message}</p>
  }

  const [frontPage] = data?.docs || []

  if (!frontPage) {
    return <></>
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 lg:px-16 py-8">
      {frontPage.thumbnail && (
        <Image
          src={(frontPage.thumbnail as Media).cdn_url!}
          alt={`${frontPage.title}`}
          width={0}
          height={0}
          className="sm:w-1/3 w-full object-contain mb-auto"
          sizes="100vw"
        />
      )}
      <div className="flex flex-col">
        <h3 className="text-lg leading-6">
          <Link className="hover:underline" href={`/announcements/${frontPage.id}`}>
            {frontPage.title}
          </Link>
        </h3>
        {/* <small className="text-sm font-semibold text-neutral-400">
                {
                  // join the array of authors with a comma and a space
                  frontPage.authors.join(', ')
                }
              </small> */}
        <small className="text-sm text-neutral-400">
          {new Date(frontPage.createdAt).toLocaleString()}
        </small>
        <p
          className="text-sm line-clamp-4 md:line-clamp-[8] prose-sm"
          dangerouslySetInnerHTML={{ __html: frontPage.bodyHTML! }}></p>
      </div>
    </div>
  )
}
