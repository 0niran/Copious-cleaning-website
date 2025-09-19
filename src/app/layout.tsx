import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { siteData } from '@/data/site-data';

export const metadata: Metadata = {
  title: {
    default: siteData.name,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.description,
  keywords: [
    'cleaning services london',
    'domestic cleaning',
    'office cleaning',
    'professional cleaners london',
    'house cleaning services',
    'commercial cleaning',
    'Airbnb cleaning london',
    'end of tenancy cleaning',
    'after party cleaning',
    'deep cleaning services',
    'reliable cleaning company',
    'affordable cleaning services',
    'copious cleaning services',
  ],
  authors: [{ name: siteData.name }],
  creator: siteData.name,
  publisher: siteData.name,
  applicationName: siteData.name,
  category: 'Cleaning Services',
  classification: 'Business',
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
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: 'https://copiouscleaning.co.uk',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://copiouscleaning.co.uk',
    title: siteData.name,
    description: siteData.description,
    siteName: siteData.name,
    images: [
      {
        url: 'https://copiouscleaning.co.uk/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${siteData.name} - Professional Cleaning Services in London`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteData.name,
    description: siteData.description,
    images: ['https://copiouscleaning.co.uk/images/og-image.jpg'],
  },
  other: {
    'business:contact_data:street_address': siteData.location,
    'business:contact_data:locality': 'London',
    'business:contact_data:region': 'England',
    'business:contact_data:postal_code': '',
    'business:contact_data:country_name': 'United Kingdom',
    'business:contact_data:email': siteData.contact.email,
    'business:contact_data:phone_number': siteData.contact.phone,
    'business:contact_data:website': 'https://copiouscleaning.co.uk',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData type="organization" />
        <StructuredData type="localBusiness" />
      </head>
      <body suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
