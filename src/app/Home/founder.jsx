import Image from "next/image";
import React from "react";

export default function FounderMessagePage() {
  return (
    <div className="min-h-screen bg-white px-4 py-12 flex flex-col lg:flex-row items-center justify-center text-[#2d033b]">
      
      {/* Text Section */}
      <div className="w-full lg:w-2/3 max-w-3xl lg:pr-10">
        <h2 className="text-base sm:text-lg md:text-xl text-[#b052c2] italic font-light mb-2">Evoke Event Co.</h2>
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold mb-6">FOUNDER MESSAGE</h1>
        <p className="mb-4 text-sm sm:text-base">
          Welcome to Evoke Event & Wedding Planners!
        </p>
        <p className="mb-4 text-sm sm:text-base">
          At Evoke Event & Wedding Planners, we are passionate about crafting unforgettable
          memories. Our story began over a decade ago with a mission to transform each
          client’s unique vision into a stunning reality. We specialize not just in weddings,
          but in creating exceptional events that leave a lasting impact.
        </p>
        <p className="mb-4 text-sm sm:text-base">
          With more than 10 years of experience, our expert team is dedicated to delivering
          flawless planning and execution for both weddings and events. Whether you dream
          of a grand palace wedding, a tranquil beach ceremony, an intimate celebration in
          a scenic location, or a standout corporate event, we are here to make it happen.
        </p>
        <p className="mb-4 text-sm sm:text-base">
          Our commitment to excellence ensures that every detail is meticulously handled,
          allowing you to relax and enjoy your special day. We pride ourselves on our
          ability to blend creativity and precision, ensuring that every event we manage is
          a true reflection of your style and personality.
        </p>
        <p className="mb-6 text-sm sm:text-base">
          Thank you for considering Evoke Event & Wedding Planners to be part of your
          special moments. We look forward to creating magical and memorable experiences
          together, whether it’s a wedding, a social gathering or a corporate event.
        </p>
        <p className="mb-1 text-sm sm:text-base">--</p>
        <p className="font-bold text-base sm:text-lg">Anshul Daharwal</p>
        <p className="text-sm sm:text-base">Founder & CEO, Evoke Event & Wedding Planners</p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/3 mt-10 lg:mt-0 flex justify-center">
        <div className="rounded shadow-lg overflow-hidden w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80">
          <Image
            src="/v25.jpg"
            alt="Founder"
            width={256}
            height={320}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

    </div>
  );
}
