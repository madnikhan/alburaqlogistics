import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact Us - Removal Services Birmingham, UK | Al Buraq Logistics',
  description: 'Contact Al Buraq Logistics for professional removal and logistics services in Birmingham, UK. Get a free quote for house moving, office relocation, removals, and pallet services. Serving Birmingham and the West Midlands.',
  keywords: [
    'contact removal company Birmingham',
    'removal services quote',
    'get quote Birmingham',
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

