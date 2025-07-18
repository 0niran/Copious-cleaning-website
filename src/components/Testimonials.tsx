'use client';

import { useState, useEffect } from 'react';
import { siteData } from '@/data/site-data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const testimonials = siteData.testimonials;

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isClient]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Ensure client hydration before rendering dynamic content
  if (!isClient) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Our clients inspire us with their feedback and ratings, driving us to improve every day!
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="testimonial-card text-center">
              <blockquote className="text-lg md:text-xl text-gray-700 mb-8 italic font-medium leading-relaxed">
                {testimonials[0].text}
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 shadow-primary">
                  {testimonials[0].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonials[0].name}
                  </h4>
                  <p className="text-gray-600">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Our clients inspire us with their feedback and ratings, driving us to improve every day!
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Content */}
          <div className="testimonial-card text-center">
            <blockquote className="text-lg md:text-xl text-gray-700 mb-8 italic font-medium leading-relaxed">
              {testimonials[currentIndex].text}
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 shadow-primary">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600">Verified Customer</p>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => goToSlide(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-primary hover:bg-primary hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => goToSlide(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-primary hover:bg-primary hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}