import {Aside} from '@/components/aside'
import {Content} from '@/components/content'

export default async function SatelliteArticlePage({
  params
}: {
  params: Promise<{id: string}>
}) {
  const {id} = await params

  return (
    <div className="flex flex-row lg:flex-row-reverse space-x-8 lg:space-x-reverse lg:justify-end">
      <div className="md:w-2/3 lg:w-1/2 w-full">
        <Content slug={id} collection="news" publication="the-satellite" />
      </div>
      <div className="md:w-1/3 lg:w-1/4 md:block hidden">
        <Aside
          slug={id}
          collection="news"
          caption="The Satellite Articles"
          publication="the-satellite"
          hrefBase="/the-satellite/articles"
        />
      </div>
    </div>
  )
}
