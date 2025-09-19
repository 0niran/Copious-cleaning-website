import { Metadata } from 'next';
import Link from 'next/link';
import { siteData } from '@/data/site-data';

export const metadata: Metadata = {
  title: 'Professional Cleaning Services in London | Copious Cleaning Services',
  description: 'Comprehensive cleaning services in London: domestic house cleaning, office cleaning, Airbnb cleaning, end of tenancy, and after-party cleaning. Professional, reliable, and affordable.',
  keywords: [
    'cleaning services london',
    'domestic cleaning',
    'office cleaning london',
    'airbnb cleaning services',
    'end of tenancy cleaning',
    'after party cleaning',
    'commercial cleaning',
    'house cleaning services london',
    'professional cleaners'
  ],
  openGraph: {
    title: 'Professional Cleaning Services in London | Copious Cleaning Services',
    description: 'Comprehensive cleaning services in London: domestic, office, Airbnb, end of tenancy, and specialized cleaning.',
    url: 'https://copiouscleaning.co.uk/services',
    type: 'website',
  },
};

export default function Services() {
  const serviceIcons = {
    domestic: '🏠',
    office: '🏢',
    airbnb: '🏨',
    afterparty: '🎉',
    'end-of-tenancy': '📦'
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Professional cleaning services tailored to meet your specific needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-5xl mb-6 text-center">
                  {serviceIcons[service.id as keyof typeof serviceIcons]}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6 text-center">
                  {service.description}
                </p>
                <div className="text-center">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Copious Cleaning?
            </h2>
            <p className="text-xl text-gray-600">
              We deliver exceptional cleaning services with attention to detail
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600">Quick response times and flexible scheduling</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Insured</h3>
              <p className="text-gray-600">Fully insured and bonded for your peace of mind</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all services</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fair Pricing</h3>
              <p className="text-gray-600">Transparent pricing with no hidden fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free quote and let us transform your space
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}