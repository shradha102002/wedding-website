'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function CallbackForm() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', form);
    // Add API call or form handling logic here
  };

  return (
    <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-12 text-center">
      {/* Vertical GET A QUOTE Badge */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right z-10">
        <button className="bg-purple-800 text-white px-4 py-2 text-xs tracking-wider">
          GET A QUOTE
        </button>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-24 left-5 z-20 group">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/what1.jpg"
            alt="WhatsApp"
            width={50}
            height={50}
            className="rounded-full shadow-lg"
          />
          <div className="absolute -top-8 left-0 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Chat on WhatsApp
          </div>
        </a>
      </div>

      {/* Headings */}
      <h3 className="text-purple-600 text-lg sm:text-xl font-[cursive] mb-1">
        Personalized Assistance
      </h3>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-4">
        REQUEST A CALL BACK
      </h2>

      {/* Divider */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <div className="w-20 h-px bg-purple-700"></div>
        <div className="w-2 h-2 bg-purple-700 rounded-full"></div>
        <div className="w-20 h-px bg-purple-700"></div>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-700 mb-10 max-w-2xl mx-auto px-2">
        Just a Call Away, Navigate Your Event Planning with Ease by Requesting a Callback
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:flex-wrap gap-4 items-center justify-center px-2"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name *"
          required
          className="w-full sm:w-[48%] md:w-[30%] p-3 border rounded-md text-sm focus:outline-purple-500"
        />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Contact Number *"
          required
          className="w-full sm:w-[48%] md:w-[30%] p-3 border rounded-md text-sm focus:outline-purple-500"
        />
        <input
          type="text"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message *"
          required
          className="w-full sm:w-full md:w-[30%] p-3 border rounded-md text-sm focus:outline-purple-500"
        />
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="mt-4 bg-purple-800 text-white px-8 py-2 rounded-md tracking-wide font-medium text-sm hover:bg-purple-900 transition"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </section>
  );
}
