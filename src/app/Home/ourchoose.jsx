'use client';

import Image from 'next/image';
import React from 'react';

const OurChoose = () => {
  return (
    <section className="bg-[#faf2fc] py-16 px-4 text-[#5c146d] text-center">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-sm text-[#a44e9e] font-semibold uppercase tracking-wide">
          Unparalleled Quality. Trusted Services.
        </h3>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">WHY CHOOSE US?</h2>
        <div className="w-16 md:w-24 h-1 bg-[#a44e9e] mx-auto my-4 rounded" />

        <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto mb-12">
          From wedding functions to birthday parties, corporate events to musical functions, we offer a comprehensive range
          of event management services tailored to your needs and budget. Our dedicated team ensures seamless execution,
          allowing you to relax and relish every moment of your event.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          {/* Left Column */}
          <div className="text-sm text-left space-y-6 md:space-y-8">
            <div>
              <h4 className="font-bold uppercase text-xs md:text-sm">Professional Expertise</h4>
              <p className="text-gray-700">
                Our team comprises skilled professionals with vast experience in event planning, ensuring a smooth and
                successful event every time.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase text-xs md:text-sm">Personalized Approach</h4>
              <p className="text-gray-700">
                We believe in understanding your unique preferences and vision to create customized events tailored to your
                individual needs.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase text-xs md:text-sm">Attention to Detail</h4>
              <p className="text-gray-700">
                Every detail matters to us. We meticulously plan and execute each element, leaving no room for errors and
                ensuring a flawless event.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center order-1 md:order-none">
            <div className="border-4 border-[#a44e9e] p-1 rounded-md w-48 sm:w-64 md:w-72 lg:w-80">
              <Image
                src="/v28.jpg"
                alt="Why Choose Us"
                width={300}
                height={400}
                className="rounded-md object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="text-sm text-left space-y-6 md:space-y-8">
            <div>
              <h4 className="font-bold uppercase text-xs md:text-sm">Vendor Relationships</h4>
              <p className="text-gray-700">
                We have established strong relationships with reputable vendors, enabling us to offer high-quality services
                and products at competitive prices.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase text-xs md:text-sm">Stress-Free Experience</h4>
              <p className="text-gray-700">
                Sit back, relax, and enjoy your event while we handle all the logistics, allowing you to focus on creating
                wonderful memories.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase text-xs md:text-sm">Exceptional Guest Experience</h4>
              <p className="text-gray-700">
                Hospitality is at the heart of our service. We go beyond traditional event planning by ensuring that your
                guests not only enjoy the event but also feel genuinely welcomed and valued.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurChoose;
