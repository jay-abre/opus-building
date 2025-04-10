"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
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
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const slideshowRef = useRef<HTMLDivElement>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

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

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <div
      ref={slideshowRef}
      className={cn("relative h-full w-full overflow-hidden", className)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 md:mb-6 transition-transform duration-700 ease-out transform translate-y-0 opacity-100"
              style={{
                transitionDelay: "200ms",
                transform: index === currentSlide ? "translateY(0)" : "translateY(20px)",
                opacity: index === currentSlide ? 1 : 0,
              }}
            >
              {slide.title}
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl text-white/90 max-w-xs sm:max-w-md md:max-w-2xl mb-8 transition-transform duration-700 ease-out"
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

      {/* Navigation Arrows - Hidden on small screens, visible on medium and up */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 z-20 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 md:p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white hidden sm:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 z-20 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 md:p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white hidden sm:block"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-1.5 md:h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white",
              index === currentSlide ? "bg-white w-6 md:w-8" : "bg-white/50 hover:bg-white/80 w-1.5 md:w-2",
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  )
}
