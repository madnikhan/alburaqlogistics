import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema, generateWebSiteSchema } from '@/lib/seo';
import { Service } from '@/types';

interface StructuredDataProps {
  type?: 'localBusiness' | 'service' | 'breadcrumb' | 'website';
  service?: Service;
  breadcrumbItems?: { name: string; url: string }[];
}

export default function StructuredData({ 
  type = 'localBusiness', 
  service,
  breadcrumbItems 
}: StructuredDataProps) {
  let schema;

  switch (type) {
    case 'localBusiness':
      schema = generateLocalBusinessSchema();
      break;
    case 'service':
      if (service) {
        schema = generateServiceSchema(service);
      }
      break;
    case 'breadcrumb':
      if (breadcrumbItems) {
        schema = generateBreadcrumbSchema(breadcrumbItems);
      }
      break;
    case 'website':
      schema = generateWebSiteSchema();
      break;
    default:
      schema = generateLocalBusinessSchema();
  }

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

