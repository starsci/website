import {Aside, AsideSkeleton} from '@/components/aside'
import {Content, ContentSkeleton} from '@/components/content'
import {metadataFunction} from '@/lib/generateMetadata'
import {Suspense} from 'react'

export default async function Announcement({
  params
}: {
  params: Promise<{slug: string}>
}) {
  const {slug} = await params
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
      <div className="min-w-0">
        <Suspense fallback={<ContentSkeleton />}>
          <Content slug={slug} collection="school-announcements" />
        </Suspense>
      </div>
      <div className="hidden md:block">
        <Suspense fallback={<AsideSkeleton />}>
          <Aside
            slug={slug}
            collection="school-announcements"
            caption="Announcements"
          />
        </Suspense>
      </div>
    </div>
  )
}

export const generateMetadata = metadataFunction(
  'school-announcements',
  'announcements'
)
