import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact Us - Removal Services Gloucester, UK | Al Buraq Logistics',
  description: 'Contact Al Buraq Logistics for professional removal and logistics services in Gloucester, UK. Get a free quote for house moving, office relocation, removals, and pallet services. Serving Gloucester and Gloucestershire.',
  keywords: [
    'contact removal company Gloucester',
    'removal services quote',
    'get quote Gloucester',
    'removal company contact',
  ],
  path: '/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
