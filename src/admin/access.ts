import {Admin, Club, News, User} from '@/payload-types'
import {ClientUser} from 'payload'

export type UserType = Admin | User | null | undefined | ClientUser
export type ClubType = Club | number | null | undefined

export function isAdmin(user: UserType): user is Admin {
  return Boolean(user && user.collection === 'admins')
}

export function isStaff(user: UserType): user is User {
  return Boolean(user && user.collection === 'users')
}

export function isClubObject(club: ClubType): club is Club {
  return Boolean(club && typeof club === 'object' && 'id' in club && club.id)
}

export function isSupervisor(user: UserType): user is Admin {
  // return if user does not have key 'role'
  return isAdmin(user) && user.role == 'supervisor'
}

export function isSupervisorOrSelf(user: UserType) {
  if (isSupervisor(user)) {
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

export function isSupervisorOrSocialMediaManager(
  user: UserType
): user is Admin {
  return (
    isSupervisor(user) ||
    (isAdmin(user) && user.role === 'social-media-manager')
  )
}

export function isSupervisorOrClubManager(user: UserType) {}

export function isSupervisorOrSocialMediaManagerOrStaff(user: UserType) {
  // if supervisor, return all announcements
  if (isSupervisorOrSocialMediaManager(user) || isStaff(user)) {
    return true
  }

  // return only non-internal announcements
  return {
    internal: {
      equals: false
    }
  }
}

function isSupervisorOrClubMember(user: UserType, club: string) {
  if (!isAdmin(user)) {
    return false
  }

  if (user.role == 'supervisor') {
    return true
  }

  // check if the club of the user is the satellite club
  if (!isClubObject(user.club)) {
    return false
  }

  const clubName = user.club.name
  if (clubName == club) {
    return true
  }

  return false
}

export function isSupervisorOrSatelliteMember(user: UserType) {
  return isSupervisorOrClubMember(user, 'The Satellite')
}

export function isSupervisorOrPararayosMember(user: UserType) {
  return isSupervisorOrClubMember(user, 'Pararayos')
}
