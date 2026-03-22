import {Admin, Club, News, User} from '@/payload-types'
import {ClientUser} from 'payload'

type UserType = Admin | User | null | undefined | ClientUser
type ClubType = Club | number | null | undefined

function isAdmin(user: UserType): user is Admin {
  return Boolean(user && user.collection === 'admins')
}

function isStaff(user: UserType): user is User {
  return Boolean(user && user.collection === 'users')
}

function isClubObject(club: ClubType): club is Club {
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

export function isSupervisorOrClubManager(user: UserType) {
  if (!isAdmin(user)) {
    return false
  }

  // if supervisor, return true
  if (user.role == 'supervisor') {
    return true
  }

  if (!isClubObject(user.club)) {
    return false
  }

  // if club manager, return only announcements of their own club
  if (user.role == 'club-manager') {
    return {
      club: {
        equals: user.club.id
      }
    }
  }

  // otherwise,
  return false
}

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

function getNewsPublicationFromClub(
  user: UserType
): News['publication'] | null {
  if (!isAdmin(user)) {
    return null
  }

  const club = user.club as Club | number | null | undefined
  if (!isClubObject(club)) {
    return null
  }

  const clubName = club.name

  if (clubName === 'Pararayos') {
    return 'pararayos'
  }

  if (clubName === 'The Satellite') {
    return 'the-satellite'
  }

  return null
}

export function canCreateNews(
  user: UserType,
  data: {publication?: string} | null | undefined
) {
  if (isAdmin(user) && user.role === 'supervisor') {
    return true
  }

  const allowedPublication = getNewsPublicationFromClub(user)
  if (!allowedPublication) {
    return false
  }

  const publication = data?.publication
  return publication === allowedPublication
}

export function canManageNews(user: UserType) {
  if (isAdmin(user) && user.role === 'supervisor') {
    return true
  }

  const allowedPublication = getNewsPublicationFromClub(user)
  if (!allowedPublication) {
    return false
  }

  return {
    publication: {
      equals: allowedPublication
    }
  }
}
