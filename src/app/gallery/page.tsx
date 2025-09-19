import { Metadata } from 'next';
import Image from 'next/image';
import { siteData } from '@/data/site-data';

export const metadata: Metadata = {
  title: 'Gallery - Professional Cleaning Work Examples | Copious Cleaning Services',
  description: 'View our professional cleaning work gallery. See before and after photos of our domestic cleaning, office cleaning, and specialized cleaning projects in London.',
  keywords: [
    'cleaning work gallery',
    'professional cleaning examples',
    'before after cleaning photos',
    'cleaning company portfolio',
    'london cleaning work',
    'cleaning service examples'
  ],
  openGraph: {
    title: 'Gallery - Professional Cleaning Work Examples | Copious Cleaning Services',
    description: 'View our professional cleaning work gallery with before and after photos of our cleaning projects.',
    url: 'https://copiouscleaning.co.uk/gallery',
    type: 'website',
  },
};

export default function Gallery() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Work Gallery
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              See examples of our professional cleaning work and the quality results we deliver
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Work Examples
            </h2>
            <p className="text-xl text-gray-600">
              Professional cleaning results from our experienced team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.gallery.map((image) => (
              <div
                key={image.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-square relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    quality={90}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Professional Cleaning Work
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Example of our thorough and professional cleaning services
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to See These Results in Your Space?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free quote and let us deliver the same quality results for you
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>
    </div>
  );
}