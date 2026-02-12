import React, { useState, useRef, useEffect } from 'react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    text: "When it comes to digital marketing there are loads of commentators that talk a good game, but Sonja and Sharon help you make it happen. They have enabled me, coached me and given me the confidence to share Wealth Horizon's story widely.",
    author: "Selena Rock",
    role: "CTO",
    company: "Wealth Horizon"
  },
  {
    id: 2,
    text: "The team provided exceptional service and transformed our digital presence completely. Their strategic approach helped us achieve 300% growth in just six months.",
    author: "Michael Chen",
    role: "Marketing Director",
    company: "TechGrowth Inc"
  },
  {
    id: 3,
    text: "Working with them has been a game-changer for our business. Their insights and expertise in digital strategy are unmatched in the industry.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "Innovate Solutions"
  },
  {
    id: 4,
    text: "The level of professionalism and results-driven approach is outstanding. They delivered beyond our expectations and continue to support our growth journey.",
    author: "David Wilson",
    role: "Product Manager",
    company: "NextGen Labs"
  },
  {
    id: 5,
    text: "Exceptional service with measurable results. Their data-driven strategies helped us optimize our campaigns and maximize ROI significantly.",
    author: "Lisa Anderson",
    role: "Operations Director",
    company: "Global Enterprises"
  }
];

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef(null);

  // Minimum swipe distance (px)
  const minSwipeDistance = 50;

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    }
    
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const currentTestimonial = testimonials[currentSlide];

  return (
    <div className="bg-gray-50 py-6 sm:py-8 md:py-12 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl relative">
        {/* Heading - Much smaller on mobile */}
        <h2 className='text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#256dab] font-semibold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10'>
          Impactful Success
        </h2>

        {/* Main card with slide animation and touch handlers */}
        <div className="relative">
          <div 
            ref={sliderRef}
            className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg sm:shadow-xl lg:shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Opening quote - Smaller on mobile */}
            <div className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-2 sm:top-4 md:top-6 lg:top-8">
              <svg 
                viewBox="0 0 100 80" 
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 fill-blue-400 opacity-90"
              >
                <path d="M0 60V30c0-16.667 5.833-25 17.5-25h5v10h-5c-5 0-7.5 2.5-7.5 7.5v2.5h12.5v35H0zm47.5 0V30c0-16.667 5.833-25 17.5-25h5v10h-5c-5 0-7.5 2.5-7.5 7.5v2.5H70v35H47.5z"/>
              </svg>
            </div>

            {/* Testimonial content */}
            <div className="relative z-10">
              <div 
                className="transition-opacity duration-500"
                key={currentSlide}
              >
                {/* Text with better mobile spacing */}
                <p className="text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed font-normal mb-3 sm:mb-4 md:mb-6 lg:mb-8 pl-4 sm:pl-6 md:pl-8 lg:pl-10 xl:pl-12">
                  {currentTestimonial.text}
                </p>

                {/* Author section - Stacked better on mobile */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 pl-4 sm:pl-6 md:pl-8 lg:pl-10 xl:pl-12">
                  {/* Avatar - Smaller on mobile */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-blue-400 p-0.5">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center">
                          <svg viewBox="0 0 100 100" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 fill-white opacity-80">
                            <circle cx="50" cy="35" r="15"/>
                            <path d="M25 75 Q25 55 50 55 Q75 55 75 75 L75 85 Q75 90 70 90 L30 90 Q25 90 25 85 Z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Name and details - Better text hierarchy */}
                  <div className="flex-1 min-w-0 mt-1 sm:mt-0">
                    <h3 className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-0.5 truncate">
                      {currentTestimonial.author}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-medium mb-0.5 truncate">
                      {currentTestimonial.role}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm truncate">
                      {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing quote - Smaller on mobile */}
            <div className="absolute right-2 sm:right-4 md:right-6 lg:right-8 bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8">
              <svg 
                viewBox="0 0 100 80" 
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 fill-blue-400 opacity-90 rotate-180"
              >
                <path d="M0 60V30c0-16.667 5.833-25 17.5-25h5v10h-5c-5 0-7.5 2.5-7.5 7.5v2.5h12.5v35H0zm47.5 0V30c0-16.667 5.833-25 17.5-25h5v10h-5c-5 0-7.5 2.5-7.5 7.5v2.5H70v35H47.5z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Navigation dots - Smaller on mobile */}
        <div className="flex justify-center gap-1.5 sm:gap-2 md:gap-3 mt-4 sm:mt-5 md:mt-6 lg:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${
                index === currentSlide 
                  ? 'w-4 sm:w-5 md:w-6 h-1.5 sm:h-2 md:h-2.5 bg-blue-600' 
                  : 'w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5 bg-blue-300 hover:bg-blue-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}