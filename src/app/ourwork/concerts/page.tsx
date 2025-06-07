// app/ourwork/page.js

import Header from '@/components/Header';
import Footer from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';

export default function OurWorkPage() {
  const categories = [
    { name: 'ALL', href: '/ourwork' },
    { name: 'wedding', href: '/ourwork/wedding' },
    { name: 'CONCERTS', href: '/ourwork/concerts' },
    { name: 'BIRTHDAY', href: '/ourwork/birthday' },
    { name: 'ANNIVERSARY', href: '/ourwork/anniversary' },
  ];

  const galleryImages = [
    
    { src: '/c1.jpg', label: 'Delightful Birthday Cake' },
    { src: '/c2.jpg', label: 'Enchanting Musical Night' },
    { src: '/c3.jpg', label: 'Elegant Event Décor' },
    { src: '/c4.jpg', label: 'Artistic Event Styling' },
    { src: '/c5.jpg', label: 'Dazzling Party Lights' },
    { src: '/c6.jpg', label: 'Warm Guest Welcome' },
    { src: '/c7.jpg', label: 'Stunning Venue Design' },
    { src: '/c8.jpg', label: 'Golden Hour Celebration' },
    { src: '/c9.jpg', label: 'Unforgettable Special Moments' },
    { src: '/c10.jpg', label: 'Charming Event Highlights' },
    { src: '/c11.jpg', label: 'Blissful Celebration' },
     { src: '/c4.jpg', label: 'Blissful Celebration' },
    
  ];

  return (
    <div>
      <Header />

      <section className="relative h-[250px] bg-cover bg-center" style={{ backgroundImage: "url('/qq1.jpg')" }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/40">
          <h1 className="text-4xl font-bold">OUR WORK</h1>
          <p className="text-sm mt-2">HOME / OUR WORK</p>
        </div>
      </section>

      <main className="bg-purple-50 min-h-screen py-12">
        <h2 className="text-xl text-purple-700 italic text-center">Capturing The Joy And Elegance Of Our Events</h2>
        <h1 className="text-5xl font-serif font-bold text-center my-4">SHOWCASE OF EXCELLENCE</h1>

        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href={cat.href}
              className="border border-purple-700 text-purple-700 text-xs font-semibold px-4 py-1.5 rounded hover:bg-purple-700 hover:text-white transition"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 max-w-7xl mx-auto">
          {galleryImages.map((item, i) => (
            <div key={i} className="relative group overflow-hidden">
              <Image
                src={item.src}
                alt={`Event ${i}`}
                width={1200}
                height={800}
                className="w-full h-[450px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-semibold text-center px-4">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="fixed right-0 top-1/2 -translate-y-1/2 bg-purple-700 text-white text-[10px] font-bold tracking-wide px-1 py-2 hover:bg-purple-800" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
          GET A QUOTE
        </button>

        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
          <Image src="/whatsapp.png" alt="WhatsApp" width={48} height={48} className="fixed bottom-6 left-6" />
        </a>
      </main>

      <Footer />
    </div>
  );
}
