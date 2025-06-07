// app/ourwork/page.js

import Header from '@/components/Header';
import Footer from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';

export default function OurWorkPage() {
  const categories = [
    { name: 'ALL', href: '/ourwork' },
    { name: 'wedding', href: '/ourwork/wedding' },
    { name: 'concerts', href: '/ourwork/concerts' },
    { name: 'birthday', href: '/ourwork/birthday' },
    { name: 'ANNIVERSARY', href: '/ourwork/anniversary' },
  ];

  const galleryImages = [
    { src: '/m28.jpg', label: 'Timeless Wedding Celebration' },
    { src: '/a5.jpg', label: 'Warm Guest Welcome' },
    { src: '/a4.jpg', label: 'Stunning Venue Design' },
    { src: '/a1.jpg', label: 'Warm Guest Welcome' },
    { src: '/a2.jpg', label: 'Stunning Venue Design' },
    { src: '/a3.jpg', label: 'Golden Hour Celebration' },
    { src: '/v36.jpg', label: 'Unforgettable Special Moments' },
    { src: '/b1.jpg', label: 'Delightful Birthday Cake' },
    { src: '/b12.jpg', label: 'Delightful Birthday Cake' },
    { src: '/b5.jpg', label: 'Enchanting Musical Night' },
    { src: '/b4.jpg', label: 'Elegant Event Décor' },
    { src: '/b6.jpg', label: 'Artistic Event Styling' },
    { src: '/b13.jpg', label: 'Delightful Birthday Cake' },
    { src: '/b9.jpg', label: 'Warm Guest Welcome' },
    { src: '/b3.jpg', label: 'Stunning Venue Design' },
    { src: '/b10.jpg', label: 'Golden Hour Celebration' },
    { src: '/b11.jpg', label: 'Unforgettable Special Moments' },
    
    { src: '/b2.jpg', label: 'Unforgettable Special Moments' },

    
    { src: '/ev12.jpg', label: 'Electrifying Concert Vibes' },
    { src: '/ev13.jpg', label: 'Joyful Birthday Bash' },
    { src: '/Birthday7.jpg', label: 'Cherished Anniversary Moments' },
    { src: '/qq2.jpg', label: 'Sophisticated Corporate Gala' },
    { src: '/qq3.jpg', label: 'Romantic Wedding Memories' },
    { src: '/s1.jpg', label: 'Grand Stage Setup' },
    { src: '/qq5.jpg', label: 'Scenic Outdoor Gathering' },
    { src: '/qq6.jpg', label: 'Delightful Birthday Cake' },
    { src: '/qq7.jpg', label: 'Enchanting Musical Night' },
    { src: '/qq8.jpg', label: 'Elegant Event Décor' },
    { src: '/qq9.jpg', label: 'Artistic Event Styling' },
    { src: '/qq10.jpg', label: 'Dazzling Party Lights' },
    { src: '/qq11.jpg', label: 'Warm Guest Welcome' },
    { src: '/qq12.jpg', label: 'Stunning Venue Design' },
    { src: '/qq13.jpg', label: 'Golden Hour Celebration' },
    { src: '/s2.jpg', label: 'Unforgettable Special Moments' },
    { src: '/s3.jpg', label: 'Charming Event Highlights' },
    { src: '/s4.jpg', label: 'Blissful Celebration' },
    { src: '/v2.jpg', label: 'Bespoke Event Styling' },
    { src: '/v3.jpg', label: 'Magical Night Under the Stars' },
    { src: '/web12.jpg', label: 'Whimsical Party Decor' },
    { src: '/wed9.jpg', label: 'Classic Wedding Charm' },
    { src: '/v4.jpg', label: 'Romantic Moments Captured' },
    { src: '/wed8.jpg', label: 'Elegant Wedding Styling' },
    { src: '/wed11.jpg', label: 'Timeless Wedding Details' },
    { src: '/wed12.jpg', label: 'Cherished Wedding Moments' },
    { src: '/v5.jpg', label: 'Golden Celebration' },
    { src: '/v6.jpg', label: 'Festive Party Vibes' },
    { src: '/v7.jpg', label: 'Exquisite Event Decor' },
    { src: '/v20.jpg', label: 'Vibrant Party Atmosphere' },
    { src: '/v12.jpg', label: 'Elegant Venue Design' },
    { src: '/v11.jpg', label: 'Chic Event Styling' },
    { src: '/v21.jpg', label: 'Celebration of Love' },
    { src: '/v23.jpg', label: 'Floral Event Highlights' },
    { src: '/v24.jpg', label: 'Stunning Party Backdrop' },
    { src: '/v28.jpg', label: 'Radiant Celebration Moments' },
    { src: '/v31.jpg', label: 'Intimate Event Setting' },
    { src: '/v32.jpg', label: 'Luxurious Event Styling' },
    { src: '/v33.jpg', label: 'Picture-Perfect Moments' },
    { src: '/v34.jpg', label: 'Lively Dance Floor' },
    { src: '/v35.jpg', label: 'Sparkling Event Lights' },
    { src: '/v36.jpg', label: 'Unforgettable Memories' },
    { src: '/s2.jpg', label: 'Charming Celebration Vibes' },
    { src: '/m29.jpg', label: 'Timeless Wedding Celebration' },
    { src: '/m22.jpg', label: 'Electrifying Concert Vibes' },
    { src: '/m27.jpg', label: 'Joyful Birthday Bash' },
    { src: '/m23.jpg', label: 'Cherished Anniversary Moments' },
    { src: '/m18.jpg', label: 'Sophisticated Corporate Gala' },
    { src: '/m21.jpg', label: 'Romantic Wedding Memories' },
    { src: '/m24.jpg', label: 'Grand Stage Setup' },
    { src: '/m20.jpg', label: 'Scenic Outdoor Gathering' },
    { src: '/m9.jpg', label: 'Delightful Birthday Cake' },
    { src: '/m10.jpg', label: 'Enchanting Musical Night' },
    { src: '/m11.jpg', label: 'Elegant Event Décor' },
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
    { src: '/m12.jpg', label: 'Artistic Event Styling' },
    { src: '/m13.jpg', label: 'Dazzling Party Lights' },
    { src: '/m14.jpg', label: 'Warm Guest Welcome' },
    { src: '/qq12.jpg', label: 'Stunning Venue Design' },
    { src: '/qq13.jpg', label: 'Golden Hour Celebration' },
    { src: '/s2.jpg', label: 'Unforgettable Special Moments' },
    { src: '/s3.jpg', label: 'Charming Event Highlights' },
    { src: '/s4.jpg', label: 'Blissful Celebration' },
    { src: '/v2.jpg', label: 'Bespoke Event Styling' },
    { src: '/v3.jpg', label: 'Magical Night Under the Stars' },
    { src: '/web12.jpg', label: 'Whimsical Party Decor' },
    { src: '/wed9.jpg', label: 'Classic Wedding Charm' },
    { src: '/v4.jpg', label: 'Romantic Moments Captured' },
    { src: '/wed8.jpg', label: 'Elegant Wedding Styling' },
    { src: '/wed11.jpg', label: 'Timeless Wedding Details' },
    { src: '/wed12.jpg', label: 'Cherished Wedding Moments' },
    { src: '/v5.jpg', label: 'Golden Celebration' },
    { src: '/v6.jpg', label: 'Festive Party Vibes' },
    { src: '/v7.jpg', label: 'Exquisite Event Decor' },
    { src: '/v20.jpg', label: 'Vibrant Party Atmosphere' },
    { src: '/v12.jpg', label: 'Elegant Venue Design' },
    { src: '/v11.jpg', label: 'Chic Event Styling' },
    { src: '/td1.jpg', label: 'Celebration of Love' },
    { src: '/m17.jpg', label: 'Floral Event Highlights' },
    { src: '/m33.jpg', label: 'Elegant Venue Design' },
    { src: '/m34.jpg', label: 'Chic Event Styling' },
    { src: '/m35.jpg', label: 'Celebration of Love' },
    { src: '/m36.jpg', label: 'Floral Event Highlights' },
  ];

  return (
    <div>
      <Header />

      <section className="relative h-[250px] md:h-[250px] bg-cover bg-center" style={{ backgroundImage: "url('/qq1.jpg')" }}>
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

        {/* Grid without gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {galleryImages.map((item, i) => (
            <div key={i} className="relative group overflow-hidden">
              <Image
                src={item.src}
                alt={`Event ${i}`}
                width={800}
                height={600}
                className="w-full h-80 md:h-96 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-semibold px-4 text-center">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="fixed right-0 top-1/2 -translate-y-1/2 bg-purple-700 text-white text-[10px] font-bold tracking-wide px-1 py-2 hover:bg-purple-800" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
          GET A QUOTE
        </button>

        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
          <Image src="/whatsapp.png" alt="WhatsApp" width={56} height={56} className="fixed bottom-6 left-6" />
        </a>
      </main>

      <Footer />
    </div>
  );
}
