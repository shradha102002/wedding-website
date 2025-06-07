'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const images = [
  '/m29.jpg',
  '/haldi1.jpg',
  '/dancing1.jpg',
  '/kalash2.jpg',
  '/m34.jpg',
  '/m27.jpg',
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100vh] sm:h-[90vh] md:h-[80vh] lg:h-screen overflow-hidden">

      {/* Background Slider */}
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          fill
          className={`absolute object-cover transition-opacity duration-1000 ease-in-out ${
            current === index ? 'opacity-100' : 'opacity-0'
          }`}
          priority={index === 0}
        />
      ))}

      {/* Top Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full z-20 bg-black/40 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-lg font-semibold">Your Logo</div>
          <div className="flex gap-4 text-sm sm:text-base">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/service" className="hover:underline">service</Link>
            <Link href="/work" className="hover:underline">Our Work</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Next Slide Arrow */}
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 text-white text-4xl sm:text-5xl font-bold hover:scale-110 transition-transform"
      >
        ›
      </button>

      {/* Link to Services Page */}
      

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/your_number" // Replace with your real number
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-[40px] left-4 z-10"
      >
        
      </a>
    </section>
  );
}
