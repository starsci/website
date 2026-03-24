import {GridContainer} from '@/components/GridContainer'
import {Card, CardHeader, CardContent} from './ui/card'
import {Skeleton} from './ui/skeleton'

interface GridSkeletonProps {
  count: number
}

export function GridSkeleton({count}: GridSkeletonProps) {
  return (
    <GridContainer>
      {Array.from({length: count}).map((_, index) => (
        <div className="relative" key={index}>
          <Card className="shadow-md h-full">
            <Skeleton className="w-full max-h-48 h-48 rounded-t-xl" />
            <CardHeader>
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-3 w-1/3 mt-1" />
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-2/3" />
            </CardContent>
          </Card>
        </div>
      ))}
    </GridContainer>
  )
}
