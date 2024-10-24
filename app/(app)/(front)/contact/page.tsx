import {ContactInfo} from '@/components/contact/info'
import {Map} from '@/components/contact/map'
import {ContactForm} from '@/components/contact/contact-form'

export const metadata = {
  title: 'Contact Us | Santa Rosa Science and Technology High School',
  description:
    'Send us a message or visit us at LM Subd., Brgy. Market Area, City of Santa Rosa, Laguna, Philippines'
}

export default function Contact() {
  return (
    <main className="flex flex-col">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ContactInfo />
          <Map />
        </div>
        <ContactForm />
      </div>
    </main>
  )
}
