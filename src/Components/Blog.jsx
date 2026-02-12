import React, { useState, useRef, useEffect } from "react";

const Blog = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  // Force Motors blog post data
  const posts = [
    {
      id: 1,
      num: "01",
      title: "Gurkha: Born for the Toughest Terrains",
      description:
        "Discover how the Force Gurkha conquers extreme off-road conditions with unmatched capability and rugged engineering.",
      date: "15 Jan 2026",
      category: "OFF-ROAD",
      tags: ["Gurkha", "Adventure", "4x4"],
      readTime: "5 min read",
      author: "Force Motors Team",
      link: "#",
      bgImage:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
    },
    {
      id: 2,
      num: "02",
      title: "Traveller: Redefining Family Journeys",
      description:
        "Experience comfort and space like never before. The Traveller brings luxury to every mile with your loved ones.",
      date: "22 Jan 2026",
      category: "FAMILY",
      tags: ["Traveller", "Comfort", "Family"],
      readTime: "4 min read",
      author: "Sarah Johnson",
      link: "#",
      bgImage:
        "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=800&q=80",
    },
    {
      id: 3,
      num: "03",
      title: "Trax: Power Meets Versatility",
      description:
        "From construction sites to adventure trails, discover why the Trax is the ultimate workhorse for any challenge.",
      date: "5 Feb 2026",
      category: "COMMERCIAL",
      tags: ["Trax", "Performance", "Utility"],
      readTime: "5 min read",
      author: "Engineering Desk",
      link: "#",
      bgImage:
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "OFF-ROAD": "from-gray-600 to-gray-800",
      "FAMILY": "from-gray-600 to-gray-800",
      "COMMERCIAL": "from-gray-600 to-gray-800",
      "URBAN": "from-gray-600 to-gray-800",
      "MAINTENANCE": "from-gray-600 to-gray-800",
    };
    return colors[category] || "from-gray-500 to-gray-700";
  };

  // Touch handlers for mobile slider
  const handleTouchStart = (e) => {
    if (window.innerWidth >= 1024) return; // Only for mobile/tablet
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || window.innerWidth >= 1024) return;
    e.preventDefault();
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    if (window.innerWidth >= 1024) return;
    setIsDragging(false);
    
    // Snap to nearest card
    const cardWidth = sliderRef.current.offsetWidth;
    const newIndex = Math.round(sliderRef.current.scrollLeft / cardWidth);
    setCurrentSlide(Math.max(0, Math.min(newIndex, posts.length - 1)));
    
    sliderRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: 'smooth'
    });
  };

  // Mouse handlers for desktop drag (optional, but nice to have)
  const handleMouseDown = (e) => {
    if (window.innerWidth >= 1024) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging || window.innerWidth >= 1024) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    if (window.innerWidth >= 1024) return;
    setIsDragging(false);
    sliderRef.current.style.cursor = 'grab';
    
    const cardWidth = sliderRef.current.offsetWidth;
    const newIndex = Math.round(sliderRef.current.scrollLeft / cardWidth);
    setCurrentSlide(Math.max(0, Math.min(newIndex, posts.length - 1)));
    
    sliderRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: 'smooth'
    });
  };

  const handleMouseLeave = () => {
    if (isDragging && window.innerWidth < 1024) {
      setIsDragging(false);
      sliderRef.current.style.cursor = 'grab';
    }
  };

  // Dot indicator click handler
  const goToSlide = (index) => {
    setCurrentSlide(index);
    const cardWidth = sliderRef.current.offsetWidth;
    sliderRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  };

  // Update current slide on scroll (for manual scrolling)
  const handleScroll = () => {
    if (window.innerWidth >= 1024) return;
    const cardWidth = sliderRef.current.offsetWidth;
    const newIndex = Math.round(sliderRef.current.scrollLeft / cardWidth);
    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div id="blog" className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Header Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 md:mb-16">
        <div className="text-center mb-6 sm:mb-8">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4 max-w-3xl mx-auto text-gray-900">
            From The Force Blog
          </h2>
          
          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Stories, insights, and innovations from the world of Force Motors
          </p>
        </div>
      </div>

      {/* Mobile/Tablet Slider (< lg breakpoint) */}
      <div className="lg:hidden">
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="flex-shrink-0 w-full px-4 sm:px-6 snap-center"
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col max-w-md mx-auto">
                {/* Number Indicator */}
                <div className="mb-3 sm:mb-4 ml-1 sm:ml-2">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-br from-gray-300 to-gray-400 bg-clip-text text-transparent">
                    {post.num}
                  </span>
                </div>

                {/* Card */}
                <a
                  href={post.link}
                  className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 h-[350px] sm:h-[400px] ${
                    hoveredCard === post.id ? 'bg-gray-700' : 'bg-gray-50'
                  }`}
                  onClick={(e) => {
                    if (isDragging) e.preventDefault();
                  }}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${post.bgImage})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-gray-700/80 group-hover:via-gray-700/60 group-hover:to-gray-700/40 transition-all duration-500"></div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                    <span className={`inline-block px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getCategoryColor(post.category)} shadow-lg transition-all duration-300`}>
                      {post.category}
                    </span>
                  </div>

                  {/* Hover Content */}
                  <div className={`absolute inset-0 z-10 p-5 sm:p-6 lg:p-7 flex flex-col justify-end transition-all duration-500 ${
                    hoveredCard === post.id 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 leading-tight drop-shadow-lg">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm lg:text-base text-white/95 leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 drop-shadow-md">
                      {post.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-xs font-medium bg-white/90 text-gray-900 backdrop-blur-sm shadow-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 sm:pt-4 border-t border-white/30 gap-2 sm:gap-0">
                      <div className="text-xs sm:text-sm text-white/90 drop-shadow-md">
                        <div className="font-medium">By {post.author}</div>
                        <div className="text-white/80 mt-0.5">{post.date} • {post.readTime}</div>
                      </div>
                      <div className="flex items-center gap-2 text-white group-hover:gap-3 transition-all">
                        <span className="text-xs sm:text-sm font-semibold drop-shadow-md">Read More</span>
                        <svg 
                          className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform drop-shadow-md" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Default Content */}
                  <div className={`absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5 transition-all duration-500 ${
                    hoveredCard === post.id 
                      ? 'opacity-0 pointer-events-none' 
                      : 'opacity-100'
                  }`}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1.5 sm:mb-2 leading-tight drop-shadow-lg">
                      {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 line-clamp-1 drop-shadow-md">
                      {post.description}
                    </p>
                  </div>

                  {/* Decorative Corners */}
                  <div className={`absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-t-4 border-l-4 border-white/30 rounded-tl-2xl sm:rounded-tl-3xl transition-opacity duration-500 ${
                    hoveredCard === post.id ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                  <div className={`absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-b-4 border-r-4 border-white/30 rounded-br-2xl sm:rounded-br-3xl transition-opacity duration-500 ${
                    hoveredCard === post.id ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
          {posts.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? 'w-8 h-2 bg-gray-800' 
                  : 'w-2 h-2 bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid (>= lg breakpoint) */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="flex flex-col"
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Number Indicator */}
              <div className="mb-3 sm:mb-4 ml-1 sm:ml-2">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-br from-gray-300 to-gray-400 bg-clip-text text-transparent">
                  {post.num}
                </span>
              </div>

              {/* Card */}
              <a
                href={post.link}
                className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 h-[350px] sm:h-[400px] lg:h-[450px] ${
                  hoveredCard === post.id ? 'bg-gray-700' : 'bg-gray-50'
                }`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${post.bgImage})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-gray-700/80 group-hover:via-gray-700/60 group-hover:to-gray-700/40 transition-all duration-500"></div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                  <span className={`inline-block px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getCategoryColor(post.category)} shadow-lg transition-all duration-300`}>
                    {post.category}
                  </span>
                </div>

                {/* Hover Content */}
                <div className={`absolute inset-0 z-10 p-5 sm:p-6 lg:p-7 flex flex-col justify-end transition-all duration-500 ${
                  hoveredCard === post.id 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 leading-tight drop-shadow-lg">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm lg:text-base text-white/95 leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 drop-shadow-md">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-xs font-medium bg-white/90 text-gray-900 backdrop-blur-sm shadow-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 sm:pt-4 border-t border-white/30 gap-2 sm:gap-0">
                    <div className="text-xs sm:text-sm text-white/90 drop-shadow-md">
                      <div className="font-medium">By {post.author}</div>
                      <div className="text-white/80 mt-0.5">{post.date} • {post.readTime}</div>
                    </div>
                    <div className="flex items-center gap-2 text-white group-hover:gap-3 transition-all">
                      <span className="text-xs sm:text-sm font-semibold drop-shadow-md">Read More</span>
                      <svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform drop-shadow-md" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Default Content */}
                <div className={`absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5 transition-all duration-500 ${
                  hoveredCard === post.id 
                    ? 'opacity-0 pointer-events-none' 
                    : 'opacity-100'
                }`}>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1.5 sm:mb-2 leading-tight drop-shadow-lg">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 line-clamp-1 drop-shadow-md">
                    {post.description}
                  </p>
                </div>

                {/* Decorative Corners */}
                <div className={`absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-t-4 border-l-4 border-white/30 rounded-tl-2xl sm:rounded-tl-3xl transition-opacity duration-500 ${
                  hoveredCard === post.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
                <div className={`absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-b-4 border-r-4 border-white/30 rounded-br-2xl sm:rounded-br-3xl transition-opacity duration-500 ${
                  hoveredCard === post.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Blog;