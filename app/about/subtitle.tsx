import {ReactNode} from 'react'

export function Subtitle({children}: {children: ReactNode}) {
  return <h3 className="text-xl font-semibold mb-2">{children}</h3>
}
