import {AnnouncementGrid} from '@/components/announcement/Grid'
import {GridSkeleton} from '@/components/GridSkeleton'
import {Suspense} from 'react'

export default function Announcements() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center mb-6">Announcements</h1>
      <Suspense fallback={<GridSkeleton count={12} />}>
        <AnnouncementGrid />
      </Suspense>
    </main>
  )
}
