import {Button} from '@/app/ui/button'
import {Card, CardContent} from '@/app/ui/card'
import {Input} from '@/app/ui/input'
import {Textarea} from '../ui/textarea'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <main className="flex flex-col container p-6">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="mr-2 h-5 w-5 text-primary"
                  />
                  <span>0908 705 1083</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mr-2 h-5 w-5 text-primary"
                  />
                  <span>info@srsths.edu.ph</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="mr-2 h-5 w-5 text-primary"
                  />
                  <span>
                    LM Subd., Brgy. Market Area, City of Santa Rosa, Laguna,
                    Philippines
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=121.11022353172304%2C14.315657860748427%2C121.11227810382844%2C14.317180823631066&amp;layer=mapnik&amp;marker=14.316419343481115%2C121.11125081777573"></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here"
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
