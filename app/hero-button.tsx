import {cn} from '@/lib/utils'
import {Button} from '@/ui/button'
import {IconDefinition} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export type HeroButtonProps = {
  children: React.ReactNode
  href: string
  main?: boolean
  icon: IconDefinition
}

export function HeroButton({
  children,
  href,
  main = false,
  icon
}: HeroButtonProps) {
  return (
    <Button
      variant="outline"
      size="lg"
      className={cn('w-full transition-colors px-4 py-3', {
        'bg-transparent hover:bg-brand-blue-default hover:border-brand-blue-default hover:text-white':
          !main,
        'bg-brand-blue-default hover:bg-brand-blue-darker': main
      })}>
      <Link href={href} className="flex items-center">
        <FontAwesomeIcon icon={icon} className="mr-3 h-6 w-6" />
        {children}
      </Link>
    </Button>
  )
}
