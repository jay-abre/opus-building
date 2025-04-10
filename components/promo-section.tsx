import { Button } from "@/components/ui/button"

export default function PromoSection() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/RENDERS/TOC LAYOUT 2.png"
          alt="OPUS at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container h-full flex flex-col justify-between py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Your space for performing arts.
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Live from Clark Global City.</h3>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <div className="text-white text-xl md:text-2xl font-bold mb-2">OPUS</div>
            <div className="text-white text-sm md:text-base uppercase tracking-wider">Music Complex</div>
          </div>

          <div className="flex items-center gap-8">
            <p className="text-white text-base md:text-lg">Join our email list for on-sales and programming updates.</p>
            <Button className="bg-[#F2F1E8] hover:bg-white text-black rounded-none px-6 py-3 text-base md:text-lg font-medium">
              Sign up today
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
