"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import EventCard from "./event-card"

export default function ExperienceSection() {
  return (
    <section id="experiences" className="py-24 bg-[#F2F1E8]">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">Upcoming Events</h2>
          <Link href="#" className="text-[#1A1A1A] hover:text-[#8B7E66] flex items-center mt-4 md:mt-0">
            View all events <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <EventCard
            title="Philippine Philharmonic Orchestra"
            date="Jun 15—29, 2025"
            location="Grand Concert Hall"
            image="/placeholder.svg?height=400&width=600"
          />
          <EventCard
            title="Passengers"
            date="Jul 12—29, 2025"
            location="Experimental Sound Stage"
            image="/placeholder.svg?height=400&width=600"
          />
          <EventCard
            title="Acoustic Innovations"
            date="Aug 5—15, 2025"
            location="Sky Garden Amphitheater"
            image="/placeholder.svg?height=400&width=600"
            limited={true}
          />
        </div>
      </div>
    </section>
  )
}
