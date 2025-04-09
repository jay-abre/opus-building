import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceCardProps {
  title: string
  date: string
  location: string
  image: string
  category: string
}

export default function ExperienceCard({ title, date, location, image, category }: ExperienceCardProps) {
  return (
    <Card className="overflow-hidden border-none bg-[#4A4A4A] transition-all duration-300 hover:shadow-lg hover:shadow-[#8B7E66]/20">
      <div className="relative h-48 overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
        <Badge className="absolute top-3 right-3 bg-[#8B7E66] hover:bg-[#8B7E66]">{category}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-300">
            <Calendar className="h-4 w-4 mr-2 text-[#8B7E66]" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-300">
            <MapPin className="h-4 w-4 mr-2 text-[#8B7E66]" />
            <span>{location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
