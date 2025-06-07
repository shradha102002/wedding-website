'use client';

export default function SignatureCelebrations() {
  const services = [
    "Best Event Planners in Bhopal",
    "Best Wedding Planners in Bhopal",
    "Corporate Event Management in Bhopal",
    "Wedding Decoration in Bhopal",
    "RSVP & Guest Management in Bhopal",
    "Event Logistics management in Bhopal",
    "Complete Wedding Package in Bhopal",
    "Event Planning & Designing Company in Bhopal",
    "Hospitality Management in Bhopal",
    "Wedding Planner in Bhopal",
    "Theme Wedding Decoration in Bhopal",
    "Event Management Company in Bhopal",
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16">
        {/* Left Content */}
        <div className="lg:w-1/3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight sm:leading-snug mb-4">
            SIGNATURE <br />
            CELEBRATIONS IN <br />
            BHOPAL: <br />
            EXPLORE OUR KEY <br />
            EVENT SERVICES
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
            Elevating celebrations with signature services. Impeccable hospitality, stunning venues, impressive decoration & concepts and many more for creating unforgettable moments.
          </p>
          <button className="bg-purple-800 hover:bg-purple-900 text-white text-sm sm:text-base font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded transition">
            CALL NOW
          </button>
        </div>

        {/* Right Content */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-purple-500 px-4 py-3 sm:px-5 sm:py-4 rounded-lg flex items-start text-sm sm:text-base hover:shadow-md transition"
            >
              <span className="text-purple-600 mr-2 mt-1">✓</span>
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
