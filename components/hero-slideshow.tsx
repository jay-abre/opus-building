"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Slide {
  image: string
  title: string
  subtitle: string
}

interface HeroSlideshowProps {
  slides: Slide[]
  autoplaySpeed?: number
  className?: string
}

export default function HeroSlideshow({ slides, autoplaySpeed = 5000, className }: HeroSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return

      setIsTransitioning(true)
      setCurrentSlide(index)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 500) // Match this with the CSS transition duration
    },
    [isTransitioning],
  )

  const nextSlide = useCallback(() => {
    const newIndex = (currentSlide + 1) % slides.length
    goToSlide(newIndex)
  }, [currentSlide, goToSlide, slides.length])

  const prevSlide = useCallback(() => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length
    goToSlide(newIndex)
  }, [currentSlide, goToSlide, slides.length])

  // Autoplay functionality
  useEffect(() => {
    if (autoplaySpeed <= 0) return

    const interval = setInterval(() => {
      nextSlide()
    }, autoplaySpeed)

    return () => clearInterval(interval)
  }, [autoplaySpeed, nextSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide()
      } else if (e.key === "ArrowRight") {
        nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide])

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
          aria-hidden={index !== currentSlide}
        >
          <div className="absolute inset-0">
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
            <h2
              className="text-6xl md:text-8xl font-bold text-white mb-6 transition-transform duration-700 ease-out transform translate-y-0 opacity-100"
              style={{
                transitionDelay: "200ms",
                transform: index === currentSlide ? "translateY(0)" : "translateY(20px)",
                opacity: index === currentSlide ? 1 : 0,
              }}
            >
              {slide.title}
            </h2>
            <p
              className="text-xl text-white/90 max-w-2xl mb-8 transition-transform duration-700 ease-out"
              style={{
                transitionDelay: "400ms",
                transform: index === currentSlide ? "translateY(0)" : "translateY(20px)",
                opacity: index === currentSlide ? 1 : 0,
              }}
            >
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white",
              index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/80",
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  )
}
