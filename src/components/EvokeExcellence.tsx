'use client';

export default function EvokeExcellence() {
  const features = [
    { title: 'VERSATILE VENUE SOLUTIONS', icon: '/icon2.jpg' },
    { title: 'IMPECCABLE HOSPITALITY', icon: '/icon2.jpg' },
    { title: 'EXQUISITE VENUE DECORATION', icon: '/icon2.jpg' },
    { title: 'EFFICIENT TRANSPORTATION & LOGISTICS', icon: '/icon2.jpg' },
    { title: 'CAPTIVATING PHOTOGRAPHY', icon: '/icon2.jpg' },
    { title: 'CULINARY DELIGHTS AND CATERING', icon: '/icon2.jpg' },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-purple-500 text-sm uppercase tracking-widest mb-3">
          Crafting Unforgettable Moments
        </p>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-semibold mb-4">
          EVOKE EXCELLENCE
        </h2>
        <div className="flex justify-center mb-6">
          <span className="h-1 w-8 sm:w-10 bg-purple-600 mr-2"></span>
          <span className="h-1 w-1 bg-purple-600 rounded-full"></span>
          <span className="h-1 w-8 sm:w-10 bg-purple-600 ml-2"></span>
        </div>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-12 px-2 sm:px-8">
          Discover a spectrum of services tailored for your special day. Embark on your journey with
          Evoke Event Co., your top-rated wedding planners & event management company in Bhopal.
          Explore a spectrum of services tailored for your special day, featuring versatile venue
          solutions, impeccable hospitality, captivating cinematography, and culinary delights.
          We ensure every detail is a masterpiece, crafting an unforgettable experience for your
          dream wedding. Trust the best in Bhopal, trust Evoke Event Co. for all your upcoming events.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 px-2 sm:px-0">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-purple-700 p-4 sm:p-5 rounded-full shadow-lg">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                />
              </div>
              <p className="text-[10px] sm:text-xs md:text-sm font-semibold mt-3 leading-snug px-1">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
