"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SpaceCard from "./space-card"

export default function SpacesSection() {
  return (
    <section id="spaces" className="py-16 md:py-24 bg-[#F2F1E8]">
      <div className="container px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-10 md:mb-16">Spaces</h2>

        <Tabs defaultValue="rentals" className="w-full">
          <TabsList className="mb-6 md:mb-8 flex flex-wrap justify-start space-x-2 md:space-x-4 bg-transparent">
            <TabsTrigger
              value="rentals"
              className="data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white bg-transparent text-[#1A1A1A] border border-[#1A1A1A] text-sm md:text-base"
            >
              Rentals
            </TabsTrigger>
            <TabsTrigger
              value="amenities"
              className="data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white bg-transparent text-[#1A1A1A] border border-[#1A1A1A] text-sm md:text-base"
            >
              Amenities
            </TabsTrigger>
          </TabsList>

          <TabsContent value="rentals" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <SpaceCard
                title="Toccata Concert Hall"
                description="Our flagship venue features exceptional acoustics designed for orchestral performances, with seating for 1,200 guests."
                image="/images/RENDERS/TOCCATA.png"
                hasImage={true}
              />
              <SpaceCard
                title="Grand Lobby"
                description="An elegant space perfect for receptions, exhibitions, and networking events with stunning architectural features."
                image="/placeholder.svg?height=400&width=600"
                hasImage={true}
              />
              <SpaceCard
                title="Sonata Music Hall"
                description="A versatile mid-sized venue ideal for chamber music, recitals, and intimate performances."
                image="/placeholder.svg?height=400&width=600"
                hasImage={true}
              />
              <SpaceCard
                title="Opus Gallery"
                description="A contemporary exhibition space for visual arts that complements our musical programming."
                image="/placeholder.svg?height=400&width=600"
                hasImage={true}
              />
              <SpaceCard
                title="Function Halls"
                description="Multiple configurable spaces for conferences, workshops, and private events."
                image="/placeholder.svg?height=400&width=600"
                hasImage={true}
              />
              <SpaceCard
                title="Rehearsal Spaces"
                description="Professional-grade rehearsal rooms with excellent acoustics for performers."
                image="/placeholder.svg?height=400&width=600"
                hasImage={true}
              />
              <SpaceCard
                title="Press Con Rooms"
                description="Dedicated spaces for media events, interviews, and press conferences."
                hasImage={false}
              />
              <SpaceCard
                title="Activity Areas"
                description="Flexible spaces for educational programs, workshops, and community activities."
                hasImage={false}
              />
              <SpaceCard
                title="VIP Lounge"
                description="Exclusive area for special guests with premium amenities and services."
                hasImage={false}
              />
            </div>
          </TabsContent>

          <TabsContent value="amenities" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <SpaceCard
                title="Outdoor Park"
                description="A beautifully landscaped area for outdoor performances and relaxation."
                image="/placeholder.svg?height=400&width=600"
                hasImage={true}
              />
              <SpaceCard
                title="Sound Art Exhibit Area"
                description="Interactive installations exploring the intersection of sound and visual art."
                image="/placeholder.svg?height=400&width=600"
                hasImage={true}
              />
              <SpaceCard
                title="Upper Plaza"
                description="An elevated public space with panoramic views of Clark Global City."
                image="/placeholder.svg?height=400&width=600"
                hasImage={true}
              />
              <SpaceCard
                title="Promenade"
                description="A scenic walkway connecting different areas of the complex."
                image="/placeholder.svg?height=400&width=600"
                hasImage={true}
              />
              <SpaceCard
                title="Oasis"
                description="A tranquil indoor garden with water features and acoustic design elements."
                image="/placeholder.svg?height=400&width=600"
                hasImage={true}
              />
              <SpaceCard
                title="Food Hall"
                description="A variety of dining options featuring local and international cuisine."
                hasImage={false}
              />
              <SpaceCard
                title="Retail and Commercial Spaces"
                description="Shops and boutiques offering arts-related merchandise and services."
                hasImage={false}
              />
              <SpaceCard
                title="Music Store"
                description="Specialized retail space for instruments, sheet music, and audio equipment."
                hasImage={false}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
