'use server'

import {getPayload} from 'payload'
import config from '@payload-config'
import {headers} from 'next/headers'

const RATE_LIMIT_WINDOW_MS = 60 * 1000
const RATE_LIMIT_MAX_SUBMISSIONS = 3
const submissions = new Map<string, {count: number; resetAt: number}>()

function cleanHeaderValue(value: string) {
  return value.replace(/[\r\n]/g, ' ').trim()
}

function getString(formData: FormData, key: string, maxLength: number) {
  const value = formData.get(key)

  if (typeof value !== 'string') {
    return ''
  }

  return cleanHeaderValue(value).slice(0, maxLength)
}

function getMessage(formData: FormData) {
  const value = formData.get('message')

  if (typeof value !== 'string') {
    return ''
  }

  return value.trim().slice(0, 4000)
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function checkRateLimit(key: string) {
  const now = Date.now()
  const current = submissions.get(key)

  if (!current || current.resetAt <= now) {
    submissions.set(key, {count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS})
    return true
  }

  if (current.count >= RATE_LIMIT_MAX_SUBMISSIONS) {
    return false
  }

  current.count += 1
  return true
}

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
  const headerStore = await headers()
  const ip =
    headerStore.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headerStore.get('x-real-ip') ||
    'unknown'

  if (!checkRateLimit(ip)) {
    return false
  }

  const name = getString(formData, 'name', 100)
  const subject = getString(formData, 'subject', 150)
  const email = getString(formData, 'email', 254)
  const message = getMessage(formData)

  if (!name || !subject || !isValidEmail(email) || !message) {
    return false
  }

  await sendEmail(email, `(${name}) ${subject}`, message)

  return true
}
