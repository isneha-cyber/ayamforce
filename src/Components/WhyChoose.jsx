import React from 'react';

const WhyChoose = () => {
  const features = [
    {
      id: 1,
      title: 'Easy Financing',
      image: '/Images/vehicle/img20.webp',
      alt: 'White SUV',
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      ),
      iconBg: 'bg-green-500',
      iconPosition: 'single'
    },
    {
      id: 2,
      title: 'Safe Driving',
      image: 'Images/vehicle/img19.webp',
      alt: 'White Sedan',
      icon: (
        
          <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
        </svg>
        
      
      ),  
      iconBg: 'bg-green-500',
      iconPosition: 'single'
    },
    {
      id: 3,
      title: 'Happy Customers',
      image: 'Images/vehicle/img18.webp',
      alt: 'White Coupe',
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
        </svg>
      ),
      iconBg: 'bg-green-500',
      iconPosition: 'single'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-8 sm:mb-12 lg:mb-16 px-2">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight leading-tight sm:leading-snug">
            Why Choose Ayam Force
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            <span className="font-semibold text-gray-900">Buy vehicles in Nepal</span> with a premium experience, great deals, and hassle-free financing for your next vehicle.
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-2 sm:px-0">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col items-center transition-all duration-300 group "
            >
              <div className="relative mb-4 sm:mb-6 lg:mb-8 w-full flex justify-center">
                {/* Car Image */}
                <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl">
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNlNWU1ZTUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOTk5OTk5Ij5DYXIgSW1hZ2U8L3RleHQ+PC9zdmc+";
                    }}
                  />
                  {/* Gradient overlay for better icon visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                </div>
                
                {/* Icon Badge */}
                <div className={`absolute -top-2 -left-2 sm:-top-3 sm:-left-3 lg:-top-4 lg:left-8 ${feature.iconBg} ${feature.iconPosition === 'single' ? 'rounded-full p-2 sm:p-3 lg:p-4' : 'rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4'}  transition-all duration-300 group-hover:-translate-y-1`}>
                  {feature.icon}
                </div>
              </div>
              
              {/* Feature Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 text-center px-2">
                {feature.title}
              </h3>
            </article>
          ))}
        </div>

      

   
      </div>

    </div>
  );
};

export default WhyChoose;