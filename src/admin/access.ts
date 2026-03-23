import {Admin, Club, News, User} from '@/payload-types'
import {ClientUser} from 'payload'

export type UserType = Admin | User | null | undefined | ClientUser
export type ClubType = Club | number | null | undefined

export function isAdminUser(user: UserType): user is Admin {
  return Boolean(user && user.collection === 'admins')
}

export function isStaffUser(user: UserType): user is User {
  return Boolean(user && user.collection === 'users')
}

export function isPopulatedClub(club: ClubType): club is Club {
  return Boolean(club && typeof club === 'object' && 'id' in club && club.id)
}

export function hasSupervisorRole(user: UserType): user is Admin {
  // return if user does not have key 'role'
  return isAdminUser(user) && user.role == 'supervisor'
}

export function canAccessOwnOrSupervisor(user: UserType) {
  if (hasSupervisorRole(user)) {
    return true
  }

  const userId =
    typeof user === 'object' && user && 'id' in user ? (user as any).id : null

  // allow user to update their own profile
  return {
    id: {
      equals: userId
    }
  }
}

export function canManageAnnouncements(user: UserType): user is Admin {
  return (
    hasSupervisorRole(user) ||
    (isAdminUser(user) && user.role === 'social-media-manager')
  )
}

export function getAnnouncementReadAccess(user: UserType) {
  // if supervisor, return all announcements
  if (canManageAnnouncements(user) || isStaffUser(user)) {
    return true
  }

  // return only non-internal announcements
  return {
    internal: {
      equals: false
    }
  }
}

function isClubMemberOrSupervisor(user: UserType, club: string) {
  if (!isAdminUser(user)) {
    return false
  }

  if (user.role == 'supervisor') {
    return true
  }

  // check if the club of the user is the satellite club
  if (!isPopulatedClub(user.club)) {
    return false
  }

  const clubName = user.club.name
  if (clubName == club) {
    return true
  }

  return false
}

export function canManageSatellite(user: UserType) {
  return isClubMemberOrSupervisor(user, 'The Satellite')
}

export function canManagePararayos(user: UserType) {
  return isClubMemberOrSupervisor(user, 'Pararayos')
}
