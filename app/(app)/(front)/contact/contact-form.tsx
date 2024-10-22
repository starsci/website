'use client'

import {Button} from '@/components/ui/button.tsx'
import {Card, CardContent} from '@/components/ui/card.tsx'
import {Input} from '@/components/ui/input.tsx'
import {Textarea} from '@/components/ui/textarea.tsx'
import {submitForm} from './actions.js'
import {useToast} from '@/hooks/use-toast.ts'
import {useFormState, useFormStatus} from 'react-dom'
import {useEffect} from 'react'

function SubmitButton() {
  // Get the form status from the parent form
  const {pending} = useFormStatus()
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      Send Message
    </Button>
  )
}

export function ContactForm() {
  const {toast} = useToast() // get the toast function
  const [state, action] = useFormState(submitForm, null) // get the form state
  // show toast if state becomes true
  useEffect(() => {
    if (state === true) {
      toast({
        title: 'Message Sent',
        description:
          'We have received your message. Please wait for our response.'
      })
    }
  }, [state, toast])

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
        <form className="space-y-4" action={action}>
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
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  )
}
