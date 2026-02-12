// import React from 'react';

// export default function CarSellingLanding() {
// 	return (
// 		<>
// 			<div className="min-h-screen bg-white p-4 sm:p-6 lg:p-12">
// 				<div className="max-w-7xl mx-auto">
// 					<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">

// 						{/* Left Card - Trade-in CTA - Improved Responsive */}
// 						<div className="lg:col-span-4">
// 							<div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#2b7cc2] shadow-xl sm:shadow-2xl h-full min-h-[320px] sm:min-h-[450px] lg:min-h-[600px] flex flex-col">
// 								{/* Background Pattern */}
// 								<div className="absolute inset-0 opacity-10">
// 									<div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full blur-2xl sm:blur-3xl"></div>
// 									<div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#2b7cc2] rounded-full blur-2xl sm:blur-3xl"></div>
// 								</div>

// 								<div className="relative flex-1 flex flex-col justify-between p-4 sm:p-6 lg:p-10">
// 									{/* Top Section */}
// 									<div className="flex-1 flex flex-col justify-center">
// 										<h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white leading-tight sm:leading-tight mb-3 sm:mb-6">
// 											CHOOSE
// 											<br/>
// 											VEHICLES<br/>
// 											IN A {' '}
// 											<span className="inline-block relative">
// 												<span className="relative z-10">SNAP</span>
// 											</span>
// 										</h2>

// 										{/* Car Image */}
// 										<div className="relative mb-3 sm:mb-6">
// 											<div className="absolute inset-0 bg-gradient-to-t from-[#2b7cc2] to-transparent z-10"></div>
// 											<img 
// 												src="/Images/vehicle/img14.webp" 
// 												alt="Red BMW Car" 
// 												className="w-full h-auto max-h-[120px] sm:max-h-[180px] lg:max-h-[250px] object-contain relative z-0" 
// 												loading="lazy"
// 											/>
// 										</div>

// 										<p className="text-white text-xs sm:text-sm lg:text-base font-semibold tracking-wide uppercase mb-1 sm:mb-2">
// 											Find the right vehicle
// 										</p>
// 										<p className="text-white text-xs sm:text-md font-medium">
// 											for a new one via trade-in
// 										</p>
// 									</div>

// 									{/* Bottom CTA Button */}
// 									<button className="w-full bg-white text-[#2b7cc2] font-bold text-sm sm:text-lg py-2 sm:py-4 px-4 sm:px-8 rounded-xl hover:bg-red-50 transition-all duration-300 shadow-lg sm:shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] mt-2 sm:mt-4">
// 										Start Now
// 									</button>
// 								</div>
// 							</div>
// 						</div>

// 						{/* Right Section - Features Grid */}
// 						<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

// 							{/* Traveller Feature Card - Fixed Height */}
// 							<div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg transition-all duration-300 p-4 sm:p-6 lg:p-8 flex flex-col h-full min-h-[340px] sm:min-h-[400px]">
// 								<div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-3 sm:mb-6">
// 									<div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#2b7cc2] rounded-full flex items-center justify-center shadow-lg">
// 										<svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// 											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z"/>
// 										</svg>
// 									</div>
// 									<div className="flex-1">
// 										<h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">AAayam Force Traveller</h3>
// 										<div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-4">
// 											<span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-700 bg-blue-50 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full">
// 												<svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#2b7cc2]" fill="currentColor" viewBox="0 0 20 20">
// 													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
// 												</svg>
// 												12-18 Seater
// 											</span>
// 											<span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-700 bg-blue-50 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full">
// 												<svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#2b7cc2]" fill="currentColor" viewBox="0 0 20 20">
// 													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
// 												</svg>
// 												Diesel Engine
// 											</span>
// 											<span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-700 bg-blue-50 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full">
// 												<svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#2b7cc2]" fill="currentColor" viewBox="0 0 20 20">
// 													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
// 												</svg>
// 												Commercial Use
// 											</span>
// 										</div>
// 									</div>
// 								</div>

// 								{/* Traveller Image */}
// 								<div className="relative flex-1 flex items-center justify-center mb-3 sm:mb-6 min-h-[120px] sm:min-h-[160px]">
// 									<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-xl"></div>
// 									<img 
// 										src="/Images/vehicle/img15.webp" 
// 										alt="AAayam Force Traveller" 
// 										className="w-full h-auto max-h-[100px] sm:max-h-[140px] lg:max-h-[180px] object-contain relative z-10 drop-shadow-xl" 
// 										loading="lazy"
// 									/>
// 								</div>

// 								<p className="text-gray-800 text-center font-semibold text-xs sm:text-sm lg:text-base leading-relaxed">
// 									Perfect for group transportation, school buses, and tourist services with superior comfort.
// 								</p>
// 							</div>

// 							{/* Tarx Feature Card - Fixed Height */}
// 							<div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg transition-all duration-300 p-4 sm:p-6 lg:p-8 flex flex-col h-full min-h-[340px] sm:min-h-[400px]">
// 								{/* Tarx Image with Features Badge */}
// 								<div className="relative flex-1 flex items-center justify-center mb-3 sm:mb-6 min-h-[120px] sm:min-h-[160px]">
// 									<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-xl"></div>

// 									{/* Features Badge - Improved Responsive */}
// 									<div className="absolute top-0 sm:top-2 right-2 sm:right-4 z-20">
// 										<div className="relative">
// 											<div className="bg-[#2b7cc2] text-white text-xs font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg flex items-center gap-1">
// 												<svg className="w-2 h-2 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20">
// 													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
// 												</svg>
// 												<span className="text-xs">4WD & Load</span>
// 											</div>
// 										</div>
// 									</div>

// 									<img 
// 										src="/Images/vehicle/img21.webp" 
// 										alt="AAayam Force Tarx Pickup" 
// 										className="w-full h-auto max-h-[100px] sm:max-h-[140px] lg:max-h-[180px] object-contain relative z-10 drop-shadow-xl mt-4 sm:mt-8" 
// 										loading="lazy"
// 									/>
// 								</div>

// 								<div className="mb-3 sm:mb-4">
// 									<h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">AAayam Force Tarx</h3>
// 									<div className="flex flex-wrap gap-1.5 sm:gap-2">
// 										<span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-700 bg-blue-50 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full">
// 											<svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
// 												<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
// 											</svg>
// 											Pickup Truck
// 										</span>
// 										<span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-700 bg-blue-50 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full">
// 											<svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
// 												<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
// 											</svg>
// 											Heavy Duty
// 										</span>
// 										<span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-700 bg-blue-50 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full">
// 											<svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
// 												<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
// 											</svg>
// 											Commercial
// 										</span>
// 									</div>
// 								</div>

// 								<p className="text-gray-800 font-semibold text-xs sm:text-sm lg:text-base leading-relaxed">
// 									Ideal for construction, agriculture, and heavy-duty commercial use.
// 								</p>
// 							</div>

// 							{/* Financing & Services Card - Full Width - Improved */}
// 							<div className="md:col-span-2 bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl shadow-lg transition-all duration-300 p-4 sm:p-6 lg:p-8 border border-gray-100">
// 								<div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
// 									{/* Financing Options */}
// 									<div className="flex-1">
// 										<div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
// 											<p className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">
// 												Flexible Financing Solutions
// 											</p>
// 											<span className="inline-flex items-center bg-green-600 text-white text-xs sm:text-sm font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full">
// 												0% Processing Fee*
// 											</span>
// 										</div>
// 										<p className="text-xs sm:text-sm text-gray-600">
// 											Bank financing, lease options, and easy EMI plans with minimal documentation.
// 										</p>
// 									</div>

// 									{/* Divider - Responsive */}
// 									<div className="hidden sm:block w-px h-16 bg-gray-200"></div>
// 									<div className="sm:hidden w-full h-px bg-gray-200"></div>

// 									{/* After Sales - Improved Layout */}
// 									<div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
// 										<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
// 											<svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// 												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
// 											</svg>
// 										</div>
// 										<div className="flex-1 sm:flex-initial">
// 											<p className="text-sm font-bold text-gray-900 mb-1">Complete Service</p>
// 											<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
// 												<span className="text-xs text-gray-500">Warranty &</span>
// 												<span className="text-sm font-bold text-blue-600">Maintenance</span>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					{/* Certified Section - Improved Responsive */}
// 					<div className="mt-6 sm:mt-8 lg:mt-12">
// 						<div className="bg-gradient-to-br from-blue-50 via-white to-gray-50 rounded-2xl sm:rounded-full border border-gray-300 p-6 sm:p-8">
// 							{/* Header Section */}
// 							<div className="text-center">
// 								<div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#2b7cc2] to-blue-700 rounded-full mb-3 sm:mb-4 shadow-lg">
// 									<svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// 										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
// 									</svg>
// 								</div>
// 								<h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-2">
// 									Official Distributors of Force Motors
// 								</h2>
// 								<p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto px-2">
// 									Every vehicle undergoes rigorous inspection and meets our highest standards of quality and performance
// 								</p>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

import React from 'react';

export default function CarSellingLanding() {
  return (
    <div className="min-h-screen bg-white p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          
          {/* Left Card - Trade-in CTA - Optimized for Mobile */}
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-[#2b7cc2] shadow-lg sm:shadow-xl lg:shadow-2xl h-full min-h-[320px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] flex flex-col">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-[0.08] sm:opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white rounded-full blur-xl sm:blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-[#2b7cc2] rounded-full blur-xl sm:blur-2xl"></div>
              </div>

              <div className="relative flex-1 flex flex-col p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
                {/* Top Section - Centered content */}
                <div className="flex-1 flex flex-col items-center text-center">
                  
                  {/* Heading - Centered without <br> tags */}
                  <div className="mb-4 sm:mb-5 md:mb-6 w-full">
                    <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white">
                      <div className="flex flex-col space-y-1 sm:space-y-2">
                        <span className="block">CHOOSE</span>
                        <span className="block">VEHICLES IN A</span>
                        <span className="relative inline-block mt-2">
                          <span className="relative z-10 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                            SNAP
                          </span>
                          <span className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-500 blur-md opacity-50 rounded-lg"></span>
                        </span>
                      </div>
                    </h2>
                  </div>

                  {/* Car Image - Bigger on mobile */}
                  <div className="relative mb-4 sm:mb-5 md:mb-6 w-full flex justify-center">
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2b7cc2] via-transparent to-transparent h-16 sm:h-20 z-10"></div>
                    <img 
                      src="/Images/vehicle/img14.webp" 
                      alt="Red BMW Car" 
                      className="w-full h-auto max-h-[240px] sm:max-h-[120px] md:max-h-[140px] lg:max-h-[160px] xl:max-h-[200px] 2xl:max-h-[240px] object-contain relative z-0 transform hover:scale-105 transition-transform duration-300" 
                      loading="lazy"
                    />
                  </div>

                  {/* Text content */}
                  <div className="mb-4 sm:mb-5 md:mb-6 w-full">
                    <div className="space-y-1">
                      <p className="text-white text-sm sm:text-base md:text-lg font-semibold tracking-wide uppercase">
                        Find the right vehicle
                      </p>
                      <p className="text-white/90 text-sm sm:text-base font-medium">
                        for a new one via trade-in
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <button className="w-full bg-white text-[#2b7cc2] font-bold text-sm sm:text-base md:text-lg lg:text-lg py-3 sm:py-3.5 md:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl lg:rounded-2xl hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 shadow-md sm:shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0 active:shadow-md mt-auto">
                  <span className="flex items-center justify-center gap-2">
                    Start Now
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Features Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {/* Traveller Feature Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-md sm:shadow-lg lg:shadow-xl transition-all duration-300 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col h-full min-h-[300px] sm:min-h-[350px] md:min-h-[380px] hover:shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-3 sm:mb-4 md:mb-6">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#2b7cc2] rounded-full flex items-center justify-center shadow-md">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">AAayam Force Traveller</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-gray-700 bg-blue-50 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full">
                      <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#2b7cc2]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      12-18 Seater
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-gray-700 bg-blue-50 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full">
                      <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#2b7cc2]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Diesel Engine
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-gray-700 bg-blue-50 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full">
                      <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#2b7cc2]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Commercial Use
                    </span>
                  </div>
                </div>
              </div>

              {/* Traveller Image */}
              <div className="relative flex-1 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 min-h-[100px] sm:min-h-[120px] md:min-h-[140px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-lg"></div>
                <img 
                  src="/Images/vehicle/img15.webp" 
                  alt="AAayam Force Traveller" 
                  className="w-full h-auto max-h-[80px] sm:max-h-[100px] md:max-h-[120px] lg:max-h-[140px] object-contain relative z-10 drop-shadow-lg" 
                  loading="lazy"
                />
              </div>

              <p className="text-gray-800 text-center font-medium text-xs sm:text-sm md:text-base leading-relaxed">
                Perfect for group transportation, school buses, and tourist services with superior comfort.
              </p>
            </div>

            {/* Tarx Feature Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-md sm:shadow-lg lg:shadow-xl transition-all duration-300 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col h-full min-h-[300px] sm:min-h-[350px] md:min-h-[380px] hover:shadow-lg">
              {/* Tarx Image with Features Badge */}
              <div className="relative flex-1 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 min-h-[100px] sm:min-h-[120px] md:min-h-[140px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-lg"></div>

                {/* Features Badge */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-20">
                  <div className="relative">
                    <div className="bg-[#2b7cc2] text-white text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-md flex items-center gap-1">
                      <svg className="w-2 h-2 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-[10px] sm:text-xs">4WD & Load</span>
                    </div>
                  </div>
                </div>

                <img 
                  src="/Images/vehicle/img21.webp" 
                  alt="AAayam Force Tarx Pickup" 
                  className="w-full h-auto max-h-[80px] sm:max-h-[100px] md:max-h-[120px] lg:max-h-[140px] object-contain relative z-10 drop-shadow-lg mt-4 sm:mt-6" 
                  loading="lazy"
                />
              </div>

              <div className="mb-3 sm:mb-4 md:mb-6">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">AAayam Force Tarx</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-gray-700 bg-blue-50 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full">
                    <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Pickup Truck
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-gray-700 bg-blue-50 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full">
                    <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Heavy Duty
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-gray-700 bg-blue-50 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full">
                    <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Commercial
                  </span>
                </div>
              </div>

              <p className="text-gray-800 font-medium text-xs sm:text-sm md:text-base leading-relaxed">
                Ideal for construction, agriculture, and heavy-duty commercial use.
              </p>
            </div>

            {/* Financing & Services Card */}
            <div className="md:col-span-2 bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-md sm:shadow-lg lg:shadow-xl transition-all duration-300 p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-100 hover:shadow-lg">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 md:gap-6">
                {/* Financing Options */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                    <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                      Flexible Financing Solutions
                    </p>
                    <span className="inline-flex items-center bg-green-600 text-white text-xs sm:text-sm font-bold px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full">
                      0% Processing Fee*
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Bank financing, lease options, and easy EMI plans with minimal documentation.
                  </p>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-px h-16 bg-gray-200"></div>
                <div className="sm:hidden w-full h-px bg-gray-200"></div>

                {/* After Sales */}
                <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div className="flex-1 sm:flex-initial">
                    <p className="text-sm font-bold text-gray-900 mb-1">Complete Service</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
                      <span className="text-xs text-gray-500">Warranty &</span>
                      <span className="text-sm font-bold text-blue-600">Maintenance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certified Section */}
        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
          <div className="bg-gradient-to-br from-blue-50 via-white to-gray-50 rounded-xl sm:rounded-2xl lg:rounded-full border border-gray-300 p-4 sm:p-6 md:p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#2b7cc2] to-blue-700 rounded-full mb-2 sm:mb-3 md:mb-4 shadow-md">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-1.5 sm:mb-2">
                Official Distributors of Force Motors
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
                Every vehicle undergoes rigorous inspection and meets our highest standards of quality and performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}