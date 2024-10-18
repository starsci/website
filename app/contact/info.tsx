import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Card, CardContent} from '@/app/ui/card'

export function ContactInfo() {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faPhone}
              className="mr-2 h-5 w-5 text-primary"
            />
            <span>0908 705 1083</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mr-2 h-5 w-5 text-primary"
            />
            <span>info@srsths.edu.ph</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="mr-2 h-5 w-5 text-primary"
            />
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
