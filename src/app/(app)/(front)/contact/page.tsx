import {ContactInfo} from '@/components/contact/Info'
import {ContactMap} from '@/components/contact/Map'
import {ContactForm} from '@/components/contact/Form'

export const metadata = {
  title: 'Contact Us | Santa Rosa Science and Technology High School',
  description:
    'Send us a message or visit us at LM Subd., Brgy. Market Area, City of Santa Rosa, Laguna, Philippines'
}

export default function Contact() {
  return (
    <main className="flex flex-col gap-8">
      <section className="max-w-3xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-blue-default">
          Contact
        </p>
        <h1 className="text-4xl font-bold text-gray-950">Contact Us</h1>
        <p className="mt-3 text-lg leading-8 text-gray-600">
          Send a message, call the office, or visit the campus in Santa Rosa,
          Laguna.
        </p>
      </section>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <section>
            <ContactInfo />
          </section>
          <section>
            <ContactMap />
          </section>
        </div>
        <section>
          <ContactForm />
        </section>
      </div>
    </main>
  )
}
