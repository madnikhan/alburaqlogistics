'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-8">
        We're sorry, but something unexpected happened. Please try again.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={reset}
          className="bg-[#092439] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0d3552] transition"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="bg-white text-[#D4AF37] border-2 border-[#D4AF37] px-6 py-3 rounded-lg font-semibold hover:bg-[#D4AF37]/10 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

