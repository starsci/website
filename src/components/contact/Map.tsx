import {Card, CardContent} from '@/components/ui/card'

export function ContactMap() {
  return (
    <Card className="mt-6">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Location</h3>
        <div className="aspect-video overflow-hidden rounded-md bg-gray-200">
          <iframe
            title="Santa Rosa Science and Technology High School location map"
            loading="lazy"
            className="h-full w-full"
            src="https://www.openstreetmap.org/export/embed.html?bbox=121.11022353172304%2C14.315657860748427%2C121.11227810382844%2C14.317180823631066&amp;layer=mapnik&amp;marker=14.316419343481115%2C121.11125081777573"></iframe>
        </div>
      </CardContent>
    </Card>
  )
}
