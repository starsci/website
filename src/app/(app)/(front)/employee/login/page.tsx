import {InternalLoginForm} from '@/components/internal-login/Form'

export const metadata = {
  title: 'Internal Login | Santa Rosa Science and Technology High School',
  description: 'Teacher and employee login page.'
}

export default function InternalLoginPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-10">
      <InternalLoginForm />
    </main>
  )
}
