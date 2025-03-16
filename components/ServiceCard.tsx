import {Card} from '@/components/ui/card'
import {ReactNode} from 'react'

export function ServiceCard({
  children,
  icon,
  title
}: {
  children: ReactNode
  icon: any
  title: string
}) {
  return (
    <article>
      <Card className="px-4 py-8 flex flex-col gap-3 w-full transition-transform hover:scale-105">
        <span className="h-12 w-12 mx-auto">{icon}</span>
        <h3 className="text-xl font-semibold text-center">{title}</h3>
        <div className="text-center">{children}</div>
      </Card>
    </article>
  )
}
