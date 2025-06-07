'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null); // ✅ Removed TS type for JS

  const services = [
    {
      src: '/v6.jpg',
      title: 'WEDDING PLANNING & MANAGEMENT',
      description: 'At Evoke Event & Wedding Planners, we bring your dream wedding to life...',
      link: '/wedding/wedding-planning',
    },
    {
      src: '/web12.jpg',
      title: 'CORPORATE EVENTS',
      description: 'Whether it’s a high-profile conference...',
      link: '/services/corporate-events',
    },
    {
      src: '/a4.jpg',
      title: 'THEME PARTIES',
      description: 'Let your imagination run wild!',
      link: '/services/theme-parties',
    },
    {
      src: '/b3.jpg',
      title: 'BIRTHDAY CELEBRATIONS',
      description: 'Make birthdays extra special...',
      link: '/services/birthday-celebrations',
    },
    {
      src: '/a1.jpg',
      title: 'ANNIVERSARY EVENTS',
      description: 'Celebrate love and togetherness...',
      link: '/services/anniversary-events',
    },
    {
      src: '/b9.jpg',
      title: 'BABY SHOWERS',
      description: 'Welcome the newest member of your family...',
      link: '/services/baby-showers',
    },
    {
      src: '/v35.jpg',
      title: 'HOSPITALITY & GUEST MANAGEMENT',
      description: 'Ensure a seamless experience for your guests...',
      link: '/services/hospitality-management',
    },
    {
      src: '/g1.jpg',
      title: 'TRADITIONAL & SOCIAL EVENTS',
      description: 'Embrace the beauty of culture and tradition...',
      link: '/services/traditional-events',
    },
    {
      src: '/c3.jpg',
      title: 'MUSIC EVENTS',
      description: 'Ignite the stage with electrifying music events!',
      link: '/services/music-events',
    },
  ];

  return (
    <main>
      <Header />

      <section
        className="services-hero bg-cover text-center py-24"
        style={{ backgroundImage: 'url(/ar1.jpg)' }}
      >
        <h1 className="text-white text-4xl font-bold">SERVICES</h1>
        <p className="text-white mt-2">HOME / SERVICES</p>
      </section>

      <section className="bg-[#f5eafc] py-16 px-4">
        <h2 className="text-center text-purple-700 text-xl font-cursive">
          Crafting Dream Events With Precision And Passion
        </h2>
        <h3 className="text-3xl font-semibold text-center mt-2 mb-8">OUR SERVICES</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link key={index} href={service.link}>
              <div className="relative w-full h-80 rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src={service.src}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 p-4 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-lg font-bold mb-2">
                    <span className="text-purple-400">&#9679;</span> {service.title}
                  </h3>
                  <div className="bg-purple-600 text-white py-1 px-3 text-sm rounded w-fit hover:bg-purple-700">
                    Read More
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
