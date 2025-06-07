export default function WhyChooseUs() {
  return (
    <section className="bg-pink-50 py-16 px-4 sm:px-6 lg:px-12 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-md sm:text-lg text-purple-600 italic font-light">
          Unmatched Quality, Expert Service
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase my-2">
          Why Choose Us?
        </h2>
        <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-600 mt-4 px-2">
          From wedding functions to birthday bashes, corporate events to musical functions in Bhagal or Bihar —
          our comprehensive range of event management solutions tailored to your needs and budget. Our dedicated
          team ensures seamless execution, allowing you to relax and enjoy your special moments stress-free.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          {/* Left Features */}
          <div className="space-y-10 text-right md:pr-4 px-2 md:px-0">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-purple-700">Professional Expertise</h4>
              <p className="text-sm sm:text-base mt-1">
                With years of experience in planning Indian weddings and events, we ensure flawless execution every step of the way.
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-purple-700">Personalized Approach</h4>
              <p className="text-sm sm:text-base mt-1">
                Our planning is tailored to your unique needs, style, and budget to create the event of your dreams.
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-purple-700">Attention to Detail</h4>
              <p className="text-sm sm:text-base mt-1">
                We meticulously manage everything from vendor coordination to last-minute fixes, ensuring nothing is overlooked.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <img
              src="/ca1.jpg"
              alt="Why Choose Us"
              className="rounded-lg shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-10 text-left md:pl-4 px-2 md:px-0">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-purple-700">Vendor Relationships</h4>
              <p className="text-sm sm:text-base mt-1">
                Years of collaboration with leading vendors helps us offer high-quality services at competitive prices.
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-purple-700">Stress-Free Experience</h4>
              <p className="text-sm sm:text-base mt-1">
                We handle the logistics and challenges so you can focus on enjoying your event without worry.
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-purple-700">Exceptional Guest Experience</h4>
              <p className="text-sm sm:text-base mt-1">
                Hospitality is at our core. Your guests’ comfort and enjoyment is always our top priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
