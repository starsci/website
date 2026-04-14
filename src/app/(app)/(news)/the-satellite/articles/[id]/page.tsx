import {Aside} from '@/components/aside'
import {Content} from '@/components/content'

export default async function SatelliteArticlePage({
  params
}: {
  params: Promise<{id: string}>
}) {
  const {id} = await params

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
      <div className="min-w-0">
        <Content slug={id} collection="news" publication="the-satellite" />
      </div>
      <div className="hidden md:block">
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
