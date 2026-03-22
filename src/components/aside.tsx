'use client'

import Link from 'next/link'
import {useQuery} from '@/hooks/use-query'
import {News} from '@/payload-types'

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
  const {data, isLoading, error} = useQuery({
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
    limit: 5,
    sort: '-createdAt'
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Failed to load collection: {error.message}</p>
  }

  if (!data) {
    return <p>No data</p>
  }

  return (
    <aside>
      <h2 className="text-2xl font-bold mb-4">Recent {caption}</h2>
      <ul>
        {data.docs.map(doc => (
          <li key={doc.id} className="mb-4">
            <Link href={`${hrefBase}/${doc.id}`}>
              <h3 className="text-xl font-bold">{doc.title}</h3>
            </Link>
            <p className="text-sm text-gray-500">
              {new Date(doc.createdAt).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </aside>
  )
}
