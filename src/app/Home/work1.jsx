'use client';

import React from 'react';

export default function Home() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="text-center py-12 sm:py-16 bg-purple-50 px-4">
        <h2 className="text-lg sm:text-xl text-purple-600 italic font-semibold mb-2">EEC By Anshul</h2>
        <h1 className="text-2xl sm:text-4xl font-bold tracking-widest uppercase">Harmony in Event Crafting</h1>
        <div className="mt-4 border-t-2 border-purple-400 w-16 mx-auto"></div>
        <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-gray-700">
          From wedding functions to birthday parties, corporate events to musical functions, we offer a comprehensive range of event management services tailored to your needs and budget. Our dedicated team ensures seamless execution, allowing you to relax and relish every moment of your event.
        </p>
      </section>

      {/* Approach - Values - Vision */}
      <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Our Approach */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-purple-600 mb-4">Our Approach</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            With a passion for creating unforgettable experiences, we go beyond the ordinary to infuse creativity and innovation into every event we undertake. Our meticulous attention to detail guarantees that every aspect, from venue selection to décor and entertainment, is curated to perfection. Whether it’s a grand celebration or an intimate gathering, our goal is to transform your vision into a reality.
          </p>
        </div>

        {/* Our Values */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-purple-600 mb-4">Our Values</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            <strong>Professionalism:</strong> We prioritize our clients' needs, offering tailored solutions and tangible results while exceeding expectations. <br />
            <strong>Integrity:</strong> Trust, honesty, and transparency are the cornerstones of our work culture. We value the relationships we build with clients and vendors alike. <br />
            <strong>Innovation:</strong> Creativity is our driving force. We bring fresh ideas to the table, producing compelling, creative work that aligns with our clients’ goals.
          </p>
        </div>

        {/* Our Vision */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-purple-600 mb-4">Our Vision</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Evoke Event Co. by Anshul (EEC) is devoted to turning your dreams into reality. With a focus on quality and 100% client satisfaction, we leverage creativity, experience, and management skills to reduce your involvement, allowing you to savor every joyous moment of your special day. Our commitment extends beyond expectations, ensuring a seamless and memorable experience.
          </p>
        </div>
      </section>

      {/* Image Gallery with 3 Images */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <img src="/v4.jpg" alt="Event 1" className="rounded-xl shadow-md object-cover w-full h-56 sm:h-64 md:h-72" />
        <img src="/v7.jpg" alt="Event 2" className="rounded-xl shadow-md object-cover w-full h-56 sm:h-64 md:h-72" />
        <img src="/v11.jpg" alt="Event 3" className="rounded-xl shadow-md object-cover w-full h-56 sm:h-64 md:h-72" />
      </section>
    </main>
  );
}
