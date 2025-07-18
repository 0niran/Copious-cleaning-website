import Link from 'next/link';
import Image from 'next/image';
import { siteData } from '@/data/site-data';

export default function Hero() {
  return (
    <section className="hero-gradient text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              {siteData.tagline}
            </h1>
            <p className="text-xl mb-8 text-white/90 font-normal">
              {siteData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#1c73ea] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center shadow-lg"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1c73ea] transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-video bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
              <Image
                src="/images/banner-img-1.jpg"
                alt="Professional Cleaning Services"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}