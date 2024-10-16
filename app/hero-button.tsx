import {Button} from '@/ui/button'
import clsx from 'clsx'
import Link from 'next/link'

export type HeroButtonProps = {
  children: React.ReactNode
  href: string
  main?: boolean
}

export function HeroButton({children, href, main = false}: HeroButtonProps) {
  return (
    <Button
      variant="outline"
      size="lg"
      className={clsx('w-full transition-colors', {
        'bg-transparent hover:bg-brand-blue-default hover:border-brand-blue-default hover:text-white':
          !main,
        'bg-brand-blue-default hover:bg-brand-blue-darker': main
      })}>
      <Link href={href} className="flex items-center">
        {children}
      </Link>
    </Button>
  )
}
