import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { siteData } from '@/data/site-data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = siteData.services.find(s => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return siteData.services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = siteData.services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceImages = {
    'domestic-cleaning': '/images/about-img-1.jpg',
    'office-cleaning': '/images/about-img-3.jpg',
    'airbnb-cleaning-service': '/images/about-img-4.jpg',
    'afterparty-cleaning': '/images/banner-img-1.jpg',
    'end-of-tenancy-cleaning': '/images/gallery/IMG-20230915-WA0020.png'
  };

  const serviceFeatures = {
    'domestic-cleaning': [
      'Regular weekly, bi-weekly, or monthly cleaning',
      'Deep cleaning services available',
      'Bathroom and kitchen sanitization',
      'Dusting and vacuuming all rooms',
      'Window cleaning (interior)',
      'Flexible scheduling to fit your needs'
    ],
    'office-cleaning': [
      'Daily, weekly, or monthly office cleaning',
      'Workspace sanitization and disinfection',
      'Restroom cleaning and restocking',
      'Kitchen and break room maintenance',
      'Carpet and floor care',
      'Trash removal and recycling'
    ],
    'airbnb-cleaning-service': [
      'Turnaround cleaning between guests',
      'Linen and towel replacement',
      'Kitchen deep cleaning',
      'Bathroom sanitization',
      'Inventory restocking',
      'Quality inspection before guest arrival'
    ],
    'afterparty-cleaning': [
      'Post-event cleanup and restoration',
      'Stain and spill removal',
      'Trash and debris removal',
      'Floor and surface sanitization',
      'Kitchen and bathroom deep clean',
      'Furniture and decoration restoration'
    ],
    'end-of-tenancy-cleaning': [
      'Comprehensive move-out cleaning',
      'Kitchen appliance deep cleaning',
      'Bathroom descaling and sanitization',
      'Carpet and upholstery cleaning',
      'Window cleaning (interior and exterior)',
      'Deposit guarantee cleaning standards'
    ]
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What&apos;s Included
              </h2>
              <ul className="space-y-4">
                {serviceFeatures[slug as keyof typeof serviceFeatures]?.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
            
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={serviceImages[slug as keyof typeof serviceImages]}
                alt={service.title}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our {service.title}?
            </h2>
            <p className="text-xl text-gray-600">
              Professional, reliable, and thorough cleaning services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Team</h3>
              <p className="text-gray-600">
                Trained and experienced cleaners who take pride in their work
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Scheduling</h3>
              <p className="text-gray-600">
                We work around your schedule to provide convenient service times
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Guarantee</h3>
              <p className="text-gray-600">
                100% satisfaction guarantee - we&apos;re not happy until you are
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Other Services
            </h2>
            <p className="text-xl text-gray-600">
              Explore our full range of professional cleaning services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.services
              .filter(s => s.slug !== slug)
              .slice(0, 4)
              .map((relatedService) => (
                <div key={relatedService.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {relatedService.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {relatedService.description.slice(0, 80)}...
                  </p>
                  <Link
                    href={`/services/${relatedService.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your {service.title}?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free quote and let us take care of the cleaning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Free Quote
            </Link>
            <Link
              href={`tel:${siteData.contact.phone}`}
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call {siteData.contact.phone}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}