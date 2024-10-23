/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    admins: AdminAuthOperations;
    users: UserAuthOperations;
  };
  collections: {
    admins: Admin;
    users: User;
    media: Media;
    clubs: Club;
    'school-announcements': SchoolAnnouncement;
    'club-announcements': ClubAnnouncement;
    'the-satellite-news': TheSatelliteNew;
    'ang-pararayos-news': AngPararayosNew;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  locale: null;
  user:
    | (Admin & {
        collection: 'admins';
      })
    | (User & {
        collection: 'users';
      });
}
export interface AdminAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "admins".
 */
export interface Admin {
  id: number;
  role: 'supervisor' | 'club-manager' | 'social-media-manager';
  club?: (number | null) | Club;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "clubs".
 */
export interface Club {
  id: number;
  name: string;
  description: string;
  logo: number | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  public_id?: string | null;
  cdn_url?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  role: 'staff';
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "school-announcements".
 */
export interface SchoolAnnouncement {
  id: number;
  title: string;
  published_at: string;
  body: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  bodyHTML?: string | null;
  thumbnail?: (number | null) | Media;
  internal?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "club-announcements".
 */
export interface ClubAnnouncement {
  id: number;
  title: string;
  published_at: string;
  club: number | Club;
  body: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  bodyHTML?: string | null;
  thumbnail?: (number | null) | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "the-satellite-news".
 */
export interface TheSatelliteNew {
  id: number;
  title: string;
  authors: {
    first_name: string;
    last_name: string;
    id?: string | null;
  }[];
  category?: ('news' | 'opinion' | 'feature' | 'sports' | 'sci-and-tech') | null;
  published_at: string;
  body: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  bodyHTML?: string | null;
  thumbnail?: (number | null) | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ang-pararayos-news".
 */
export interface AngPararayosNew {
  id: number;
  title: string;
  authors: {
    first_name: string;
    last_name: string;
    id?: string | null;
  }[];
  category: 'news' | 'opinion' | 'feature' | 'sports' | 'sci-and-tech';
  published_at: string;
  body: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  bodyHTML?: string | null;
  thumbnail?: (number | null) | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'admins';
        value: number | Admin;
      } | null)
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'clubs';
        value: number | Club;
      } | null)
    | ({
        relationTo: 'school-announcements';
        value: number | SchoolAnnouncement;
      } | null)
    | ({
        relationTo: 'club-announcements';
        value: number | ClubAnnouncement;
      } | null)
    | ({
        relationTo: 'the-satellite-news';
        value: number | TheSatelliteNew;
      } | null)
    | ({
        relationTo: 'ang-pararayos-news';
        value: number | AngPararayosNew;
      } | null);
  globalSlug?: string | null;
  user:
    | {
        relationTo: 'admins';
        value: number | Admin;
      }
    | {
        relationTo: 'users';
        value: number | User;
      };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user:
    | {
        relationTo: 'admins';
        value: number | Admin;
      }
    | {
        relationTo: 'users';
        value: number | User;
      };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}