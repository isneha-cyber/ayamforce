import React, { useRef } from 'react'


const Community = () => {
  const buttonRef = useRef(null)

  const handleClick = () => {
    console.log('Join Community clicked')
  }

  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center justify-center bg-cover bg-center py-24 "
      style={{ backgroundImage: `url(/Images/img11.jpg)` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
          Be Part of the Force Community
        </h2>

        <p className="text-gray-200 text-sm sm:text-base mb-8">
          Connect with passionate people, share ideas, and grow together with Force.
        </p>

        <div className="flex justify-center">
          <button
            ref={buttonRef}
            onClick={handleClick}
            className="text-black bg-white transition-all duration-300 py-2 px-6   rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl"
          >
            <span className="text-sm sm:text-lg font-medium">
              Join Our Community
            </span>

            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Community
