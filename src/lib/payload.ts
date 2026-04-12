import {getPayload} from 'payload'
import config from '@payload-config'

export function getPayloadClient() {
  return getPayload({config})
}
