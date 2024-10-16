import {Button} from '@/app/ui/button'
import {Card, CardContent} from '@/app/ui/card'
import {Input} from '@/app/ui/input'
import {Textarea} from '@/app/ui/textarea'
import {submitForm} from './actions'

export function ContactForm() {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
        <form className="space-y-4" action={submitForm}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <Input name="name" placeholder="Your Name" required />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              name="email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <Input name="subject" placeholder="Subject" required />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <Textarea
              name="message"
              placeholder="Your message here"
              rows={4}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
