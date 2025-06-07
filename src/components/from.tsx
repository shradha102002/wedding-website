export default function CallbackForm() {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-pink-700 italic text-lg mb-2">Personalized Assistance</p>
      <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-4">REQUEST A CALL BACK</h2>

      <div className="w-20 border-b-2 border-pink-700 mx-auto mb-6 relative">
        <span className="absolute left-1/2 -translate-x-1/2 bg-black px-2 text-pink-700 text-xl">•</span>
      </div>

      <p className="max-w-3xl mx-auto text-gray-300 mb-10 text-sm sm:text-base leading-relaxed">
        Contact Evoke Event & Wedding Planners, Bhopal’s top-rated event management company.
        Whether you're planning a wedding or corporate event, our experienced team of event & wedding
        planners is here to help. Fill out the form below to request a callback. We look forward to discussing
        how we can make your event memorable and stress-free.
      </p>

      <form className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
        <input
          type="text"
          placeholder="Name *"
          required
          className="w-full p-3 border border-white bg-transparent text-white placeholder-white focus:outline-none focus:border-pink-700"
        />

        <input
          type="tel"
          placeholder="Contact Number *"
          required
          className="w-full p-3 border border-white bg-transparent text-white placeholder-white focus:outline-none focus:border-pink-700"
        />

        <textarea
          placeholder="Message *"
          required
          rows={1}
          className="w-full p-3 border border-white bg-transparent text-white placeholder-white focus:outline-none focus:border-pink-700 resize-none"
        ></textarea>

        <div className="col-span-1 md:col-span-3">
          <button
            type="submit"
            className="w-full md:w-auto mt-4 px-6 py-3 bg-pink-700 text-white font-semibold hover:bg-pink-800 transition duration-200"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </section>
  );
}
