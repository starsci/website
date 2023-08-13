import { Nunito } from 'next/font/google'

const nunito = Nunito({
    subsets: ['latin-ext'],
})

export default function RootLayout({ children }) {
  return (
      <div className={`${nunito.className}`}>{children}</div>
  )
}
