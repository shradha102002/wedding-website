import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative bg-white text-gray-900">
      {/* Floating Get a Quote Button */}
      <button className="fixed right-0 top-1/2 transform -translate-y-1/2 rotate-90 origin-right bg-purple-700 text-white text-xs sm:text-sm md:text-base py-1.5 sm:py-2 px-3 sm:px-4 rounded-l-full z-50 shadow-md">
        GET A QUOTE
      </button>

      {/* Section Template */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center px-4 py-10 sm:py-12 md:py-16">
        <div>
          <Image src="/v35.jpg" alt="Wedding Celebration" width={800} height={400} className="w-full h-auto object-cover rounded-lg shadow" />
        </div>
        <div>
          <h2 className="text-purple-700 font-bold text-lg sm:text-xl md:text-2xl mb-4">
            EXQUISITE PLANNING AND FLAWLESS EXECUTION
          </h2>
          <p className="text-sm sm:text-base">
            At Evoke Event & Wedding Planners, we excel in delivering exquisite planning and flawless execution for every event. As leading wedding planners in Bhopal and premier event planners in Bhopal, our event management company is committed to making your special day perfect...
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center px-4 py-10 sm:py-12 md:py-16">
        <div className="order-2 md:order-1">
          <h2 className="text-purple-700 font-bold text-lg sm:text-xl md:text-2xl mb-4">
            UNMATCHED CREATIVITY AND ATTENTION TO DETAIL
          </h2>
          <p className="text-sm sm:text-base">
            At Evoke Event & Wedding Planners, our unmatched creativity and attention to detail set us apart. As distinguished wedding planners in Bhopal and experienced event planners in Bhopal, our event management company is dedicated to transforming your dreams into reality...
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image src="/v34.jpg" alt="Wedding Decor" width={800} height={400} className="w-full h-auto object-cover rounded-lg shadow" />
        </div>
      </section>

      {/* Section 3 */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center px-4 py-10 sm:py-12 md:py-16">
        <div>
          <Image src="/v32.jpg" alt="Decor Elements" width={800} height={400} className="w-full h-auto object-cover rounded-lg shadow" />
        </div>
        <div>
          <h2 className="text-purple-700 font-bold text-lg sm:text-xl md:text-2xl mb-4">
            Masterful Designs & Decorations
          </h2>
          <p className="text-sm sm:text-base">
            At Evoke Event & Wedding Planners, our commitment to masterful designs and decorations distinguishes us as top decorators in Bhopal and Indore...
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center px-4 py-10 sm:py-12 md:py-16">
        <div className="order-2 md:order-1">
          <h2 className="text-purple-700 font-bold text-lg sm:text-xl md:text-2xl mb-4">
            Exceptional Wedding Planning
          </h2>
          <p className="text-sm sm:text-base">
            At Evoke Event & Wedding Planners, we pride ourselves on providing exceptional wedding planning services. As premier wedding planners in Bhopal and expert event planners in Bhopal...
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image src="/v24.jpg" alt="Guest Management" width={800} height={400} className="w-full h-auto object-cover rounded-lg shadow" />
        </div>
      </section>

      {/* Section 5 */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center px-4 py-10 sm:py-12 md:py-16">
        <div>
          <Image src="/Occasion2.jpg" alt="Luxury Setup" width={800} height={400} className="w-full h-auto object-cover rounded-lg shadow" />
        </div>
        <div>
          <h2 className="text-purple-700 font-bold text-lg sm:text-xl md:text-2xl mb-4">
            Affordable Excellence
          </h2>
          <p className="text-sm sm:text-base">
            At Evoke Event & Wedding Planners, we believe that exceptional events don’t have to come with an exorbitant price tag...
          </p>
        </div>
      </section>
    </main>
  );
}
