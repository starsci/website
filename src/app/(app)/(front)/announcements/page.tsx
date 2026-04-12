import {AnnouncementGrid} from '@/components/announcement/Grid'
import {GridSkeleton} from '@/components/GridSkeleton'
import {Suspense} from 'react'

export default function Announcements() {
  return (
    <main>
      <section className="mx-auto mb-8 max-w-3xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-blue-default">
          Campus updates
        </p>
        <h1 className="text-4xl font-bold text-gray-950">Announcements</h1>
        <p className="mt-3 text-lg leading-8 text-gray-600">
          Official advisories, reminders, and school-wide notices.
        </p>
      </section>
      <Suspense fallback={<GridSkeleton count={12} />}>
        <AnnouncementGrid />
      </Suspense>
    </main>
  )
}
