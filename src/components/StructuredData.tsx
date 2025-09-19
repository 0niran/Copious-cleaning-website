import { siteData } from '@/data/site-data';

interface StructuredDataProps {
  type?: 'organization' | 'localBusiness' | 'service' | 'webpage';
  pageTitle?: string;
  pageDescription?: string;
  serviceName?: string;
  serviceDescription?: string;
}

export default function StructuredData({
  type = 'organization',
  pageTitle,
  pageDescription,
  serviceName,
  serviceDescription
}: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://copiouscleaning.co.uk';

    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": siteData.name,
          "description": siteData.description,
          "url": baseUrl,
          "logo": `${baseUrl}/images/logo.svg`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": siteData.contact.phone,
            "contactType": "Customer Service",
            "email": siteData.contact.email,
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressCountry": "GB"
          },
          "sameAs": []
        };

      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": baseUrl,
          "name": siteData.name,
          "description": siteData.description,
          "url": baseUrl,
          "logo": `${baseUrl}/images/logo.svg`,
          "image": `${baseUrl}/images/logo.svg`,
          "telephone": siteData.contact.phone,
          "email": siteData.contact.email,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressRegion": "England",
            "addressCountry": "GB"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "51.5074",
            "longitude": "-0.1278"
          },
          "openingHours": "Mo-Su 08:00-18:00",
          "priceRange": "££",
          "serviceArea": {
            "@type": "Place",
            "name": "London, UK"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Cleaning Services",
            "itemListElement": siteData.services.map(service => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": service.title,
                "description": service.description
              }
            }))
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": siteData.testimonials.length.toString(),
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": siteData.testimonials.map(testimonial => ({
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": testimonial.name
            },
            "reviewBody": testimonial.text,
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "1"
            }
          }))
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": serviceName || siteData.name,
          "description": serviceDescription || siteData.description,
          "provider": {
            "@type": "LocalBusiness",
            "name": siteData.name,
            "telephone": siteData.contact.phone,
            "email": siteData.contact.email,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "London",
              "addressCountry": "GB"
            }
          },
          "areaServed": {
            "@type": "Place",
            "name": "London, UK"
          },
          "serviceType": "Cleaning Service"
        };

      case 'webpage':
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": pageTitle || siteData.name,
          "description": pageDescription || siteData.description,
          "url": baseUrl,
          "isPartOf": {
            "@type": "WebSite",
            "name": siteData.name,
            "url": baseUrl
          },
          "about": {
            "@type": "LocalBusiness",
            "name": siteData.name,
            "description": siteData.description
          }
        };

      default:
        return {};
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2),
      }}
    />
  );
}