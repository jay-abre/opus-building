"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown, Clock, Menu, Search, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import AboutSection from "@/components/about-section"
import EventsSection from "@/components/events-section"
import SpacesSection from "@/components/spaces-section"
import VisitSection from "@/components/visit-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      // Determine active section based on scroll position
      const sections = ["home", "about", "events", "spaces", "visit", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#F2F1E8]">
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-[#F2F1E8] border-b border-[#E5E3D7] shadow-sm" : "bg-[#F2F1E8]"
        }`}
      >
        <div className="container flex h-20 items-center justify-between px-4 md:px-8">
          <div className="flex items-center space-x-10">
            <Sheet>
              <SheetTrigger>
                <div className="flex items-center cursor-pointer px-2 py-1">
                  <Menu className="h-5 w-5 mr-2" />
                  <span className="font-medium">Menu</span>
                </div>
              </SheetTrigger>
              <SheetContent side="left" className="bg-[#F2F1E8] w-80">
                <div className="flex flex-col gap-1 mt-12">
                  <h3 className="text-xs uppercase tracking-wider text-[#8B7E66] font-medium mb-3">Navigation</h3>
                  {[
                    { id: "home", label: "Home" },
                    { id: "about", label: "About Us" },
                    { id: "events", label: "Upcoming Events" },
                    { id: "spaces", label: "Spaces" },
                    { id: "visit", label: "Visit Us" },
                    { id: "contact", label: "Contact Us" },
                  ].map((item) => (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-[#1A1A1A] hover:text-[#8B7E66] transition-colors text-lg py-2 border-b border-[#E5E3D7]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#events"
                className="text-[#1A1A1A] hover:text-[#8B7E66] transition-colors flex items-center font-medium"
              >
                Events & Tickets <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="text-[#1A1A1A] hover:text-[#8B7E66] transition-colors flex items-center font-medium"
              >
                Join & Support <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <span className="text-xl font-bold tracking-tight text-[#1A1A1A]">OPUS MUSIC COMPLEX</span>
          </Link>

          <div className="flex items-center space-x-6">
            <div className="hidden md:block relative group">
              <div className="text-xs text-[#1A1A1A] px-3 py-2 border border-transparent hover:border-[#E5E3D7] rounded-sm cursor-default">
                <span className="block font-medium">Open today</span>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>11am – 10pm</span>
                </div>
              </div>
              <div className="absolute top-full right-0 mt-1 w-52 bg-white shadow-lg rounded-sm z-50 hidden group-hover:block border border-[#E5E3D7]">
                <div className="p-3">
                  <h4 className="font-medium text-xs mb-3 text-[#1A1A1A] uppercase tracking-wider">Weekly Hours</h4>
                  <ul className="text-xs space-y-2">
                    <li className="flex justify-between py-1 border-b border-[#F2F1E8]">
                      <span className="text-[#1A1A1A] font-medium">Monday</span>
                      <span className="text-[#1A1A1A]">11am – 10pm</span>
                    </li>
                    <li className="flex justify-between py-1 border-b border-[#F2F1E8]">
                      <span className="text-[#1A1A1A] font-medium">Tuesday</span>
                      <span className="text-[#1A1A1A]">11am – 10pm</span>
                    </li>
                    <li className="flex justify-between py-1 border-b border-[#F2F1E8]">
                      <span className="text-[#1A1A1A] font-medium">Wednesday</span>
                      <span className="text-[#1A1A1A]">11am – 10pm</span>
                    </li>
                    <li className="flex justify-between py-1 border-b border-[#F2F1E8]">
                      <span className="text-[#1A1A1A] font-medium">Thursday</span>
                      <span className="text-[#1A1A1A]">11am – 10pm</span>
                    </li>
                    <li className="flex justify-between py-1 border-b border-[#F2F1E8]">
                      <span className="text-[#1A1A1A] font-medium">Friday</span>
                      <span className="text-[#1A1A1A]">10am – 11pm</span>
                    </li>
                    <li className="flex justify-between py-1 border-b border-[#F2F1E8]">
                      <span className="text-[#1A1A1A] font-medium">Saturday</span>
                      <span className="text-[#1A1A1A]">10am – 11pm</span>
                    </li>
                    <li className="flex justify-between py-1">
                      <span className="text-[#1A1A1A] font-medium">Sunday</span>
                      <span className="text-[#1A1A1A]">10am – 10pm</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">Log in</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* 1. HOME */}
        <section id="home" className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="h-full w-full">
              <img
                src="/placeholder.svg?height=1080&width=1920"
                alt="Symphonic Skies architectural exterior"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">OPUS</h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              All aboard for a cultural journey where architecture meets acoustics
            </p>
            <p className="text-white text-xl mb-12">Jun 2025 – Opening Season</p>
            <div className="flex gap-4">
              <Link href="#about" className="inline-block">
                <Button className="bg-[#F2F1E8] hover:bg-white text-black rounded-none px-8 py-6">
                  Learn more <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#events" className="inline-block">
                <Button className="bg-black hover:bg-[#333] text-white rounded-none px-8 py-6">Buy Tickets</Button>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-12 left-0 right-0 flex justify-center">
            <Link href="#about" className="animate-bounce">
              <ChevronDown className="h-8 w-8 text-white" />
            </Link>
          </div>
        </section>

        {/* 2. ABOUT US */}
        <AboutSection />

        {/* 3. UPCOMING EVENTS */}
        <EventsSection />

        {/* 4. SPACES */}
        <SpacesSection />

        {/* 5. VISIT US */}
        <VisitSection />

        {/* 6. CONTACT US */}
        <ContactSection />
      </main>

      <footer className="border-t border-[#E5E3D7] bg-[#F2F1E8] py-16">
        <div className="container px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-lg font-bold tracking-tight text-[#1A1A1A]">OPUS MUSIC COMPLEX</span>
              </div>
              <p className="text-[#1A1A1A] max-w-xs">
                Elevating the Cultural Scene through Architecture and Interdisciplinary Approaches in Clark Global City,
                Philippines
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#1A1A1A] mb-4 uppercase text-sm tracking-widest">Explore</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#home" className="text-[#1A1A1A] hover:text-[#8B7E66]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-[#1A1A1A] hover:text-[#8B7E66]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="text-[#1A1A1A] hover:text-[#8B7E66]">
                    Upcoming Events
                  </Link>
                </li>
                <li>
                  <Link href="#spaces" className="text-[#1A1A1A] hover:text-[#8B7E66]">
                    Spaces
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#1A1A1A] mb-4 uppercase text-sm tracking-widest">Visit</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#visit" className="text-[#1A1A1A] hover:text-[#8B7E66]">
                    Visit Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-[#1A1A1A] hover:text-[#8B7E66]">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#1A1A1A] hover:text-[#8B7E66]">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 border-t border-[#E5E3D7] pt-8 text-center text-[#1A1A1A]">
            <p>© 2025 OPUS MUSIC COMPLEX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
