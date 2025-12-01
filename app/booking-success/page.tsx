'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { getBooking } from '@/lib/firestore';
import { Booking } from '@/types';
import { format } from 'date-fns';
import { getPackageById } from '@/lib/packages';
import { formatDistance } from '@/lib/distance-calculator';

function BookingSuccessContent() {
  const searchParams = useSearchParams();
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);
  const bookingId = searchParams.get('booking_id');

  useEffect(() => {
    if (bookingId) {
      getBooking(bookingId)
        .then((bookingData) => {
          setBooking(bookingData);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching booking:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [bookingId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-2xl">
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 sm:p-8 text-center">
        <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">✓</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
          Booking Confirmed!
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4">
          Thank you for choosing Al Buraq Logistics. Your booking has been confirmed and payment received.
        </p>

        {booking && (
          <div className="bg-white rounded-lg p-4 sm:p-6 mb-6 text-left">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Booking Details</h2>
            <div className="space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              <p><strong>Booking ID:</strong> <span className="font-mono text-xs break-all">{booking.id}</span></p>
              <p><strong>Name:</strong> {booking.customerName}</p>
              <p><strong>Email:</strong> {booking.email}</p>
              <p><strong>Phone:</strong> {booking.phone}</p>
              <p><strong>Service:</strong> {getPackageById(booking.packageId)?.name || booking.serviceType}</p>
              <p><strong>Pickup Date:</strong> {booking.pickupDate ? format(new Date(booking.pickupDate), 'MMM dd, yyyy') : booking.pickupDate}</p>
              <p><strong>Pickup Time:</strong> {booking.pickupTime}</p>
              <p><strong>Pickup Address:</strong> {booking.pickupAddress}</p>
              <p><strong>Delivery Address:</strong> {booking.deliveryAddress}</p>
            </div>

            {/* Price Breakdown */}
            {booking.basePrice !== undefined && booking.distance !== undefined && (
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Price Breakdown</h3>
                <div className="space-y-2 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Price:</span>
                    <span className="font-medium text-gray-900">£{booking.basePrice.toFixed(2)}</span>
                  </div>
                  {booking.distance > 0 && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Distance:</span>
                        <span className="font-medium text-gray-900">{formatDistance(booking.distance)}</span>
                      </div>
                      {booking.distanceCharge !== undefined && booking.distanceCharge > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Distance Charge:</span>
                          <span className="font-medium text-gray-900">£{booking.distanceCharge.toFixed(2)}</span>
                        </div>
                      )}
                    </>
                  )}
                  <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                    <span className="text-lg font-semibold text-gray-900">Total Amount:</span>
                    <span className="text-xl font-bold text-[#D4AF37]">£{booking.totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="border-t border-gray-200 pt-4 mt-4">
              <p><strong>Status:</strong> <span className="text-green-600 font-semibold capitalize">{booking.status}</span></p>
              <p><strong>Payment Status:</strong> <span className="text-green-600 font-semibold capitalize">{booking.paymentStatus}</span></p>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Link
            href="/"
            className="bg-[#092439] text-[#D4AF37] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#0d3552] transition text-sm sm:text-base"
          >
            Return Home
          </Link>
          <Link
            href="/book"
            className="bg-white text-[#D4AF37] border-2 border-[#D4AF37] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#D4AF37]/10 transition text-sm sm:text-base"
          >
            Book Another Service
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BookingSuccessPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-12 text-center">Loading...</div>}>
      <BookingSuccessContent />
    </Suspense>
  );
}

