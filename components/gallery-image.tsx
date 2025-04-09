"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Maximize2 } from "lucide-react"

interface GalleryImageProps {
  src: string
  alt: string
  category: string
}

export default function GalleryImage({ src, alt, category }: GalleryImageProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative overflow-hidden group"
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
      <div
        className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <Maximize2 className="text-white h-8 w-8" />
      </div>
      <Badge className="absolute top-3 left-3 bg-[#8B7E66] hover:bg-[#8B7E66]">{category}</Badge>
    </div>
  )
}
