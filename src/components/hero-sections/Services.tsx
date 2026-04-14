import Image from 'next/image'
import Link from 'next/link'
import {convertLexicalToHTML} from '@payloadcms/richtext-lexical/html'
import {fetchCachedCollection} from '@/lib/cached'
import {formatDisplayDate} from '@/lib/date-format'
import {isMedia} from '@/lib/media'
import {sanitizeRichTextHTML} from '@/lib/sanitize'

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

  const {id, title, published_at, body, thumbnail} = docs[0]
  const bodyHTML = sanitizeRichTextHTML(convertLexicalToHTML({data: body}))

  return (
    <section className="grid gap-6 py-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:px-10">
      {isMedia(thumbnail) && thumbnail.url && (
        <Image
          src={thumbnail.url}
          alt={title}
          width={0}
          height={0}
          className="h-auto w-full rounded-md object-cover shadow-sm"
          sizes="100vw"
        />
      )}
      <div className="flex flex-col justify-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-blue-default">
          Latest announcement
        </p>
        <h3 className="text-2xl font-bold leading-tight text-gray-950">
          <Link className="hover:underline" href={`/announcements/${id}`}>
            {title}
          </Link>
        </h3>
        <small className="text-sm text-neutral-400">
          {formatDisplayDate(published_at)}
        </small>
        <div
          className="prose prose-sm mt-4 line-clamp-5 max-w-none text-gray-700 md:line-clamp-[8]"
          dangerouslySetInnerHTML={{__html: bodyHTML || ''}}
        />
      </div>
    </section>
  )
}
