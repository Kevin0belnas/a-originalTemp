import { useEffect, useState, useRef } from 'react';
import authorPhoto from "/images/author.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-white px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 pt-20 sm:pt-24 lg:pt-28 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Decorative background elements - full screen coverage */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-60"></div>
        
        {/* Animated circles - responsive sizing */}
        <div className="absolute top-10 left-5 xs:top-20 xs:left-10 w-32 h-32 xs:w-48 xs:h-48 sm:w-64 sm:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 right-5 xs:top-40 xs:right-10 w-40 h-40 xs:w-56 xs:h-56 sm:w-72 sm:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-5 xs:bottom-20 xs:left-20 w-48 h-48 xs:w-64 xs:h-64 sm:w-80 sm:h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content - full width utilization */}
      <div className="relative w-full max-w-[1920px] mx-auto">
        {/* For very small screens, stack vertically with image first */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Content - Text - Order changes on mobile */}
          <div 
            className={`w-full order-2 lg:order-1 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            {/* Badge - responsive sizing */}
            <div className="inline-flex items-center bg-blue-100/80 backdrop-blur-sm px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full mb-3 xs:mb-4 sm:mb-6 border border-blue-200">
              <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-blue-600 rounded-full animate-pulse mr-1 xs:mr-2"></span>
              <p className="text-blue-700 font-semibold tracking-wide text-[10px] xs:text-xs sm:text-sm uppercase">
                Fantasy author known for epic world-building and unforgettable adventures
              </p>
            </div>

            {/* Main Heading - Ultra responsive font sizes */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] text-gray-800 mb-2 xs:mb-3 sm:mb-4 md:mb-6">
              <span className="block">A. J.</span>
              <span className="block text-blue-600 relative inline-block">
                Sinclair
                <div className="absolute -bottom-1 xs:-bottom-2 left-0 w-16 xs:w-20 sm:w-24 h-0.5 xs:h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
              </span>
            </h1>

            {/* Description - responsive width and text size */}
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-xl lg:max-w-2xl mb-4 xs:mb-5 sm:mb-6 md:mb-8 leading-relaxed">
              Discover the epic fantasy, transports you to worlds of breathtaking magic and unforgettable heroism.
              <span className="block mt-1 xs:mt-2 text-blue-600 font-semibold text-base xs:text-lg sm:text-xl">
                Within these realms of dragons and adventure, discover powerful stories of love, resilience, and a destiny that knows no distance.
              </span>
            </p>

            {/* CTA Buttons - responsive sizing and full width on mobile */}
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 w-full">
              <a
                href="#books"
                className="group relative bg-blue-600 text-white px-4 xs:px-5 sm:px-6 md:px-8 py-2.5 xs:py-3 sm:py-3.5 md:py-4 rounded-lg xs:rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center font-semibold text-xs xs:text-sm sm:text-base"
              >
                <span className="relative z-10">Explore Books</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg xs:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>

              <a
                href="#contact"
                className="group relative border-2 border-blue-600 text-blue-600 px-4 xs:px-5 sm:px-6 md:px-8 py-2.5 xs:py-3 sm:py-3.5 md:py-4 rounded-lg xs:rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center font-semibold text-xs xs:text-sm sm:text-base"
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-blue-50 rounded-lg xs:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </div>

            {/* Stats - responsive grid with better mobile layout */}
            <div className="mt-6 xs:mt-8 sm:mt-10 grid grid-cols-3 gap-1 xs:gap-2 sm:gap-3 md:gap-4 max-w-xs xs:max-w-sm sm:max-w-md">
              <div className="text-center p-1.5 xs:p-2 sm:p-3 bg-white/80 backdrop-blur-sm rounded-lg xs:rounded-xl border border-blue-100">
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">6</div>
                <div className="text-[10px] xs:text-xs sm:text-sm text-gray-500 leading-tight">Books Published</div>
              </div>
              <div className="text-center p-1.5 xs:p-2 sm:p-3 bg-white/80 backdrop-blur-sm rounded-lg xs:rounded-xl border border-blue-100">
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">100k+</div>
                <div className="text-[10px] xs:text-xs sm:text-sm text-gray-500 leading-tight">Happy Readers</div>
              </div>
              <div className="text-center p-1.5 xs:p-2 sm:p-3 bg-white/80 backdrop-blur-sm rounded-lg xs:rounded-xl border border-blue-100">
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">4.9</div>
                <div className="text-[10px] xs:text-xs sm:text-sm text-gray-500 leading-tight">Avg Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image - Order changes on mobile (appears first) */}
          <div 
            className={`w-full order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative w-3/4 xs:w-2/3 sm:w-3/5 md:w-1/2 lg:w-full max-w-[180px] xs:max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[500px]">
              {/* Image Container with Effects */}
              <div className="relative group">
                {/* Gradient Border Animation - responsive blur */}
                <div className="absolute -inset-0.5 xs:-inset-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-2xl xs:rounded-3xl opacity-75 group-hover:opacity-100 blur-md xs:blur-lg group-hover:blur-lg xs:group-hover:blur-xl transition-all duration-500"></div>
                
                {/* Image */}
                <div className="relative aspect-square rounded-2xl xs:rounded-3xl overflow-hidden shadow-xl xs:shadow-2xl">
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
                  )}
                  <img
                    src={authorPhoto}
                    alt="A. J. Sinclair"
                    className={`w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    loading="eager"
                  />
                  
                  {/* Overlay Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Floating Badge - Ultra responsive positioning */}
              <div className="absolute -bottom-3 xs:-bottom-4 sm:-bottom-6 -right-3 xs:-right-4 sm:-right-6 bg-white px-2 xs:px-3 sm:px-4 py-1 xs:py-2 sm:py-3 rounded-lg xs:rounded-xl shadow-xl xs:shadow-2xl transform group-hover:scale-110 transition-transform duration-300 border border-blue-100">
                <p className="text-[8px] xs:text-xs sm:text-sm font-bold text-blue-600 whitespace-nowrap">✨ Inspired Author</p>
              </div>

              {/* Additional floating element - Ultra responsive */}
              <div className="absolute -top-3 xs:-top-4 sm:-top-6 -left-3 xs:-left-4 sm:-left-6 bg-blue-600 px-2 xs:px-3 sm:px-4 py-1 xs:py-2 sm:py-3 rounded-lg xs:rounded-xl shadow-xl xs:shadow-2xl transform rotate-3 xs:rotate-6 group-hover:rotate-6 xs:group-hover:rotate-12 transition-transform duration-300">
                <p className="text-[8px] xs:text-xs sm:text-sm font-bold text-white whitespace-nowrap">#Believer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom breakpoint for extra small devices */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Custom breakpoint for extra small devices */
        @media (min-width: 380px) {
          .xs\\:block {
            display: block;
          }
          .xs\\:flex-row {
            flex-direction: row;
          }
          .xs\\:text-sm {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;