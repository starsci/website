'use client'

import {useRouter} from 'next/navigation'
import {useCallback, useState} from 'react'
import {COOKIE_NAME} from '@/lib/cookies'
import {useCookies} from 'react-cookie'

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

export function UserAudienceModal() {
  const [cookies, setCookie] = useCookies([COOKIE_NAME])
  const [isOpen, setIsOpen] = useState(() => !cookies[COOKIE_NAME])
  const router = useRouter()

  const handleSelect = useCallback(
    (audience: Audience) => {
      setCookie(COOKIE_NAME, audience, {
        path: '/',
        maxAge: COOKIE_MAX_AGE_SECONDS
      })
      setIsOpen(false)

      const redirectTo = AUDIENCE_OPTIONS[audience].redirectTo
      if (redirectTo) {
        router.push(redirectTo)
      }
    },
    [router, setCookie]
  )

  if (!isOpen) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="audience-title">
      <div className="w-full max-w-xl rounded-md border border-gray-200 bg-white p-6 shadow-xl">
        <h2 id="audience-title" className="text-2xl font-bold text-gray-900">
          Welcome
        </h2>
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
        <button
          type="button"
          className="mt-4 text-sm font-medium text-gray-600 underline-offset-4 hover:underline"
          onClick={() => handleSelect('visitor')}>
          Continue as visitor
        </button>
      </div>
    </div>
  )
}
