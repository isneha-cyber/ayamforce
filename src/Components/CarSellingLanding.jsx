import React from 'react';

export default function CarSellingLanding() {
	return (
		<>
			<div className="min-h-screen bg-white p-4 sm:p-6 lg:p-12">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">

						{/* Left Card - Trade-in CTA */}
						<div className="lg:col-span-4">
							<div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#2b7cc2] shadow-xl sm:shadow-2xl h-full min-h-[400px] sm:min-h-[450px] lg:min-h-[600px] flex flex-col">
								{/* Background Pattern */}
								<div className="absolute inset-0 opacity-10">
									<div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full blur-2xl sm:blur-3xl"></div>
									<div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#2b7cc2] rounded-full blur-2xl sm:blur-3xl"></div>
								</div>

								<div className="relative flex-1 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
									{/* Top Section */}
									<div className="flex-1 flex flex-col justify-center">
										<h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-snug sm:leading-tight mb-4 sm:mb-6">
											CHOOSE
											<br/>
											VEHICLES<br/>
											IN A {' '}
											<span className="inline-block relative">
												<span className="relative z-10">SNAP</span>
											</span>
										</h2>

										{/* Car Image */}
										<div className="relative mb-4 sm:mb-6">
											<div className="absolute inset-0 bg-gradient-to-t from-[#2b7cc2] to-transparent z-10"></div>
											<img src="/Images/vehicle/img14.webp" alt="Red BMW Car" className="w-full h-auto max-h-[180px] sm:max-h-[250px] object-contain relative z-0" loading="lazy"/>
										</div>

										<p className="text-white text-xs sm:text-sm lg:text-base font-semibold tracking-wide uppercase mb-1 sm:mb-2">
											Find the right vehicle
										</p>
										<p className="text-white text-xs sm:text-md font-medium">
											for a new one via trade-in
										</p>
									</div>

									{/* Bottom CTA Button */}
									<button className="w-full bg-white text-[#2b7cc2] font-bold text-base sm:text-lg py-1 sm:py-4 px-6 sm:px-8  rounded-xl sm:rounded-xl hover:bg-red-50 transition-all duration-300 shadow-lg sm:shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] mt-4 ">
										Start Now
									</button>
								</div>
							</div>
						</div>

						{/* Right Section - Features Grid */}
						<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

							{/* Traveller Feature Card */}
							<div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg  transition-all duration-300 p-6 sm:p-8 flex flex-col">
								<div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4 sm:mb-6">
									<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#2b7cc2] rounded-full flex items-center justify-center shadow-lg">
										<svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z"/>
										</svg>
									</div>
									<div className="flex-1">
										<h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Ayam Force Traveller</h3>
										<div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
											<span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-blue-50 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full">
												<svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#2b7cc2]" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
												</svg>
												12-18 Seater Capacity
											</span>
											<span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-blue-50 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full">
												<svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#2b7cc2]" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
												</svg>
												Powerful Diesel Engine
											</span>
										</div>
										<span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-blue-50 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full">
											<svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#2b7cc2]" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
											</svg>
											Commercial & Tourist Use
										</span>
									</div>
								</div>

								{/* Traveller Image */}
								<div className="relative flex-1 flex items-center justify-center mb-4 sm:mb-6">
									<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-xl sm:rounded-2xl"></div>
									<img src="/Images/vehicle/img15.webp" alt="Ayam Force Traveller" className="w-full h-auto max-h-[120px] sm:max-h-[180px] relative z-10 drop-shadow-xl sm:drop-shadow-2xl" loading="lazy"/>
								</div>

								<p className="text-gray-800 text-center font-semibold text-sm sm:text-base leading-relaxed">
									Perfect for group transportation,<br className="hidden sm:block"/>
									school buses, and tourist<br className="hidden sm:block"/>
									services with superior comfort.
								</p>
							</div>

							{/* Tarx Feature Card */}
							<div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg  transition-all duration-300 p-6 sm:p-8 flex flex-col">
								{/* Tarx Image with Features Badge */}
								<div className="relative flex-1 flex items-center justify-center mb-4 sm:mb-6">
									<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-xl sm:rounded-2xl"></div>

									{/* Features Badge */}
									<div className="absolute top-2 sm:top-0 right-4 sm:right-8 z-20">
										<div className="relative">
											<div className="bg-[#2b7cc2] text-white text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg flex items-center gap-1.5 sm:gap-2">
												<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
												</svg>
												<span className="text-xs sm:text-xs">4WD & Load Capacity</span>
											</div>
											{/* Arrow pointing to car */}
											<div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
												<div className="w-0.5 h-4 sm:h-6 bg-[#2b7cc2]"></div>
												<div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#2b7cc2] rounded-full -mt-1 -ml-1"></div>
											</div>
										</div>
									</div>

									<img src="/Images/vehicle/img21.webp" alt="Ayam Force Tarx Pickup" className="w-full h-auto max-h-[120px] sm:max-h-[180px] relative z-10 drop-shadow-xl sm:drop-shadow-2xl mt-4 sm:mt-8" loading="lazy"/>
								</div>

								<div className="mb-3 sm:mb-4">
									<h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Ayam Force Tarx</h3>
									<div className="flex flex-wrap gap-2">
										<span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-blue-50 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full">
											<svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
											</svg>
											Robust Pickup Truck
										</span>
										<span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-blue-50 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full">
											<svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
											</svg>
											Heavy Duty Performance
										</span>
									</div>
								</div>

								<p className="text-gray-800 font-semibold text-sm sm:text-base leading-relaxed">
									Ideal for construction, agriculture,<br className="hidden sm:block"/>
									and heavy-duty commercial use.
								</p>
							</div>


							{/* Financing & Services Card - Full Width */}
							<div className="md:col-span-2 bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl shadow-lg  transition-all duration-300 p-6 sm:p-8 border border-gray-100">
								<div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">

									{/* Middle - Financing Options */}
									<div className="flex-1">
										<div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
											<p className="text-base font-bold text-gray-900">
												Flexible Financing Solutions
											</p>
											<span className="inline-flex items-center bg-green-600 text-white text-sm font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full">
												0% Processing Fee*
											</span>
										</div>
										<p className="text-xs sm:text-sm text-gray-600">
											Bank financing, lease options, and easy EMI plans with minimal documentation.
										</p>
									</div>

									{/* Divider */}
									<div className="hidden md:block w-px h-16 bg-gray-200"></div>
									<div className="sm:hidden w-full h-px bg-gray-200 my-2"></div>

									{/* Right Side - After Sales */}
									<div className="flex items-center gap-3 sm:gap-4">
										<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
											<svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
											</svg>
										</div>
										<div>
											<p className="text-sm font-bold text-gray-900 mb-1">Complete Service</p>
											<div className="flex items-center gap-2">
												<span className="text-xs text-gray-500">Warranty &</span>
												<span className="text-sm font-bold text-blue-600">Maintenance</span>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				{/* Certified Section - IMPROVED */}
				<div className="max-w-7xl mx-auto mt-8 sm:mt-12">
					<div className="bg-gradient-to-br from-blue-50 via-white to-gray-50 rounded-2xl sm:rounded-full border border-gray-300 p-6 sm:p-8 lg:p-10">
						
						{/* Header Section */}
						<div className="text-center ">
							<div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#2b7cc2] to-blue-700 rounded-full mb-4 shadow-lg">
								<svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
								</svg>
							</div>
							<h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 sm:mb-3">
Offical Distributors of Force Motors							</h2>
							<p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
								Every vehicle undergoes rigorous inspection and meets our highest standards of quality and performance
							</p>
						</div>

					

					</div>
				</div>
			</div>
		</>
	);
}