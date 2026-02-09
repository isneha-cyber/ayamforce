import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function UrbaniaFooter() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-in", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#1a1a1a] text-white px-6 md:px-12 lg:px-20 py-12"
    >
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-12">
        {/* Logo Section */}
        <div className="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-1">
            Ayam Force
          </h2>
          <p className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase">
            Travel World Class
          </p>
        </div>

        {/* Toll Free Section */}
        <div className="fade-in">
          <h3 className="text-xs md:text-sm tracking-wider text-gray-400 uppercase mb-3">
            Toll Free No.
          </h3>
          <a
            href="tel:980-2803118"
            className="text-xl md:text-2xl font-semibold hover:text-gray-300 transition-colors"
          >
         980-2803118
          </a>
          <div className="mt-8">
            <h3 className="text-xs md:text-sm tracking-wider text-gray-400 uppercase mb-3">
              Connect With Us
            </h3>
            <a
              href="mailto:
manager.aayampkr@gmail.com"
              className="text-sm md:text-base hover:text-gray-300 transition-colors block mb-4"
            >
              
manager.aayampkr@gmail.com
            </a>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              Force Motors Limited, Kathmandu - Nepal
            </p>
          </div>
        </div>

        {/* Explore Urbania Section */}
        <div className="fade-in">
          <h3 className="text-xs md:text-sm tracking-wider text-gray-400 uppercase mb-6">
            Explore Ayam
          </h3>
          <nav className="space-y-4">
            <a
              href="#"
              className="block text-sm md:text-base hover:text-gray-300 transition-colors"
            >
            Vechiles
            </a>
            <a
              href="#"
              className="block text-sm md:text-base hover:text-gray-300 transition-colors"
            >
              Price
            </a>
          </nav>
        </div>

        {/* Social Media Section */}
        <div className="fade-in">
          <h3 className="text-xs md:text-sm tracking-wider text-gray-400 uppercase mb-6">
            Follow Us On
          </h3>
          <div className="flex gap-4">
            <a
              href=""
              className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center  hover:border-white hover:bg-white/5 transition-all duration-300 group"
              aria-label="YouTube"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/aayamforce/"
              className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center  hover:border-white hover:bg-white/5 transition-all duration-300 group"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/aayamforcenepal/?hl=en"
              className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center  hover:border-white hover:bg-white/5 transition-all duration-300 group"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="border-t border-gray-700 pt-8 mb-8 fade-in">
        <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed">
          <span className="font-semibold">DISCLAIMER:</span> Force Motors Limited
          reserves the right to change without notice the colours, equipment,
          specifications, prices, models and other website contents. Accessories
          shown in the pictures and features mentioned may not be a part of the
          standard fitments and may change with the variants and models. Actual
          colour, finesse and upholstery might vary. For latest information usage
          visit our site at forcemotors.com. Pictures are for illustration
          purpose only. Regular website usage will not set you for any personal
          information leaving out components that would request for a test drive,
          online booking or a dealer call back.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-700 fade-in">
        <div className="flex gap-6">
          <a
            href="#"
            className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors underline"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors underline"
          >
            Cookie Policy
          </a>
        </div>
        <p className="text-xs md:text-sm text-gray-400">
          © 2022 Ayam Force. All rights reserved.
        </p>
      </div>
    </footer>
  );
}