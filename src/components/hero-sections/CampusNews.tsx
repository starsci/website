import {NewsBit} from '@/components/NewsBit'
import {HeroSection} from '@/components/HeroSection'
import {fetchCachedNewsArticles} from '@/lib/cached'

export async function CampusNews() {
  const satellite = await fetchCachedNewsArticles({
    publication: 'the-satellite',
    limit: 5
  })

  const pararayos = await fetchCachedNewsArticles({
    publication: 'pararayos',
    limit: 5
  })

  if (satellite.length === 0 || pararayos.length === 0) {
    // if there are no news articles for either publication, we don't want to show this section at all
    return null
  }

  return (
    <HeroSection>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <NewsBit title="The Satellite" news={satellite} href="/the-satellite" />
        <NewsBit title="Pararayos" news={pararayos} href="/pararayos" />
      </div>
    </HeroSection>
  )
}
