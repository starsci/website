'use client'

import {useRouter} from 'next/navigation'
import {useCallback, useEffect, useState} from 'react'

const COOKIE_NAME = 'srsths_user_audience'
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 30 // 30 days

type Audience = 'student' | 'parent' | 'teacher-employee' | 'visitor'

const AUDIENCE_OPTIONS: Record<
  Audience,
  {
    label: string
    redirectTo?: string
  }
> = {
  student: {label: 'Student'},
  parent: {label: 'Parent'},
  'teacher-employee': {
    label: 'Teacher/Employee',
    redirectTo: '/employee/login'
  },
  visitor: {label: 'Visitor'}
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null

  const cookie = document.cookie
    .split('; ')
    .find(entry => entry.startsWith(`${name}=`))

  if (!cookie) return null
  return decodeURIComponent(cookie.split('=')[1] ?? '')
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}; samesite=lax`
}

export function UserAudienceModal() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const savedAudience = getCookie(COOKIE_NAME)
    if (!savedAudience) {
      setIsOpen(true)
    }
  }, [])

  const handleSelect = useCallback(
    (audience: Audience) => {
      setCookie(COOKIE_NAME, audience)
      setIsOpen(false)

      const redirectTo = AUDIENCE_OPTIONS[audience].redirectTo
      if (redirectTo) {
        router.push(redirectTo)
      }
    },
    [router]
  )

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-900">Welcome</h2>
        <p className="mt-2 text-sm text-gray-600">
          Please tell us which best describes you.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {(Object.keys(AUDIENCE_OPTIONS) as Audience[]).map(audience => (
            <button
              key={audience}
              type="button"
              onClick={() => handleSelect(audience)}
              className="rounded-md border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800 transition-colors hover:bg-gray-50">
              {AUDIENCE_OPTIONS[audience].label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
