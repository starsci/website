import { Nunito, Oswald } from 'next/font/google'

const nunito = Nunito({
    subsets: ['latin-ext'],
    variable: '--font-nunito',
})

const oswald = Oswald({
  subsets: ['latin-ext'],
  variable: '--font-oswald',
})

export default function RootLayout({ children }) {
  return (
      <div className={`${nunito.variable} ${oswald.variable} font-nunito`}>{children}</div>
  )
}
