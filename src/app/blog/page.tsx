// app/blogs/page.js

import Header from '@/components/Header';
import Footer from '@/components/footer';
import Link from 'next/link';

const blogs = [
  { title: "Top 10 Wedding Trends to Watch in 2025: A Planner’s Insight", image: "/top1.jpg", link: "/blogs/wedding-trends-2025" },
  { title: "Capturing Love: Real Weddings & Magical Moments", image: "/m24.jpg", link: "/blogs/real-weddings-magical-moments" },
  { title: "Setting the Stage: Event Design Inspirations for 2025", image: "/m17.jpg", link: "/blogs/event-design-2025" },
  { title: "The Art of Floral Decor: Bringing Your Vision to Life", image: "/qqq1.jpg", link: "/blogs/floral-decor-vision" },
  { title: "Destination Weddings: A Dreamy Affair Across Borders", image: "/qqq2.jpg", link: "/blogs/destination-weddings-dream" },
  { title: "Lighting Up Your Event: Trends in Event Illumination", image: "/s2.jpg", link: "/blogs/event-lighting-trends" },
  { title: "Catering Tales: Culinary Delights That Wow Your Guests", image: "/m40.jpg", link: "/blogs/catering-delights" },
  { title: "The Power of Storytelling in Wedding Films", image: "/wed9.jpg", link: "/blogs/storytelling-wedding-films" },
  { title: "Eco-Friendly Weddings: Celebrate with a Green Heart", image: "/m35.jpg", link: "/blogs/eco-friendly-weddings" },
  { title: "Bridal Styling Tips: Timeless Elegance for Your Big Day", image: "/m28.jpg", link: "/blogs/bridal-styling-tips" },
];

export default function Blogs() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative text-white">
        <img
          src="/v37.jpg"
          alt="Blog Hero"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[300px] object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold">BLOGS</h2>
          <p className="mt-2 text-sm sm:text-base">HOME / BLOGS</p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-center text-lg sm:text-xl font-bold text-purple-700">Elegance, Expertise, Evoke</h3>
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-serif my-4">OUR BLOGS</h2>
        <div className="w-16 h-1 bg-purple-700 mx-auto my-4"></div>
        <p className="text-center text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Elevate your Celebrations: Explore the World of Evoke Event Co. Where Innovation Meets Elegance, and Your Special Moments Take Center Stage.
        </p>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {blogs.map((blog, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md flex flex-col hover:shadow-lg transition">
              <img src={blog.image} alt={blog.title} className="w-full h-48 sm:h-60 object-cover" />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold mb-4">{blog.title}</h3>
                <Link href={blog.link}>
                  <span className="mt-auto inline-block bg-purple-700 text-white px-4 py-2 rounded text-sm sm:text-base cursor-pointer hover:bg-purple-800">
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed right-4 top-[70%] transform -translate-y-1/2 rotate-90 bg-purple-700 text-white px-4 py-2 rounded shadow-lg text-sm sm:text-base cursor-pointer hover:bg-purple-800 transition">
        GET A QUOTE
      </div>

      <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 left-6 bg-green-500 p-3 sm:p-4 rounded-full shadow-lg">
        <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>

      <Footer />
    </div>
  );
}
