import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteData } from '@/data/site-data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteData.name,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.description,
  keywords: [
    'cleaning services',
    'domestic cleaning',
    'office cleaning',
    'London cleaning',
    'professional cleaning',
    'Airbnb cleaning',
    'end of tenancy cleaning',
    'after party cleaning',
  ],
  authors: [{ name: siteData.name }],
  creator: siteData.name,
  publisher: siteData.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://copiouscleaning.co.uk',
    title: siteData.name,
    description: siteData.description,
    siteName: siteData.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteData.name,
    description: siteData.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
