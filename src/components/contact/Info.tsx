import {Card, CardContent} from '@/components/ui/card'
import {MailOpen, MapPinned, Phone} from 'lucide-react'

export function ContactInfo() {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <div className="space-y-4 text-gray-700">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
            <span>0908 705 1083</span>
          </div>
          <div className="flex items-center gap-3">
            <MailOpen className="h-5 w-5 flex-shrink-0 text-primary" />
            <a href="mailto:info@srsths.edu.ph" className="hover:underline">
              info@srsths.edu.ph
            </a>
          </div>
          <div className="flex items-start gap-3">
            <MapPinned className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <span>
              LM Subd., Brgy. Market Area, City of Santa Rosa, Laguna,
              Philippines
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
