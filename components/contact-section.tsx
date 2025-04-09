import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#F2F1E8]">
      <div className="container px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-16">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-[#1A1A1A] text-lg mb-8">
              Have questions about OPUS MUSIC COMPLEX? Interested in hosting an event or performance? We'd love to hear
              from you. Fill out the form or contact us directly.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-[#1A1A1A]" />
                <span className="text-[#1A1A1A]">+63 (45) 123 4567</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-[#1A1A1A]" />
                <span className="text-[#1A1A1A]">info@opusmusiccomplex.ph</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#1A1A1A]">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-black transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-black transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-black transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[#1A1A1A] font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="border-[#1A1A1A] bg-white" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[#1A1A1A] font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" className="border-[#1A1A1A] bg-white" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-[#1A1A1A] font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject" className="border-[#1A1A1A] bg-white" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[#1A1A1A] font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" className="border-[#1A1A1A] bg-white min-h-[150px]" />
              </div>

              <Button className="bg-[#1A1A1A] hover:bg-black text-white w-full">Send Message</Button>
            </form>

            <div className="mt-12 p-6 bg-white border border-[#1A1A1A]">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-[#1A1A1A] mb-4">
                Stay updated with the latest events, performances, and news from OPUS MUSIC COMPLEX.
              </p>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="border-[#1A1A1A] bg-white" />
                <Button className="bg-[#1A1A1A] hover:bg-black text-white">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
