import { Button } from "@/components/ui/button"

export default function PromoSection() {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg?height=600&width=1920&text=Night+View"
          alt="OPUS at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container h-full flex flex-col justify-between py-10 md:py-24 px-4 md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4">
            Your space for performing arts.
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Live from Clark Global City.
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-auto gap-6 sm:gap-0">
          <div className="flex flex-col">
            <div className="text-white text-xl md:text-2xl font-bold mb-1 sm:mb-2">OPUS</div>
            <div className="text-white text-sm md:text-base uppercase tracking-wider">Music Complex</div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <p className="text-white text-sm sm:text-base md:text-lg max-w-xs sm:max-w-none">
              Join our email list for on-sales and programming updates.
            </p>
            <Button className="bg-[#F2F1E8] hover:bg-white text-black rounded-none px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-medium w-full sm:w-auto">
              Sign up today
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
