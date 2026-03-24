import Link from 'next/link'
import {Logo} from '@/components/Logo'
import {fetchCachedMediaByName} from '@/lib/media'

export default async function NotFound() {
  const logoSrc = await fetchCachedMediaByName('SRSTHS logo')

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <section className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
        <div className="mb-5 flex justify-center">
          <Logo src={logoSrc} alt="SRSTHS Logo" width={80} height={80} />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          Error 404
        </p>
        <h1 className="mt-3 text-4xl font-bold text-gray-900">
          Page Not Found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          The page you are looking for does not exist or may have been moved.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800">
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
