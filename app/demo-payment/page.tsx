'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getBooking } from '@/lib/firestore';
import { Booking } from '@/types';
import { getPackageById } from '@/lib/packages';
import { format } from 'date-fns';
import Link from 'next/link';

function DemoPaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const bookingId = searchParams.get('booking_id');
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (bookingId) {
      loadBooking();
    } else {
      setLoading(false);
    }
  }, [bookingId]);

  const loadBooking = async () => {
    try {
      if (bookingId) {
        const bookingData = await getBooking(bookingId);
        setBooking(bookingData);
      }
    } catch (error) {
      console.error('Error loading booking:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    if (!bookingId) return;

    setProcessing(true);

    try {
      // For static export, update Firebase directly (client-side)
      const { updateBookingStatus } = await import('@/lib/firestore');
      
      // Simulate payment processing delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Update booking status directly in Firebase
      await updateBookingStatus(bookingId, 'confirmed', 'paid');

      setSuccess(true);
      // Redirect to success page after 2 seconds
      setTimeout(() => {
        router.push(`/booking-success?booking_id=${bookingId}`);
      }, 2000);
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('There was an error processing your payment. Please try again.');
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Booking Not Found</h1>
        <Link href="/book" className="text-[#D4AF37] hover:text-[#E5C866]">
          Go to Booking Page
        </Link>
      </div>
    );
  }

  const pkg = getPackageById(booking.packageId);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-2xl">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <div className="text-yellow-600 mr-2">⚠️</div>
          <div>
            <p className="font-semibold text-yellow-800 mb-1">Demo Payment Mode</p>
            <p className="text-sm text-yellow-700">
              This is a demo payment system for testing purposes. No real payment will be processed.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
          Complete Your Payment
        </h1>

        {/* Booking Summary */}
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h2>
          <div className="space-y-2 text-sm sm:text-base">
            <div className="flex justify-between">
              <span className="text-gray-600">Service:</span>
              <span className="font-medium text-gray-900">{pkg?.name || booking.serviceType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Customer:</span>
              <span className="font-medium text-gray-900">{booking.customerName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Pickup Date:</span>
              <span className="font-medium text-gray-900">
                {booking.pickupDate ? format(new Date(booking.pickupDate), 'MMM dd, yyyy') : booking.pickupDate} at {booking.pickupTime}
              </span>
            </div>
            {booking.basePrice && booking.distance && (
              <>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Base Price:</span>
                  <span className="font-medium text-gray-900">£{booking.basePrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">
                    Distance ({booking.distance.toFixed(1)} miles × £1.20):
                  </span>
                  <span className="font-medium text-gray-900">£{booking.distanceCharge?.toFixed(2) || (booking.distance * 1.20).toFixed(2)}</span>
                </div>
              </>
            )}
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex justify-between">
                <span className="text-lg font-semibold text-gray-900">Total Amount:</span>
                <span className="text-2xl font-bold text-[#D4AF37]">£{booking.totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Payment Form */}
        {!success ? (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  value="4242 4242 4242 4242"
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"
                />
                <span className="absolute right-3 top-3 text-xs text-gray-500 bg-white px-2 py-1 rounded">
                  DEMO
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Demo card number (always works)</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  value="12/25"
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVC
                </label>
                <input
                  type="text"
                  value="123"
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cardholder Name
              </label>
              <input
                type="text"
                value={booking.customerName}
                readOnly
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>

            <button
              onClick={handlePayment}
              disabled={processing}
              className="w-full bg-[#092439] text-[#D4AF37] py-4 rounded-lg font-semibold text-lg hover:bg-[#0d3552] transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {processing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#D4AF37]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing Payment...
                </>
              ) : (
                `Pay £${booking.totalPrice.toFixed(2)}`
              )}
            </button>

            <p className="text-xs text-center text-gray-500">
              By clicking "Pay", you agree this is a demo transaction. No real payment will be processed.
            </p>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">✓</div>
            <h2 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h2>
            <p className="text-gray-600">Redirecting to confirmation page...</p>
          </div>
        )}
      </div>

      <div className="text-center">
        <Link href="/book" className="text-sm text-gray-600 hover:text-gray-900">
          ← Back to Booking
        </Link>
      </div>
    </div>
  );
}

export default function DemoPaymentPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    }>
      <DemoPaymentContent />
    </Suspense>
  );
}

