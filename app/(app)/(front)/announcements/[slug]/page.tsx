import { Content } from "./content"
import { headers } from 'next/headers'

export default function Announcement() {
  return <Content />
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = await fetch(`${process.env.API_BASE || ''}/api/school-announcements/${slug}`)
  const { title, bodyHTML } = await data.json()

  return {
    title,
    description: bodyHTML.replace(/<\s*br[^>]?>/gm, '\n')
      .replace(/(<([^>]+)>)/gm, "").slice(0, 160)
  }
}
