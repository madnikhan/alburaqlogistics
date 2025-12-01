export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
        Terms of Service
      </h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="prose prose-lg max-w-none space-y-6 sm:space-y-8">
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
          <p className="text-base sm:text-lg text-gray-700">
            By accessing and using Al Buraq Logistics booking system, you accept and agree to be bound by these 
            Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">2. Booking and Payment</h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Booking Process</h3>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            When you make a booking through our system:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700 mb-4">
            <li>You must provide accurate and complete information</li>
            <li>Your booking is subject to availability</li>
            <li>We reserve the right to refuse or cancel bookings at our discretion</li>
            <li>All prices are in GBP (£) and include VAT where applicable</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Pricing</h3>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            Our pricing structure:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700">
            <li>Base prices include the service package and up to 50 miles</li>
            <li>Additional miles over 50 are charged at £1.20 per mile (50-100 miles) or £1.50 per mile (100+ miles)</li>
            <li>Prices are calculated automatically based on distance</li>
            <li>Final price is confirmed before payment</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.3 Payment</h3>
          <p className="text-base sm:text-lg text-gray-700">
            Payment is required at the time of booking to confirm your reservation. We accept major credit and 
            debit cards through our secure payment processor (Stripe). All payments are processed securely.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">3. Cancellation and Refunds</h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Cancellation by Customer</h3>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700 mb-4">
            <li><strong>48+ hours notice:</strong> Full refund minus processing fees</li>
            <li><strong>24-48 hours notice:</strong> 50% refund</li>
            <li><strong>Less than 24 hours:</strong> No refund</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Cancellation by Us</h3>
          <p className="text-base sm:text-lg text-gray-700">
            If we need to cancel your booking due to circumstances beyond our control, you will receive a full refund.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">4. Service Delivery</h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Time Estimates</h3>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            Estimated times provided are approximate and may vary based on:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700">
            <li>Traffic conditions</li>
            <li>Weather conditions</li>
            <li>Accessibility of properties</li>
            <li>Volume of items</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.2 Customer Responsibilities</h3>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            You are responsible for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700">
            <li>Ensuring access to pickup and delivery locations</li>
            <li>Providing accurate addresses and contact information</li>
            <li>Being present or having an authorized representative at the scheduled time</li>
            <li>Disclosing any special requirements or hazards</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">5. Insurance and Liability</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            All our services include insurance coverage as specified in your chosen package. Our liability is 
            limited to the value of the insurance coverage provided. For high-value items, we recommend 
            additional insurance coverage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
          <p className="text-base sm:text-lg text-gray-700">
            To the maximum extent permitted by law, Al Buraq Logistics shall not be liable for any indirect, 
            incidental, special, consequential, or punitive damages resulting from the use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">7. Changes to Terms</h2>
          <p className="text-base sm:text-lg text-gray-700">
            We reserve the right to modify these terms at any time. Changes will be effective immediately 
            upon posting. Continued use of our services after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
          <p className="text-base sm:text-lg text-gray-700">
            For questions about these Terms of Service, please contact us:
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

