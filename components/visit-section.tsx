import { Button } from "@/components/ui/button"

export default function VisitSection() {
  return (
    <section id="visit" className="py-16 md:py-24 bg-black text-white">
      <div className="container px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-16">Visit Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4 md:gap-6">
                <div>
                  <h3 className="font-semibold text-lg md:text-xl mb-2">Location</h3>
                  <p className="text-gray-300 text-base md:text-lg">Clark Global City, Pampanga, Philippines</p>
                  <p className="text-gray-300 mt-2 text-sm md:text-base">
                    Conveniently located 80km north of Manila, with easy access from Clark International Airport.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6">
                <div>
                  <h3 className="font-semibold text-lg md:text-xl mb-2">Opening Hours</h3>
                  <p className="text-gray-300 text-sm md:text-base">Monday - Sunday: 9:00 AM - 10:00 PM</p>
                  <p className="text-gray-300 text-sm md:text-base">Exhibition spaces close at 8:00 PM</p>
                  <p className="text-gray-300 text-sm md:text-base">Performance times vary by event</p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6">
                <div>
                  <h3 className="font-semibold text-lg md:text-xl mb-2">Guided Tours</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Architectural tours available daily at 10:00 AM, 1:00 PM, and 4:00 PM.
                  </p>
                  <p className="text-gray-300 text-sm md:text-base">
                    Reservations recommended for groups of 10 or more.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-12 flex flex-wrap gap-4">
              <Button className="bg-white hover:bg-gray-200 text-black text-sm md:text-base">Get Directions</Button>
            </div>
          </div>
          <div className="relative">
            <div className="h-[300px] md:h-[500px] overflow-hidden">
              <img
                src="/images/RENDERS/ISO A.png"
                alt="Map of OPUS MUSIC COMPLEX location"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
