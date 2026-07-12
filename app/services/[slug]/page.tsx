import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getServiceBySlug, services } from '@/lib/services';
import ImageCarousel from '@/components/ImageCarousel';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import type { Metadata } from 'next';

// Generate static params for all service slugs
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const serviceKeywords: Record<string, string[]> = {
    'removals': ['removal services Gloucester', 'house removals', 'professional removals', 'removal company'],
    'office-moving': ['office moving Gloucester', 'office relocation', 'commercial moving', 'business relocation'],
    'house-moving': ['house moving Gloucester', 'home removals', 'residential moving', 'house movers'],
    'pallets': ['pallet services Gloucester', 'pallet delivery', 'pallet collection', 'pallet transport'],
    'parcel-delivery': ['parcel delivery Gloucestershire', 'parcel delivery Stroud', 'parcel delivery Cheltenham', 'parcel delivery Bristol'],
  };

  return generateSEOMetadata({
    title: `${service.name} Services Gloucester`,
    description: `${service.description} Professional ${service.name.toLowerCase()} services in Gloucester and Gloucestershire. Fully insured, experienced team, competitive pricing.`,
    keywords: [
      ...(serviceKeywords[slug] || []),
      'Gloucester',
      'Gloucestershire',
      'UK',
    ],
    path: `/services/${slug}`,
  });
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

  return (
    <>
      <StructuredData type="service" service={service} />
      <StructuredData
        type="breadcrumb"
        breadcrumbItems={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: service.name, url: `/services/${service.slug}` },
        ]}
      />
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
        <div className="w-full h-64 sm:h-80 md:h-96 mb-6 sm:mb-8">
          <ImageCarousel
            images={service.images || [service.image]}
            alt={service.name}
            className="h-full"
            autoPlay={true}
            interval={5000}
          />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
          {service.name === 'Removals' ? 'Professional Moving & Removals Services' : 
           service.name === 'House Moving' ? 'House Moving Services Gloucester' :
           service.name === 'Office Moving' ? 'Office Moving & Relocation Services' :
           service.name === 'Parcel Delivery' ? 'Parcel Delivery – Gloucestershire, Stroud, Cheltenham & Bristol' :
           service.name}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
          {service.description}
        </p>
        <div className="bg-[#092439]/10 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-[#D4AF37]/30">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">What's Included:</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#D4AF37] mr-2 shrink-0">✓</span>
                <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          Get a Quote
        </h2>
        <div className="bg-[#092439]/5 border border-[#092439]/20 rounded-xl p-6 sm:p-8 text-center max-w-2xl mx-auto">
          <p className="text-gray-700 mb-6">
            Pricing depends on your requirements. Contact us with your details and we&apos;ll provide a tailored quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#092439] text-[#D4AF37] px-6 py-3 rounded-lg hover:bg-[#0d3552] transition font-semibold"
            >
              Contact for Quote
            </Link>
            <a
              href="https://wa.me/447543746155"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#20BA5A] transition font-semibold"
              aria-label="Get a quote on WhatsApp"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="tel:+447543746155"
              className="inline-flex items-center text-[#092439] hover:text-[#D4AF37] font-semibold"
            >
              Phone: 07543 746155
            </a>
            <a
              href="mailto:info@alburaqlogistics.co.uk"
              className="inline-flex items-center text-[#092439] hover:text-[#D4AF37] font-semibold"
            >
              info@alburaqlogistics.co.uk
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

