import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#051620] text-white mt-12 sm:mt-20">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#D4AF37]">Al Buraq Logistics</h3>
            <p className="text-sm sm:text-base text-gray-300">
              Professional logistics and removal services across Birmingham and the West Midlands.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-[#D4AF37]">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-300">
              <li><Link href="/services/removals" className="hover:text-[#D4AF37] transition">Removals</Link></li>
              <li><Link href="/services/office-moving" className="hover:text-[#D4AF37] transition">Office Moving</Link></li>
              <li><Link href="/services/house-moving" className="hover:text-[#D4AF37] transition">House Moving</Link></li>
              <li><Link href="/services/pallets" className="hover:text-[#D4AF37] transition">Pallets</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-[#D4AF37]">Company</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-300">
              <li><Link href="/about" className="hover:text-[#D4AF37] transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#D4AF37] transition">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-[#D4AF37] transition">FAQ</Link></li>
              <li><Link href="/book" className="hover:text-[#D4AF37] transition">Book Now</Link></li>
              <li><Link href="/my-bookings" className="hover:text-[#D4AF37] transition">My Bookings</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-[#D4AF37]">Legal</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-300">
              <li><Link href="/privacy" className="hover:text-[#D4AF37] transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#D4AF37] transition">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-[#D4AF37]">Contact</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-300">
              <li>Birmingham, UK</li>
              <li>Phone: 0121 XXX XXXX</li>
              <li>Email: info@alburaqlogistics.co.uk</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#0d3552] mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-300 text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} Al Buraq Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

