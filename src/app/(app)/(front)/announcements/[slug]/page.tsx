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
    <div className="flex flex-row lg:flex-row-reverse space-x-8 lg:space-x-reverse lg:justify-end">
      <div className="md:w-2/3 lg:w-1/2 w-full">
        <Suspense fallback={<ContentSkeleton />}>
          <Content slug={slug} collection="school-announcements" />
        </Suspense>
      </div>
      <div className="md:w-1/3 lg:w-1/4 md:block hidden">
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
