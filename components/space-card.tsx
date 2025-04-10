"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface SpaceCardProps {
  title: string
  description: string
  image?: string
  hasImage: boolean
}

export default function SpaceCard({ title, description, image, hasImage }: SpaceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="flex flex-col bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {hasImage ? (
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
        </div>
      ) : (
        <div className="aspect-[4/3] bg-[#E5E3D7] flex items-center justify-center">
          <span className="text-[#1A1A1A] text-sm md:text-lg">No image available</span>
        </div>
      )}
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-2">{title}</h3>
        <p className="text-sm md:text-base text-[#1A1A1A] mb-4">{description}</p>
        <Link href="#" className="text-[#1A1A1A] hover:text-[#8B7E66] flex items-center text-sm md:text-base">
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
