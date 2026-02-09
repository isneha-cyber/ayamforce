import React, { useState } from 'react';

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

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto slide every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const currentTestimonial = testimonials[currentSlide];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl relative">
        <h2 className='text-4xl sm:text-5xl lg:text-6xl text-[#256dab] font-semibold text-center py-8 sm:py-10 lg:py-12'>
          Impactful Success
        </h2>

       

        {/* Navigation arrows */}
        {/* <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 z-20">
          <button
            onClick={prevSlide}
            className="bg-white/80 hover:bg-white text-blue-600 hover:text-blue-700 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/80 hover:bg-white text-blue-600 hover:text-blue-700 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div> */}

        {/* Main card with slide animation */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 lg:p-14 relative overflow-hidden">
            {/* Opening quote */}
            <div className="absolute left-4 sm:left-6 lg:left-8 top-6 sm:top-8 lg:top-10">
              <svg 
                viewBox="0 0 100 80" 
                className="w-12 sm:w-16 lg:w-20 h-auto fill-blue-400 opacity-90"
              >
                <path d="M0 60V30c0-16.667 5.833-25 17.5-25h5v10h-5c-5 0-7.5 2.5-7.5 7.5v2.5h12.5v35H0zm47.5 0V30c0-16.667 5.833-25 17.5-25h5v10h-5c-5 0-7.5 2.5-7.5 7.5v2.5H70v35H47.5z"/>
              </svg>
            </div>

            {/* Testimonial content with slide animation */}
            <div className="relative z-10">
              <div 
                className="transition-opacity duration-500"
                key={currentSlide}
              >
                <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-relaxed lg:leading-relaxed font-normal mb-8 sm:mb-12 lg:mb-16 pl-10 sm:pl-14 lg:pl-18">
                  {currentTestimonial.text}
                </p>

                {/* Author section */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 lg:gap-6 pl-10 sm:pl-14 lg:pl-18">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-400 p-0.5">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center">
                          <svg viewBox="0 0 100 100" className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 fill-white opacity-80">
                            <circle cx="50" cy="35" r="15"/>
                            <path d="M25 75 Q25 55 50 55 Q75 55 75 75 L75 85 Q75 90 70 90 L30 90 Q25 90 25 85 Z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Name and details */}
                  <div>
                    <h3 className="text-gray-900 text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1">
                      {currentTestimonial.author}
                    </h3>
                    <p className="text-gray-500 text-base sm:text-lg font-medium mb-1">
                      {currentTestimonial.role}
                    </p>
                    <p className="text-gray-400 text-sm sm:text-base">
                      {currentTestimonial.company}
                    </p>
                  </div>

                  {/* Slide indicator */}
                  {/* <div className="sm:ml-auto mt-4 sm:mt-0">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600 text-lg sm:text-xl font-semibold">
                        {currentSlide + 1}
                      </span>
                      <span className="text-gray-300">/</span>
                      <span className="text-gray-400">
                        {testimonials.length}
                      </span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Closing quote */}
            <div className="absolute right-4 sm:right-6 lg:right-8 bottom-6 sm:bottom-8 lg:bottom-10">
              <svg 
                viewBox="0 0 100 80" 
                className="w-12 sm:w-16 lg:w-20 h-auto fill-blue-400 opacity-90 rotate-180"
              >
                <path d="M0 60V30c0-16.667 5.833-25 17.5-25h5v10h-5c-5 0-7.5 2.5-7.5 7.5v2.5h12.5v35H0zm47.5 0V30c0-16.667 5.833-25 17.5-25h5v10h-5c-5 0-7.5 2.5-7.5 7.5v2.5H70v35H47.5z"/>
              </svg>
            </div>

            

            {/* Slide progress bar */}
            {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
              <div 
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / testimonials.length) * 100}%` }}
              ></div>
            </div> */}
          </div>

          {/* Thumbnail navigation for mobile */}
          {/* <div className="flex justify-center gap-3 sm:hidden mt-6">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-blue-300 hover:bg-blue-400'
                }`}
                aria-label={`View testimonial from ${testimonial.author}`}
              />
            ))}
          </div> */}
        </div>

        {/* Desktop navigation dots (alternative placement) */}
        <div className="flex justify-center gap-4 mt-8 ">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                index === currentSlide 
                  ? 'w-8 h-3 bg-blue-600' 
                  : 'w-3 h-3 bg-blue-300 hover:bg-blue-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        
      </div>
    </div>
  );
}