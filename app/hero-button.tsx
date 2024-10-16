import {Button} from '../components/ui/button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {cn} from '@/lib/utils'
import Link from 'next/link'

type HeroButtonProps = {
  children: React.ReactNode
  href: string
  icon: any
  main?: boolean
}

export function HeroButton({
  children,
  href,
  icon,
  main = false
}: HeroButtonProps) {
  return (
    <Button
      variant={main ? 'default' : 'outline'}
      size="lg"
      className={cn('w-full', {
        'bg-transparent hover:bg-brand-blue-default hover:border-brand-blue-default hover:text-white':
          !main,
        'bg-brand-blue-default hover:bg-brand-blue-darker text-white transition-colors':
          main
      })}>
      <Link href={href} className="flex items-center">
        <FontAwesomeIcon icon={icon} className="mr-3 h-6 w-6" />
        {children}
      </Link>
    </Button>
  )
}
