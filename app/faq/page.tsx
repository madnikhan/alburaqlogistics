'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do you calculate the price?',
    answer: 'Our pricing is based on a base price for each package plus distance charges. Base prices include up to 50 miles. For moves over 50 miles, we charge £1.20 per additional mile (50-100 miles) or £1.50 per mile (over 100 miles). The price calculator on the booking page will show you the exact breakdown.',
  },
  {
    question: 'What is included in the base price?',
    answer: 'Base prices include the service package (movers, vehicle, insurance) and up to 50 miles of travel distance. Additional services like packing materials, furniture disassembly, and storage may be included depending on the package selected.',
  },
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 2-4 weeks in advance, especially during peak moving seasons (summer months and end of month). However, we can often accommodate last-minute bookings subject to availability.',
  },
  {
    question: 'Do you provide packing materials?',
    answer: 'Packing materials are included in our Standard and Premium packages. For Basic packages, you can purchase packing materials separately or bring your own. We can provide boxes, bubble wrap, packing tape, and other materials.',
  },
  {
    question: 'Are you insured?',
    answer: 'Yes, all our services come with comprehensive insurance coverage. The level of insurance varies by package - Basic packages include standard insurance, while Premium packages include full coverage. Details are shown in each package description.',
  },
  {
    question: 'What happens if I need to cancel or reschedule?',
    answer: 'You can cancel or reschedule your booking up to 48 hours before the scheduled pickup time at no charge. Cancellations within 48 hours may incur a fee. Please contact us as soon as possible if you need to make changes.',
  },
  {
    question: 'Do you move on weekends?',
    answer: 'Yes, we offer weekend and evening moving services. Weekend bookings may have slightly higher rates. You can select your preferred date and time during the booking process.',
  },
  {
    question: 'How do you handle fragile or valuable items?',
    answer: 'Our experienced team takes special care with fragile and valuable items. We use appropriate packing materials and handling techniques. For very valuable items (antiques, artwork, etc.), we recommend additional insurance coverage.',
  },
  {
    question: 'Can I track my booking?',
    answer: 'Yes, you can view your booking status by visiting the "My Bookings" page and entering your email address. You\'ll receive email confirmations at each stage of the booking process.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards through our secure online payment system. Payment is required at the time of booking to confirm your reservation.',
  },
  {
    question: 'Do you provide storage services?',
    answer: 'Yes, we offer storage solutions for both short-term and long-term needs. Storage options are available with our Medium and Large office moving packages, and can be added to other services upon request.',
  },
  {
    question: 'What areas do you cover?',
    answer: 'We primarily serve Birmingham and the West Midlands region. Base prices include moves up to 50 miles. We can provide long-distance moving services throughout the UK with additional mileage charges.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 text-center">
        Find answers to common questions about our services, pricing, and booking process.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center hover:bg-gray-50 transition"
            >
              <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                {faq.question}
              </span>
              <span className="text-[#D4AF37] text-xl flex-shrink-0">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 bg-[#092439]/10 rounded-lg p-6 sm:p-8 text-center border border-[#D4AF37]/30">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
          Still have questions?
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
          Our team is here to help. Get in touch with us today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-[#092439] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#0d3552] transition"
          >
            Contact Us
          </Link>
          <Link
            href="/book"
            className="bg-white text-[#D4AF37] border-2 border-[#D4AF37] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#D4AF37]/10 transition"
          >
            Book a Service
          </Link>
        </div>
      </div>
    </div>
  );
}

