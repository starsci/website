'use client'

import {useState, useEffect, Suspense} from 'react'

function ActualCopyright() {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const currentYear = new Date().getFullYear()
    if (currentYear !== year) {
      setYear(currentYear)
    }
  }, [])

  return (
    <>
      &copy; {year} Santa Rosa Science and Technology High School. All rights
      reserved.
    </>
  )
}

export function Copyright() {
  return (
    <div className="mt-4 pt-4 border-t border-primary-foreground/10 text-center text-sm">
      <Suspense fallback="Loading copyright...">
        <ActualCopyright />
      </Suspense>
    </div>
  )
}
