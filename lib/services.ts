import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'removals',
    name: 'Removals',
    slug: 'removals',
    description: 'Professional removal services for homes and businesses across Birmingham and the West Midlands.',
    image: '/services/removals.jpg',
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
    features: [
      'Single or multiple pallets',
      'Next day delivery',
      'Collection and delivery',
      'Pallet wrapping available',
      'Warehouse to warehouse'
    ]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

