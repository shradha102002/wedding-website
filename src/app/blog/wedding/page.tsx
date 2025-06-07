// app/blogs/[slug]/page.js

import Header from '@/components/Header';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function BlogDetail() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <img
          src="/images/blog-hero.jpg"
          alt="Blog Hero"
          className="w-full h-72 object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-center">
            TOP 10 WEDDING TRENDS TO WATCH IN 2025: <br />
            EXPERT INSIGHTS BY EVOKE EVENT CO.
          </h2>
          <p className="mt-2 text-sm">Home / Blogs / Top 10 Wedding Trends 2025</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Blog Content */}
        <div className="lg:col-span-2">
          <img src="/images/blog1.jpg" alt="Blog Main" className="w-full h-96 object-cover mb-8" />
          <h2 className="text-3xl font-bold mb-4">Expert Insights by Evoke Event Co.</h2>
          <p className="text-gray-700 mb-4">
            Planning a wedding in 2025? Whether you dream of a grand destination wedding or a personalized ceremony at home, staying updated with the latest trends is essential.
            At <strong>Evoke Event Co.</strong>, recognized among the <Link href="/wedding">Best Wedding Planners</Link> near you, we bring you the freshest ideas, innovative styling, and expert coordination to make your big day extraordinary...
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Sustainable Weddings: Style Meets Consciousness</h3>
          <p className="text-gray-700 mb-4">
            Eco-friendly weddings are not just a trend—they're a statement. Couples are now opting for digital invitations, reusable décor, biodegradable confetti, and zero-waste catering. These elegant green weddings combine tradition with responsibility...
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Micro Weddings with High-End Detailing</h3>
          <p className="text-gray-700 mb-4">
            Smaller guest lists mean more budget per guest, allowing for exquisite catering, personalized favors, and curated entertainment experiences...
          </p>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/blogs/top-10-wedding-trends-2025" className="text-purple-700 hover:underline">
                Top 10 Wedding Trends to Watch in 2025
              </Link>
              <p className="text-sm text-gray-500">April 29, 2025</p>
            </li>
            <li>
              <Link href="/blogs/smart-wedding-budget-tips" className="text-purple-700 hover:underline">
                Smart Wedding Budget Planning: Tips from the Best Wedding Planners in Bhopal
              </Link>
              <p className="text-sm text-gray-500">April 27, 2025</p>
            </li>
            <li>
              <Link href="/blogs/haldi-ceremony-ideas" className="text-purple-700 hover:underline">
                Haldi Ceremony Magic: Vibrant Ideas & Planning Tips
              </Link>
              <p className="text-sm text-gray-500">April 15, 2025</p>
            </li>
            <li>
              <Link href="/blogs/professional-wedding-planner" className="text-purple-700 hover:underline">
                Why Hire a Professional Wedding Planner for Your Big Day
              </Link>
              <p className="text-sm text-gray-500">April 5, 2025</p>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex space-x-4 mt-8">
            <a href="#" target="_blank">
              <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" target="_blank">
              <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" target="_blank">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#" target="_blank">
              <img src="/icons/youtube.svg" alt="YouTube" className="w-6 h-6" />
            </a>
          </div>
        </aside>
      </section>

      {/* Get a Quote Button */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 rotate-90 bg-purple-700 text-white px-4 py-2 rounded">
        GET A QUOTE
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 p-4 rounded-full shadow-lg"
      >
        <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
      </a>

      <Footer />
    </div>
  );
}
