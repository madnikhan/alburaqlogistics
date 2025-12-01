'use client';

import { useState } from 'react';
import { getBookingsByEmail } from '@/lib/firestore';
import { Booking } from '@/types';
import { getPackageById } from '@/lib/packages';
import { format } from 'date-fns';
import Link from 'next/link';

export default function MyBookingsPage() {
  const [email, setEmail] = useState('');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email address');
      return;
    }

    setLoading(true);
    setSearched(true);

    try {
      const results = await getBookingsByEmail(email);
      setBookings(results);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      alert('Failed to fetch bookings. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
        My Bookings
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 text-center px-4">
        Enter your email address to view your bookings
      </p>

      <form onSubmit={handleSearch} className="max-w-md mx-auto mb-6 sm:mb-8 px-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[#092439] text-white px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-[#0d3552] transition disabled:bg-gray-400 disabled:cursor-not-allowed text-sm sm:text-base whitespace-nowrap"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {searched && !loading && bookings.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600 mb-4">No bookings found for this email address.</p>
          <Link
            href="/book"
            className="text-[#D4AF37] hover:text-[#E5C866] font-semibold"
          >
            Book a service now →
          </Link>
        </div>
      )}

      {bookings.length > 0 && (
        <div className="space-y-4 px-4 sm:px-0">
          {bookings.map((booking) => {
            const pkg = getPackageById(booking.packageId);
            return (
              <div
                key={booking.id}
                className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 sm:mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                      {pkg?.name || booking.serviceType}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-mono mb-2 break-all">
                      Booking ID: {booking.id}
                    </p>
                  </div>
                  <div className="flex gap-2 mb-3 sm:mb-4 md:mb-0">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        booking.status === 'confirmed'
                          ? 'bg-green-100 text-green-800'
                          : booking.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : booking.status === 'completed'
                          ? 'bg-[#092439]/20 text-[#092439]'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {booking.status}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        booking.paymentStatus === 'paid'
                          ? 'bg-green-100 text-green-800'
                          : booking.paymentStatus === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {booking.paymentStatus}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Pickup Date & Time</p>
                    <p className="font-medium text-gray-900">
                      {format(new Date(booking.pickupDate), 'MMM dd, yyyy')} at {booking.pickupTime}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                    <p className="font-bold text-lg text-gray-900">
                      £{booking.totalPrice.toFixed(2)}
                    </p>
                    {booking.basePrice !== undefined && booking.distance !== undefined && (
                      <p className="text-xs text-gray-500 mt-1">
                        Base: £{booking.basePrice.toFixed(2)} 
                        {booking.distanceCharge !== undefined && booking.distanceCharge > 0 && 
                          ` + Distance: £${booking.distanceCharge.toFixed(2)}`}
                      </p>
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Pickup Address</p>
                    <p className="text-gray-900">{booking.pickupAddress}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Delivery Address</p>
                    <p className="text-gray-900">{booking.deliveryAddress}</p>
                  </div>
                </div>

                {booking.specialInstructions && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Special Instructions</p>
                    <p className="text-gray-900">{booking.specialInstructions}</p>
                  </div>
                )}

                {booking.createdAt && (
                  <p className="text-xs text-gray-500 mt-4">
                    Booked on {format(booking.createdAt, 'MMM dd, yyyy HH:mm')}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

