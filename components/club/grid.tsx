'use client'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import {useQuery} from '@/hooks/use-query'
import {useEffect, useState} from 'react'

import {Media} from '@/payload-types'

import Image from 'next/image'
import Link from 'next/link'
import {parse} from 'path'
import {useSearchParams} from 'next/navigation'
import {Pagination} from '../pagination'

export function ClubGrid() {
  const searchParams = useSearchParams()
  const defaultLimit = 12
  const page = parseInt(searchParams.get('page') || '1') // if page is 0 or NaN, default to 1
  const limit = parseInt(searchParams.get('limit') || defaultLimit.toString())

  const {data, isLoading, error} = useQuery('clubs', {
    depth: 1,
    pagination: true,
    limit,
    page
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Failed to load clubs: {error.message}</p>
  }

  if (!data) {
    return <p>No data</p>
  }

  return (
    <div className="flex flex-col gap-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.docs.map(club => {
          return (
            <article
              className="relative transition-transform hover:scale-105"
              key={club.id}>
              <Card className="shadow-md flex flex-col items-center justify-center h-full">
                <CardHeader>
                  <Image
                    src={(club.logo as Media).cdn_url!}
                    alt={`${club.name} logo`}
                    width={100}
                    height={100}
                    className="mx-auto mb-4"
                  />
                  <CardTitle className="text-center">{club.name}</CardTitle>
                  <CardDescription className="text-center">
                    {club.description}
                  </CardDescription>
                </CardHeader>
              </Card>
              <Link
                href={`/clubs/${club.id}`}
                className="absolute inset-0 z-10"
              />
            </article>
          )
        })}
      </div>
      <div className="mx-auto">
        <Pagination
          totalPages={data.totalPages}
          hasPrevPage={data.hasPrevPage}
          hasNextPage={data.hasNextPage}
          defaultLimit={defaultLimit}
        />
      </div>
    </div>
  )
}
