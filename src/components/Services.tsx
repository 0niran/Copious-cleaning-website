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
              className="service-card group"
            >
              <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform">
                {serviceIcons[service.id as keyof typeof serviceIcons]}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {service.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                {service.description}
              </p>
              <div className="text-center">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-primary hover:text-secondary font-semibold"
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
  );
}