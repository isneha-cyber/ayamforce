import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Innovations = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const bottomTextRef = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Subheading animation
      gsap.from(subheadingRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: subheadingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Images animation - stagger effect
      gsap.from([image1Ref.current, image2Ref.current, image3Ref.current], {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: image1Ref.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Bottom text animation
      gsap.from(bottomTextRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bottomTextRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const images = [
    "/Images/img4.jpg",
    "/Images/img8.webp",
    "/Images/img9.webp",
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
    animationRef.current = requestAnimationFrame(animation);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    cancelAnimationFrame(animationRef.current);
    
    const movedBy = currentTranslate - prevTranslate;
    
    if (movedBy < -100 && current < images.length - 1) {
      setCurrent(prev => prev + 1);
    }
    
    if (movedBy > 100 && current > 0) {
      setCurrent(prev => prev - 1);
    }
    
    setCurrentTranslate(-current * sliderWidth());
    setPrevTranslate(-current * sliderWidth());
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
    animationRef.current = requestAnimationFrame(animation);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = startX - currentX;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    cancelAnimationFrame(animationRef.current);
    
    const movedBy = currentTranslate - prevTranslate;
    
    if (movedBy < -100 && current < images.length - 1) {
      setCurrent(prev => prev + 1);
    }
    
    if (movedBy > 100 && current > 0) {
      setCurrent(prev => prev - 1);
    }
    
    setCurrentTranslate(-current * sliderWidth());
    setPrevTranslate(-current * sliderWidth());
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      cancelAnimationFrame(animationRef.current);
      setCurrentTranslate(-current * sliderWidth());
      setPrevTranslate(-current * sliderWidth());
    }
  };

  const sliderWidth = () => {
    return sliderRef.current ? sliderRef.current.offsetWidth : 0;
  };

  const animation = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${currentTranslate}px)`;
    }
    if (isDragging) {
      requestAnimationFrame(animation);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.style.transform = `translateX(-${current * 100}%)`;
    }
  }, [current]);

  useEffect(() => {
    const preventScroll = (e) => {
      if (isDragging) {
        e.preventDefault();
      }
    };
    
    document.addEventListener('touchmove', preventScroll, { passive: false });
    
    return () => {
      document.removeEventListener('touchmove', preventScroll);
    };
  }, [isDragging]);

  return (
    <>
      <div className="py-12 md:py-20 lg:py-24 hidden md:block">
        <div className="px-4 sm:px-6 md:px-8">
          {/* Heading Section */}
          <div className="text-center mb-12 md:mb-16 cursor-pointer">
            <h2
              ref={headingRef}
              className="text-lg md:text-3xl font-semibold md:tracking-3px md:leading-[42px] max-w-3xl mx-auto mb-2"
            >
              Built For The Journey Ahead. Advanced Engineering Meets Rugged
              Reliability With Precision-Crafted Interiors
            </h2>
            <p
              ref={subheadingRef}
              className="text-lg md:text-3xl text-gray-400 md:leading-[42px] md:tracking-3px max-w-3xl mx-auto transition-all duration-300 hover:text-black hover:font-semibold"
            >
              And Intelligent Features That Adapt To Every Terrain, Making Your
              Force Motors Vehicle The Perfect Companion For Work And Adventure.
            </p>
          </div>

          {/* Images Grid Section */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
              {/* Image 1 - Large on the left */}
              <div
                ref={image1Ref}
                className="lg:row-span-2 overflow-hidden rounded-2xl"
              >
                <img
                  className="h-[80vh] w-[90vh] object-cover hover:scale-105 transition-transform duration-500"
                  src="/Images/img4.jpg"
                  alt="Force Motors Rugged Interior"
                />
              </div>

              {/* Image 2 - Top right */}
              <div
                ref={image2Ref}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  className="w-full h-64 md:h-72 lg:h-80 object-cover hover:scale-105 transition-transform duration-500"
                  src="/Images/img8.webp"
                  alt="Force Motors Command Center"
                />
              </div>

              {/* Image 3 - Bottom right */}
              <div
                ref={image3Ref}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  className="w-full h-64 md:h-72 lg:h-80 object-cover hover:scale-105 transition-transform duration-500"
                  src="/Images/img9.webp"
                  alt="Force Motors Spacious Cabin"
                />
              </div>
            </div>

            {/* Bottom Text Section */}
            <div
              ref={bottomTextRef}
              className="absolute right-52 bottom-52 w-full max-w-3xl mx-auto sm:ps-6"
              style={{ 
                transform: 'translateY(100%)',
                marginTop: '1.5rem'
              }}
            >
              <div className="rounded-2xl">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                  Where Durability Meets Comfort
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Experience a cabin engineered for both tough terrain and daily
    comfort. With ergonomic seating, practical storage solutions,
    and intuitive controls, every element of Force Motors' interior
    is designed to support your mission, whether it's hauling cargo
    or conquering off-road challenges. Advanced vibration-dampening
    technology ensures a smooth ride even on the roughest paths, 
    while premium materials and climate-controlled systems provide 
    unparalleled comfort during extended journeys. Our thoughtfully 
    designed workspace integration allows you to stay connected 
    and productive, transforming every journey into an opportunity 
    for achievement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
   
      {/* Mobile Version */}
     <div className="block md:hidden -mt-52 pb-24 bg-white relative">
  <div className="px-4">
    {/* Heading Section */}
    <div className="text-center mb-8 pt-6">
      <h2
        ref={headingRef}
        className="text-xl sm:text-2xl font-bold max-w-3xl mx-auto mb-3 text-gray-900 leading-tight"
      >
        Built For The Journey Ahead
      </h2>
      <p className="text-lg sm:text-xl font-semibold  mb-4">
        Advanced Engineering Meets Rugged Reliability
      </p>
      <p
        ref={subheadingRef}
        className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-2"
      >
        With precision-crafted interiors and intelligent features that adapt to every terrain, 
        making your Force Motors vehicle the perfect companion for work and adventure.
      </p>
    </div>

    {/* Mobile Slider */}
    <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6">
      {/* Slide Counter */}
      <div className="absolute top-4 right-4 z-10 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-full">
        {current + 1} / {images.length}
      </div>
      
      <div
        ref={sliderRef}
        className="flex transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing touch-pan-x"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {images.map((img, index) => (
          <div key={index} className="min-w-full select-none relative">
            <img
              src={img}
              alt={`Force Motors Interior ${index + 1}`}
              className="w-full h-[280px] sm:h-[320px] object-cover pointer-events-none"
              loading="lazy"
            />
            {/* Image Overlay Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all active:scale-95"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all active:scale-95"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-4 absolute bottom-4 left-1/2 -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 ${
              current === index
                ? "bg-white w-8 h-2 rounded-full"
                : "bg-white/60 w-2 h-2 rounded-full hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>

  

    {/* Bottom Content Card */}
    <div ref={bottomTextRef} className="mt-4">
      <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-2xl shadow-sm border border-gray-200">
        <div className="flex items-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Where Durability Meets Comfort
          </h3>
        </div>
        
        <div className="space-y-3">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Experience a cabin engineered for both tough terrain and daily comfort. 
            With ergonomic seating, practical storage solutions, and intuitive controls.
          </p>
       
          
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Every element of Force Motors' interior is designed to support your mission—whether 
            it's hauling cargo or conquering off-road challenges. Advanced features ensure 
            optimal performance and comfort in all conditions.
          </p>
          
         
        </div>
      </div>
    </div>

   
  </div>
</div>
    </>
  );
};

export default Innovations;