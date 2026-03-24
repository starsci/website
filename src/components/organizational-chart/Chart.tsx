import ExecutiveProfile from '@/components/ExecutiveProfile'
import {fetchCachedCollection} from '@/lib/cached'
import {getMedia} from '@/lib/media'
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

  let renderedRows = 0

  return (
    <div className="w-[100vw] ml-[calc(50%-50vw)]">
      {sections.map(section => {
        const entries = docs.filter(doc => section.position === doc.position)

        if (entries.length === 0) {
          return null
        }

        const rowClass = renderedRows % 2 === 0 ? 'py-4' : 'bg-neutral-200 py-4'
        renderedRows += 1

        return (
          <div key={section.position} className={rowClass}>
            <h3 className="text-center">{section.title}</h3>
            <div className={`grid ${section.columns}`}>
              {entries.map(async entry => {
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
