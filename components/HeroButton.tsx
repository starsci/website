import {Link} from 'lucide-react'
import {Button} from './ui/button'
import {HeroButtonProps} from './types/HeroButtonProps'

export function HeroButton({children, href}: HeroButtonProps) {
  return (
    <Button
      variant="outline"
      size="lg"
      className="w-full bg-transparent hover:bg-brand-blue-default hover:border-brand-blue-default hover:text-white">
      <Link href={href} className="flex items-center">
        {children}
      </Link>
    </Button>
  )
}
