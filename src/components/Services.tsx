import Link from 'next/link';
import { siteData } from '@/data/site-data';

export default function Services() {
  const serviceIcons = {
    domestic: '🏠',
    office: '🏢',
    airbnb: '🏨',
    afterparty: '🎉',
    'end-of-tenancy': '📦'
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Our Service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expert cleaners are constantly honing their skills to deliver the highest 
            standard of service, ensuring your space is spotless every time!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">
                {serviceIcons[service.id as keyof typeof serviceIcons]}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {service.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}