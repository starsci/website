import ExecutiveProfile from '@/components/ExecutiveProfile'
import {surfaceCardClass} from '@/components/card-styles'
import {fetchCachedCollection} from '@/lib/cached'
import {getMedia} from '@/lib/media-server'
import {OrganizationalChart as OrganizationalChartDoc} from '@/payload-types'

type ChartPosition = OrganizationalChartDoc['position']

type SectionConfig = {
  position: ChartPosition
  title: string | null
  columns: string
}

const sections: SectionConfig[] = [
  {
    position: 'principal',
    title: 'Principal',
    columns: 'grid-cols-1'
  },
  {
    position: 'administrative-officer',
    title: 'Administrative Officer',
    columns: 'grid-cols-1'
  },
  {position: 'registrar', title: 'Registrar', columns: 'grid-cols-1'},
  {
    position: 'guidance-designate',
    title: 'Guidance Counselor',
    columns: 'grid-cols-1'
  },
  {
    position: 'head-teacher',
    title: 'Head Teachers',
    columns: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
  },
  {
    position: 'master-teacher',
    title: 'Master Teachers',
    columns: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
  },
  {
    position: 'key-teacher',
    title: 'Key Teachers',
    columns: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
  }
]

export async function OrganizationalChart() {
  const {docs} = await fetchCachedCollection({
    collection: 'organizational-chart',
    sort: ['position', 'sortOrder', 'name'],
    pagination: false,
    depth: 1
  })
  const visibleSections = sections
    .map(section => ({
      ...section,
      entries: docs.filter(
        (doc: OrganizationalChartDoc) => section.position === doc.position
      )
    }))
    .filter(section => section.entries.length > 0)

  return (
    <div className="space-y-8">
      {visibleSections.map(section => {
        return (
          <div key={section.position} className={`${surfaceCardClass} p-5`}>
            <h3 className="mb-5 text-center text-2xl font-bold text-gray-950">
              {section.title}
            </h3>
            <div className={`grid gap-5 ${section.columns}`}>
              {section.entries.map(async (entry: OrganizationalChartDoc) => {
                const media = await getMedia(entry.photo)

                return (
                  <ExecutiveProfile
                    key={entry.id}
                    name={entry.name}
                    role={entry.displayRole}
                    imageUrl={media?.url || ''}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
