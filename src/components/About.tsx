import Image from 'next/image';

export default function EvokeSection() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-24 text-gray-800">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        
        {/* Left Images */}
        <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-2/5">
          {/* Image 1 */}
          <div className="w-full sm:w-1/2 relative aspect-[4/5] overflow-hidden rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <Image
              src="/wed12.jpg"
              alt="Wedding couple"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              className="rounded-xl"
              priority
            />
          </div>

          {/* Image 2 */}
          <div className="w-full sm:w-1/2 relative aspect-[3/5] -mt-4 sm:-mt-6 lg:-mt-10 overflow-hidden rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <Image
              src="/web12.jpg"
              alt="Dinner table"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              className="rounded-xl"
              priority
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-3/5 mt-6 lg:mt-0">
          <h2 className="text-pink-500 italic text-xl sm:text-2xl mb-2">Welcome To</h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
            EVOKE EVENT & WEDDING PLANNERS
          </h1>
          <p className="mb-4 text-justify text-base sm:text-lg">
            At Evoke Event & Wedding Planners Bhopal, we believe that every celebration is a unique and special moment worth cherishing.
            As one of the best wedding planners in Bhopal, we specialize in wedding planning and crafting extraordinary events that reflect your personality and style...
          </p>
          <p className="mb-4 text-justify text-base sm:text-lg">
            Our commitment to excellence, attention to detail, and personalized service sets us apart, making us the preferred choice for destination wedding planners, party planners, and event management services.
          </p>
          <p className="mb-4 text-justify text-base sm:text-lg">
            We offer comprehensive services including wedding coordination services, event production, event planning and design, event styling, and event logistics...
          </p>

          <button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-md transition text-sm sm:text-base">
            KNOW MORE
          </button>
        </div>
      </div>
    </section>
  );
}
