'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getPackageById, getPackagesByService } from '@/lib/packages';
import { createBooking } from '@/lib/firestore';
import { Package, ServiceType } from '@/types';
import { loadStripe } from '@stripe/stripe-js';
import PriceCalculator from '@/components/PriceCalculator';
import { calculateDistance, calculatePrice, getPricingBreakdown } from '@/lib/distance-calculator';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

const bookingSchema = z.object({
  customerName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  serviceType: z.enum(['removals', 'office-moving', 'house-moving', 'pallets']),
  packageId: z.string(),
  pickupAddress: z.string().min(10, 'Please provide a complete pickup address'),
  deliveryAddress: z.string().min(10, 'Please provide a complete delivery address'),
  pickupDate: z.string().min(1, 'Please select a pickup date'),
  pickupTime: z.string().min(1, 'Please select a pickup time'),
  specialInstructions: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

function BookPageContent() {
  const searchParams = useSearchParams();
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [calculatedPrice, setCalculatedPrice] = useState<{
    basePrice: number;
    distance: number;
    distanceCharge: number;
    totalPrice: number;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const serviceType = watch('serviceType');
  const pickupAddress = watch('pickupAddress');
  const deliveryAddress = watch('deliveryAddress');

  useEffect(() => {
    const serviceParam = searchParams.get('service') as ServiceType;
    const packageParam = searchParams.get('package');

    if (serviceParam) {
      setValue('serviceType', serviceParam);
    }
    if (packageParam) {
      setValue('packageId', packageParam);
      const pkg = getPackageById(packageParam);
      setSelectedPackage(pkg || null);
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: BookingFormData) => {
    if (!selectedPackage) {
      alert('Please select a package');
      return;
    }

    setIsSubmitting(true);
    setBookingId(null);

    try {
      // Calculate distance and final price
      const distanceResult = await calculateDistance(data.pickupAddress, data.deliveryAddress);
      const distance = distanceResult.distance;
      const basePrice = selectedPackage.price;
      
      // Use calculated price if available, otherwise calculate now
      let finalPrice: number;
      let distanceCharge: number;
      
      if (calculatedPrice) {
        finalPrice = calculatedPrice.totalPrice;
        distanceCharge = calculatedPrice.distanceCharge;
      } else {
        const breakdown = getPricingBreakdown(basePrice, distance);
        finalPrice = breakdown.totalPrice;
        distanceCharge = breakdown.distanceCharge;
      }

      // Create booking in Firestore
      const bookingData = {
        ...data,
        totalPrice: finalPrice,
        basePrice: basePrice,
        distance: distance,
        distanceCharge: distanceCharge,
        status: 'pending' as const,
        paymentStatus: 'pending' as const,
      };

      const id = await createBooking(bookingData);
      setBookingId(id);

      // For static export (PHP hosting), use demo payment directly
      // API routes don't work with static export
      console.log('Redirecting to demo payment (static export mode)');
      window.location.href = `/demo-payment?booking_id=${id}`;
      return;
    } catch (error: any) {
      console.error('Error creating booking:', error);
      // If booking was created but payment failed, offer demo payment
      if (bookingId) {
        const useDemo = confirm('Stripe payment failed. Would you like to use the demo payment system instead?');
        if (useDemo) {
          window.location.href = `/demo-payment?booking_id=${bookingId}`;
          return;
        }
      }
      alert(`There was an error processing your booking: ${error.message || 'Please try again.'}`);
      setIsSubmitting(false);
    }
  };

  const availablePackages = selectedPackage
    ? [selectedPackage]
    : serviceType
    ? getPackagesByService(serviceType)
    : [];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
        Book Your Service
      </h1>

      {bookingId && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-green-800">
            Booking created successfully! Redirecting to payment...
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Package Selection */}
        {!selectedPackage && serviceType && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Package
            </label>
            <select
              {...register('packageId')}
              onChange={(e) => {
                const pkg = getPackageById(e.target.value);
                setSelectedPackage(pkg || null);
                setValue('packageId', e.target.value);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
            >
              <option value="">Select a package...</option>
              {availablePackages.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.name} - £{pkg.price.toFixed(2)}
                </option>
              ))}
            </select>
            {errors.packageId && (
              <p className="text-red-500 text-sm mt-1">{errors.packageId.message}</p>
            )}
          </div>
        )}

        {selectedPackage && (
          <div className="bg-[#092439]/10 rounded-lg p-4 sm:p-6 mb-6 border border-[#D4AF37]/30">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Selected Package: {selectedPackage.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-2">{selectedPackage.description}</p>
            <p className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-2">
              Base Price: £{selectedPackage.price.toFixed(2)}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Base price includes up to 50 miles. Additional miles charged separately.
            </p>
          </div>
        )}

        {/* Service Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Type
          </label>
          <select
            {...register('serviceType')}
            onChange={(e) => {
              setValue('serviceType', e.target.value as ServiceType);
              setSelectedPackage(null);
              setValue('packageId', '');
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
          >
            <option value="">Select service type...</option>
            <option value="removals">Removals</option>
            <option value="office-moving">Office Moving</option>
            <option value="house-moving">House Moving</option>
            <option value="pallets">Pallets</option>
          </select>
          {errors.serviceType && (
            <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>
          )}
        </div>

        {/* Customer Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              {...register('customerName')}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
            />
            {errors.customerName && (
              <p className="text-red-500 text-sm mt-1">{errors.customerName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            {...register('phone')}
            type="tel"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Addresses */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Pickup Address *
          </label>
          <textarea
            {...register('pickupAddress')}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
            placeholder="Enter full pickup address including postcode"
          />
          {errors.pickupAddress && (
            <p className="text-red-500 text-sm mt-1">{errors.pickupAddress.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Delivery Address *
          </label>
          <textarea
            {...register('deliveryAddress')}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
            placeholder="Enter full delivery address including postcode"
          />
          {errors.deliveryAddress && (
            <p className="text-red-500 text-sm mt-1">{errors.deliveryAddress.message}</p>
          )}
        </div>

        {/* Price Calculator - shows when package and addresses are entered */}
        {selectedPackage && pickupAddress && deliveryAddress && 
         pickupAddress.length > 10 && deliveryAddress.length > 10 && (
          <PriceCalculator
            selectedPackage={selectedPackage}
            pickupAddress={pickupAddress}
            deliveryAddress={deliveryAddress}
            onPriceCalculated={setCalculatedPrice}
          />
        )}

        {/* Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pickup Date *
            </label>
            <input
              {...register('pickupDate')}
              type="date"
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
            />
            {errors.pickupDate && (
              <p className="text-red-500 text-sm mt-1">{errors.pickupDate.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pickup Time *
            </label>
            <select
              {...register('pickupTime')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
            >
              <option value="">Select time...</option>
              <option value="08:00">8:00 AM</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="13:00">1:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
              <option value="17:00">5:00 PM</option>
            </select>
            {errors.pickupTime && (
              <p className="text-red-500 text-sm mt-1">{errors.pickupTime.message}</p>
            )}
          </div>
        </div>

        {/* Special Instructions */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Special Instructions (Optional)
          </label>
          <textarea
            {...register('specialInstructions')}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
            placeholder="Any special requirements or instructions..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || !selectedPackage}
          className="w-full bg-[#092439] text-[#D4AF37] py-4 rounded-lg font-semibold text-lg hover:bg-[#0d3552] transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
        </button>
      </form>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-12 text-center">Loading...</div>}>
      <BookPageContent />
    </Suspense>
  );
}

