import {ClubGrid} from '@/components/club/Grid'

export const metadata = {
  title:
    'Clubs and Organizations | Santa Rosa Science and Technology High School',
  description: 'List of clubs and organizations in the school'
}

export default async function ClubDirectory({
  searchParams
}: {
  searchParams: Promise<{page?: string; limit?: string}>
}) {
  const resolvedSearchParams = await searchParams

  return (
    <main>
      <section className="mx-auto mb-8 max-w-3xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-blue-default">
          Student life
        </p>
        <h1 className="text-4xl font-bold text-gray-950">
          Clubs and Organizations
        </h1>
        <p className="mt-3 text-lg leading-8 text-gray-600">
          Explore student groups, publications, and campus organizations.
        </p>
      </section>
      <ClubGrid searchParams={resolvedSearchParams} />
    </main>
  )
}
