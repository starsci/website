'use client'

import Link from 'next/link'
import {useQuery} from '@/hooks/use-query'
import {News} from '@/payload-types'
import {Skeleton} from '@/components/ui/skeleton'
import {notFound} from 'next/navigation'

export function AsideSkeleton() {
  return (
    <aside>
      <Skeleton className="h-8 w-1/2 mb-4" />
      <ul>
        {Array.from({length: 3}).map((_, i) => (
          <li key={i} className="mb-4">
            <Skeleton className="h-6 w-3/4 mb-1" />
            <Skeleton className="h-4 w-1/4" />
          </li>
        ))}
      </ul>
    </aside>
  )
}

export function Aside({
  slug,
  collection,
  caption,
  publication,
  hrefBase = '/announcements'
}: {
  slug: string
  caption: string
  collection: 'school-announcements' | 'club-announcements' | 'news'
  publication?: News['publication']
  hrefBase?: string
}) {
  const {data} = useQuery({
    collection,
    where: {
      id: {
        not_equals: slug
      },
      ...(publication
        ? {
            publication: {
              equals: publication
            }
          }
        : {})
    },
    depth: 1,
    pagination: false,
    limit: 3,
    sort: '-published_at'
  })

  /*
  if (data.docs.length === 0) {
    notFound()
  }
  */

  return (
    <aside>
      <h2 className="text-2xl font-bold mb-4">Recent {caption}</h2>
      <ul>
        {data.docs.map(doc => {
          const {id, title, published_at} = doc
          return (
            <li key={id} className="mb-4">
              <Link href={`${hrefBase}/${id}`}>
                <h3 className="text-xl font-bold">{title}</h3>
              </Link>
              <p className="text-sm text-gray-500">
                {new Date(published_at).toLocaleDateString()}
              </p>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
