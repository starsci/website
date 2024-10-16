import {Card} from '@/app/ui/card'
import {IconDefinition} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export type ServiceCardProps = {
  children: React.ReactNode
  icon: IconDefinition
  title: string
}

export function ServiceCard({children, icon, title}: ServiceCardProps) {
  return (
    <Card className="px-4 py-8 bg-transparent border-neutral-600 text-white flex flex-col gap-2 w-full">
      <FontAwesomeIcon className="h-12 w-12 mx-auto" icon={icon} />
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <div className="text-center">{children}</div>
    </Card>
  )
}
