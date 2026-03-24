import Image from 'next/image'
import Link from 'next/link'
import {convertLexicalToHTML} from '@payloadcms/richtext-lexical/html'
import {fetchCachedCollection} from '@/lib/cached'
import {getMedia} from '@/lib/media'

export async function Services() {
  // get the announcement with frontPage true
  const {docs} = await fetchCachedCollection({
    collection: 'school-announcements',
    where: {
      frontPage: {
        equals: true
      }
    },
    limit: 1, // we only need one announcement for the front page
    pagination: false,
    depth: 1 // we need to fetch the thumbnail and body data for the front page announcement
  })

  // if no docs, return null
  if (docs.length === 0) {
    return null
  }

  const [frontPage] = docs
  console.dir(frontPage, {depth: null})
  const thumbnail = await getMedia(frontPage.thumbnail)
  const bodyHTML = convertLexicalToHTML({data: frontPage.body})

  return (
    <div className="flex flex-col sm:flex-row gap-4 lg:px-[10rem] py-8">
      {thumbnail && thumbnail.url && (
        <Image
          src={thumbnail.url}
          alt={frontPage.title}
          width={0}
          height={0}
          className="sm:w-1/3 w-full object-contain mb-auto"
          sizes="100vw"
        />
      )}
      <div className="flex flex-col">
        <h3 className="text-lg leading-6">
          <Link
            className="hover:underline"
            href={`/announcements/${frontPage.id}`}>
            {frontPage.title}
          </Link>
        </h3>
        <small className="text-sm text-neutral-400">
          {new Date(frontPage.createdAt).toLocaleString()}
        </small>
        <div
          className="text-sm line-clamp-4 md:line-clamp-[8] prose-sm mb-4"
          dangerouslySetInnerHTML={{__html: bodyHTML || ''}}
        />
      </div>
    </div>
  )
}
