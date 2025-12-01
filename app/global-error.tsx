'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
          <p className="text-lg text-gray-600 mb-8">
            We're sorry, but something unexpected happened.
          </p>
          <button
            onClick={reset}
            className="bg-[#092439] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0d3552] transition"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}

