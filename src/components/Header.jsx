'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    { name: "Wedding Planning & Management", href: "/services/weddingplanning" },
    { name: "Corporate Event Management", href: "/services/corporate-events" },
    { name: "Hospitality & Guest Management", href: "/services/hospitality" },
    { name: "Wedding Decor & Designs", href: "/services/wedding" },
    { name: "Concerts & Live Shows", href: "/services/concerts" },
    { name: "Birthday Party Planners", href: "/services/birthday-party" },
    { name: "Traditional & Social Events", href: "/services/traditional-events" },
    { name: "Event Essentials", href: "/services/event-essentials" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <Image src="/img12.png" alt="Evoke Logo" width={160} height={60} priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-purple-700 hover:underline">Home</Link>

          {/* Dropdown for Services */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="text-purple-700 hover:underline focus:outline-none">Services</button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-1 bg-white shadow-lg border border-purple-200 w-64 z-50">
                {services.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-purple-700 hover:bg-purple-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/ourwork" className="text-purple-700 hover:underline">Our Work</Link>
          <Link href="/blog" className="text-purple-700 hover:underline">Blogs</Link>
          <Link href="/Home" className="text-purple-700 hover:underline">About</Link>
          <Link href="/contact" className="text-purple-700 hover:underline">Contact</Link>
        </nav>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-block border-2 border-purple-700 text-purple-700 px-4 py-1 rounded hover:bg-purple-700 hover:text-white transition text-sm font-semibold"
        >
          WHATSAPP US →
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-purple-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-purple-200 shadow-md">
          <nav className="px-4 py-4 space-y-3 text-sm font-medium text-purple-700">
            <Link href="/" className="block hover:underline">Home</Link>

            {/* Collapsible Services List */}
            <details className="group">
              <summary className="cursor-pointer hover:underline">Services</summary>
              <div className="pl-4 mt-2 space-y-1">
                {services.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block text-purple-700 hover:underline"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </details>

            <Link href="/ourwork" className="block hover:underline">Our Work</Link>
            <Link href="/blog" className="block hover:underline">Blogs</Link>
            <Link href="/Home" className="block hover:underline">About</Link>
            <Link href="/contact" className="block hover:underline">Contact</Link>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-4 border-2 border-purple-700 text-purple-700 px-4 py-2 rounded hover:bg-purple-700 hover:text-white transition font-semibold"
            >
              WHATSAPP US →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
