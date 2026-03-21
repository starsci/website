import {Club, News} from '@/payload-types'
import {PayloadRequest} from 'payload'

export function isSupervisor({req: {user}}: {req: PayloadRequest}) {
  return user?.role == 'supervisor'
}

export function isSupervisorOrSelf({req: {user}}: {req: PayloadRequest}) {
  if (user?.role == 'supervisor') {
    return true
  }

  // allow user to update their own profile
  return {
    id: {
      equals: user?.id
    }
  }
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
        equals: (user.club as Club).id
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
    if (club?.name == 'Pararayos') {
      return true
    }
  }

  return false
}

async function getNewsPublicationFromClub(
  req: PayloadRequest
): Promise<News['publication'] | null> {
  const {user} = req

  if (user?.collection !== 'admins') {
    return null
  }

  const club = user.club as Club | number | null | undefined
  if (!club) {
    return null
  }

  const clubName =
    typeof club === 'object'
      ? club.name
      : (
          await req.payload.findByID({
            collection: 'clubs',
            id: club,
            depth: 0
          })
        )?.name

  if (clubName === 'Pararayos') {
    return 'pararayos'
  }

  if (clubName === 'The Satellite') {
    return 'the-satellite'
  }

  return null
}

export async function canCreateNews({req}: {req: PayloadRequest}) {
  if (req.user?.role === 'supervisor') {
    return true
  }

  const allowedPublication = await getNewsPublicationFromClub(req)
  if (!allowedPublication) {
    return false
  }

  const publication = req.data?.publication
  return publication === allowedPublication
}

export async function canManageNews({req}: {req: PayloadRequest}) {
  if (req.user?.role === 'supervisor') {
    return true
  }

  const allowedPublication = await getNewsPublicationFromClub(req)
  if (!allowedPublication) {
    return false
  }

  return {
    publication: {
      equals: allowedPublication
    }
  }
}
