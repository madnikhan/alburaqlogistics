import Link from 'next/link';
import { services } from '@/lib/services';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
        Our Services
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 text-center max-w-2xl mx-auto px-4">
        Professional logistics and removal services across Birmingham and the West Midlands
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.slug}`}
            className="bg-white rounded-lg shadow-md p-6 sm:p-8 hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#092439] rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-3xl sm:text-4xl">📦</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{service.name}</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{service.description}</p>
            <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
              {service.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start text-sm sm:text-base text-gray-700">
                  <span className="text-[#D4AF37] mr-2 flex-shrink-0">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <span className="text-[#D4AF37] font-semibold text-sm sm:text-base">View Packages →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

