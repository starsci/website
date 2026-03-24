'use client'

import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import {useCallback} from 'react'

import {useSearchParams, useRouter, usePathname} from 'next/navigation'

function getPageNumbers(current: number, total: number) {
  // if total <= 7 return all page numbers
  if (total <= 7) {
    return Array.from({length: total}, (_, i) => i + 1)
  }

  const pages: (number | '...')[] = [1]
  if (current > 3) {
    pages.push('...')
  }

  const start = Math.max(2, current - 1) // start from 2 to avoid duplicate with first page
  const end = Math.min(total - 1, current + 1) // end at total - 1 to avoid duplicate with last page

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  // if current is less than total - 2, add ellipsis before last page
  if (current < total - 2) {
    pages.push('...')
  }

  pages.push(total)
  return pages
}

interface PaginationProps {
  totalPages: number
}

export function Pagination({totalPages}: PaginationProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  // get query params
  const page = Number(searchParams.get('page')) || 1 // if page is 0 or NaN, default to 1
  const pagination = getPageNumbers(page, totalPages)

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const setSearchParam = useCallback(
    (name: string, value: string) => {
      const queryString = createQueryString(name, value)
      router.push(`${pathname}?${queryString}`)
    },
    [createQueryString, pathname, router]
  )

  return (
    <PaginationComponent>
      <PaginationContent>
        {/* print page numbers from 1 to data.totalPages and mark the current page */}
        {pagination.map(pageNumber => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              isActive={pageNumber === page}
              onClick={() => {
                // if pageNumber is ellipsis, do nothing
                if (pageNumber === '...') {
                  return
                }
                setSearchParam('page', pageNumber.toString())
              }}>
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </PaginationComponent>
  )
}
