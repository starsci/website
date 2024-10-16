export function Section({children}: {children: React.ReactNode}) {
  return (
    <section className="px-4 lg:px-8 py-8 lg:py-14 w-full flex flex-col gap-8">
      {children}
    </section>
  )
}
