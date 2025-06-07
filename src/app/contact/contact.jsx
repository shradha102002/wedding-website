import Header from "@/components/Header";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <section className="contact-page">
        {/* Banner */}
        <div
          className="banner relative h-48 sm:h-64 md:h-72 lg:h-80 flex items-center justify-center text-center text-white"
          style={{
            backgroundImage: "url('/v46.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg- bg-opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Contact Us</h2>
            <p className="text-sm sm:text-base">Home / Contact Us</p>
          </div>
        </div>

        {/* Get a Quote Section */}
        <section className="get-a-quote max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-2xl sm:text-3xl font-semibold mb-8">Get a Quote</h3>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Form */}
            <form className="flex-1 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Name *" className="border p-3 rounded w-full" />
                <input type="text" placeholder="Event Date" className="border p-3 rounded w-full" />
                <input type="text" placeholder="Phone Number *" className="border p-3 rounded w-full" />
                <input type="text" placeholder="City" className="border p-3 rounded w-full" />
              </div>
              <textarea placeholder="Your Message" rows="4" className="border p-3 rounded w-full"></textarea>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border p-4 rounded bg-green-100">
                <div className="flex items-center gap-2 text-green-700 text-sm sm:text-base">
                  <span className="font-bold">Success!</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 flex items-center gap-1 mt-2 sm:mt-0">
                  <img src="/cloud1.png" alt="Cloudflare" className="h-4" />
                  <span>
                    <a href="https://www.cloudflare.com" target="_blank" className="underline">
                      Privacy
                    </a>{" "}
                    |{" "}
                    <a href="https://www.cloudflare.com" target="_blank" className="underline">
                      Terms
                    </a>
                  </span>
                </div>
              </div>

              <button type="submit" className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded w-full sm:w-auto">
                Submit
              </button>
            </form>

            {/* Contact Info */}
            <div className="flex-1 space-y-4 text-purple-700">
              <h4 className="text-xl sm:text-2xl font-semibold">Contact Info</h4>
              <p className="text-sm sm:text-base">
                <img src="/add.png" alt="Address" className="inline h-5 mr-2" />
                10 Number, E-3/114, Arera Colony, Bhopal, MP, India – 462016
              </p>
              <p className="text-sm sm:text-base">
                <img src="/ph.png" alt="Phone" className="inline h-5 mr-2" />
                +91 626 513 3903
              </p>
              <p className="text-sm sm:text-base">
                <img src="/email.png" alt="Email" className="inline h-5 mr-2" />
                info@evokeevent.com
              </p>

              {/* Social Links */}
              <div className="flex space-x-4 mt-4">
                <a href="#"><img src="/fec1.png" alt="Facebook" className="h-6 hover:scale-110 transition" /></a>
                <a href="#"><img src="/inst.png" alt="Instagram" className="h-6 hover:scale-110 transition" /></a>
                <a href="#"><img src="/you.png" alt="YouTube" className="h-6 hover:scale-110 transition" /></a>
                <a href="#"><img src="/in2.png" alt="LinkedIn" className="h-6 hover:scale-110 transition" /></a>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Button */}
        <button className="fixed top-1/2 right-0 bg-purple-600 text-white px-4 py-2 transform -translate-y-1/2 rotate-90 hover:bg-purple-700 transition">
          Get a Quote
        </button>
      </section>

      {/* Google Map Embed */}
      <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14676.69211394431!2d77.42528995!3d23.219436250000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f79784fc9%3A0x5cfb84c119041b85!2sEvoke%20Event%20Management%20||%20Wedding%20Planner%20in%20Bhopal!5e0!3m2!1sen!2sin!4v1717052682676!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </>
  );
}
