import React from "react";

export default function OurProcessPage() {
  const steps = [
    "Initial Consultation",
    "Conceptualization",
    "Design and Decoration",
    "Execution",
    "Guest Experience",
  ];

  return (
    <div className="min-h-screen bg-[#fdf4ff] px-4 py-10 text-center text-[#2d033b]">
      <h2 className="text-base md:text-lg font-light text-[#b052c2] italic">
        Planning To Execution
      </h2>
      <h1 className="text-2xl md:text-4xl font-serif font-semibold mb-6">
        OUR PROCESS
      </h1>
      <div className="flex justify-center items-center mb-10">
        <div className="h-0.5 bg-[#b052c2] w-20 md:w-40" />
        <div className="w-2 h-2 bg-[#b052c2] rounded-full mx-2" />
        <div className="h-0.5 bg-[#b052c2] w-20 md:w-40" />
      </div>

      {/* Steps Section */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-[#8e3a8c] flex items-center justify-center text-white font-bold text-xs sm:text-sm md:text-base text-center px-4">
              {step.toUpperCase()}
            </div>
            {/* Connector line */}
            {index !== steps.length - 1 && (
              <div className="hidden sm:block absolute top-full mt-2 w-0.5 h-10 bg-[#8e3a8c]" />
            )}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-[#8e3a8c] mt-12 mx-auto max-w-6xl" />

      {/* Description */}
      <p className="mt-6 max-w-4xl mx-auto text-sm md:text-base text-[#2d033b] px-4">
        Our journey begins with a detailed consultation. We take the time to understand your vision,
        preferences, and goals. Whether it’s a wedding, corporate event, or special celebration,
        this phase allows us to align our services with your unique requirements.
      </p>
    </div>
  );
}
