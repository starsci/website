import {CollectionSlug, Where} from 'payload'
import qs from 'qs'

export type Options<TSlug extends CollectionSlug> = {
  collection: TSlug
  where?: Where
  sort?: string | string[]
  limit?: number
  depth?: number
  page?: number
  pagination?: boolean
}

export async function queryCollection<TSlug extends CollectionSlug>(
  options: Options<TSlug>,
  request?: Request // for server-side rendering, to pass cookies and headers along with the request
) {
  const {collection, ...rest} = options
  const base = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'
  const query = qs.stringify(rest, {addQueryPrefix: false})

  const url = `${base}/api/${collection}?${query}`

  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(request ? {cookie: request.headers.get('cookie') || ''} : {}) // forward cookies from the incoming request if available
    },
    credentials: 'include', // include cookies for authentication
    cache: 'no-store' // disable caching to always get fresh data
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch data from Payload: ${res.statusText}`)
  }

  const data = await res.json()
  return data
}
