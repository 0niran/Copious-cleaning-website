import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get Free Quote | Copious Cleaning Services',
  description: 'Contact Copious Cleaning Services for a free quote. Professional cleaning services in London. Call +44-730-534-4748 or email info@copiouscleaning.co.uk. Fast response guaranteed.',
  keywords: [
    'contact cleaning company london',
    'free cleaning quote',
    'cleaning services contact',
    'book cleaning service',
    'professional cleaners contact',
    'london cleaning company contact'
  ],
  openGraph: {
    title: 'Contact Us - Get Free Quote | Copious Cleaning Services',
    description: 'Contact Copious Cleaning Services for a free quote. Professional cleaning services in London.',
    url: 'https://copiouscleaning.co.uk/contact',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}