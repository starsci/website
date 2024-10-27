import {Card} from '@/components/ui/card'
import {IconDefinition} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export type ServiceCardProps = {
  children: React.ReactNode
  icon: IconDefinition
  title: string
}

export function ServiceCard({children, icon, title}: ServiceCardProps) {
  return (
    <Card className="px-4 py-8 flex flex-col gap-3 w-full transition-transform hover:scale-105">
      <FontAwesomeIcon className="h-12 w-12 mx-auto" icon={icon} />
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <div className="text-center">{children}</div>
    </Card>
  )
}
