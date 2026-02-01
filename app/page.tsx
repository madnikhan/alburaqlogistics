import Link from 'next/link';
import { services } from '@/lib/services';
import ImageCarousel from '@/components/ImageCarousel';
import HeroCarousel from '@/components/HeroCarousel';
import StructuredData from '@/components/StructuredData';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Removal Services Birmingham | House & Office Moving',
  description: 'Professional removal and logistics services in Birmingham, UK. House moving, office relocation, removals, and pallet services across the West Midlands. Fully insured, experienced movers.',
  keywords: [
    'removal services Birmingham',
    'house movers Birmingham UK',
    'office moving Birmingham',
    'logistics services West Midlands',
    'pallet delivery Birmingham',
    'removal company Birmingham',
    'professional movers Birmingham',
    'Birmingham removals',
    'West Midlands logistics',
    'moving services Birmingham',
    'removal services near me',
    'man and van Birmingham',
    'cheap removals Birmingham',
    'same day removals Birmingham',
  ],
});

export default function Home() {
  return (
    <>
      <StructuredData type="localBusiness" />
      <div className="bg-white">
        {/* Hero Section with Slideshow */}
      <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        <HeroCarousel
          media={[
            { type: 'video', src: '/hero-video.mp4' },
            { type: 'image', src: '/hero/hero-1.jpg' },
            { type: 'image', src: '/hero/hero-2.jpg' },
            { type: 'image', src: '/hero/hero-3.jpg' },
            { type: 'image', src: '/hero/hero-4.jpg' },
          ]}
          className="h-full"
          autoPlay={true}
          interval={8000}
        />
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="w-full h-48">
                <ImageCarousel
                  images={service.images || [service.image]}
                  alt={service.name}
                  className="h-full"
                  autoPlay={true}
                  interval={4000}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-[#D4AF37] font-semibold">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Serving Birmingham & West Midlands
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
            Al Buraq Logistics is your trusted local removal company in Birmingham, UK. We provide professional 
            removal and logistics services throughout the West Midlands region, including:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 text-sm sm:text-base">
            <div className="bg-[#092439]/5 rounded-lg p-3 sm:p-4 text-gray-800 font-medium">Birmingham</div>
            <div className="bg-[#092439]/5 rounded-lg p-3 sm:p-4 text-gray-800 font-medium">Coventry</div>
            <div className="bg-[#092439]/5 rounded-lg p-3 sm:p-4 text-gray-800 font-medium">Wolverhampton</div>
            <div className="bg-[#092439]/5 rounded-lg p-3 sm:p-4 text-gray-800 font-medium">Solihull</div>
            <div className="bg-[#092439]/5 rounded-lg p-3 sm:p-4 text-gray-800 font-medium">Dudley</div>
            <div className="bg-[#092439]/5 rounded-lg p-3 sm:p-4 text-gray-800 font-medium">Walsall</div>
            <div className="bg-[#092439]/5 rounded-lg p-3 sm:p-4 text-gray-800 font-medium">Sandwell</div>
            <div className="bg-[#092439]/5 rounded-lg p-3 sm:p-4 text-gray-800 font-medium">West Bromwich</div>
          </div>
          <p className="text-sm sm:text-base text-gray-600 mt-6 sm:mt-8">
            And surrounding areas. We also provide long-distance moving services throughout the UK.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#092439] text-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#D4AF37]">
            Why Choose Al Buraq Logistics?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2 text-[#D4AF37]">Fully Insured</h3>
              <p className="text-gray-200">
                All our services come with comprehensive insurance coverage for your peace of mind.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-[#D4AF37]">Fast & Efficient</h3>
              <p className="text-gray-200">
                Experienced team ensures quick and efficient service with minimal disruption.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2 text-[#D4AF37]">Competitive Pricing</h3>
              <p className="text-gray-200">
                Transparent pricing with packages tailored for the Birmingham market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Ready to Move?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
          Get a quote today and experience professional logistics services.
        </p>
        <Link
          href="/book"
          className="bg-[#D4AF37] text-[#092439] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#E5C866] transition inline-block shadow-lg"
        >
          Book Your Service Now
        </Link>
      </section>
    </div>
    </>
  );
}
