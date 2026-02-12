// import React, { useState, useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const Category = () => {
//   const [activeCategory, setActiveCategory] = useState('GURKHA');
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [imageLoading, setImageLoading] = useState({});
  
//   const categories = ['GURKHA', 'TRAVELLER', 'MONOBUS', 'TRAX', 'URBANIA'];
  
//   // Category-specific image data (removed ALL category)
//   const categoryImages = {
//     'GURKHA': [
//       {
//         id: 1,
//         image: "/Images/c1.webp",
//         alt: "Gurkha Off-road",
//         category: "GURKHA",
//         specs: [
//           { label: "Ground Clearance", value: "280mm" },
//           { label: "Water Wading", value: "700mm" },
//           { label: "Torque", value: "420Nm" },
//           { label: "Fuel Tank", value: "70L" }
//         ]
//       },

//       // {
//       //   id: 2,
//       //   image: "/Images/gurkha2.jpg",
//       //   alt: "Gurkha Luxury",
//       //   category: "GURKHA",
//       //   specs: [
//       //     { label: "Seating", value: "4 Persons" },
//       //     { label: "Drive", value: "4x4" },
//       //     { label: "Engine", value: "2.2L Diesel" },
//       //     { label: "Transmission", value: "6-Speed" }
//       //   ]
//       // }
//     ],
//     'TRAVELLER': [
//       {
//         id: 1,
//         image: "/Images/c4.webp",
//         alt: "Traveller Family",
//         category: "TRAVELLER",
//         specs: [
//           { label: "Seating", value: "8 Persons" },
//           { label: "Boot Space", value: "450L" },
//           { label: "Fuel Economy", value: "15km/L" },
//           { label: "Length", value: "5.2m" }
//         ]
//       },
//       // {
//       //   id: 2,
//       //   image: "/Images/traveller2.jpg",
//       //   alt: "Traveller Premium",
//       //   category: "TRAVELLER",
//       //   specs: [
//       //     { label: "Features", value: "Panoramic" },
//       //     { label: "Entertainment", value: "10\" Screen" },
//       //     { label: "Connectivity", value: "Apple CarPlay" },
//       //     { label: "Safety", value: "5 Star" }
//       //   ]
//       // }
//     ],
//     'MONOBUS': [
//       {
//         id: 1,
//         image: "/Images/c3.webp",
//         alt: "Monobus Commute",
//         category: "MONOBUS",
//         specs: [
//           { label: "Capacity", value: "25 Persons" },
//           { label: "Length", value: "8.5m" },
//           { label: "Engine", value: "Electric" },
//           { label: "Range", value: "300KM" }
//         ]
//       },
//       // {
//       //   id: 2,
//       //   image: "/Images/c3.jpg",
//       //   alt: "Monobus Premium",
//       //   category: "MONOBUS",
//       //   specs: [
//       //     { label: "Range", value: "650KM" },
//       //     { label: "Top Speed", value: "260KM/H" },
//       //     { label: "Acceleration", value: "2.7s" },
//       //     { label: "Battery", value: "105kWh" }
//       //   ]
//       // }
//     ],
//     'TRAX': [
//       {
//         id: 1,
//         image: "/Images/c2.webp",
//         alt: "Trax Adventure",
//         category: "TRAX",
//         specs: [
//           { label: "Towing", value: "2.5 Tons" },
//           { label: "Payload", value: "1.2 Tons" },
//           { label: "4x4", value: "Standard" },
//           { label: "Warranty", value: "5 Years" }
//         ]
//       },
//       // {
//       //   id: 2,
//       //   image: "/Images/c2.jpg",
//       //   alt: "Trax Performance",
//       //   category: "TRAX",
//       //   specs: [
//       //     { label: "Range", value: "550KM" },
//       //     { label: "Top Speed", value: "230KM/H" },
//       //     { label: "Acceleration", value: "3.3s" },
//       //     { label: "Battery", value: "90kWh" }
//       //   ]
//       // }
//     ],
//     'URBANIA': [
//       {
//         id: 1,
//         image: "/Images/c5.webp",
//         alt: "Urbania City",
//         category: "URBANIA",
//         specs: [
//           { label: "Maneuverability", value: "Excellent" },
//           { label: "Parking Sensors", value: "360°" },
//           { label: "City Range", value: "450KM" },
//           { label: "Charging", value: "Fast Charge" }
//         ]
//       },
//       {
//         id: 2,
//         image: "/Images/c2.jpg",
//         alt: "Urbania Urban",
//         category: "URBANIA",
//         specs: [
//           { label: "Range", value: "600KM" },
//           { label: "Top Speed", value: "245KM/H" },
//           { label: "Acceleration", value: "3.0s" },
//           { label: "Battery", value: "98kWh" }
//         ]
//       }
//     ]
//   };

//   // Get current slides based on active category
//   const currentSlides = categoryImages[activeCategory] || [];

//   // Refs for animations
//   const slideRefs = useRef([]);
//   const specRefs = useRef([]);
//   const categoryRefs = useRef([]);

//   // Reset slide to 0 when category changes
//   useEffect(() => {
//     setCurrentSlide(0);
//     // Reset loading states for new category
//     setImageLoading({});
//   }, [activeCategory]);

//   // Initialize animations on mount
//   useEffect(() => {
//     // Animate categories on load
//     if (categoryRefs.current.length > 0) {
//       gsap.fromTo(
//         categoryRefs.current,
//         { 
//           y: 10, 
//           opacity: 0 
//         },
//         { 
//           y: 0,
//           opacity: 1,
//           duration: 0.6,
//           stagger: 0.1,
//           ease: "power2.out",
//           delay: 0.3
//         }
//       );
//     }
//   }, []);

//   // Animate slide change
//   useEffect(() => {
//     if (currentSlides.length > 0) {
//       animateSlideIn();
//     }
//   }, [currentSlide, currentSlides]);

//   // Animate category change
//   useEffect(() => {
//     const activeIndex = categories.indexOf(activeCategory);
//     if (categoryRefs.current[activeIndex]) {
//       gsap.fromTo(
//         categoryRefs.current[activeIndex].querySelector('.border-indicator'),
//         { scaleX: 0 },
//         { 
//           scaleX: 1, 
//           duration: 0.4, 
//           ease: "power2.out" 
//         }
//       );
//     }
//   }, [activeCategory]);

//   const animateSlideIn = () => {
//     // Reset refs array
//     slideRefs.current = slideRefs.current.slice(0, currentSlides.length);
//     specRefs.current = specRefs.current.slice(0, currentSlides.length);

//     // Animate slide image
//     if (slideRefs.current[currentSlide]) {
//       gsap.fromTo(
//         slideRefs.current[currentSlide],
//         { opacity: 0.8, scale: 1.02 },
//         { 
//           opacity: 1, 
//           scale: 1,
//           duration: 0.8,
//           ease: "power2.out"
//         }
//       );
//     }

//     // Animate specs with staggered animation
//     if (specRefs.current[currentSlide]) {
//       gsap.fromTo(
//         specRefs.current[currentSlide],
//         { y: 15, opacity: 0 },
//         { 
//           y: 0,
//           opacity: 1,
//           duration: 0.5,
//           stagger: 0.08,
//           delay: 0.3,
//           ease: "back.out(1.2)"
//         }
//       );
//     }
//   };

//   const nextSlide = () => {
//     if (currentSlides.length === 0) return;
    
//     if (slideRefs.current[currentSlide]) {
//       gsap.to(slideRefs.current[currentSlide], {
//         opacity: 0.7,
//         duration: 0.3,
//         ease: "power2.in",
//         onComplete: () => {
//           setCurrentSlide((prev) => (prev + 1) % currentSlides.length);
//         }
//       });
//     }
//   };

//   const prevSlide = () => {
//     if (currentSlides.length === 0) return;
    
//     if (slideRefs.current[currentSlide]) {
//       gsap.to(slideRefs.current[currentSlide], {
//         opacity: 0.7,
//         duration: 0.3,
//         ease: "power2.in",
//         onComplete: () => {
//           setCurrentSlide((prev) => (prev - 1 + currentSlides.length) % currentSlides.length);
//         }
//       });
//     }
//   };

//   const handleCategoryClick = (category, index) => {
//     if (categoryRefs.current[index]) {
//       gsap.to(categoryRefs.current[index], {
//         scale: 0.95,
//         duration: 0.15,
//         yoyo: true,
//         repeat: 1,
//         ease: "power2.out",
//         onComplete: () => {
//           setActiveCategory(category);
//         }
//       });
//     }
//   };

//   const handleNavButtonHover = (button) => {
//     gsap.to(button, {
//       scale: 1.15,
//       duration: 0.2,
//       ease: "power2.out"
//     });
//   };

//   const handleNavButtonLeave = (button) => {
//     gsap.to(button, {
//       scale: 1,
//       duration: 0.2,
//       ease: "power2.out"
//     });
//   };

//   const handleImageLoad = (slideId) => {
//     setImageLoading(prev => ({
//       ...prev,
//       [slideId]: true
//     }));
//   };

//   return (
//     <div className="min-h-screen py-6 md:py-8 lg:py-12">
//       {/* Category Navigation */}
//       <div className="mb-6 md:mb-8 lg:mb-10 px-4">
//         <div className="max-w-7xl mx-auto">
//           {/* Mobile Responsive Category Navigation */}
//           <div className="lg:hidden">
//             <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 text-center">
//               Select Category
//             </h2>
//             <div className="relative">
//               <div className="overflow-x-auto pb-2 scrollbar-hide">
//                 <div className="flex space-x-3 md:space-x-4 min-w-max">
//                   {categories.map((category, index) => (
//                     <button
//                       key={category}
//                       ref={el => categoryRefs.current[index] = el}
//                       className={`px-4 py-2 md:px-5 md:py-2.5 rounded-lg transition-all duration-300 whitespace-nowrap font-medium text-sm md:text-base ${
//                         activeCategory === category 
//                           ? 'bg-gray-900 text-white shadow-lg' 
//                           : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                       }`}
//                       onClick={() => handleCategoryClick(category, index)}
//                     >
//                       {category}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Desktop Category Navigation */}
//           <div className="hidden lg:block">
//             <ul className='flex justify-center items-center gap-6 lg:gap-8 xl:gap-10 font-semibold text-gray-700 text-lg lg:text-xl'>
//               {categories.map((category, index) => (
//                 <li
//                   key={category}
//                   ref={el => categoryRefs.current[index] = el}
//                   className={`cursor-pointer transition-all duration-300 pb-3 relative ${
//                     activeCategory === category 
//                       ? 'text-gray-900' 
//                       : 'text-gray-500 hover:text-gray-900'
//                   }`}
//                   onClick={() => handleCategoryClick(category, index)}
//                 >
//                   {category}
//                   {activeCategory === category && (
//                     <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-700 origin-left border-indicator"></div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Slider Section */}
//       <div className="px-4 sm:px-6 lg:px-8">
//         <div className="relative">
//           {/* No slides message */}
//           {currentSlides.length === 0 ? (
//             <div className="text-center py-20">
//               <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
//                 No vehicles available for this category
//               </h3>
//               <p className="text-gray-500">
//                 Please check back later or select another category
//               </p>
//             </div>
//           ) : (
//             <div className="relative overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl shadow-xl bg-black">
//               {/* Slides Container */}
//               <div 
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//               >
//                 {currentSlides.map((slide, slideIndex) => (
//                   <div 
//                     key={`${slide.id}-${activeCategory}`} 
//                     className="w-full flex-shrink-0 relative"
//                   >
//                     {/* Slide Image Container */}
//                     <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]">
//                       {/* Loading Skeleton */}
//                       {!imageLoading[slide.id] && (
//                         <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
//                       )}
                      
//                       <img 
//                         ref={el => slideRefs.current[slideIndex] = el}
//                         className="w-full h-auto max-h-[90vh] object-contain"
//                         src={slide.image} 
//                         alt={slide.alt} 
//                         loading="lazy"
//                         onLoad={() => handleImageLoad(slide.id)}
//                         style={{
//                           opacity: imageLoading[slide.id] ? 1 : 0,
//                           transition: 'opacity 0.3s ease-in-out'
//                         }}
//                       />
                      
//                       {/* Gradient Overlay for better text visibility */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
                      
//                       {/* Category Badge */}
//                       <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
//                         <span className="px-3 py-1 md:px-4 md:py-1.5 bg-black/70 backdrop-blur-sm text-white text-xs md:text-sm font-medium rounded-full">
//                           {slide.category}
//                         </span>
//                       </div>
                      
//                       {/* Specifications Banner */}
//                       <div className="absolute bottom-24 left-0 right-0 py-4 md:py-6 px-4 md:px-8 lg:px-12 z-10">
//                         <div className="max-w-6xl mx-auto">
//                           <div className="relative">
//                             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
//                               {slide.specs.map((spec, specIndex) => (
//                                 <div 
//                                   key={spec.label} 
//                                   ref={el => {
//                                     if (!specRefs.current[slideIndex]) specRefs.current[slideIndex] = [];
//                                     specRefs.current[slideIndex][specIndex] = el;
//                                   }}
//                                   className="relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg p-2 md:p-3 bg-black/50 backdrop-blur-sm border border-white/10"
//                                 >
//                                   <div className="flex flex-col items-center px-1 md:px-2">
//                                     <h3 className="text-xs xs:text-sm md:text-base lg:text-lg font-medium text-white/90 mb-1 text-center">
//                                       {spec.label}
//                                     </h3>
//                                     <p className="text-base xs:text-lg md:text-xl lg:text-2xl font-bold text-white">
//                                       {spec.value}
//                                     </p>
//                                   </div>
                                  
//                                   {/* Responsive Vertical Divider */}
//                                   {specIndex < slide.specs.length - 1 && (
//                                     <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 h-6 md:h-8 lg:h-10 w-px bg-white/30"></div>
//                                   )}
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Navigation Buttons - Desktop */}
             

              

//               {/* Navigation Buttons - Mobile */}
//               {/* <div className="lg:hidden absolute bottom-24 right-4 flex gap-2 z-20">
//                 <button
//                   onClick={prevSlide}
//                   onMouseEnter={(e) => handleNavButtonHover(e.currentTarget)}
//                   onMouseLeave={(e) => handleNavButtonLeave(e.currentTarget)}
//                   className="bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white p-3 sm:p-3.5 rounded-full transition-all duration-300 shadow-lg"
//                   aria-label="Previous slide"
//                 >
//                   <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </button>
//                 <button
//                   onClick={nextSlide}
//                   onMouseEnter={(e) => handleNavButtonHover(e.currentTarget)}
//                   onMouseLeave={(e) => handleNavButtonLeave(e.currentTarget)}
//                   className="bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white p-3 sm:p-3.5 rounded-full transition-all duration-300 shadow-lg"
//                   aria-label="Next slide"
//                 >
//                   <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div> */}

//               {/* Slide Indicators */}
//               {/* <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3 z-20">
//                 {currentSlides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => {
//                       if (slideRefs.current[currentSlide]) {
//                         gsap.to(slideRefs.current[currentSlide], {
//                           opacity: 0.7,
//                           duration: 0.3,
//                           onComplete: () => setCurrentSlide(index)
//                         });
//                       }
//                     }}
//                     className="relative group"
//                     aria-label={`Go to slide ${index + 1}`}
//                   >
//                     <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
//                       currentSlide === index 
//                         ? 'bg-white scale-125 shadow-lg' 
//                         : 'bg-white/50 hover:bg-white/80'
//                     }`} />
//                   </button>
//                 ))}
//               </div> */}

//               {/* Slide Counter */}
//               {/* <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
//                 <div className="px-3 py-1.5 md:px-4 md:py-2 bg-black/60 backdrop-blur-sm rounded-lg border border-white/10">
//                   <span className="text-xs md:text-sm font-medium text-white">
//                     {currentSlide + 1} / {currentSlides.length}
//                   </span>
//                 </div>
//               </div> */}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Category;


import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Category = () => {
  const [activeCategory, setActiveCategory] = useState('GURKHA');
  const [imageLoading, setImageLoading] = useState({});
  
  const categories = ['GURKHA', 'TRAVELLER', 'MONOBUS', 'TRAX', 'URBANIA'];
  
  // Category-specific image data
  const categoryImages = {
    'GURKHA': [
      {
        id: 1,
        image: "/Images/c1.webp",
        alt: "Gurkha Off-road",
        category: "GURKHA",
        specs: [
          { label: "Ground Clearance", value: "280mm" },
          { label: "Water Wading", value: "700mm" },
          { label: "Torque", value: "420Nm" },
          { label: "Fuel Tank", value: "70L" }
        ]
      }
    ],
    'TRAVELLER': [
      {
        id: 1,
        image: "/Images/c4.webp",
        alt: "Traveller Family",
        category: "TRAVELLER",
        specs: [
          { label: "Seating", value: "8 Persons" },
          { label: "Boot Space", value: "450L" },
          { label: "Fuel Economy", value: "15km/L" },
          { label: "Length", value: "5.2m" }
        ]
      }
    ],
    'MONOBUS': [
      {
        id: 1,
        image: "/Images/c3.webp",
        alt: "Monobus Commute",
        category: "MONOBUS",
        specs: [
          { label: "Capacity", value: "25 Persons" },
          { label: "Length", value: "8.5m" },
          { label: "Engine", value: "Electric" },
          { label: "Range", value: "300KM" }
        ]
      }
    ],
    'TRAX': [
      {
        id: 1,
        image: "/Images/c2.webp",
        alt: "Trax Adventure",
        category: "TRAX",
        specs: [
          { label: "Towing", value: "2.5 Tons" },
          { label: "Payload", value: "1.2 Tons" },
          { label: "4x4", value: "Standard" },
          { label: "Warranty", value: "5 Years" }
        ]
      }
    ],
    'URBANIA': [
      {
        id: 1,
        image: "/Images/c5.webp",
        alt: "Urbania City",
        category: "URBANIA",
        specs: [
          { label: "Maneuverability", value: "Excellent" },
          { label: "Parking Sensors", value: "360°" },
          { label: "City Range", value: "450KM" },
          { label: "Charging", value: "Fast Charge" }
        ]
      }
    ]
  };

  // Get current image based on active category
  const currentImage = categoryImages[activeCategory]?.[0] || null;

  // Refs for animations
  const imageRef = useRef(null);
  const specRefs = useRef([]);
  const categoryRefs = useRef([]);

  // Reset loading state when category changes
  useEffect(() => {
    setImageLoading({});
  }, [activeCategory]);

  // Initialize animations on mount
  useEffect(() => {
    // Animate categories on load
    if (categoryRefs.current.length > 0) {
      gsap.fromTo(
        categoryRefs.current,
        { 
          y: 10, 
          opacity: 0 
        },
        { 
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3
        }
      );
    }
  }, []);

  // Animate image and specs when category changes
  useEffect(() => {
    if (currentImage) {
      animateContentIn();
    }
  }, [activeCategory, currentImage]);

  // Animate category indicator
  useEffect(() => {
    const activeIndex = categories.indexOf(activeCategory);
    if (categoryRefs.current[activeIndex]) {
      gsap.fromTo(
        categoryRefs.current[activeIndex].querySelector('.border-indicator'),
        { scaleX: 0 },
        { 
          scaleX: 1, 
          duration: 0.4, 
          ease: "power2.out" 
        }
      );
    }
  }, [activeCategory]);

  const animateContentIn = () => {
    // Reset specs refs
    specRefs.current = [];

    // Animate image
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0.8, scale: 1.02 },
        { 
          opacity: 1, 
          scale: 1,
          duration: 0.8,
          ease: "power2.out"
        }
      );
    }

    // Animate specs with staggered animation
    if (specRefs.current.length > 0) {
      gsap.fromTo(
        specRefs.current,
        { y: 15, opacity: 0 },
        { 
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.3,
          ease: "back.out(1.2)"
        }
      );
    }
  };

  const handleCategoryClick = (category, index) => {
    if (categoryRefs.current[index]) {
      gsap.to(categoryRefs.current[index], {
        scale: 0.95,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
        onComplete: () => {
          setActiveCategory(category);
        }
      });
    }
  };

  const handleImageLoad = () => {
    if (currentImage) {
      setImageLoading(prev => ({
        ...prev,
        [currentImage.id]: true
      }));
    }
  };

  return (
    <div id='vehicles' className="min-h-screen py-6 md:py-8 lg:py-12sm:pb-0 pb-12  bg-gradient-to-b from-white to-gray-50">
      {/* Category Navigation */}
      <div className="mb-8 md:mb-10 lg:mb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Responsive Category Navigation */}
          <div className="lg:hidden">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 text-center">
              Select Category
            </h2>
            <div className="relative">
              <div className="overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex space-x-3 md:space-x-4 min-w-max">
                  {categories.map((category, index) => (
                    <button
                      key={category}
                      ref={el => categoryRefs.current[index] = el}
                      className={`px-4 py-2 md:px-5 md:py-2.5 rounded-lg transition-all duration-300 whitespace-nowrap font-medium text-sm md:text-base ${
                        activeCategory === category 
                          ? 'bg-gray-900 text-white shadow-lg' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => handleCategoryClick(category, index)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Category Navigation */}
          <div className="hidden lg:block">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              Explore Our Vehicle Categories
            </h2>
            <ul className='flex justify-center items-center gap-6 lg:gap-8 xl:gap-10 font-semibold text-gray-700 text-lg lg:text-xl'>
              {categories.map((category, index) => (
                <li
                  key={category}
                  ref={el => categoryRefs.current[index] = el}
                  className={`cursor-pointer transition-all duration-300 pb-3 relative group ${
                    activeCategory === category 
                      ? 'text-gray-900' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                  onClick={() => handleCategoryClick(category, index)}
                >
                  {category}
                  {activeCategory === category && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 origin-left border-indicator"></div>
                  )}
                  {activeCategory !== category && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"></div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 sm:px-0">
        <div className="">
          {/* No content message */}
          {!currentImage ? (
            <div className="text-center py-20">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
                No vehicle available for this category
              </h3>
              <p className="text-gray-500">
                Please check back later or select another category
              </p>
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-xl md:rounded-none shadow-2xl bg-black">
              {/* Image Container */}
              <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] sm:mt-8 mt-0">
                {/* Loading Skeleton */}
                {/* {!imageLoading[currentImage.id] && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 animate-pulse"></div>
                )} */}
                
                <img 
                  ref={imageRef}
                  className="w-full h-auto max-h-[90vh] object-cover md:object-contain"
                  src={currentImage.image} 
                  alt={currentImage.alt} 
                  loading="lazy"
                  onLoad={handleImageLoad}
                  style={{
                    opacity: imageLoading[currentImage.id] ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out'
                  }}
                />
                
                {/* Gradient Overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 pointer-events-none" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                  <span className="px-3 py-1 md:px-4 md:py-1.5 bg-black/80 backdrop-blur-sm text-white text-xs md:text-sm font-medium rounded-full border border-white/20">
                    {currentImage.category}
                  </span>
                </div>
                
                {/* FIXED: Specifications Banner */}
                <div className="absolute -bottom-4 left-0 right-0 z-10">
                  <div className="relative px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 pt-6 pb-8 md:pt-8 md:pb-10">
                    {/* Mobile-specific background for better readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent lg:bg-gradient-to-t lg:from-black/90 lg:via-black/80 lg:to-transparent" />
                    
                    <div className="relative max-w-6xl mx-auto">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 md:gap-6 lg:gap-8">
                        {currentImage.specs.map((spec, specIndex) => (
                          <div 
                            key={spec.label} 
                            ref={el => specRefs.current[specIndex] = el}
                            className="relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-xl p-3 xs:p-3.5 sm:p-4 md:p-5 
                                      bg-gradient-to-br from-black/80 via-black/70 to-black/60 backdrop-blur-lg 
                                      border border-white/20 shadow-xl"
                          >
                            <div className="flex flex-col items-center px-1">
                              <h3 className="text-xs xs:text-sm sm:text-base md:text-lg font-medium text-white/90 mb-2 md:mb-3 text-center line-clamp-1">
                                {spec.label}
                              </h3>
                              <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white whitespace-nowrap">
                                {spec.value}
                              </p>
                            </div>
                            
                            {/* Decorative Corner Accents */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/30 rounded-tl-lg"></div>
                            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/30 rounded-tr-lg"></div>
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/30 rounded-bl-lg"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/30 rounded-br-lg"></div>
                            
                            {/* Responsive Vertical Divider - Hide on mobile for cleaner look */}
                            {specIndex < currentImage.specs.length - 1 && (
                              <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 h-10 md:h-12 lg:h-14 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Category;