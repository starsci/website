'use client'

import {useState, useCallback} from 'react'
import {useFormStatus} from 'react-dom'
import {useRouter} from 'next/navigation'
import {Button} from '@/components/ui/button'
import {Card, CardContent} from '@/components/ui/card'
import {Input} from '@/components/ui/input'
import {useAuth} from '@/providers/Auth'

function SubmitButton() {
  const {pending} = useFormStatus()

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Signing in...' : 'Sign In'}
    </Button>
  )
}

export function InternalLoginForm() {
  const router = useRouter()
  const {login} = useAuth()
  const [error, setError] = useState<string | null>(null)

  const submit = useCallback(
    async (formData: FormData) => {
      try {
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        await login({email, password})
        router.push('/')
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'An unknown error occurred'
        )
      }
    },
    [router]
  )

  return (
    <Card className="max-w-md w-full">
      <CardContent className="p-6">
        <h1 className="text-2xl font-bold mb-2">Login</h1>
        <p className="text-sm text-gray-600 mb-6">
          Sign in with your teacher/employee account.
        </p>

        <form className="space-y-4" action={submit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@deped.gov.ph"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  )
}
