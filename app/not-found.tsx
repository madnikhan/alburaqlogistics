import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        The page you're looking for doesn't exist. It may have been moved or deleted.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="/"
          className="bg-[#092439] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0d3552] transition inline-block"
        >
          Return Home
        </Link>
        <Link
          href="/services"
          className="bg-[#D4AF37] text-[#092439] px-6 py-3 rounded-lg font-semibold hover:bg-[#E5C866] transition inline-block"
        >
          View Our Services
        </Link>
        <Link
          href="/contact"
          className="border-2 border-[#092439] text-[#092439] px-6 py-3 rounded-lg font-semibold hover:bg-[#092439] hover:text-white transition inline-block"
        >
          Contact Us
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Popular Pages</h3>
          <ul className="space-y-1 text-gray-600">
            <li><Link href="/" className="hover:text-[#D4AF37]">Home</Link></li>
            <li><Link href="/services" className="hover:text-[#D4AF37]">Services</Link></li>
            <li><Link href="/about" className="hover:text-[#D4AF37]">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Our Services</h3>
          <ul className="space-y-1 text-gray-600">
            <li><Link href="/services/removals" className="hover:text-[#D4AF37]">Removals</Link></li>
            <li><Link href="/services/house-moving" className="hover:text-[#D4AF37]">House Moving</Link></li>
            <li><Link href="/services/office-moving" className="hover:text-[#D4AF37]">Office Moving</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Get Help</h3>
          <ul className="space-y-1 text-gray-600">
            <li><Link href="/contact" className="hover:text-[#D4AF37]">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-[#D4AF37]">FAQ</Link></li>
            <li><Link href="/book" className="hover:text-[#D4AF37]">Book Now</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

