'use client';

import Image from 'next/image';

const services = [
  {
    title: 'Wedding Planning Management',
    img: '/wed8.jpg',
  },
  {
    title: 'Occasion/Event Management',
    img: '/occasion2.jpg',
  },
  {
    title: 'Hospitality & Guest Management',
    img: '/Hospitality3.jpg',
  },
  {
    title: 'Wedding Decor & Designs',
    img: '/ev13.jpg',
  },
  {
    title: 'Concerts & Live Shows',
    img: '/concerts6.jpg',
  },
  {
    title: 'Birthday Party Planners',
    img: '/Birthday7.jpg',
  },
  {
    title: 'Destination Wedding Planners',
    img: '/ev12.jpg',
  },
  {
    title: 'Traditional & Social Events',
    img: '/Traditional 9.jpg',
  },
  {
    title: 'Event Essentials',
    img: '/ev11.jpg',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-16 py-12 bg-[#f6ebf6] text-center">
      <h2 className="text-xs sm:text-sm uppercase text-[#aa4f9c] tracking-widest font-medium">
        Crafting Dreams, Events & Life's Precious Celebrations
      </h2>

      <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-[#222]">OUR SERVICES</h1>

      <p className="max-w-4xl mx-auto text-gray-700 mb-12 text-sm sm:text-base px-2">
        At [Your Brand], we specialize in seamless event planning, offering tailored
        services from intimate gatherings to grand celebrations. Our professional team
        ensures every detail aligns with your vision, delivering unforgettable experiences
        for weddings, concerts, corporate events, and more.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
          >
            {/* Service Image */}
            <Image
              src={service.img}
              alt={service.title}
              width={600}
              height={400}
              className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Title at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-4 z-10">
              <h3 className="text-white text-base sm:text-lg font-semibold text-center drop-shadow-md">
                {service.title}
              </h3>
            </div>

            {/* Message on hover/touch */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <p className="text-lg font-semibold">View More Details</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
