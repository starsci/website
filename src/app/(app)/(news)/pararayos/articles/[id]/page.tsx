import {Aside} from '@/components/aside'
import {Content} from '@/components/content'

export default async function PararayosArticlePage({
  params
}: {
  params: Promise<{id: string}>
}) {
  const {id} = await params

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
      <div className="min-w-0">
        <Content slug={id} collection="news" publication="pararayos" />
      </div>
      <div className="hidden md:block">
        <Aside
          slug={id}
          collection="news"
          caption="Pararayos Articles"
          publication="pararayos"
          hrefBase="/pararayos/articles"
        />
      </div>
    </div>
  )
}
