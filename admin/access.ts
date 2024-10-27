import {Club} from '@/payload-types'
import {DataFromCollectionSlug, PayloadRequest} from 'payload'

export function isSupervisor({req: {user}}: {req: PayloadRequest}) {
  return user?.role == 'supervisor'
}

export function isSupervisorOrSocialMediaManager({
  req: {user}
}: {
  req: PayloadRequest
}) {
  return user?.role == 'supervisor' || user?.role == 'social-media-manager'
}

export function isSupervisorOrClubManager({
  req: {user}
}: {
  req: PayloadRequest
}) {
  // if supervisor, return true
  if (user?.role == 'supervisor') {
    return true
  }

  // if club manager, return only announcements of their own club
  if (user?.role == 'club-manager') {
    return {
      club: {
        equals: user.club.id
      }
    }
  }

  // otherwise,
  return false
}

export function isSupervisorOrSocialMediaManagerOrStaff({
  req: {user}
}: {
  req: PayloadRequest
}) {
  // if supervisor, return all announcements
  if (
    user?.role == 'supervisor' ||
    user?.role == 'social-media-manager' ||
    user?.role == 'staff'
  ) {
    return true
  }

  // return only non-internal announcements
  return {
    internal: {
      equals: false
    }
  }
}

export function isSupervisorOrSatelliteMember({
  req: {user}
}: {
  req: PayloadRequest
}) {
  if (user?.role == 'supervisor') {
    return true
  }

  // check if the club of the user is the satellite club
  // first cast the user.club to Club type
  if (user?.collection == 'admins') {
    const club = user.club as Club
    if (club?.name == 'The Satellite') {
      return true
    }
  }

  return false
}

export function isSupervisorOrPararayosMember({
  req: {user}
}: {
  req: PayloadRequest
}) {
  if (user?.role == 'supervisor') {
    return true
  }

  // check if the club of the user is the pararayos club
  // first cast the user.club to Club type
  if (user?.collection == 'admins') {
    const club = user.club as Club
    if (club?.name == 'Ang Pararayos') {
      return true
    }
  }

  return false
}
