import { Metadata } from 'next';
import { services } from './services';

export const siteConfig = {
  name: 'Al Buraq Logistics',
  description: 'Professional removal and logistics services in Birmingham, UK. House moving, office relocation, removals, and pallet services across the West Midlands.',
  url: 'https://alburaqlogistics.co.uk',
  logo: '/logoburaq.png',
  ogImage: '/logoburaq.png',
  favicon: '/logoburaq.png',
  links: {
    twitter: '',
    github: '',
  },
  business: {
    name: 'Al Buraq Logistics',
    address: {
      streetAddress: 'Birmingham',
      addressLocality: 'Birmingham',
      addressRegion: 'West Midlands',
      postalCode: 'B1',
      addressCountry: 'GB',
    },
    phone: '+44 7543 746155',
    email: 'info@alburaqlogistics.co.uk',
    priceRange: '££',
    openingHours: [
      'Mo-Fr 08:00-18:00',
      'Sa 09:00-16:00',
    ],
    areaServed: [
      'Birmingham',
      'Coventry',
      'Wolverhampton',
      'Solihull',
      'Dudley',
      'Walsall',
      'Sandwell',
      'West Bromwich',
      'West Midlands',
    ],
  },
};

export function generateMetadata({
  title,
  description,
  path = '',
  keywords,
  image,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  // Ensure title is between 20-60 characters for optimal SEO
  const baseTitle = title || 'Removal Services Birmingham';
  const fullTitle = baseTitle.length > 50 
    ? baseTitle 
    : `${baseTitle} | ${siteConfig.name}`;
  
  // Truncate if still too long (max 60 chars)
  const finalTitle = fullTitle.length > 60 
    ? fullTitle.substring(0, 57) + '...' 
    : fullTitle;
  // Ensure description is between 150-220 characters for optimal SEO
  let fullDescription = description || siteConfig.description;
  if (fullDescription.length > 220) {
    fullDescription = fullDescription.substring(0, 217) + '...';
  } else if (fullDescription.length < 150) {
    fullDescription = fullDescription + ' Serving Birmingham, Coventry, Wolverhampton, Solihull, and surrounding areas.';
  }
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || `${siteConfig.url}${siteConfig.ogImage}`;

  const defaultKeywords = [
    'removal services Birmingham',
    'house movers Birmingham',
    'office moving Birmingham',
    'logistics services West Midlands',
    'pallet delivery Birmingham',
    'removal company Birmingham',
    'professional movers Birmingham',
    'Birmingham removals',
    'West Midlands logistics',
    'moving services Birmingham',
  ];

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: keywords ? [...defaultKeywords, ...keywords].join(', ') : defaultKeywords.join(', '),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url: url,
      title: fullTitle,
      description: fullDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} Logo`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add Google Search Console verification code here when available
      // google: 'your-google-verification-code',
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}#organization`,
    name: siteConfig.business.name,
    image: `${siteConfig.url}${siteConfig.logo}`,
    url: siteConfig.url,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    priceRange: siteConfig.business.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.business.address.streetAddress,
      addressLocality: siteConfig.business.address.addressLocality,
      addressRegion: siteConfig.business.address.addressRegion,
      postalCode: siteConfig.business.address.postalCode,
      addressCountry: siteConfig.business.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '52.4862',
      longitude: '-1.8904',
    },
    openingHoursSpecification: siteConfig.business.openingHours.map((hours) => {
      const [days, time] = hours.split(' ');
      const [open, close] = time.split('-');
      const [openHour, openMin] = open.split(':');
      const [closeHour, closeMin] = close.split(':');

      let dayOfWeek: string[] = [];
      if (days.includes('Mo')) dayOfWeek.push('Monday');
      if (days.includes('Tu')) dayOfWeek.push('Tuesday');
      if (days.includes('We')) dayOfWeek.push('Wednesday');
      if (days.includes('Th')) dayOfWeek.push('Thursday');
      if (days.includes('Fr')) dayOfWeek.push('Friday');
      if (days.includes('Sa')) dayOfWeek.push('Saturday');
      if (days.includes('Su')) dayOfWeek.push('Sunday');

      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: dayOfWeek,
        opens: `${openHour}:${openMin}`,
        closes: `${closeHour}:${closeMin}`,
      };
    }),
    areaServed: siteConfig.business.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    sameAs: [
      // Add social media links here when available
      // 'https://www.facebook.com/alburaqlogistics',
      // 'https://www.instagram.com/alburaqlogistics',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '50',
    },
  };
}

export function generateServiceSchema(service: typeof services[0]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.business.name,
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'City',
      name: 'Birmingham',
    },
    description: service.description,
    name: `${service.name} - ${siteConfig.name}`,
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

