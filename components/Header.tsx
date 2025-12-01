'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#092439] shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-[#D4AF37] hover:text-[#E5C866] transition">
            Al Buraq Logistics
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/services/removals" className="text-white hover:text-[#D4AF37] transition">
              Removals
            </Link>
            <Link href="/services/office-moving" className="text-white hover:text-[#D4AF37] transition">
              Office Moving
            </Link>
            <Link href="/services/house-moving" className="text-white hover:text-[#D4AF37] transition">
              House Moving
            </Link>
            <Link href="/services/pallets" className="text-white hover:text-[#D4AF37] transition">
              Pallets
            </Link>
            <Link href="/contact" className="text-white hover:text-[#D4AF37] transition">
              Contact
            </Link>
            <Link 
              href="/book" 
              className="bg-[#D4AF37] text-[#092439] px-4 sm:px-6 py-2 rounded-lg hover:bg-[#E5C866] transition text-sm sm:text-base font-semibold"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#D4AF37] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-[#0d3552]">
            <div className="flex flex-col space-y-3 pt-4">
              <Link
                href="/services/removals"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-[#D4AF37] transition py-2"
              >
                Removals
              </Link>
              <Link
                href="/services/office-moving"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-[#D4AF37] transition py-2"
              >
                Office Moving
              </Link>
              <Link
                href="/services/house-moving"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-[#D4AF37] transition py-2"
              >
                House Moving
              </Link>
              <Link
                href="/services/pallets"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-[#D4AF37] transition py-2"
              >
                Pallets
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-[#D4AF37] transition py-2"
              >
                Contact
              </Link>
              <Link
                href="/book"
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#D4AF37] text-[#092439] px-6 py-2 rounded-lg hover:bg-[#E5C866] transition text-center mt-2 font-semibold"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

