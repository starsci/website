import {ContactInfo} from './info'
import {Map} from './map'
import {ContactForm} from './contact-form'

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
