import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getServiceBySlug, services } from '@/lib/services';
import { getPackagesByService } from '@/lib/packages';
import PackageCard from '@/components/PackageCard';
import { ServiceType } from '@/types';

// Generate static params for all service slugs
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.name} - Al Buraq Logistics`,
    description: service.description,
  };
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    notFound();
  }

  // Service slug matches serviceType, so we can use it directly
  const packages = getPackagesByService(service.slug as ServiceType);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
          {service.name}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
          {service.description}
        </p>
        <div className="bg-[#092439]/10 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-[#D4AF37]/30">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">What's Included:</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#D4AF37] mr-2 flex-shrink-0">✓</span>
                <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          Choose Your Package
        </h2>
        {packages.length === 0 ? (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
            <p className="text-yellow-800 font-semibold mb-2">No packages available</p>
            <p className="text-yellow-700">Packages for this service are currently being updated. Please check back soon.</p>
            <Link 
              href="/contact" 
              className="mt-4 inline-block bg-[#092439] text-[#D4AF37] px-6 py-2 rounded-lg hover:bg-[#0d3552] transition"
            >
              Contact Us
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} serviceSlug={service.slug} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

