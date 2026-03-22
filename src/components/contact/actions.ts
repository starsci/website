'use server'

import {getPayload} from 'payload'
import config from '@payload-config'

async function sendEmail(email: string, subject: string, message: string) {
  const payload = await getPayload({config})

  return payload.sendEmail({
    to: 'info@srsths.edu.ph',
    replyTo: email, // reply to the sender
    subject,
    text: message
  })
}

export async function submitForm(
  prevState: boolean | null,
  formData: FormData
) {
  // Get the form data
  const name = formData.get('name') as string
  const subject = formData.get('subject') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  // Send the email
  await sendEmail(email, `(${name}) ${subject}`, message)

  return true
}
