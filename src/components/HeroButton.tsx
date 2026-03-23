import {Button} from '@/components/ui/button'
import {cn} from '@/lib/utils'
import {LucideProps} from 'lucide-react'
import Link from 'next/link'
import {ReactElement, ReactNode} from 'react'

export function HeroButton({
  children,
  href,
  icon,
  main = false
}: {
  children: ReactNode
  href: string
  icon: ReactElement<LucideProps>
  main?: boolean
}) {
  return (
    <Button
      asChild
      variant={main ? 'default' : 'outline'}
      size="lg"
      className={cn('w-full', {
        'bg-transparent hover:bg-brand-blue-default hover:border-brand-blue-default hover:text-white':
          !main,
        'bg-brand-blue-default hover:bg-brand-blue-darker text-white transition-colors':
          main
      })}>
      <Link href={href} className="flex items-center">
        <span className="mr-2">{icon}</span>
        {children}
      </Link>
    </Button>
  )
}
