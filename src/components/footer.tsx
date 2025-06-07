export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 px-4 sm:px-6 lg:px-8 py-12 text-sm border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo and About */}
        <div>
          <img src="/img12.png" alt="Evoke Event Co." className="h-12 mb-4" />
          <p className="text-justify text-gray-600 text-sm sm:text-base leading-relaxed">
            Evoke Event & Wedding Planners, the top-rated wedding planners in Bhopal and Indore,
            specialize in premium event planning. With years of experience, we create unforgettable
            weddings and corporate events. Trust us to execute your vision flawlessly. Let our
            expertise in wedding planning and event coordination turn your dreams into reality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-purple-800 font-semibold mb-3 tracking-wide uppercase text-sm">
            Quick Links
          </h4>
          <ul className="space-y-1 text-gray-700">
            {[
              "Home",
              "About",
              "Services",
              "Wedding Checklist",
              "Our Work",
              "Blogs",
              "FAQ",
              "Offices",
              "Contact",
              "Terms and Conditions",
              "Privacy Policy",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-purple-800 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-purple-800 font-semibold mb-3 tracking-wide uppercase text-sm">
            Our Services
          </h4>
          <ul className="space-y-1 text-gray-700">
            {[
              "Birthday Party Planners",
              "Concerts And Live Shows",
              "Corporate Event Management Company",
              "Event Essentials",
              "Traditional & Social Events",
              "Wedding Decor & Designs",
              "Wedding Hospitality & Guest Management",
              "Wedding Planning & Management",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-purple-800 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-purple-800 font-semibold mb-3 tracking-wide uppercase text-sm">
            Contact Us
          </h4>
          <p className="text-gray-700 mb-2">
            <strong>Address:</strong> 10 Number, E-3/114, Arera Colony, Bhopal, Madhya Pradesh, India - 462016
          </p>
          <p className="mt-2">
            <strong>Phone:</strong>{" "}
            <a href="tel:+916265133903" className="text-purple-800 hover:underline">
              +91 626 513 3903
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@evokeevent.com" className="text-purple-800 hover:underline">
              info@evokeevent.com
            </a>
          </p>
          <div className="flex gap-2 mt-4">
            {["facebook", "instagram", "linkedin", "twitter", "youtube"].map((name) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="bg-purple-800 hover:bg-purple-700 text-white p-2 rounded-full w-8 h-8 flex items-center justify-center text-xs font-semibold uppercase"
              >
                {name[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
