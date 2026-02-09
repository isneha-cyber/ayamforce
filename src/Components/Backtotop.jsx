import React, { useState, useEffect } from 'react';
import { 
  FaWhatsapp, 
  FaArrowUp
} from 'react-icons/fa';

const Backtotop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // WhatsApp configuration - REMOVED LEADING SPACES
  const whatsappNumber = "9802803118"; // Removed spaces
  const defaultWhatsappMessage = "Hello! I'm interested in Ayam Force Motors vehicles. Please provide more information.";

  // WhatsApp URL generator - FIXED
  const getWhatsAppUrl = () => {
    // Format: country code + phone number (without spaces or special characters)
    const formattedNumber = `977${whatsappNumber}`;
    return `https://wa.me/${formattedNumber}?text=${encodeURIComponent(defaultWhatsappMessage)}`;
  };

  // Show/hide back-to-top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // WhatsApp function
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="relative group"
        aria-label="Contact on WhatsApp"
      >
        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300">
          <FaWhatsapp className="text-white text-2xl" />
        </div>
      </button>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="group relative"
          aria-label="Back to top"
        >
          <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#2b7cc2] to-[#1e5a8e] rounded-full shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300">
            <FaArrowUp className="text-white text-xl" />
          </div>
        </button>
      )}
    </div>
  );
};

export default Backtotop;