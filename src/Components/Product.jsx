import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const Product = () => {
  const containerRef = useRef(null)
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)
  const arrowRef = useRef(null)

  useEffect(() => {
    // Only run animations on client side
    if (typeof window === 'undefined') return

    // Kill any existing ScrollTriggers to prevent duplicates
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    const ctx = gsap.context(() => {
      // Set initial states for all elements
      gsap.set([headingRef.current, descriptionRef.current, buttonRef.current], {
        opacity: 0,
        y: 30
      })

      // Create a master timeline for coordinated animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
          scrub: false,
          markers: false
        }
      })

      // Add animations to timeline with proper sequencing
      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4") // Overlap slightly with heading
      .to(buttonRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.2)",
        onComplete: () => {
          // Start arrow animation only once button is visible
          if (arrowRef.current) {
            gsap.to(arrowRef.current, {
              x: 8,
              duration: 1.5,
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut",
              delay: 0.5
            })
          }
        }
      }, "-=0.3")

    }, containerRef)

    // Cleanup
    return () => {
      ctx.revert()
      // Kill all animations on unmount
      gsap.killTweensOf(headingRef.current)
      gsap.killTweensOf(descriptionRef.current)
      gsap.killTweensOf(buttonRef.current)
      gsap.killTweensOf(arrowRef.current)
    }
  }, [])

  // Handle button hover effects
  const handleMouseEnter = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      })
    }
  }

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      })
    }
  }

  const handleClick = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      })
    }
  }

  return (
    <div ref={containerRef} className="text-black bg-white pt-20 md:pt-24">
      <div ref={sectionRef} className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 items-start lg:items-center">
          
          {/* Left Column - Heading */}
          <div className="lg:col-span-1 order-1">
            <h2 
              ref={headingRef}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-[52px] text-center lg:text-left"
            >
              The Future of Luxury Automotive
            </h2>
          </div>
          
          {/* Middle Column - Description */}
          <div className="lg:col-span-1 order-3 lg:order-2 mt-8 lg:mt-0">
            <p 
              ref={descriptionRef}
              className="text-base sm:text-lg text-gray-600 leading-relaxed px-0 sm:px-4 lg:px-8 text-center lg:text-left"
            >
              Step into the future of automotive excellence. Experience the pinnacle of performance and style with our cutting-edge electric vehicles.
            </p>
          </div>
          
          {/* Right Column - Button with Icon */}
          <div className="lg:col-span-1 order-2 lg:order-3 flex flex-col items-center lg:items-end mt-6 lg:mt-0">
            <button 
              ref={buttonRef}
              className="text-white bg-black hover:bg-gray-900 transition-all duration-300 py-3 px-6 sm:py-4 sm:px-8 rounded-full flex items-center justify-center gap-3 group w-full sm:w-auto min-w-[200px] max-w-[300px] lg:max-w-none shadow-lg hover:shadow-xl active:shadow-md"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            >
              <span className="text-sm sm:text-base font-medium whitespace-nowrap">See Our Products</span>
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-all duration-300 flex-shrink-0">
                <svg 
                  ref={arrowRef}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
            
            {/* Mobile-only decorative element */}
            <div className="mt-8 lg:hidden w-full max-w-[300px] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>
          
        </div>
      </div>
      
      {/* Decorative line for desktop */}
      <div className="hidden lg:block px-8 mt-12">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>
    </div>
  )
}

export default Product