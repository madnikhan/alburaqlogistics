import { Package } from '@/types';
import Link from 'next/link';

interface PackageCardProps {
  pkg: Package;
  serviceSlug: string;
}

export default function PackageCard({ pkg, serviceSlug }: PackageCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200 hover:shadow-xl transition-shadow">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{pkg.description}</p>
      <div className="mb-3 sm:mb-4">
        <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">
          From £{pkg.price.toFixed(2)}
        </div>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Base price (includes up to 50 miles)
        </p>
      </div>
      <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm sm:text-base">
            <span className="text-[#D4AF37] mr-2 flex-shrink-0">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
        <p>Estimated time: {pkg.estimatedHours} hours</p>
        <p>Max distance: {pkg.maxDistance} miles</p>
      </div>
      <Link
        href={`/book?service=${serviceSlug}&package=${pkg.id}`}
        className="block w-full bg-[#092439] text-[#D4AF37] text-center py-2.5 sm:py-3 rounded-lg hover:bg-[#0d3552] transition font-semibold text-sm sm:text-base"
      >
        Select Package
      </Link>
    </div>
  );
}

