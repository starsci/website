'use client'

const year = new Date().getFullYear()

export function Copyright() {
  return (
    <div className="mt-4 pt-4 border-t border-primary-foreground/10 text-center text-sm">
      &copy; {year} Santa Rosa Science and Technology High School. All rights
      reserved.
    </div>
  )
}
