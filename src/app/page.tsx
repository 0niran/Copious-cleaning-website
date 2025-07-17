import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import { siteData } from '@/data/site-data';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {siteData.about.title}
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                {siteData.about.subtitle}
              </p>
              <p className="text-gray-600 mb-8">
                {siteData.about.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Jobs Completed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🧹</div>
                  <p className="text-gray-600">Professional Cleaning Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Testimonials />

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us in London
            </h2>
            <p className="text-xl text-gray-600">
              Serving the greater London area with professional cleaning services
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158276.55991561782!2d-0.24168193451008038!3d51.52877184074679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20United%20Kingdom!5e0!3m2!1sen!2s!4v1619512711885!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
