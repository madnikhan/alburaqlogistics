import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'removals',
    name: 'Removals',
    slug: 'removals',
    description: 'Professional removal services for homes and businesses across Birmingham and the West Midlands.',
    image: '/services/removals.jpg',
    images: [
      '/services/removals.jpg',
      '/services/removals-2.jpg',
      '/services/removals-3.jpg',
    ],
    features: [
      'Experienced and insured movers',
      'Full packing and unpacking service',
      'Furniture disassembly and assembly',
      'Flexible scheduling',
      'Competitive pricing'
    ]
  },
  {
    id: 'office-moving',
    name: 'Office Moving',
    slug: 'office-moving',
    description: 'Specialized office relocation services with minimal business disruption.',
    image: '/services/office.jpg',
    images: [
      '/services/office.jpg',
      '/services/office-2.jpg',
      '/services/office-3.jpg',
    ],
    features: [
      'IT equipment handling',
      'Minimal downtime',
      'Flexible scheduling (weekends/evenings)',
      'Storage solutions',
      'Project management'
    ]
  },
  {
    id: 'house-moving',
    name: 'House Moving',
    slug: 'house-moving',
    description: 'Complete house moving services for properties of all sizes.',
    image: '/services/house.jpg',
    images: [
      '/services/house.jpg',
      '/services/house-2.jpg',
      '/services/house-3.jpg',
    ],
    features: [
      'All property sizes',
      'Full packing service',
      'Careful handling of valuables',
      'Same-day service available',
      'Insurance coverage'
    ]
  },
  {
    id: 'pallets',
    name: 'Pallet Services',
    slug: 'pallets',
    description: 'Efficient pallet collection and delivery services throughout Birmingham.',
    image: '/services/pallets.jpg',
    images: [
      '/services/pallets.jpg',
      '/services/pallets-2.jpg',
      '/services/pallets-3.jpg',
    ],
    features: [
      'Single or multiple pallets',
      'Next day delivery',
      'Collection and delivery',
      'Pallet wrapping available',
      'Warehouse to warehouse'
    ]
  },
  {
    id: 'parcel-delivery',
    name: 'Parcel Delivery',
    slug: 'parcel-delivery',
    description: 'Reliable parcel delivery across Gloucestershire, Stroud, Cheltenham, and Bristol. Same-day and next-day options available.',
    image: '/services/pallets.jpg',
    images: [
      '/services/pallets.jpg',
      '/services/pallets-2.jpg',
      '/services/pallets-3.jpg',
    ],
    features: [
      'Gloucestershire coverage',
      'Stroud area delivery',
      'Cheltenham & Bristol',
      'Same-day and next-day options',
      'Contact us for a quote'
    ]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

