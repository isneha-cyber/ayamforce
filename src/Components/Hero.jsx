// import React, { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// // Register the ScrollTo plugin
// gsap.registerPlugin(ScrollToPlugin)

// const Hero = () => {
//   const heroRef = useRef(null)
//   const textRef = useRef(null)
//   const buttonRef = useRef(null)
//   const imageRef = useRef(null)

//   useEffect(() => {
//     // Hero image reveal animation
//     gsap.fromTo(imageRef.current,
//       {
//         scale: 1.1,
//         opacity: 0
//       },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 1.5,
//         ease: "power2.out"
//       }
//     )

//     // Text animation
//     gsap.fromTo(textRef.current.children,
//       {
//         y: 60,
//         opacity: 0
//       },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         stagger: 0.3,
//         delay: 0.5,
//         ease: "power3.out"
//       }
//     )

//     // Scroll button animation with bounce effect
//     gsap.fromTo(buttonRef.current,
//       {
//         y: 20,
//         opacity: 0,
//         scale: 0.8
//       },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 1,
//         delay: 1.5,
//         ease: "back.out(1.7)"
//       }
//     )

//     // Add a subtle floating animation to the button
//     const buttonFloat = gsap.to(buttonRef.current, {
//       y: -10,
//       duration: 2,
//       ease: "power1.inOut",
//       repeat: -1,
//       yoyo: true,
//       paused: true
//     })

//     // Start floating animation after initial entrance
//     setTimeout(() => {
//       buttonFloat.play()
//     }, 2500)

//     // Parallax effect on scroll
//     const handleScroll = () => {
//       const scrolled = window.scrollY
//       if (heroRef.current && scrolled < window.innerHeight) {
//         gsap.to(imageRef.current, {
//           y: scrolled * 0.5,
//           duration: 0.5,
//           ease: "none"
//         })
        
//         gsap.to(textRef.current, {
//           y: scrolled * 0.3,
//           opacity: 1 - (scrolled / 500),
//           duration: 0.5,
//           ease: "none"
//         })
//       }
//     }

//     window.addEventListener('scroll', handleScroll)

//     // Cleanup
//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//       buttonFloat.kill()
//     }
//   }, [])

//   // Handle scroll button click - FIXED
  // const handleScrollClick = () => {
  //   // Calculate the position to scroll to (just below the hero section)
  //   const scrollPosition = heroRef.current.offsetHeight
    
  //   // Use GSAP's smooth scroll
  //   gsap.to(window, {
  //     duration: 1.5,
  //     scrollTo: {
  //       y: scrollPosition,
  //       autoKill: false
  //     },
  //     ease: "power2.inOut"
  //   })

//     // Button click animation
//     gsap.to(buttonRef.current, {
//       scale: 0.9,
//       duration: 0.2,
//       yoyo: true,
//       repeat: 1
//     })
//   }

//   return (
//     <div ref={heroRef} className="relative w-full h-screen overflow-hidden">
//       {/* Hero Image Container with Bottom Radius */}
//       <div className="relative w-full h-full">
//         <div 
//           ref={imageRef}
//           className="relative w-full h-full bg-cover bg-center"
//           style={{
//             backgroundImage: `url('/Images/img1.jpg')`,
//             borderBottomLeftRadius: '50% 15%',
//             borderBottomRightRadius: '50% 15%',
//             transformOrigin: 'center center'
//           }}
//         >
//           {/* Overlay gradient for better text readability */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10"></div>
          
//           {/* Hero Text */}
//           <div 
//             ref={textRef}
//             className="absolute inset-0 flex flex-col items-center justify-center text-white px-4"
//           >
//             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-center mb-4 sm:mb-6 tracking-tight leading-tight">
//               <span className="block">DRIVE THE</span>
//               <span className="block">FUTURE TODAY</span>
//             </h1>
            // <p className="text-xs sm:text-sm md:text-base text-center max-w-xs sm:max-w-md md:max-w-2xl tracking-wide opacity-90 leading-relaxed px-2">
            //   More Than A Car, It's A Statement Of Progressive Luxury. Experience The
            //   Perfect Blend Of Innovation And Sustainable Elegance.
            // </p>
//           </div>
//         </div>

        // <div className="absolute bottom-8 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        //   <button 
        //     ref={buttonRef}
        //     onClick={handleScrollClick}
        //     className="w-14 h-14 sm:w-18 sm:h-18 bg-black rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-300 shadow-2xl hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-black/30 active:scale-95"
        //     aria-label="Scroll down"
        //   >
        //     <svg 
        //       className="w-6 h-6 sm:w-8 sm:h-8 text-white" 
        //       fill="none" 
        //       stroke="currentColor" 
        //       viewBox="0 0 24 24"
        //     >
        //       <path 
        //         strokeLinecap="round" 
        //         strokeLinejoin="round" 
        //         strokeWidth={2.5} 
        //         d="M19 9l-7 7-7-7"
        //       />
        //     </svg>
        //   </button>
        // </div>
   
//       </div>

//       {/* White space below */}
//       <div className="w-full h-[80px] sm:h-[100px] bg-white"></div>
//     </div>
//   )
// }

// export default Hero

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// const vehicles = [
//   { 
//     src: "https://www.forcemotors.com/wp-content/uploads/2026/01/Traxx-view-2026.png.webp  ", 
//     animation: "zoom-in-left", 
//     delay: 2.0 
//   },
//   { 
//     src: "https://www.forcemotors.com/wp-content/uploads/2026/01/gurkha-view-2026.png.webp  ", 
//     animation: "zoom-in-left", 
//     delay: 1.6 
//   },
//   { 
//     src: "https://www.forcemotors.com/wp-content/uploads/2026/01/travelers-view-2026.png.webp  ", 
//     animation: "zoom-in-left", 
//     delay: 1.2 
//   },
//   { 
//     src: "https://www.forcemotors.com/wp-content/uploads/2026/01/School-Bus-View-2026.png.webp  ", 
//     animation: "zoom-in-left", 
//     delay: 0.8 
//   },
//   { 
//     src: "https://www.forcemotors.com/wp-content/uploads/2026/01/Urbania-Front-View-2026.png.webp  ", 
//     animation: "zoom-in", 
//     delay: 0.4 
//   },
//   { 
//     src: "https://www.forcemotors.com/wp-content/uploads/2026/01/Ambulance-view-2026.png.webp  ", 
//     animation: "zoom-in-right", 
//     delay: 0.8 
//   },
//   { 
//     src: "https://www.forcemotors.com/wp-content/uploads/2026/01/Traveller-DV-4020WB-1664-Kg-View.png.webp  ", 
//     animation: "zoom-in-right", 
//     delay: 1.2 
//   },
//   { 
//     src: "https://www.forcemotors.com/wp-content/uploads/2026/01/Schoolbus-View-2026.png.webp  ", 
//     animation: "zoom-in-right", 
//     delay: 1.6 
//   },
//   { 
//     src: "https://www.forcemotors.com/wp-content/uploads/2026/01/Traveller-view-02-2026.png.webp  ", 
//     animation: "zoom-in-right", 
//     delay: 2.0 
//   },
// ];

// const Hero = () => {
//   const vehiclesRef = useRef([]);
//   const headingRef = useRef(null);
//   const subheadingRef = useRef(null);
//   const lineRef = useRef(null);
//   const buttonRef = useRef(null);
//   const heroRef = useRef(null);
//   const imageRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     // Text animations
//     gsap.fromTo(
//       headingRef.current,
//       { opacity: 0, y: -50 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//     );

//     gsap.fromTo(
//       lineRef.current,
//       { scaleX: 0 },
//       { scaleX: 1, duration: 0.8, delay: 0.3, ease: "power2.out" }
//     );

//     gsap.fromTo(
//       subheadingRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
//     );

//     // Vehicle animations
//     vehiclesRef.current.forEach((el, index) => {
//       if (!el) return;

//       const vehicle = vehicles[index];
//       let fromVars = { opacity: 0, scale: 0.5 };

//       switch (vehicle.animation) {
//         case "zoom-in-left":
//           fromVars.x = -150;
//           fromVars.y = 80;
//           break;
//         case "zoom-in-right":
//           fromVars.x = 150;
//           fromVars.y = 80;
//           break;
//         case "zoom-in":
//           fromVars.y = 100;
//           break;
//         default:
//           fromVars.y = 80;
//       }

//       gsap.fromTo(
//         el,
//         fromVars,
//         {
//           opacity: 1,
//           scale: 1,
//           x: 0,
//           y: 0,
//           duration: 1.2,
//           delay: vehicle.delay,
//           ease: "power3.out",
//         }
//       );
//     });

//     // Floating button animation
//     const buttonFloat = gsap.to(buttonRef.current, {
//       y: 10,
//       duration: 1.2,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut"
//     });

//     // Parallax effect on scroll
//     const handleScroll = () => {
//       const scrolled = window.scrollY;
//       if (heroRef.current && scrolled < window.innerHeight) {
//         gsap.to(imageRef.current, {
//           y: scrolled * 0.5,
//           duration: 0.5,
//           ease: "none"
//         });
        
//         gsap.to(textRef.current, {
//           y: scrolled * 0.3,
//           opacity: 1 - (scrolled / 500),
//           duration: 0.5,
//           ease: "none"
//         });
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Cleanup
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       buttonFloat.kill();
//     };
//   }, []);

//   // Handle scroll button click - FIXED
// const handleScrollClick = () => {
//   // Calculate the position to scroll to (just below the hero section)
//   const scrollPosition = heroRef.current.offsetHeight;
  
//   // Option 1: Native smooth scroll (simplest)
//   window.scrollTo({
//     top: scrollPosition,
//     behavior: 'smooth'
//   });
    
//     // Use GSAP's smooth scroll
    
//   };

//   // Helper to get dynamic font size for heading (larger on mobile)
//   const getHeadingFontSize = () => {
//     if (typeof window !== 'undefined' && window.innerWidth < 640) {
//       return 'clamp(1.25rem, 6vw, 2.25rem)';
//     }
//     return 'clamp(1rem, 5vw, 3rem)';
//   };

//   return (
//     <section 
//       ref={heroRef}
//       className="w-full py-6 sm:py-8 md:py-16 bg-white overflow-hidden relative min-h-screen flex items-center" 
//       style={{
//         backgroundImage: 'url(Images/vehicle/bg.webp)', 
//         backgroundSize: 'cover', 
//         backgroundPosition: 'center'
//       }}
//     >
//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20"></div>
      
//       <div className="container mx-auto px-2 sm:px-4 md:px-8 relative w-full pt-20 sm:pt-20 md:pt-32">
//         {/* Vehicles Section */}
//         <div className="relative pb-4 sm:pb-8">
//           {/* Content Section - Responsive */}
//           <div 
//             ref={textRef}
//             className="absolute -top-6 sm:top-6 md:top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4"
//           >
//             <div
//             ref={headingRef}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight opacity-0"
//           >
//             <h1 className="sm:ps-4   ps-0 bg-gradient-to-r from-[#2b7cc2] via-[#1e5a8e] to-[#2b7cc2] bg-clip-text text-transparent">
//               Aayam Force Motors
//             </h1>
//           </div>
          
//           {/* Decorative Line */}
//           <div className="flex justify-center mt-4">
//             <div 
//               ref={lineRef}
//               className="h-0.5 bg-gradient-to-r from-transparent via-[#2b7cc2] to-transparent w-32 sm:w-48 md:w-64 lg:w-96"
//               style={{ transformOrigin: 'center' }}
//             ></div>
//           </div>
            
//             {/* Subheading - Slightly larger & tighter spacing on mobile */}
//             <p 
//               ref={subheadingRef}
//               className="text-sm lg:text-lg mt-8 md:mt-10 text-center text-gray-700 max-w-[280px] xs:max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto tracking-wide opacity-50 leading-relaxed px-2"
//             >
//               More Than A Motor, It's A Statement Of Progressive Luxury. Experience The
//               Perfect Blend Of Innovation And Sustainable Elegance.
//             </p>
//           </div>
          
//           {/* Vehicles Grid - Reduced top margin on mobile only */}
//           <div 
//             ref={imageRef}
//             className="flex justify-center items-end gap-0 relative min-h-[180px] xs:min-h-[220px] sm:min-h-[280px] md:min-h-[400px] lg:min-h-[480px] mt-8 md:mt-0"
//           >
//             {vehicles.map((vehicle, index) => {
//               const distanceFromCenter = Math.abs(index - 4);
//               const zIndex = 10 - distanceFromCenter * 2;
//               const scaleMultiplier = typeof window !== 'undefined' && window.innerWidth < 640 
//                 ? 1 - (distanceFromCenter * 0.08)
//                 : 1 - (distanceFromCenter * 0.12);

//               const getWidthClass = () => {
//                 if (distanceFromCenter === 0) return "w-[85px] sm:w-[140px] md:w-[180px] lg:w-[220px] xl:w-[240px]";
//                 if (distanceFromCenter === 1) return "w-[72px] sm:w-[120px] md:w-[150px] lg:w-[180px] xl:w-[260px]";
//                 if (distanceFromCenter === 2) return "w-[62px] sm:w-[100px] md:w-[130px] lg:w-[150px] xl:w-[260px]";
//                 if (distanceFromCenter === 3) return "w-[54px] sm:w-[85px] md:w-[110px] lg:w-[130px] xl:w-[260px]";
//                 return "w-[48px] sm:w-[75px] md:w-[95px] lg:w-[110px] xl:w-[260px]";
//               };

//               const marginClass = index === 0 
//                 ? "" 
//                 : "-ml-[14px] xs:-ml-[16px] sm:-ml-4 md:-ml-6 lg:-ml-8 xl:-ml-28";
              
//               return (
//                 <div
//                   key={index}
//                   ref={(el) => (vehiclesRef.current[index] = el)}
//                   className={`flex-shrink-0 opacity-0 flex items-end ${getWidthClass()} ${marginClass}`}
//                   style={{
//                     zIndex: zIndex,
//                     transform: `scale(${scaleMultiplier})`,
//                     transformOrigin: 'bottom center',
//                   }}
//                 >
//                   <img
//                     src={vehicle.src}
//                     alt={`Force Motors Vehicle ${index + 1}`}
//                     className="w-full h-auto object-contain drop-shadow-xl"
//                     loading="lazy"
//                     style={{
//                       filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))',
//                     }}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//     {/* Replaced Scroll Indicator Button */}
// <div className="block md:hidden absolute bottom-8 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-10">
//   <button
//     ref={buttonRef}
//     onClick={handleScrollClick}
//     className="w-14 h-14 sm:w-18 sm:h-18 bg-black rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-300 shadow-2xl hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-black/30 active:scale-95"
//     aria-label="Scroll down"
//   >
//     <svg
//       className="w-6 h-6 sm:w-8 sm:h-8 text-white"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2.5}
//         d="M19 9l-7 7-7-7"
//       />
//     </svg>
//   </button>
// </div>
//     </section>
//   );
// };

// export default Hero;



import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const vehicles = [
  { 
    src: "https://www.forcemotors.com/wp-content/uploads/2026/01/Traxx-view-2026.png.webp  ", 
    animation: "zoom-in-left", 
    delay: 2.0 
  },
  { 
    src: "https://www.forcemotors.com/wp-content/uploads/2026/01/gurkha-view-2026.png.webp  ", 
    animation: "zoom-in-left", 
    delay: 1.6 
  },
  { 
    src: "https://www.forcemotors.com/wp-content/uploads/2026/01/travelers-view-2026.png.webp  ", 
    animation: "zoom-in-left", 
    delay: 1.2 
  },
  { 
    src: "https://www.forcemotors.com/wp-content/uploads/2026/01/School-Bus-View-2026.png.webp  ", 
    animation: "zoom-in-left", 
    delay: 0.8 
  },
  { 
    src: "https://www.forcemotors.com/wp-content/uploads/2026/01/Urbania-Front-View-2026.png.webp  ", 
    animation: "zoom-in", 
    delay: 0.4 
  },
  { 
    src: "https://www.forcemotors.com/wp-content/uploads/2026/01/Ambulance-view-2026.png.webp  ", 
    animation: "zoom-in-right", 
    delay: 0.8 
  },
  { 
    src: "https://www.forcemotors.com/wp-content/uploads/2026/01/Traveller-DV-4020WB-1664-Kg-View.png.webp  ", 
    animation: "zoom-in-right", 
    delay: 1.2 
  },
  { 
    src: "https://www.forcemotors.com/wp-content/uploads/2026/01/Schoolbus-View-2026.png.webp  ", 
    animation: "zoom-in-right", 
    delay: 1.6 
  },
  { 
    src: "https://www.forcemotors.com/wp-content/uploads/2026/01/Traveller-view-02-2026.png.webp  ", 
    animation: "zoom-in-right", 
    delay: 2.0 
  },
];

const Hero = () => {
  const vehiclesRef = useRef([]);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const lineRef = useRef(null);
  const buttonRef = useRef(null);
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Text animations
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, delay: 0.3, ease: "power2.out" }
    );

    gsap.fromTo(
      subheadingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    // Vehicle animations
    vehiclesRef.current.forEach((el, index) => {
      if (!el) return;

      const vehicle = vehicles[index];
      let fromVars = { opacity: 0, scale: 0.5 };

      switch (vehicle.animation) {
        case "zoom-in-left":
          fromVars.x = -150;
          fromVars.y = 80;
          break;
        case "zoom-in-right":
          fromVars.x = 150;
          fromVars.y = 80;
          break;
        case "zoom-in":
          fromVars.y = 100;
          break;
        default:
          fromVars.y = 80;
      }

      gsap.fromTo(
        el,
        fromVars,
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          duration: 1.2,
          delay: vehicle.delay,
          ease: "power3.out",
        }
      );
    });

    // Floating button animation
    const buttonFloat = gsap.to(buttonRef.current, {
      y: 10,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (heroRef.current && scrolled < window.innerHeight) {
        gsap.to(imageRef.current, {
          y: scrolled * 0.5,
          duration: 0.5,
          ease: "none"
        });
        
        gsap.to(textRef.current, {
          y: scrolled * 0.3,
          opacity: 1 - (scrolled / 500),
          duration: 0.5,
          ease: "none"
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      buttonFloat.kill();
    };
  }, []);

  // Handle scroll button click - FIXED
const handleScrollClick = () => {
  // Calculate the position to scroll to (just below the hero section)
  const scrollPosition = heroRef.current.offsetHeight;
  
  // Option 1: Native smooth scroll (simplest)
  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth'
  });
    
    // Use GSAP's smooth scroll
    
  };

  // Helper to get dynamic font size for heading (larger on mobile)
  const getHeadingFontSize = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      return 'clamp(1.25rem, 6vw, 2.25rem)';
    }
    return 'clamp(1rem, 5vw, 3rem)';
  };

  return (
    <section id="home"
      ref={heroRef}
      className="w-full py-4 sm:py-8 md:py-16 bg-white overflow-hidden relative min-h-screen flex items-center" 
      style={{
        backgroundImage: 'url(Images/vehicle/bg.webp)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20"></div>
      
      <div className="container mx-auto px-2 sm:px-4 md:px-8 relative w-full pt-62 sm:pt-20 md:pt-32">
        {/* Vehicles Section */}
        <div className="relative pb-4 sm:pb-8">
          {/* Content Section - Responsive */}
          <div 
            ref={textRef}
            className="absolute -top-6 sm:top-6 md:top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4"
          >
            <div
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight opacity-0"
          >
            <h1 className="sm:ps-4   ps-0 bg-gradient-to-r from-[#2b7cc2] via-[#1e5a8e] to-[#2b7cc2] bg-clip-text text-transparent">
              Aayam Force Motors
            </h1>
          </div>
          
          {/* Decorative Line */}
          <div className="flex justify-center mt-4">
            <div 
              ref={lineRef}
              className="h-0.5 bg-gradient-to-r from-transparent via-[#2b7cc2] to-transparent w-32 sm:w-48 md:w-64 lg:w-96"
              style={{ transformOrigin: 'center' }}
            ></div>
          </div>
            
            {/* Subheading - Slightly larger & tighter spacing on mobile */}
            <p 
              ref={subheadingRef}
              className="text-md lg:text-lg mt-8 md:mt-10 text-center text-gray-700 max-w-xs xs:max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto tracking-wide opacity-50 leading-relaxed px-2"
            >
              More Than A Motor, It's A Statement Of Progressive Luxury. Experience The
              Perfect Blend Of Innovation And Sustainable Elegance.
            </p>
          </div>
          
          {/* Vehicles Grid - Reduced top margin on mobile only */}
          <div 
            ref={imageRef}
            className="flex justify-center items-end gap-0 relative min-h-[280px] xs:min-h-[220px] sm:min-h-[280px] md:min-h-[400px] lg:min-h-[480px] mt-8 md:mt-0"
          >
            {vehicles.map((vehicle, index) => {
              const distanceFromCenter = Math.abs(index - 4);
              const zIndex = 10 - distanceFromCenter * 2;
              const scaleMultiplier = typeof window !== 'undefined' && window.innerWidth < 640 
                ? 1 - (distanceFromCenter * 0.08)
                : 1 - (distanceFromCenter * 0.12);

              const getWidthClass = () => {
                if (distanceFromCenter === 0) return "w-[180px] sm:w-[140px] md:w-[180px] lg:w-[220px] xl:w-[240px]";
                if (distanceFromCenter === 1) return "w-[160px] sm:w-[120px] md:w-[150px] lg:w-[180px] xl:w-[260px]";
                if (distanceFromCenter === 2) return "w-[160px] sm:w-[100px] md:w-[130px] lg:w-[150px] xl:w-[260px]";
                if (distanceFromCenter === 3) return "w-[54px] sm:w-[85px] md:w-[110px] lg:w-[130px] xl:w-[260px]";
                return "w-[48px] sm:w-[75px] md:w-[95px] lg:w-[110px] xl:w-[260px]";
              };

              const marginClass = index === 0 
                ? "" 
                : "-ml-[48px] xs:-ml-[16px] sm:-ml-4 md:-ml-6 lg:-ml-8 xl:-ml-28";
              
              return (
                <div
                  key={index}
                  ref={(el) => (vehiclesRef.current[index] = el)}
                  className={`flex-shrink-0 opacity-0 flex items-end ${getWidthClass()} ${marginClass}`}
                  style={{
                    zIndex: zIndex,
                    transform: `scale(${scaleMultiplier})`,
                    transformOrigin: 'bottom center',
                  }}
                >
                  <img
                    src={vehicle.src}
                    alt={`Force Motors Vehicle ${index + 1}`}
                    className="sm:w-full sm:h-auto w-auto h-96  object-contain drop-shadow-xl"
                    loading="lazy"
                    style={{
                      filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))',
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

    {/* Replaced Scroll Indicator Button */}
<div className="block md:hidden absolute bottom-8 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-10">
  <button
    ref={buttonRef}
    onClick={handleScrollClick}
    className="w-14 h-14 sm:w-18 sm:h-18 bg-black rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-300 shadow-2xl hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-black/30 active:scale-95"
    aria-label="Scroll down"
  >
    <svg
      className="w-6 h-6 sm:w-8 sm:h-8 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>
</div>
    </section>
  );
};

export default Hero;