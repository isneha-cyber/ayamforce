import React, { useRef, useEffect, useState, useCallback } from 'react'
import { gsap } from 'gsap'

const Forward = () => {
  const cardRefs = useRef([])
  const sliderRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // Check responsive breakpoints
  useEffect(() => {
    const checkResponsive = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
    }
    
    checkResponsive()
    window.addEventListener('resize', checkResponsive)
    return () => window.removeEventListener('resize', checkResponsive)
  }, [])

  // GSAP animations for desktop cards
  useEffect(() => {
    if (isMobile || isTablet) return

    const setupHoverEffects = () => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return

        const img = card.querySelector('.card-image')
        const content = card.querySelector('.card-content')

        if (!img || !content) return

        const handleMouseEnter = () => {
          gsap.killTweensOf([img, content])
          gsap.to(img, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out'
          })
          gsap.to(content, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out'
          })
        }

        const handleMouseLeave = () => {
          gsap.killTweensOf([img, content])
          gsap.to(img, {
            opacity: 0,
            scale: 1.05,
            duration: 0.4,
            ease: 'power2.in'
          })
          gsap.to(content, {
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out'
          })
        }

        card.addEventListener('mouseenter', handleMouseEnter)
        card.addEventListener('mouseleave', handleMouseLeave)
      })
    }

    setupHoverEffects()

    return () => {
      cardRefs.current.forEach((card) => {
        if (!card) return
        card.removeEventListener('mouseenter', () => {})
        card.removeEventListener('mouseleave', () => {})
      })
    }
  }, [isMobile, isTablet])

  // Slider navigation
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === cards.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? cards.length - 1 : prev - 1))
  }, [])

  // Auto slide for mobile
  useEffect(() => {
    if (!isMobile) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isMobile, nextSlide])

  // Touch handling for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const minSwipeDistance = 50
    
    if (Math.abs(distance) < minSwipeDistance) return
    
    if (distance > 0) {
      // Swipe left - next slide
      nextSlide()
    } else {
      // Swipe right - previous slide
      prevSlide()
    }
    
    setTouchStart(null)
    setTouchEnd(null)
  }

  const cards = [
    {
      number: '01',
      title: 'Pioneering R&D Excellence',
      description: "From autorickshaws to premium shared mobility, our integrated R&D center handles everything from concept to production. With India's largest NVH labs and ISO 17025 certified testing facilities, we ensure innovation is built into every vehicle.",
      image: '/Images/img7.webp'
    },
    {
      number: '02',
      title: 'Precision Engineering',
      description: "Backed by one of India's largest in-house Tool Rooms, we achieve manufacturing excellence at scale. Our precision tooling ensures high-quality standardization across all vehicle production stages, supporting leading Tier 1 OEMs nationwide.",
      image: '/Images/img8.webp'
    },
    {
      number: '03',
      title: 'Global Manufacturing Partnerships',
      description: "Since 1997, we've been manufacturing engines and axles for Mercedes-Benz India. Our dedicated facility in Pune produces 4-cylinder and V6 gasoline/diesel engines.",
      image: '/Images/img9.webp'
    },
    {
      number: '04',
      title: 'Future-Ready Mobility',
      description: "Building on our legacy of innovation, we're developing sustainable mobility solutions. From commercial vehicles to emerging electric platforms, we're committed to delivering safe, reliable, and innovative transportation for tomorrow.",
      image: '/Images/img10.webp'
    }
  ]

  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-2">
          <h2 className="text-2xl xs:text-2.5xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-900 leading-tight">
            Innovation & Engineering
          </h2>
          <h3 className="text-xl xs:text-2xl sm:text-2.5xl md:text-3xl lg:text-4.5xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-600 hover:text-gray-900 transition-colors duration-300 leading-tight">
            Built on Legacy, Driving Tomorrow
          </h3>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-normal leading-relaxed px-2 sm:px-4">
            From pioneering autorickshaws to premium automotive partnerships, Force Motors combines decades of expertise with cutting-edge technology to shape the future of mobility.
          </p>
        </div>

        {/* Desktop Grid Layout - 4 columns */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el
              }}
              className="relative aspect-[3/4] xs:aspect-square md:aspect-[3/4] bg-white rounded-xl md:rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-2xl"
            >
              {/* Card Content */}
              <div className="card-content absolute inset-0 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col pointer-events-none bg-gradient-to-b from-white/95 via-white/90 to-white/80 z-10">
                <div className="text-xs sm:text-sm font-medium text-gray-600 mb-2 sm:mb-3 md:mb-4">
                  {card.number}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-gray-900">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed font-normal flex-grow overflow-y-auto">
                  {card.description}
                </p>
              </div>

              {/* Hover Image */}
              <img
                className="card-image absolute inset-0 w-full h-full object-cover opacity-0 scale-105"
                src={card.image}
                alt={card.title}
                loading="lazy"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Tablet Layout - 2 columns (768px - 1023px) */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="relative w-full md:w-2/5 h-48 md:h-auto">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {card.number}
                  </div>
                </div>
                
                {/* Text Content Section */}
                <div className="w-full md:w-3/5 p-4 md:p-6 flex flex-col">
                  <div className="text-xs font-medium text-gray-600 mb-2">
                    {card.number}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed flex-grow overflow-y-auto">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider Layout */}
        <div className="md:hidden relative">
          {/* Slider Container */}
          <div 
            ref={sliderRef}
            className="overflow-hidden relative rounded-xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <div className="flex flex-col">
                      {/* Image Section */}
                      <div className="relative w-full h-48">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 bg-black/80 text-white text-xs font-medium px-3 py-1 rounded-full">
                          {card.number}
                        </div>
                      </div>
                      
                      {/* Text Content Section */}
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2 text-gray-900 leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 hover:text-gray-900 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 z-10"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 hover:text-gray-900 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 z-10"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gray-800 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forward