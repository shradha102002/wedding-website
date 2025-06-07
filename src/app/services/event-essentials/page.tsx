import Header from '@/components/Header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function WeddingPlanningPage() {
  return (
    <div>
      <Header />
{/* Hero Section */}
<section className="relative bg-black text-white">
  <img
    src="/v46.jpg"
    alt="Wedding Hero"
    className="w-full h-64 sm:h-80 md:h-96 lg:h-[200px] xl:h-[300px] object-cover opacity-70"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
      WEDDING PLANNERS IN BHOPAL INDORE
    </h2>
    <p className="mt-2 text-sm sm:text-base md:text-lg">
      HOME / WEDDING PLANNERS IN BHOPAL INDORE
    </p>
  </div>
</section>

      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col gap-4">
          <section className="max-w-6xl mx-auto px-4 py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Image
      src="/a3.jpg"
      alt="Wedding Invite"
      width={512}
      height={512}
      className="rounded-lg shadow-md object-cover w-full h-auto"
    />
    <Image
      src="/wed12.jpg"
      alt="Wedding Couple"
      width={512}
      height={512}
      className="rounded-lg shadow-md object-cover w-full h-auto"
    />
  </div>
</section>

        </div>
        <div>
          <p className="text-pink-600 italic font-semibold mb-2">Best Wedding Planners in Bhopal Indore</p>
          <h2 className="text-3xl font-bold mb-4">Evoke Event Co. by Anshul (EEC)</h2>
          <p className="text-gray-700 mb-6">
            Evoke Event & Wedding Planners specializes in impeccable wedding planning and management services, ensuring every detail of your special day is flawlessly executed. As experts in Bhopal, Indore, and across India, we offer comprehensive wedding services including venue selection, decor, catering, entertainment, and logistics.
          </p>
          <p className="text-gray-700 mb-6">
            Our experienced team meticulously plans and coordinates each aspect, from intimate ceremonies to grand celebrations, to reflect your unique style and vision. From budget management to on-site coordination, we ensure you relax and enjoy your wedding day stress-free.
          </p>
          <Link href="/contact">
            <span className="inline-block bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800 transition">Contact Us</span>
          </Link>
        </div>
      </section>

      {/* Venue Booking Section */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h3 className="text-xl text-purple-700 font-semibold uppercase mb-4">Venue: Selection & Booking Assistance</h3>
        <p className="text-gray-700">
          Choosing the right venue is one of the most crucial decisions in your wedding journey. We help you discover breathtaking locations across India—from palatial forts and beachfront resorts to lush garden properties and luxury hotels. Whether your dream is a grand destination wedding in Udaipur, Jaipur, Goa or a sophisticated city wedding in Indore, our team provides end-to-end assistance in sourcing and booking venues that align with your vision.
        </p>
      </section>

      {/* Floating Buttons */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 rotate-90 bg-purple-700 text-white px-4 py-2 rounded shadow-md z-50">
        GET A QUOTE
      </div>

      <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 left-6 bg-green-500 p-4 rounded-full shadow-lg z-50">
        <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
      </a>

      <Footer />
    </div>
  );
}
