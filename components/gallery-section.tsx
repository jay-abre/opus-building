"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface GalleryImageProps {
  src: string
  alt: string
}

function GalleryImage({ src, alt }: GalleryImageProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
      </div>
    </div>
  )
}

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-[#F2F1E8]">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">Gallery</h2>
          <p className="text-[#1A1A1A] max-w-md text-lg mt-4 md:mt-0">
            Explore SYMPHONIC SKIES through our collection of architectural renderings, concept sketches, and images.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 flex flex-wrap justify-start space-x-4 bg-transparent">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white bg-transparent text-[#1A1A1A] border border-[#1A1A1A]"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="exterior"
              className="data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white bg-transparent text-[#1A1A1A] border border-[#1A1A1A]"
            >
              Exterior
            </TabsTrigger>
            <TabsTrigger
              value="interior"
              className="data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white bg-transparent text-[#1A1A1A] border border-[#1A1A1A]"
            >
              Interior
            </TabsTrigger>
            <TabsTrigger
              value="aerial"
              className="data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white bg-transparent text-[#1A1A1A] border border-[#1A1A1A]"
            >
              Aerial
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <GalleryImage src="/placeholder.svg?height=400&width=600" alt="Exterior view of Symphonic Skies" />
              <GalleryImage src="/placeholder.svg?height=400&width=600" alt="Concert hall interior" />
              <GalleryImage src="/placeholder.svg?height=400&width=600" alt="Aerial view of the complex" />
              <GalleryImage src="/placeholder.svg?height=400&width=600" alt="Sky garden during sunset" />
              <GalleryImage src="/placeholder.svg?height=400&width=600" alt="Concert event setup" />
              <GalleryImage src="/placeholder.svg?height=400&width=600" alt="Sound lab interior" />
            </div>
          </TabsContent>

          <TabsContent value="exterior" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <GalleryImage src="/placeholder.svg?height=400&width=600" alt="Exterior view of Symphonic Skies" />
              <GalleryImage src="/placeholder.svg?height=400&width=600" alt="Sky garden during sunset" />
              <GalleryImage src="/placeholder.svg?height=400&width=600" alt="Night view of facade" />
            </div>
          </TabsContent>

          {/* Other tab contents would follow the same pattern */}
        </Tabs>
      </div>
    </section>
  )
}
