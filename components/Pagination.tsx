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

import {useSearchParams} from 'next/navigation'

export function Pagination({
  totalPages,
  defaultLimit = 12,
  hasPrevPage,
  hasNextPage
}: {
  totalPages: number
  defaultLimit?: number
  hasPrevPage: boolean
  hasNextPage: boolean
}) {
  const searchParams = useSearchParams()
  // get query params
  const page = parseInt(searchParams.get('page') || '1') // if page is 0 or NaN, default to 1
  const limit = parseInt(searchParams.get('limit') || defaultLimit.toString())

  return (
    <PaginationComponent>
      <PaginationContent>
        {hasPrevPage && (
          <PaginationItem>
            <PaginationPrevious href={`?page=${page - 1}&limit=${limit}`} />
          </PaginationItem>
        )}
        {/* print page numbers from 1 to data.totalPages and mark the current page */}
        {Array.from({length: totalPages}, (_, i) => i + 1).map(pageNumber => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              isActive={pageNumber === page}
              href={`?page=${pageNumber}&limit=${limit}`}>
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
        {hasNextPage && (
          <PaginationItem>
            <PaginationNext href={`?page=${page + 1}&limit=${limit}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </PaginationComponent>
  )
}
