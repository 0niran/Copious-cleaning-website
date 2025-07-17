import Link from 'next/link';
import { siteData } from '@/data/site-data';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {siteData.tagline}
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              {siteData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">🏠</span>
                </div>
                <p className="text-blue-100">Professional Cleaning Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}