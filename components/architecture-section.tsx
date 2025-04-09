import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 bg-black text-white">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Architecture</h2>
          <p className="max-w-md text-lg mt-4 md:mt-0 text-gray-300">
            SYMPHONIC SKIES represents a harmonious blend of form and function, where architectural innovation meets
            acoustic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="h-[500px] overflow-hidden">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Architectural facade"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Verticality & Spatial Flow</h3>
            <p className="text-gray-300 mb-6">
              The vertical structure of SYMPHONIC SKIES creates a natural progression of experiences as visitors ascend
              through the building. Each level is designed with careful consideration of how sound travels and interacts
              with the architecture.
            </p>
            <p className="text-gray-300 mb-6">
              The central atrium serves as an acoustic spine, allowing sound to travel vertically while creating visual
              connections between different levels. This design encourages exploration and discovery as visitors move
              through the complex.
            </p>
            <div className="mt-8">
              <Button className="bg-white hover:bg-gray-200 text-black rounded-none">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1A1A1A] p-8">
            <h3 className="text-xl font-bold mb-4">Acoustic Innovation</h3>
            <p className="text-gray-300">
              Our spaces incorporate cutting-edge acoustic technologies, from adjustable panels that can transform a
              room's sound profile to specialized materials that enhance sound quality.
            </p>
          </div>
          <div className="bg-[#1A1A1A] p-8">
            <h3 className="text-xl font-bold mb-4">Façade & Materials</h3>
            <p className="text-gray-300">
              The building's exterior features a dynamic façade inspired by sound waves, with materials chosen for both
              their aesthetic appeal and acoustic properties.
            </p>
          </div>
          <div className="bg-[#1A1A1A] p-8">
            <h3 className="text-xl font-bold mb-4">Sustainability</h3>
            <p className="text-gray-300">
              SYMPHONIC SKIES integrates sustainable design principles, including natural ventilation, green spaces, and
              energy-efficient systems that minimize environmental impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
