export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F2F1E8]">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">About Us</h2>
          <p className="text-[#1A1A1A] max-w-md text-base md:text-lg mt-4 md:mt-0">
            A cultural landmark where architecture and acoustics create transformative experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-[#1A1A1A] mb-6 text-base md:text-lg">
              OPUS MUSIC COMPLEX is a state-of-the-art cultural center designed to celebrate and elevate the musical
              arts in the Philippines. Our innovative architectural design creates spaces that not only accommodate
              performances but enhance the acoustic experience for both performers and audiences.
            </p>
            <p className="text-[#1A1A1A] mb-8 md:mb-10 text-base md:text-lg">
              Founded on the belief that music has the power to transform communities, our complex serves as a hub for
              artistic expression, education, and cultural exchange. We bring together local and international talent,
              fostering a vibrant ecosystem where musical traditions are honored and new expressions are born.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 md:mt-12">
              <div className="border-l-4 border-[#1A1A1A] pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-2">Our Mission</h3>
                <p className="text-[#1A1A1A] text-sm md:text-base">
                  To create a dynamic cultural landmark that fosters artistic expression, community engagement, and
                  musical innovation in Clark Global City.
                </p>
              </div>

              <div className="border-l-4 border-[#1A1A1A] pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-2">Our Vision</h3>
                <p className="text-[#1A1A1A] text-sm md:text-base">
                  To become a globally recognized center for musical excellence where diverse communities come together
                  to experience the transformative power of music.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] md:h-[600px] overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="OPUS MUSIC COMPLEX exterior"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-[#1A1A1A] p-3 md:p-4 text-white">
              <p className="text-xs md:text-sm font-medium">Opening June 2025 in Clark Global City</p>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-6 md:p-8 relative">
            <div className="absolute top-0 left-0 w-12 md:w-16 h-1 bg-[#1A1A1A]"></div>
            <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-3 md:mb-4">World-Class Facilities</h3>
            <p className="text-[#1A1A1A] text-sm md:text-base">
              Our venues feature cutting-edge acoustic design, state-of-the-art technology, and versatile spaces that
              can accommodate everything from intimate recitals to grand orchestral performances.
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 relative">
            <div className="absolute top-0 left-0 w-12 md:w-16 h-1 bg-[#1A1A1A]"></div>
            <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-3 md:mb-4">Cultural Programming</h3>
            <p className="text-[#1A1A1A] text-sm md:text-base">
              We curate a diverse calendar of events featuring classical masterpieces, contemporary compositions,
              traditional Filipino music, and experimental works that push the boundaries of musical expression.
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 relative">
            <div className="absolute top-0 left-0 w-12 md:w-16 h-1 bg-[#1A1A1A]"></div>
            <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-3 md:mb-4">Community Engagement</h3>
            <p className="text-[#1A1A1A] text-sm md:text-base">
              Through educational programs, workshops, and community initiatives, we make music accessible to all and
              nurture the next generation of musicians, composers, and music lovers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
