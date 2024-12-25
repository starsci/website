'use client'

import Image from 'next/image'
import { useQuery } from '@/hooks/use-query'
import { useParams } from 'next/navigation'
import { Media } from '@/payload-types'

export function Content() {
    const { slug } = useParams<{ slug: string }>()
    const { data, isLoading, error } = useQuery({
        collection: 'school-announcements',
        where: {
            id: {
                equals: slug
            }
        },
        depth: 1,
        pagination: false
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Failed to load announcement: {error.message}</p>
    }

    if (!data) {
        return <p>No data</p>
    }

    const { title, createdAt, bodyHTML, thumbnail } = data.docs[0]

    return (
        <article>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-sm text-gray-500 mb-2">
                {new Date(createdAt).toLocaleDateString()}
            </p>
            {thumbnail && (
                <Image
                    src={(thumbnail as Media).cdn_url!}
                    alt={title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="object-contain w-full h-auto"
                />
            )}
            <div
                className="prose prose-neutral"
                dangerouslySetInnerHTML={{ __html: bodyHTML! }}
            />
        </article>
    )
}