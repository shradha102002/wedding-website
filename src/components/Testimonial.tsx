'use client';
import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Adhishree Verma',
    image: '/icon3.jpg',
    text: `We cannot thank Evoke Event company and Anshul enough for the magic they created for our event! From the beautiful decor to the seamless coordination...`,
    couple: 'Adhishree & Shikhar',
  },
  // Add more testimonials if needed
];

export default function TestimonialSection() {
  const [current] = useState(0); // only using state to show 1st testimonial (static)

  return (
    <section className="bg-black text-white py-12 sm:py-16 lg:py-20 text-center px-4">
      <h2 className="text-base sm:text-lg text-purple-300 font-cursive italic mb-2">
        What Our Clients Say
      </h2>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold uppercase mb-2">
        Testimonial
      </h1>
      <div className="w-16 sm:w-24 h-1 mx-auto bg-purple-600 my-4 sm:my-6" />

      <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8 sm:mb-10 text-gray-400">
        Discover why clients trust Evoke Event & Wedding Planners, Bhopal’s premier event management company...
      </p>

      <div className="flex flex-col items-center space-y-4 sm:space-y-6 max-w-2xl sm:max-w-3xl mx-auto">
        <span className="text-4xl sm:text-5xl text-purple-300 font-serif leading-none">“</span>
        <Image
          src={testimonials[current].image}
          alt={testimonials[current].name}
          width={80}
          height={80}
          className="rounded-full border-4 border-purple-500"
        />
        <p className="italic px-4 sm:px-8 text-sm sm:text-base md:text-lg">
          {testimonials[current].text}
        </p>
        <p className="text-sm sm:text-base mt-2">{testimonials[current].name}</p>
        <p className="text-xs sm:text-sm text-gray-400">{testimonials[current].couple}</p>
      </div>
    </section>
  );
}
