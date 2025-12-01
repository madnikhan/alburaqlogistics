'use client';

import { useState, useEffect } from 'react';
import { 
  calculateDistance, 
  calculatePrice, 
  formatDistance, 
  getPricingBreakdown,
  LOCAL_MOVE_THRESHOLD 
} from '@/lib/distance-calculator';
import { Package } from '@/types';

interface PriceCalculatorProps {
  selectedPackage: Package | null;
  pickupAddress: string;
  deliveryAddress: string;
  onPriceCalculated?: (price: {
    basePrice: number;
    distance: number;
    distanceCharge: number;
    totalPrice: number;
  }) => void;
}

export default function PriceCalculator({
  selectedPackage,
  pickupAddress,
  deliveryAddress,
  onPriceCalculated
}: PriceCalculatorProps) {
  const [distance, setDistance] = useState<number | null>(null);
  const [calculating, setCalculating] = useState(false);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  useEffect(() => {
    if (selectedPackage && pickupAddress && deliveryAddress && 
        pickupAddress.length > 10 && deliveryAddress.length > 10) {
      calculateDistanceAndPrice();
    } else {
      setDistance(null);
      setTotalPrice(null);
    }
  }, [selectedPackage, pickupAddress, deliveryAddress]);

  const calculateDistanceAndPrice = async () => {
    if (!selectedPackage) return;

    setCalculating(true);
    
    try {
      // Calculate distance (uses Google Maps API if available, otherwise estimates)
      const distanceResult = await calculateDistance(pickupAddress, deliveryAddress);
      const calculatedDistance = distanceResult.distance;
      
      const basePrice = selectedPackage.price;
      const breakdown = getPricingBreakdown(basePrice, calculatedDistance);
      const finalPrice = breakdown.totalPrice;

      setDistance(calculatedDistance);
      setTotalPrice(finalPrice);

      // Notify parent component
      if (onPriceCalculated) {
        onPriceCalculated({
          basePrice,
          distance: calculatedDistance,
          distanceCharge: breakdown.distanceCharge,
          totalPrice: finalPrice
        });
      }
    } catch (error) {
      console.error('Error calculating distance:', error);
      // Fallback to base price if calculation fails
      setDistance(0);
      setTotalPrice(selectedPackage.price);
    } finally {
      setCalculating(false);
    }
  };

  if (!selectedPackage) {
    return null;
  }

  if (calculating) {
    return (
      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <div className="flex items-center">
          <svg className="animate-spin h-5 w-5 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-blue-700">Calculating price...</span>
        </div>
      </div>
    );
  }

  if (distance === null || totalPrice === null) {
    return (
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-600">
          Enter pickup and delivery addresses to calculate the total price.
        </p>
      </div>
    );
  }

  const breakdown = getPricingBreakdown(selectedPackage.price, distance);

  return (
    <div className="bg-[#092439]/10 rounded-lg p-4 sm:p-6 mb-6 border border-[#D4AF37]/30">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
        Price Breakdown
      </h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm sm:text-base">
          <span className="text-gray-600">Base Price:</span>
          <span className="font-medium text-gray-900">£{breakdown.basePrice.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-sm sm:text-base">
          <span className="text-gray-600">Distance:</span>
          <span className="font-medium text-gray-900">{formatDistance(distance)}</span>
        </div>

        {breakdown.isLocalMove ? (
          <div className="bg-green-50 rounded p-2 mt-2">
            <p className="text-xs sm:text-sm text-green-800">
              ✓ Local move: Distance included in base price (up to {LOCAL_MOVE_THRESHOLD} miles)
            </p>
          </div>
        ) : (
          <>
            <div className="flex justify-between text-sm sm:text-base mt-2">
              <span className="text-gray-600">
                Included miles ({breakdown.includedMiles} miles):
              </span>
              <span className="font-medium text-gray-900">£0.00</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base">
              <span className="text-gray-600">
                Additional miles ({breakdown.chargeableMiles.toFixed(1)} miles × £1.20/mile):
              </span>
              <span className="font-medium text-gray-900">£{breakdown.distanceCharge.toFixed(2)}</span>
            </div>
            {distance > 100 && (
              <p className="text-xs text-gray-600 mt-1">
                Note: Miles over 100 charged at £1.50/mile
              </p>
            )}
          </>
        )}
        
        <div className="border-t border-[#D4AF37]/30 pt-2 mt-2">
          <div className="flex justify-between">
            <span className="text-lg sm:text-xl font-semibold text-gray-900">Total Price:</span>
            <span className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">
              £{totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="text-xs sm:text-sm text-gray-600 bg-white rounded p-2">
        <p className="mb-1">
          <strong>Pricing:</strong> Base price includes up to {LOCAL_MOVE_THRESHOLD} miles. 
          {!breakdown.isLocalMove && ' Additional miles charged at £1.20/mile (50-100 miles) or £1.50/mile (100+ miles).'}
        </p>
        <p>Distance: {formatDistance(distance)} 
          {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? ' (calculated)' : ' (estimated from postcodes)'}
        </p>
      </div>
    </div>
  );
}

