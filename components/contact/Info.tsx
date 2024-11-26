import {Card, CardContent} from '@/components/ui/card'
import { MailOpen, MapPinned, Phone } from 'lucide-react'

export function ContactInfo() {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <Phone className="mr-2 h-5 w-5 text-primary" />
            <span>0908 705 1083</span>
          </div>
          <div className="flex items-center">
            <MailOpen className="mr-2 h-5 w-5 text-primary" />
            <span>info@srsths.edu.ph</span>
          </div>
          <div className="flex items-center">
            <MapPinned className="mr-2 h-5 w-5 text-primary" />
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
