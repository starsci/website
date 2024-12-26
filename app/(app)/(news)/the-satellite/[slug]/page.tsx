import { Aside } from "@/components/aside"
import { Content } from "@/components/content"
import { metadataFunction } from "@/lib/generateMetadata"

type Params = { params: Promise<{ slug: string }> }

export default async function Announcement({ params }: Params) {
  const { slug } = await params
  return (
    <div className="flex flex-row lg:flex-row-reverse space-x-8 lg:space-x-reverse lg:justify-end">
      <div className="md:w-2/3 lg:w-1/2 w-full">
        <Content slug={slug} collection="the-satellite-news" />
      </div>
      <div className="md:w-1/3 lg:w-1/4 md:block hidden">
        <Aside slug={slug} collection="the-satellite-news" caption="News" />
      </div>
    </div>
  )
}

export const generateMetadata = metadataFunction('the-satellite-news', 'the-satellite')
