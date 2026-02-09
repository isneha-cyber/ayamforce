import React, { useState, useEffect, useRef } from 'react';
import { HiMenu, HiX, HiLocationMarker } from 'react-icons/hi';
import gsap from 'gsap';

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isNavbarWhite, setIsNavbarWhite] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);

  // Initialize GSAP animations
  useEffect(() => {
    if (navbarRef.current) {
      // Initial animation for logo
      gsap.fromTo(logoRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
      );

      // Stagger animation for nav items
      gsap.fromTo(navItemsRef.current,
        { y: -20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3
        }
      );
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          // Hide navbar on scroll down, show on scroll up
          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setIsNavbarVisible(false);
          } else if (currentScrollY < lastScrollY.current) {
            setIsNavbarVisible(true);
          }

          // Show white background when scrolled down (only on desktop)
          if (window.innerWidth >= 768) {
            if (currentScrollY > 50) {
              setIsNavbarWhite(true);
            } else {
              setIsNavbarWhite(false);
            }
          }
          
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set initial state for mobile
    if (window.innerWidth < 768) {
      setIsNavbarWhite(true);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsNavbarWhite(true); // Always white on mobile
      } else {
        // Reset to scroll-based behavior on desktop
        if (window.scrollY <= 50) {
          setIsNavbarWhite(false);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // GSAP animation for navbar show/hide
  useEffect(() => {
    if (navbarRef.current) {
      gsap.to(navbarRef.current, {
        y: isNavbarVisible ? 0 : -100,
        opacity: isNavbarVisible ? 1 : 0,
        duration: 0.4,
        ease: "power2.out"
      });
    }
  }, [isNavbarVisible]);

  // GSAP animation for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo('.mobile-menu-item',
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    }
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'ABOUT', id: 'about' },
    { label: 'VEHICLES', id: 'vehicles' },
    { label: 'PRICES', id: 'prices' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
      style={{ transform: 'translateY(0)' }}
    >
      {/* Main navbar container - Full width white background on mobile */}
      <div
        className={`transition-all duration-300 w-full ${
          isMobileMenuOpen ? 'bg-white shadow-lg' : 
          isNavbarWhite ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between h-16 md:h-20 w-full">
            {/* Mobile Menu Button - Left (Mobile only) */}
            <div className="flex md:hidden items-center justify-start flex-1">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  isMobileMenuOpen || isNavbarWhite
                    ? 'text-gray-800 hover:bg-gray-100 active:scale-95'
                    : 'text-gray-800 hover:bg-gray-100 active:scale-95'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <HiX className="h-8 w-8 transition-transform duration-300" />
                ) : (
                  <HiMenu className="h-8 w-8 transition-transform duration-300" />
                )}
              </button>
            </div>

            {/* Logo - Center on mobile, left on desktop */}
            <div className="flex items-center justify-center md:justify-start flex-1 md:flex-none">
              <button
                ref={logoRef}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 bg-white shadow-lg"
                aria-label="Scroll to top"
              >
                <div className="relative">
                  <img 
                    src="Images/logo.png" 
                    alt="Logo" 
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  />
                </div>
              </button>
            </div>

            {/* Navigation Items - Right side (Desktop only) */}
            <div className="hidden md:flex items-center justify-end flex-1 space-x-6 lg:space-x-10">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  ref={el => navItemsRef.current[index] = el}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm lg:text-base tracking-wide font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                    isMobileMenuOpen || isNavbarWhite
                      ? 'text-gray-800 hover:text-black'
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Map Pin Icon - Right (Mobile only) */}
            <div className="flex md:hidden items-center justify-end flex-1">
              <button
                onClick={() => handleNavClick('contact')}
                className="p-3 rounded-lg transition-all duration-300 text-gray-800 hover:bg-gray-100 active:scale-95"
                aria-label="Location"
              >
                <HiLocationMarker className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu - Full screen white background */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 z-40 w-full h-screen bg-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Header with close button and logo */}
          <div className="px-4 sm:px-6 max-w-7xl mx-auto pt-6">
            <div className="flex items-center justify-between">
              {/* Close button - Left */}
              <div className="flex justify-start">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-lg transition-all duration-300 text-gray-800 hover:bg-gray-100 active:scale-95"
                  aria-label="Close menu"
                >
                  <HiX className="h-8 w-8" />
                </button>
              </div>
              
              {/* Logo - Center */}
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 bg-white shadow-lg"
                  aria-label="Scroll to top"
                >
                  <img 
                    src="Images/logo2.png" 
                    alt="Logo" 
                    className="w-8 h-8 object-contain"
                  />
                </button>
              </div>
              
              {/* Map pin - Right */}
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    handleNavClick('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="p-3 rounded-lg transition-all duration-300 text-gray-800 hover:bg-gray-100 active:scale-95"
                  aria-label="Location"
                >
                  <HiLocationMarker className="h-8 w-8" />
                </button>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div 
            className="px-6 pt-12 pb-10 space-y-1 h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item, index) => (
              <button
                key={item.id}
                className="mobile-menu-item w-full max-w-sm text-2xl font-semibold tracking-wide transition-all duration-300 py-5 px-6 rounded-xl hover:bg-gray-50 active:scale-95 text-gray-900 hover:text-black text-center"
                onClick={() => handleNavClick(item.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
            
            {/* Decorative line */}
            <div className="mt-12 pt-6 border-t border-gray-200 w-full max-w-xs">
              <div className="text-center text-gray-500 text-sm pt-2">
                Tap outside to close
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;