import {ClubGrid} from './club-grid'

export const metadata = {
  title:
    'Clubs and Organizations | Santa Rosa Science and Technology High School',
  description: 'List of clubs and organizations in the school'
}

export default function ClubDirectory() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center mb-6">
        Clubs and Organizations
      </h1>
      <ClubGrid />
    </main>
  )
}
