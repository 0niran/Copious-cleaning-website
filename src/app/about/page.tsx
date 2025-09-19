import { Metadata } from 'next';
import Image from 'next/image';
import { siteData } from '@/data/site-data';

export const metadata: Metadata = {
  title: 'About Us - Professional Cleaning Company | Copious Cleaning Services',
  description: 'Learn about Copious Cleaning Services - London\'s trusted professional cleaning company. We\'re committed to excellence with reliable, honest, and highly motivated cleaners who don\'t cut corners.',
  keywords: [
    'about copious cleaning',
    'professional cleaning company london',
    'reliable cleaners',
    'cleaning company history',
    'trusted cleaning services',
    'london cleaning professionals'
  ],
  openGraph: {
    title: 'About Us - Professional Cleaning Company | Copious Cleaning Services',
    description: 'Learn about Copious Cleaning Services - London\'s trusted professional cleaning company with reliable, professional cleaners.',
    url: 'https://copiouscleaning.co.uk/about',
    type: 'website',
  },
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {siteData.about.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {siteData.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {siteData.about.description}
              </p>
              <p className="text-gray-600 mb-8">
                We pride ourselves on attention to detail and customer satisfaction. 
                Our team of experienced cleaners uses eco-friendly products and modern 
                equipment to deliver exceptional results every time.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Jobs Completed</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">⭐⭐⭐⭐⭐</div>
                  <div className="text-gray-600">5 Star Rating</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/about-img-3.jpg"
                  alt="Professional Cleaning Team"
                  width={800}
                  height={533}
                  className="w-full h-full object-cover"
                  quality={95}
                />
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/about-img-4.jpg"
                  alt="Quality Cleaning Results"
                  width={800}
                  height={533}
                  className="w-full h-full object-cover"
                  quality={95}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              What drives us to deliver exceptional cleaning services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every cleaning job is performed to the highest standards.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust</h3>
              <p className="text-gray-600">
                Reliable and trustworthy service you can count on. We treat your space with respect.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Eco-Friendly</h3>
              <p className="text-gray-600">
                We use environmentally friendly products that are safe for your family and pets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}