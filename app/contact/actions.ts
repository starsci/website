'use server'

import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

async function sendEmail(email: string, subject: string, message: string) {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD
    }
  })

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

export async function submitForm(formData: FormData) {
  // Get the form data
  const name = formData.get('name') as string
  const subject = formData.get('subject') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  // Send the email
  await sendEmail(email, `(${name}) ${subject}`, message)
}
