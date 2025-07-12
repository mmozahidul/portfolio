import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Star } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  review?: string;
  reviewer?: string;
  rating?: number;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Google Ads for Shopify Store",
    description: "Increased ROAS by 340% through strategic campaign optimization and audience targeting.",
    icon: "🛍️",
    review: "Exceptional results! My store's revenue doubled in just 3 months.",
    reviewer: "Sarah M.",
    rating: 5
  },
  {
    id: 2,
    title: "SEO Audit & Optimization",
    description: "Boosted organic traffic by 280% with comprehensive technical SEO improvements.",
    icon: "📈",
    review: "Professional work that delivered exactly what was promised.",
    reviewer: "Mike R.",
    rating: 5
  },
  {
    id: 3,
    title: "WordPress E-commerce Site",
    description: "Built a high-converting online store with custom features and mobile optimization.",
    icon: "💻",
    review: "Clean, fast website that perfectly represents our brand.",
    reviewer: "Lisa K.",
    rating: 5
  },
  {
    id: 4,
    title: "Local Business SEO",
    description: "Achieved #1 Google ranking for 15+ local keywords within 6 months.",
    icon: "📍",
    review: "Our local visibility increased dramatically. Highly recommended!",
    reviewer: "Tom B.",
    rating: 5
  },
  {
    id: 5,
    title: "Content Marketing Strategy",
    description: "Developed comprehensive content plan that generated 500+ qualified leads.",
    icon: "✍️",
    review: "Strategic approach that delivered measurable business growth.",
    reviewer: "Emma D.",
    rating: 5
  },
  {
    id: 6,
    title: "WordPress Performance Optimization",
    description: "Reduced site load time by 85% and improved Google PageSpeed score to 95+.",
    icon: "⚡",
    review: "Amazing speed improvements that boosted our conversions significantly.",
    reviewer: "David L.",
    rating: 5
  }
];

export default function PortfolioPreview() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(portfolioItems.length / itemsPerSlide));
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [itemsPerSlide]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(portfolioItems.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F3F4F6] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4 px-4">My Work Highlights</h2>
          <p className="text-lg text-[#334155] max-w-2xl mx-auto px-4">
            Real results from recent projects that showcase my expertise in digital marketing
          </p>
        </div>

        {/* Portfolio Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className={`grid gap-6 ${
                    itemsPerSlide === 1 ? 'grid-cols-1' : 
                    itemsPerSlide === 2 ? 'grid-cols-2' : 
                    'grid-cols-3'
                  }`}>
                    {portfolioItems
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((item) => (
                        <div
                          key={item.id}
                          className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group border border-[#F3F4F6]"
                        >
                          {/* Icon */}
                          <div className="text-4xl mb-4 text-center">{item.icon}</div>
                          
                          {/* Title */}
                          <h3 className="text-xl font-bold text-[#0F172A] mb-3 text-center">
                            {item.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-[#334155] mb-4 text-center leading-relaxed">
                            {item.description}
                          </p>
                          
                          {/* Review Section */}
                          {item.review && (
                            <div className="border-t border-[#F3F4F6] pt-4 mt-4">
                              <div className="flex items-center justify-center gap-1 mb-2">
                                {[...Array(item.rating || 5)].map((_, i) => (
                                  <Star key={i} size={14} className="fill-[#FACC15] text-[#FACC15]" />
                                ))}
                              </div>
                              <p className="text-sm text-[#334155] italic text-center mb-2">
                                "{item.review}"
                              </p>
                              <p className="text-xs text-[#334155] text-center font-medium">
                                - {item.reviewer}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#1E40AF]/90 hover:bg-[#1E40AF] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous portfolio items"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#1E40AF]/90 hover:bg-[#1E40AF] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next portfolio items"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#1E40AF] scale-125' 
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-[#334155] mb-6 px-4">
            Want to see more detailed case studies and project breakdowns?
          </p>
          <a 
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View More
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}