import Link from 'next/link';
import Image from 'next/image';
import { siteData } from '@/data/site-data';

export default function Hero() {
  return (
    <section className="hero-gradient gradient-shift text-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/30 to-transparent"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200/20 rounded-full blur-xl floating-element"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-blue-100/15 rounded-full blur-2xl floating-element" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-200/10 rounded-full blur-xl pulse-glow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              {siteData.tagline}
            </h1>
            <p className="text-xl mb-8 text-gray-700 font-normal">
              {siteData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#1c73ea] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#247ffb] transition-colors text-center shadow-lg"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="border-2 border-[#1c73ea] text-[#1c73ea] px-8 py-4 rounded-lg font-semibold hover:bg-[#1c73ea] hover:text-white transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative floating-element h-full">
            <div className="hero-image-container w-full max-w-2xl mx-auto">
              <Image
                src="/images/banner-img-1.jpg"
                alt="Professional Cleaning Services"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority
                quality={100}
                style={{ mixBlendMode: 'normal' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}