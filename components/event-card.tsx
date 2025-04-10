import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface EventCardProps {
  title: string
  date: string
  location: string
  image: string
  href?: string
  limited?: boolean
}

export default function EventCard({ title, date, location, image, href = "#", limited = false }: EventCardProps) {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="mt-4">
        <h3 className="text-lg md:text-xl font-bold text-white uppercase mb-2">{title}</h3>
        <p className="text-sm md:text-base text-white mb-1">{date}</p>
        <p className="text-sm md:text-base text-gray-400 mb-4">{location}</p>

        <div className="flex items-center justify-between">
          <Link href={href} className="text-white hover:text-gray-300 flex items-center text-sm md:text-base">
            Learn more <ArrowRight className="ml-1 h-4 w-4" />
          </Link>

          <Button className="bg-white hover:bg-gray-200 text-black text-sm md:text-base py-1 px-3 md:py-2 md:px-4 h-auto">
            Buy Tickets
          </Button>
        </div>

        {/* {limited && <p className="text-xs md:text-sm text-gray-400 mt-2">Limited Availability</p>} */}
      </div>
    </div>
  )
}
