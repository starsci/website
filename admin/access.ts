import {PayloadRequest} from 'payload'

export function isSupervisor({req: {user}}: {req: PayloadRequest}) {
  return !!user && user.role == 'supervisor'
}

export function isSupervisorOrSocialMediaManager({
  req: {user}
}: {
  req: PayloadRequest
}) {
  if (user && user.role == 'supervisor') {
    return true
  }

  if (user && user.role == 'social-media-manager') {
    return true
  }

  return false
}

export function isSupervisorOrClubManager({
  req: {user}
}: {
  req: PayloadRequest
}) {
  // if supervisor, return true
  if (user && user.role == 'supervisor') {
    return true
  }

  // if club manager, return only announcements of their own club
  if (user && user.role == 'club-manager') {
    return {
      club: {
        equals: user.club
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
    user &&
    (user.role == 'supervisor' ||
      user.role == 'social-media-manager' ||
      user.role == 'staff')
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
