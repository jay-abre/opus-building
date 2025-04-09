"use client"

import type React from "react"

import { forwardRef, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number
  children: React.ReactNode
}

const ParallaxSection = forwardRef<HTMLDivElement, ParallaxSectionProps>(
  ({ speed = 0.1, children, className, ...props }, ref) => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
      const handleScroll = () => {
        if (!sectionRef.current) return

        const { top } = sectionRef.current.getBoundingClientRect()
        const scrollPosition = window.scrollY
        const windowHeight = window.innerHeight

        // Only apply parallax when section is in view
        if (top < windowHeight && top > -sectionRef.current.offsetHeight) {
          const newOffset = (top - windowHeight) * speed
          setOffset(newOffset)
        }
      }

      window.addEventListener("scroll", handleScroll)
      handleScroll() // Initial calculation

      return () => window.removeEventListener("scroll", handleScroll)
    }, [speed])

    return (
      <section
        ref={(node) => {
          // Handle both the forwarded ref and the internal ref
          if (typeof ref === "function") {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
          sectionRef.current = node
        }}
        className={cn(className)}
        style={{ transform: `translateY(${offset}px)` }}
        {...props}
      >
        {children}
      </section>
    )
  },
)

ParallaxSection.displayName = "ParallaxSection"

export default ParallaxSection
