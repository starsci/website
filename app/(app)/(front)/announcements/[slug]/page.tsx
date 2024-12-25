import { Aside } from "./aside"
import { Content } from "./content"

type Params = { params: Promise<{ slug: string }> }

export default async function Announcement({ params }: Params) {
  const { slug } = await params
  return (
    <div className="flex flex-row lg:flex-row-reverse space-x-8 lg:justify-end">
      <div className="md:w-2/3 lg:w-1/2">
        <Content slug={slug} />
      </div>
      <div className="md:w-1/3 lg:w-1/4">
        <Aside slug={slug} />
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params
  const data = await fetch(`${process.env.API_BASE || ''}/api/school-announcements/${slug}`)
  const { title, bodyHTML } = await data.json()
  const description = bodyHTML.replace(/<\s*br[^>]?>/gm, '\n')
    .replace(/(<([^>]+)>)/gm, "").slice(0, 160)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${process.env.API_BASE || ''}/announcements/${slug}`,
      site_name: 'Santa Rosa Science and Technology High School',
    }
  }
}
