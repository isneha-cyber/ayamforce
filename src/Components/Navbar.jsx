import React, { useState, useEffect, useRef } from 'react';
import { HiMenu, HiX, HiLocationMarker, HiOutlineNewspaper } from 'react-icons/hi';
import { BsCarFront, BsTelephone } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineDollar } from 'react-icons/ai';
import gsap from 'gsap';

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isNavbarWhite, setIsNavbarWhite] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const menuOverlayRef = useRef(null);
  const closeButtonRef = useRef(null);

  // GSAP animations
  useEffect(() => {
    if (navbarRef.current) {
      gsap.fromTo(logoRef.current,
        { scale: 0.5, opacity: 0, rotation: -180 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: "elastic.out(1, 0.3)" }
      );

      gsap.fromTo(navItemsRef.current,
        { y: -30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)", delay: 0.2 }
      );
    }
  }, []);

  // Scroll handler with RAF
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setIsNavbarVisible(false);
          } else if (currentScrollY < lastScrollY.current) {
            setIsNavbarVisible(true);
          }

          if (window.innerWidth >= 768) {
            setIsNavbarWhite(currentScrollY > 50);
          }
          
          const sections = ['home', 'about', 'vehicles', 'prices', 'blog', 'contact'];
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= 100 && rect.bottom >= 100) {
                setActiveItem(section);
                break;
              }
            }
          }
          
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    if (window.innerWidth < 768) {
      setIsNavbarWhite(true);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsNavbarWhite(true);
      } else {
        setIsNavbarWhite(window.scrollY > 50);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navbar hide/show animation
  useEffect(() => {
    if (navbarRef.current) {
      gsap.to(navbarRef.current, {
        y: isNavbarVisible ? 0 : -120,
        opacity: isNavbarVisible ? 1 : 0,
        duration: 0.5,
        ease: "power3.out"
      });
    }
  }, [isNavbarVisible]);

  // Mobile menu animation
  useEffect(() => {
    if (isMobileMenuOpen && menuOverlayRef.current) {
      gsap.fromTo(menuOverlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      
      gsap.fromTo('.mobile-menu-item',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: "power2.out", delay: 0.1 }
      );
    }
  }, [isMobileMenuOpen]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'HOME', id: 'home', icon: AiOutlineHome },
    { label: 'ABOUT', id: 'about', icon: null },
    { label: 'VEHICLES', id: 'vehicles', icon: BsCarFront },
    { label: 'PRICES', id: 'prices', icon: AiOutlineDollar },
    { label: 'BLOG', id: 'blog', icon: HiOutlineNewspaper },
    { label: 'CONTACT', id: 'contact', icon: BsTelephone },
  ];

  const handleNavClick = (id) => {
    setActiveItem(id);
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleCloseMenu = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 right-0 z-50 w-full"
      >
        {/* Main navbar */}
        <div
          className={`transition-all duration-500 w-full ${
            isMobileMenuOpen 
              ? 'bg-white' 
              : isNavbarWhite 
                ? 'bg-white/90 backdrop-blur-md shadow-xl' 
                : 'bg-gradient-to-b from-black/30 via-black/20 to-transparent backdrop-blur-sm'
          }`}
        >
          <div className="px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full">
            <div className="flex items-center justify-between h-16 md:h-20 w-full">
              {/* Mobile Menu Button */}
              <div className="flex md:hidden items-center justify-start flex-1">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`p-2.5 rounded-xl transition-all duration-300 
                    ${isMobileMenuOpen || isNavbarWhite
                      ? 'text-gray-800 hover:bg-gray-100 active:scale-90' 
                      : 'text-white hover:bg-white/20 active:scale-90'
                    }`}
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <HiX className="h-7 w-7 transition-all duration-300 rotate-90" />
                  ) : (
                    <HiMenu className="h-7 w-7 transition-all duration-300" />
                  )}
                </button>
              </div>

              {/* Logo */}
              <div className="flex items-center justify-center md:justify-start flex-1 md:flex-none">
                <button
                  ref={logoRef}
                  onClick={() => handleNavClick('home')}
                  className="group relative w-12 h-12 md:w-14 md:h-14 transition-all duration-500 hover:scale-110 active:scale-95"
                  aria-label="Scroll to top"
                >
                  <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center shadow-inner">
                    <img 
                      src="Images/logo.png" 
                      alt="Logo" 
                      className="w-14 h-14 md:w-9 md:h-9 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center justify-end flex-1 space-x-2 lg:space-x-4">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    ref={el => navItemsRef.current[index] = el}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-2 text-sm lg:text-base font-medium tracking-wide 
                      transition-all duration-300 hover:scale-105 active:scale-95
                      rounded-lg group overflow-hidden
                      ${activeItem === item.id 
                        ? isMobileMenuOpen || isNavbarWhite
                          ? 'text-gray-700'
                          : 'text-white'
                        : isMobileMenuOpen || isNavbarWhite
                          ? 'text-gray-700 hover:text-gray-900'
                          : 'text-white/90 hover:text-white'
                      }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span 
                      className={`absolute inset-0 z-0 transition-all duration-300 
                        ${isMobileMenuOpen || isNavbarWhite
                          ? 'bg-gray-100 opacity-0 group-hover:opacity-100' 
                          : 'bg-white/20 opacity-0 group-hover:opacity-100'
                        }`}
                    />
                    {activeItem === item.id && (
                      <span 
                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 
                          rounded-full transition-all duration-300
                          ${isMobileMenuOpen || isNavbarWhite
                            ? 'bg-gray-700'
                            : 'bg-white'
                          }`}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Map Pin Icon */}
              <div className="flex md:hidden items-center justify-end flex-1">
                <button
                  onClick={() => handleNavClick('contact')}
                  className={`p-2.5 rounded-xl transition-all duration-300 
                    ${isMobileMenuOpen || isNavbarWhite
                      ? 'text-gray-800 hover:bg-gray-100 active:scale-90' 
                      : 'text-white hover:bg-white/20 active:scale-90'
                    }`}
                  aria-label="Location"
                >
                  <HiLocationMarker className="h-7 w-7" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu - FIXED X BUTTON */}
        {isMobileMenuOpen && (
          <div
            ref={menuOverlayRef}
            className="md:hidden fixed inset-0 z-40 w-full h-screen bg-white"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {/* Backdrop - only closes when clicking outside content */}
            <div 
              className="absolute inset-0"
              onClick={handleCloseMenu}
            />
            
            {/* Content - stops propagation */}
            <div
              className="relative h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between py-4 px-8">
                <button
                  ref={closeButtonRef}
                  onClick={handleCloseMenu}
                  className="p-2 -ml-2 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer z-50"
                  aria-label="Close menu"
                  type="button"
                >
                  <HiX className="h-8 w-8" />
                </button>
                
                <button
                  onClick={() => handleNavClick('home')}
                  className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center transition-transform hover:scale-105"
                >
                  <img 
                    src="Images/logo2.png" 
                    alt="Logo" 
                    className="w-14 h-14 object-contain"
                  />
                </button>
                
                <div className="w-10" />
              </div>

              {/* Menu Items */}
              <div className="flex-1 flex items-center justify-center px-8 pb-8 -mt-24">
                <nav className="w-full max-w-sm space-y-1">
                  {navItems.map((item, index) => {
                    const isActive = activeItem === item.id;
                    
                    return (
                      <button
                        key={item.id}
                        className="mobile-menu-item w-full text-left group py-3 sm:py-6"
                        onClick={() => handleNavClick(item.id)}
                        style={{ animationDelay: `${index * 0.05}s` }}
                        type="button"
                      >
                        <span 
                          className={`text-xl sm:text-4xl font-semibold tracking-tight transition-colors duration-200 block
                            ${isActive 
                              ? 'text-gray-900' 
                              : 'text-gray-400 group-hover:text-gray-900'
                            }`}
                        >
                          {item.label}
                        </span>
                        <div 
                          className={`h-px mt-2 sm:mt-6 transition-all duration-300 origin-left
                            ${isActive 
                              ? 'bg-gray-900 scale-x-100' 
                              : 'bg-gray-200 scale-x-100 group-hover:bg-gray-400'
                            }`} 
                        />
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;