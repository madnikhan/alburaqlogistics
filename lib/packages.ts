import { Package, ServiceType } from '@/types';

// Packages tailored for Birmingham UK market with base prices
// Final price = base price + (distance × £1.20 per mile)
export const packages: Package[] = [
  // Removals Packages
  {
    id: 'removal-basic',
    name: 'Basic Removal',
    serviceType: 'removals',
    description: 'Perfect for small moves within Birmingham',
    price: 450, // Base price
    features: [
      '1-2 bedroom removal',
      '2 movers',
      'Standard van',
      'Basic insurance',
      'Distance-based pricing'
    ],
    estimatedHours: 4,
    maxDistance: 50, // Maximum distance covered
    includes: ['Loading', 'Transportation', 'Unloading']
  },
  {
    id: 'removal-standard',
    name: 'Standard Removal',
    serviceType: 'removals',
    description: 'Ideal for medium-sized moves',
    price: 600, // Base price
    features: [
      '2-3 bedroom removal',
      '3 movers',
      'Large van',
      'Full insurance',
      'Packing materials included',
      'Distance-based pricing'
    ],
    estimatedHours: 6,
    maxDistance: 75,
    includes: ['Loading', 'Transportation', 'Unloading', 'Packing assistance']
  },
  {
    id: 'removal-premium',
    name: 'Premium Removal',
    serviceType: 'removals',
    description: 'Complete removal service with full support',
    price: 900, // Base price
    features: [
      '3+ bedroom removal',
      '4 movers',
      'Large van + trailer',
      'Premium insurance',
      'Full packing service',
      'Furniture disassembly',
      'Distance-based pricing'
    ],
    estimatedHours: 8,
    maxDistance: 100,
    includes: ['Full packing', 'Loading', 'Transportation', 'Unloading', 'Unpacking', 'Furniture assembly']
  },
  
  // Office Moving Packages
  {
    id: 'office-small',
    name: 'Small Office Move',
    serviceType: 'office-moving',
    description: 'Perfect for small businesses (up to 10 employees)',
    price: 600, // Base price
    features: [
      'Up to 20 desks',
      'IT equipment handling',
      '3 movers',
      'Office insurance',
      'Weekend/evening options',
      'Distance-based pricing'
    ],
    estimatedHours: 6,
    maxDistance: 50,
    includes: ['Desk moving', 'IT equipment', 'Filing cabinets', 'Basic setup']
  },
  {
    id: 'office-medium',
    name: 'Medium Office Move',
    serviceType: 'office-moving',
    description: 'Ideal for medium-sized businesses (10-30 employees)',
    price: 900, // Base price
    features: [
      'Up to 40 desks',
      'IT equipment handling',
      '5 movers',
      'Full office insurance',
      'Flexible scheduling',
      'Storage options',
      'Distance-based pricing'
    ],
    estimatedHours: 10,
    maxDistance: 75,
    includes: ['Complete office relocation', 'IT setup', 'Furniture assembly', 'Storage solutions']
  },
  {
    id: 'office-large',
    name: 'Large Office Move',
    serviceType: 'office-moving',
    description: 'Complete office relocation service',
    price: 1500, // Base price
    features: [
      '40+ desks',
      'Full IT infrastructure',
      '8+ movers',
      'Premium insurance',
      'Project management',
      'Storage & warehousing',
      'Distance-based pricing'
    ],
    estimatedHours: 16,
    maxDistance: 100,
    includes: ['Full relocation', 'IT infrastructure', 'Project management', 'Storage', 'Setup & configuration']
  },
  
  // House Moving Packages
  {
    id: 'house-studio',
    name: 'Studio/1 Bed Move',
    serviceType: 'house-moving',
    description: 'Perfect for studio or 1 bedroom properties',
    price: 450, // Base price - matches Birmingham market (£450-£600)
    features: [
      'Studio/1 bedroom',
      '2 movers',
      'Medium van',
      'Standard insurance',
      'Distance-based pricing'
    ],
    estimatedHours: 5,
    maxDistance: 50,
    includes: ['Loading', 'Transportation', 'Unloading']
  },
  {
    id: 'house-2bed',
    name: '2 Bedroom Move',
    serviceType: 'house-moving',
    description: 'Ideal for 2 bedroom homes',
    price: 600, // Base price - matches Birmingham market (£600-£900)
    features: [
      '2 bedroom property',
      '3 movers',
      'Large van',
      'Full insurance',
      'Packing materials',
      'Distance-based pricing'
    ],
    estimatedHours: 7,
    maxDistance: 75,
    includes: ['Loading', 'Transportation', 'Unloading', 'Packing assistance']
  },
  {
    id: 'house-3bed',
    name: '3 Bedroom Move',
    serviceType: 'house-moving',
    description: 'Complete service for 3 bedroom homes',
    price: 900, // Base price - matches Birmingham market (£900-£1,500)
    features: [
      '3 bedroom property',
      '4 movers',
      'Large van + trailer',
      'Premium insurance',
      'Full packing service',
      'Distance-based pricing'
    ],
    estimatedHours: 9,
    maxDistance: 100,
    includes: ['Full packing', 'Loading', 'Transportation', 'Unloading', 'Unpacking']
  },
  {
    id: 'house-4bed',
    name: '4+ Bedroom Move',
    serviceType: 'house-moving',
    description: 'Premium service for large family homes',
    price: 1200, // Base price - matches Birmingham market (£1,200-£2,000+)
    features: [
      '4+ bedroom property',
      '5+ movers',
      'Multiple vehicles',
      'Premium insurance',
      'Full packing & unpacking',
      'Furniture disassembly',
      'Distance-based pricing'
    ],
    estimatedHours: 12,
    maxDistance: 150,
    includes: ['Complete service', 'Packing', 'Loading', 'Transportation', 'Unloading', 'Unpacking', 'Assembly']
  },
  
  // Pallet Services
  {
    id: 'pallet-single',
    name: 'Single Pallet',
    serviceType: 'pallets',
    description: 'Single pallet delivery within Birmingham',
    price: 85, // Base price
    features: [
      '1 standard pallet',
      'Next day delivery',
      'Standard insurance',
      'Collection & delivery',
      'Distance-based pricing'
    ],
    estimatedHours: 2,
    maxDistance: 30,
    includes: ['Collection', 'Transportation', 'Delivery']
  },
  {
    id: 'pallet-multi',
    name: 'Multiple Pallets',
    serviceType: 'pallets',
    description: 'Multiple pallet delivery service',
    price: 150, // Base price
    features: [
      '2-4 pallets',
      'Next day delivery',
      'Full insurance',
      'Collection & delivery',
      'Distance-based pricing'
    ],
    estimatedHours: 3,
    maxDistance: 50,
    includes: ['Collection', 'Transportation', 'Delivery', 'Pallet wrapping']
  },
  {
    id: 'pallet-bulk',
    name: 'Bulk Pallet Service',
    serviceType: 'pallets',
    description: 'Large quantity pallet delivery',
    price: 300, // Base price
    features: [
      '5+ pallets',
      'Flexible scheduling',
      'Premium insurance',
      'Warehouse to warehouse',
      'Distance-based pricing'
    ],
    estimatedHours: 5,
    maxDistance: 100,
    includes: ['Bulk collection', 'Transportation', 'Delivery', 'Pallet management']
  }
];

export const getPackagesByService = (serviceType: ServiceType): Package[] => {
  return packages.filter(pkg => pkg.serviceType === serviceType);
};

export const getPackageById = (id: string): Package | undefined => {
  return packages.find(pkg => pkg.id === id);
};

// Price per mile for distance calculation
export const PRICE_PER_MILE = 1.20;
