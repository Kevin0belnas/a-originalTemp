import { useEffect, useState, useRef } from 'react';
import authorPhoto from "/images/author.png"; // Add a professional author photo

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      id="about" 
      ref={sectionRef}
      className="relative w-full py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Decorative Background Elements - Responsive */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-32 xs:w-40 sm:w-48 md:w-56 lg:w-64 h-32 xs:h-40 sm:h-48 md:h-56 lg:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl xs:blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-32 xs:w-40 sm:w-48 md:w-56 lg:w-64 h-32 xs:h-40 sm:h-48 md:h-56 lg:h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl xs:blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 xs:w-64 sm:w-80 md:w-96 h-48 xs:h-64 sm:h-80 md:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl xs:blur-3xl opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Column - Image */}
          <div 
            className={`relative transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="relative group">
              {/* Gradient Border */}
              <div className="absolute -inset-0.5 xs:-inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl xs:rounded-3xl opacity-75 group-hover:opacity-100 blur-md xs:blur transition-all duration-500"></div>
              
              {/* Image Container - Responsive */}
              <div className="relative bg-white rounded-2xl xs:rounded-3xl overflow-hidden shadow-xl xs:shadow-2xl">
                <img
                  src={authorPhoto}
                  alt="A. J. Sinclair - Author"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay with Quote - Responsive */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-3 xs:p-4 sm:p-5 md:p-6">
                    <p className="text-white text-[10px] xs:text-xs sm:text-sm italic">
                      "Writing stories that touch the soul and prove love knows no distance."
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Responsive */}
              <div className="absolute -bottom-3 xs:-bottom-4 -right-3 xs:-right-4 bg-white px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-lg xs:rounded-xl shadow-lg xs:shadow-xl border border-blue-100">
                <p className="text-blue-600 font-bold text-[10px] xs:text-xs sm:text-sm">📍 In The Land Far Far Away</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div 
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            {/* Section Header - Responsive */}
            <div className="mb-4 xs:mb-5 sm:mb-6 md:mb-8">
              <div className="inline-flex items-center bg-blue-100/80 backdrop-blur-sm px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full mb-2 xs:mb-3 sm:mb-4 border border-blue-200">
                <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-blue-600 rounded-full animate-pulse mr-1 xs:mr-2"></span>
                <span className="text-blue-700 font-semibold text-[10px] xs:text-xs sm:text-sm uppercase tracking-wide">
                  Meet the Author
                </span>
              </div>

              <h2 
                id="about-heading" 
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 xs:mb-3 sm:mb-4"
              >
                About <span className="text-blue-600">A. J. Sinclair</span>
              </h2>
              
              <div className="w-16 xs:w-20 sm:w-24 h-0.5 xs:h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>

            {/* Author Bio - Responsive */}
            <div className="space-y-4 xs:space-y-5 sm:space-y-6">
              {/* Birth Info Card - Responsive */}
              <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 bg-white p-3 xs:p-3.5 sm:p-4 rounded-lg xs:rounded-xl shadow-sm border border-blue-100">
                <div className="bg-blue-100 p-2 xs:p-2.5 sm:p-3 rounded-full">
                  <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] xs:text-xs sm:text-sm text-gray-500">Born</p>
                  <p className="text-xs xs:text-sm sm:text-base md:text-lg font-semibold text-gray-800">April 18, 2002</p>
                  <p className="text-[10px] xs:text-xs sm:text-sm text-blue-600">In The Land, Far Far Away</p>
                </div>
              </div>

              {/* Bio Paragraphs - Responsive */}
              <div className="bg-white/80 backdrop-blur-sm p-4 xs:p-5 sm:p-6 rounded-xl xs:rounded-2xl shadow-lg border border-blue-100">
                <p className="text-xs xs:text-sm sm:text-base text-gray-700 leading-relaxed mb-3 xs:mb-4">
                  <span className="text-blue-600 font-bold text-lg xs:text-xl sm:text-2xl float-left mr-1 xs:mr-2">"</span>
                  A.J. Sinclair is a bestselling fantasy author known for epic world-building and unforgettable adventures. His stories transport readers into realms of dragons, magic, and heroism. 
                </p>

                <p className="text-xs xs:text-sm sm:text-base text-gray-700 leading-relaxed relative pl-2 xs:pl-3 sm:pl-4 border-l-2 xs:border-l-4 border-blue-600">
                  Born with a passion for storytelling, A.J. Sinclair has spent years crafting immersive fantasy worlds. From dragons to ancient prophecies, his novels blend adventure, suspense, and heart. When not writing, Sinclair enjoys reading classic myths, traveling, and mentoring aspiring writers.
                </p>
              </div>

              {/* Quick Stats - Responsive */}
              <div className="grid grid-cols-3 gap-1 xs:gap-2 sm:gap-3">
                <div className="bg-white p-2 xs:p-2.5 sm:p-3 rounded-lg xs:rounded-xl text-center shadow-sm border border-blue-100">
                  <div className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-blue-600">6</div>
                  <div className="text-[8px] xs:text-[10px] sm:text-xs text-gray-500">Books</div>
                </div>
                <div className="bg-white p-2 xs:p-2.5 sm:p-3 rounded-lg xs:rounded-xl text-center shadow-sm border border-blue-100">
                  <div className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-blue-600">2017</div>
                  <div className="text-[8px] xs:text-[10px] sm:text-xs text-gray-500">First Book</div>
                </div>
                <div className="bg-white p-2 xs:p-2.5 sm:p-3 rounded-lg xs:rounded-xl text-center shadow-sm border border-blue-100">
                  <div className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-blue-600">15 Years Old</div>
                  <div className="text-[8px] xs:text-[10px] sm:text-xs text-gray-500">Started Writing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
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
        
        /* Custom breakpoint for extra small devices */
        @media (min-width: 380px) {
          .xs\\:text-sm {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;