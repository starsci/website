import {Card, CardContent} from '@/components/ui/card'

export function ContactMap() {
  return (
    <Card className="mt-6">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Location</h3>
        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.openstreetmap.org/export/embed.html?bbox=121.11022353172304%2C14.315657860748427%2C121.11227810382844%2C14.317180823631066&amp;layer=mapnik&amp;marker=14.316419343481115%2C121.11125081777573"></iframe>
        </div>
      </CardContent>
    </Card>
  )
}
