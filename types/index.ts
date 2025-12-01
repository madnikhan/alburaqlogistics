export type ServiceType = 'removals' | 'office-moving' | 'house-moving' | 'pallets';

export interface Package {
  id: string;
  name: string;
  serviceType: ServiceType;
  description: string;
  price: number;
  features: string[];
  estimatedHours: number;
  maxDistance: number; // in miles
  includes: string[];
}

export interface Booking {
  id?: string;
  customerName: string;
  email: string;
  phone: string;
  serviceType: ServiceType;
  packageId: string;
  pickupAddress: string;
  deliveryAddress: string;
  pickupDate: string;
  pickupTime: string;
  specialInstructions?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalPrice: number;
  basePrice: number; // Base price from package
  distance: number; // Distance in miles
  distanceCharge: number; // Distance × £1.20
  paymentStatus: 'pending' | 'paid' | 'refunded';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Service {
  id: string;
  name: string;
  slug: ServiceType;
  description: string;
  image: string;
  features: string[];
}

