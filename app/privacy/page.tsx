export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="prose prose-lg max-w-none space-y-6 sm:space-y-8">
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-base sm:text-lg text-gray-700">
            Al Buraq Logistics ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy 
            explains how we collect, use, disclose, and safeguard your information when you use our booking system 
            and services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            When you make a booking, we collect:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700 mb-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Pickup and delivery addresses</li>
            <li>Payment information (processed securely through Stripe)</li>
            <li>Booking details (dates, times, service preferences)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700">
            <li>Process and manage your bookings</li>
            <li>Communicate with you about your booking</li>
            <li>Process payments</li>
            <li>Calculate distances and provide accurate pricing</li>
            <li>Improve our services</li>
            <li>Send booking confirmations and updates</li>
            <li>Respond to your inquiries</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Data Storage and Security</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            Your booking information is stored securely in Firebase Firestore. We implement appropriate technical 
            and organizational measures to protect your personal data against unauthorized access, alteration, 
            disclosure, or destruction.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            Payment information is processed securely through Stripe and is not stored on our servers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            We use the following third-party services:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700">
            <li><strong>Firebase:</strong> For secure data storage</li>
            <li><strong>Stripe:</strong> For secure payment processing</li>
            <li><strong>Google Maps / OpenRouteService:</strong> For distance calculation (optional)</li>
          </ul>
          <p className="text-base sm:text-lg text-gray-700 mt-4">
            These services have their own privacy policies governing the use of your information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Your Rights</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            Under UK GDPR, you have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Data portability</li>
          </ul>
          <p className="text-base sm:text-lg text-gray-700 mt-4">
            To exercise these rights, please contact us at info@alburaqlogistics.co.uk
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Cookies</h2>
          <p className="text-base sm:text-lg text-gray-700">
            Our website uses essential cookies for functionality. We do not use tracking cookies or analytics 
            cookies without your consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-base sm:text-lg text-gray-700">
            If you have questions about this Privacy Policy, please contact us:
          </p>
          <div className="mt-4 text-base sm:text-lg text-gray-700">
            <p>Email: info@alburaqlogistics.co.uk</p>
            <p>Phone: 0121 XXX XXXX</p>
            <p>Address: Birmingham, West Midlands, United Kingdom</p>
          </div>
        </section>
      </div>
    </div>
  );
}

