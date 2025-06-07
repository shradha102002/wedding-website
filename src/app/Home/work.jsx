// pages/about.js
import Header from "@/components/Header";

export default function About() {
  return (
    <>
      <Header />

      <div className="relative">
        {/* Hero Section */}
        <div
          className="relative h-48 sm:h-60 md:h-72 lg:h-80 bg-cover bg-center"
          style={{ backgroundImage: 'url("/v46.jpg")' }}
        >
          <div className="absolute inset-0 bg- bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">About Us</h1>
            <p className="text-sm sm:text-base mt-2">Home / About Us</p>
          </div>
        </div>

        {/* Get a Quote Button */}
        <a
          href="/quote"
          className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-purple-700 text-white px-3 py-2 rotate-90 origin-right hover:bg-purple-800 text-xs sm:text-sm"
        >
          Get a Quote
        </a>

        {/* About Content */}
        <div className="max-w-6xl mx-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 items-center">
          {/* Left Image */}
          <div className="md:col-span-1">
            <img
              src="/v36.jpg"
              alt="Evoke Event"
              className="rounded-lg shadow-lg w-full h-64 sm:h-72 md:h-80 object-cover"
            />
          </div>

          {/* Middle Image */}
          <div className="md:col-span-1">
            <img
              src="/v32.jpg"
              alt="Evoke Event Table Setup"
              className="rounded-lg shadow-lg w-full h-64 sm:h-72 md:h-80 object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="md:col-span-1 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Welcome To <br /> Evoke Event & Wedding Planners
            </h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              At Evoke Events & Wedding Planners, we believe that every celebration is a unique and special moment meant to be cherished forever. With a deep understanding of traditions, culture, and personal style, we craft stunning events that are tailored to your personality and vision. Our team of expert planners, designers, and decorators brings passion and creativity to every detail, ensuring unforgettable experiences for you and your guests.
            </p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Based in the vibrant wedding hub of Bhopal, Evoke Event Co. is led by Aayushi, an award-winning planner known for her signature touch and innovative designs. From elegant weddings to luxurious corporate gatherings, we handle it all with finesse and precision. Our deep connections with top vendors and venues ensure a smooth planning process, so you can relax and enjoy every moment.
            </p>
            <a
              href="/contact"
              className="inline-block mt-4 px-5 py-2 bg-purple-700 text-white font-semibold rounded hover:bg-purple-800 text-sm sm:text-base"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
