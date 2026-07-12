import Link from 'next/link';
import { services } from '@/lib/services';
import ImageCarousel from '@/components/ImageCarousel';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Our Services - Removal & Logistics Services in Gloucester, UK',
  description: 'Professional removal and logistics services in Gloucester, UK. House moving, office relocation, removals, and pallet services. Serving Gloucester, Cheltenham, Stroud, Bristol, and Gloucestershire.',
  keywords: [
    'removal services Gloucester',
    'house moving services',
    'office relocation Gloucester',
    'pallet services Gloucestershire',
    'removal company services',
  ],
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <StructuredData
        type="breadcrumb"
        breadcrumbItems={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
        ]}
      />
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
        Our Services
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 text-center max-w-2xl mx-auto px-4">
        Professional logistics and removal services across Gloucester and Gloucestershire
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.slug}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="w-full h-64">
              <ImageCarousel
                images={service.images || [service.image]}
                alt={service.name}
                className="h-full"
                autoPlay={true}
                interval={4000}
              />
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{service.name}</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{service.description}</p>
              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                {service.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="text-[#D4AF37] mr-2 shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <span className="text-[#D4AF37] font-semibold text-sm sm:text-base">Get a Quote →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}

