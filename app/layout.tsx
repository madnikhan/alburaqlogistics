import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

const baseMetadata = generateSEOMetadata({
  title: "Al Buraq Logistics - Professional Removal Services in Birmingham, UK",
  description: "Professional removal and logistics services in Birmingham, UK. House moving, office relocation, removals, and pallet services across the West Midlands. Fully insured, experienced movers, competitive pricing.",
  keywords: [
    "removal services Birmingham",
    "house movers Birmingham UK",
    "office moving Birmingham",
    "logistics services West Midlands",
    "pallet delivery Birmingham",
    "removal company Birmingham",
    "professional movers Birmingham",
    "Birmingham removals",
    "West Midlands logistics",
    "moving services Birmingham",
    "removal services near me",
    "man and van Birmingham",
  ],
});

export const metadata: Metadata = {
  ...baseMetadata,
  icons: {
    icon: [
      { url: '/logoburaq.png', sizes: '32x32', type: 'image/png' },
      { url: '/logoburaq.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logoburaq.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/logoburaq.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <StructuredData type="localBusiness" />
        <StructuredData type="website" />
        <GoogleAnalytics />
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Preload critical resources */}
        <link rel="preload" href="/logoburaq.png" as="image" type="image/png" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
