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
import HeroSlideshow from "@/components/hero-slideshow"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  const heroSlides = [
    {
      image: "/images/RENDERS/STAR HIGH RES.png",
      title: "OPUS MUSIC COMPLEX",
      subtitle: "All aboard for a cultural journey where architecture meets acoustics",
    },
    {
      image: "/images/RENDERS/TOCCATA.png",
      title: "TOCCATA CONCERT HALL",
      subtitle: "Versatile by design, exceptional by experience.",
    },
    {
      image: "/images/RENDERS/SON UPPER BOX.png",
      title: "SONATA MUSIC HALL",
      subtitle: "",
    },
    {
      image: "/images/RENDERS/UPPER PLAZA.png",
      title: "OPUS GALLERY",
      subtitle: "Where visual arts complement our musical programming",
    },
  ]

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
          isScrolled ? "bg-[#F2F1E8] border-b border-[#E5E3D7] shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-8">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <div className="flex items-center cursor-pointer px-2 py-1 hover:text-[#8B7E66] transition-colors">
                  <Menu className="h-5 w-5 mr-2" />
                  <span className="font-medium text-sm md:text-base">Menu</span>
                </div>
              </SheetTrigger>
              <SheetContent side="left" className="bg-[#F2F1E8] w-[280px] sm:w-[350px]">
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

                  <div className="mt-8 pt-4 border-t border-[#E5E3D7]">
                    <h3 className="text-xs uppercase tracking-wider text-[#8B7E66] font-medium mb-3">Quick Links</h3>
                    <Link
                      href="#events"
                      className="text-[#1A1A1A] hover:text-[#8B7E66] transition-colors flex items-center py-2 border-b border-[#E5E3D7]"
                    >
                      Events & Tickets <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                    <Link
                      href="#contact"
                      className="text-[#1A1A1A] hover:text-[#8B7E66] transition-colors flex items-center py-2 border-b border-[#E5E3D7]"
                    >
                      Join & Support <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#E5E3D7]">
                    <h3 className="text-xs uppercase tracking-wider text-[#8B7E66] font-medium mb-3">Hours</h3>
                    <div className="text-sm space-y-2">
                      <div className="flex justify-between py-1 border-b border-[#E5E3D7]">
                        <span className="text-[#1A1A1A] font-medium">Monday-Thursday</span>
                        <span className="text-[#1A1A1A]">11am – 10pm</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#E5E3D7]">
                        <span className="text-[#1A1A1A] font-medium">Friday-Saturday</span>
                        <span className="text-[#1A1A1A]">10am – 11pm</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-[#1A1A1A] font-medium">Sunday</span>
                        <span className="text-[#1A1A1A]">10am – 10pm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <div className="hidden md:flex items-center ml-10 space-x-8">
              <Link
                href="#events"
                className={`transition-colors flex items-center font-medium ${
                  isScrolled ? "text-[#1A1A1A] hover:text-[#8B7E66]" : "text-white hover:text-white/80"
                }`}
              >
                Events & Tickets <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className={`transition-colors flex items-center font-medium ${
                  isScrolled ? "text-[#1A1A1A] hover:text-[#8B7E66]" : "text-white hover:text-white/80"
                }`}
              >
                Join & Support <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <div className={`relative transition-colors ${isScrolled ? "text-[#1A1A1A]" : "text-white"}`}>
              <span className="text-xl md:text-2xl font-bold tracking-widest">OPUS</span>
              <div
                className={`absolute -bottom-1 left-0 w-full h-0.5 ${isScrolled ? "bg-[#8B7E66]" : "bg-white"} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              ></div>
              <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-[#8B7E66]"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-[#8B7E66]"></div>
            </div>
          </Link>

          <div className="flex items-center">
            {/* Open Today - Visible on mobile */}
            <div className="block md:hidden relative group">
              <div
                className={`text-xs px-3 py-2 border border-transparent hover:border-[#E5E3D7] rounded-sm cursor-default ${
                  isScrolled ? "text-[#1A1A1A]" : "text-white"
                }`}
              >
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

            {/* Open Today - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block relative group">
              <div
                className={`text-xs px-3 py-2 border border-transparent hover:border-[#E5E3D7] rounded-sm cursor-default ${
                  isScrolled ? "text-[#1A1A1A]" : "text-white"
                }`}
              >
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

            {/* Search, User, Cart icons - Hidden on mobile, visible on desktop */}
            <div className="hidden md:flex items-center space-x-1">
              <Button
                variant="ghost"
                size="icon"
                className={`h-10 w-10 rounded-full ${
                  isScrolled ? "text-[#1A1A1A] hover:bg-[#1A1A1A]/10" : "text-white hover:bg-white/10"
                }`}
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`h-10 w-10 rounded-full ${
                  isScrolled ? "text-[#1A1A1A] hover:bg-[#1A1A1A]/10" : "text-white hover:bg-white/10"
                }`}
              >
                <User className="h-5 w-5" />
                <span className="sr-only">Log in</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`h-10 w-10 rounded-full ${
                  isScrolled ? "text-[#1A1A1A] hover:bg-[#1A1A1A]/10" : "text-white hover:bg-white/10"
                }`}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* 1. HOME */}
        <section id="home" className="relative h-screen overflow-hidden">
          <HeroSlideshow slides={heroSlides} />

          <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center">
            <div className="mt-auto mb-16 md:mb-24 px-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#about" className="inline-block">
                  <Button className="bg-[#F2F1E8] hover:bg-white text-black rounded-none px-6 py-5 md:px-8 md:py-6 w-full sm:w-auto">
                    Learn more <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </Link>
                <Link href="#events" className="inline-block">
                  <Button className="bg-black hover:bg-[#333] text-white rounded-none px-6 py-5 md:px-8 md:py-6 w-full sm:w-auto">
                    Buy Tickets
                  </Button>
                </Link>
              </div>
              <p className="text-lg md:text-xl text-white opacity-80 mt-8 md:mt-12">Jun 2025 – Opening Season</p>
            </div>
          </div>

          <div className="absolute bottom-8 md:bottom-12 left-0 right-0 flex justify-center z-20">
            <Link href="#about" className="animate-bounce">
              <ChevronDown className="h-6 w-6 md:h-8 md:w-8 text-white" />
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

      <footer className="border-t border-[#E5E3D7] bg-[#F2F1E8] py-12 md:py-16">
        <div className="container px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <span className="text-base md:text-lg font-bold tracking-tight text-[#1A1A1A]">OPUS MUSIC COMPLEX</span>
              </div>
              <p className="text-sm md:text-base text-[#1A1A1A] max-w-xs">
                Elevating the Cultural Scene through Architecture and Interdisciplinary Approaches in Clark Global City,
                Philippines
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#1A1A1A] mb-3 md:mb-4 uppercase text-sm tracking-widest">Explore</h3>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
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
              <h3 className="font-bold text-[#1A1A1A] mb-3 md:mb-4 uppercase text-sm tracking-widest">Visit</h3>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
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
          <div className="mt-10 md:mt-16 border-t border-[#E5E3D7] pt-6 md:pt-8 text-center text-[#1A1A1A] text-sm">
            <p>© 2025 OPUS MUSIC COMPLEX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
