'use server'

import nodemailer from 'nodemailer'
import {ZeptomailTransport} from 'nodemailer-zeptomail-transport'
import Mail from 'nodemailer/lib/mailer'

const transporter = nodemailer.createTransport(
  new ZeptomailTransport({
    apiKey: process.env.ZEPTOMAIL_API_KEY
  })
)

async function sendEmail(email: string, subject: string, message: string) {
  // Send the email
  const mailOptions: Mail.Options = {
    from: 'No-reply <no-reply@srsths.edu.ph>', // sender address (from)
    to: 'info@srsths.edu.ph',
    replyTo: email, // reply to the sender
    subject,
    text: message
  }

  return transporter.sendMail(mailOptions)
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
