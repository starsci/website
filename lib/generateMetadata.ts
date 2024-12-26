export function metadataFunction(
  collection: string,
  path: string,
  slugName: string = 'slug'
) {
  return async function ({params}: {params: Promise<{[key: string]: string}>}) {
    const slug = (await params)[slugName]
    const data = await fetch(
      `${process.env.API_BASE}/api/${collection}/${slug}`
    )
    const {title, bodyHTML} = await data.json()
    const description = bodyHTML
      .replace(/<\s*br[^>]?>/gm, '\n')
      .replace(/(<([^>]+)>)/gm, '')
      .slice(0, 160)

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: 'article',
        url: `${process.env.API_BASE}/${path}/${slug}`,
        siteName: 'Santa Rosa Science and Technology High School'
      }
    }
  }
}
