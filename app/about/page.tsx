import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
        About Al Buraq Logistics
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            Al Buraq Logistics is a trusted removal and logistics company serving Birmingham and the wider West Midlands region. 
            With years of experience in the industry, we specialize in providing professional, reliable, and efficient moving 
            services for homes and businesses.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            Our team of experienced movers is committed to making your move as smooth and stress-free as possible. 
            Whether you're moving a small apartment or relocating a large office, we have the expertise and equipment 
            to handle your needs.
          </p>
        </section>

        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#092439]/10 rounded-lg p-6 border border-[#D4AF37]/30">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🏠 House Moving</h3>
              <p className="text-gray-700">
                Complete house removal services for properties of all sizes, from studio apartments to large family homes.
              </p>
            </div>
            <div className="bg-[#092439]/10 rounded-lg p-6 border border-[#D4AF37]/30">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🏢 Office Moving</h3>
              <p className="text-gray-700">
                Specialized office relocation services with minimal business disruption and IT equipment handling.
              </p>
            </div>
            <div className="bg-[#092439]/10 rounded-lg p-6 border border-[#D4AF37]/30">
              <h3 className="text-xl font-bold text-gray-900 mb-2">📦 Removals</h3>
              <p className="text-gray-700">
                Professional removal services with full packing, loading, transportation, and unloading.
              </p>
            </div>
            <div className="bg-[#092439]/10 rounded-lg p-6 border border-[#D4AF37]/30">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🚚 Pallet Services</h3>
              <p className="text-gray-700">
                Efficient pallet collection and delivery services throughout Birmingham and beyond.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <ul className="space-y-4 text-base sm:text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
              <div>
                <strong className="text-gray-900">Fully Insured:</strong> All our services come with comprehensive 
                insurance coverage for your peace of mind.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
              <div>
                <strong className="text-gray-900">Experienced Team:</strong> Our professional movers are trained 
                and experienced in handling all types of moves.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
              <div>
                <strong className="text-gray-900">Competitive Pricing:</strong> Transparent pricing with packages 
                tailored for the Birmingham market. Base prices include up to 50 miles.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
              <div>
                <strong className="text-gray-900">Flexible Scheduling:</strong> We offer flexible scheduling to 
                accommodate your needs, including weekends and evenings.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
              <div>
                <strong className="text-gray-900">Customer Service:</strong> We're committed to providing excellent 
                customer service and ensuring your complete satisfaction.
              </div>
            </li>
          </ul>
        </section>

        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Coverage Area</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            We proudly serve Birmingham and the wider West Midlands region, including:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm sm:text-base">
            <div className="text-gray-700">• Birmingham</div>
            <div className="text-gray-700">• Coventry</div>
            <div className="text-gray-700">• Wolverhampton</div>
            <div className="text-gray-700">• Solihull</div>
            <div className="text-gray-700">• Dudley</div>
            <div className="text-gray-700">• Walsall</div>
            <div className="text-gray-700">• Sandwell</div>
            <div className="text-gray-700">• West Bromwich</div>
          </div>
          <p className="text-base sm:text-lg text-gray-700 mt-4">
            And surrounding areas. We also provide long-distance moving services throughout the UK.
          </p>
        </section>

        <section className="text-center bg-[#092439]/10 rounded-lg p-6 sm:p-8 border border-[#D4AF37]/30">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to Move?</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Get a free quote today and experience professional logistics services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-[#092439] text-[#D4AF37] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#0d3552] transition shadow-lg"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#D4AF37] hover:text-[#092439] transition"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

