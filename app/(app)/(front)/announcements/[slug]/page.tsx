import { Aside } from "@/components/aside"
import { Content } from "@/components/content"

type Params = { params: Promise<{ slug: string }> }

export default async function Announcement({ params }: Params) {
  const { slug } = await params
  return (
    <div className="flex flex-row lg:flex-row-reverse space-x-8 lg:space-x-reverse lg:justify-end">
      <div className="md:w-2/3 lg:w-1/2 w-full">
        <Content slug={slug} collection="school-announcements" />
      </div>
      <div className="md:w-1/3 lg:w-1/4 md:block hidden">
        <Aside slug={slug} collection="school-announcements" caption="Announcements" />
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
      siteName: 'Santa Rosa Science and Technology High School'
    }
  }
}
