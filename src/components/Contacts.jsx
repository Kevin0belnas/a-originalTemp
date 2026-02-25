import { useEffect, useState, useRef } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@ajsinclair.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "contact@ajsinclair.com",
      link: "mailto:contact@ajsinclair.com",
      action: "Send Email",
      showCopy: true
    },
    {
      icon: (
        <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "Coming Soon",
      link: "#",
      action: "Available Soon"
    },
    {
      icon: (
        <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      value: "In The Land Far Far Away",
      link: "",
      action: "View Map"
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative w-full py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Decorative Background Elements - Responsive */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 right-0 w-48 xs:w-64 sm:w-80 md:w-96 h-48 xs:h-64 sm:h-80 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl xs:blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-48 xs:w-64 sm:w-80 md:w-96 h-48 xs:h-64 sm:h-80 md:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl xs:blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Section Header - Responsive */}
        <div 
          className={`text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center bg-blue-100/80 backdrop-blur-sm px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full mb-2 xs:mb-3 sm:mb-4 border border-blue-200">
            <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-blue-600 rounded-full animate-pulse mr-1 xs:mr-2"></span>
            <span className="text-blue-700 font-semibold text-[10px] xs:text-xs sm:text-sm uppercase tracking-wide">
              Let's Connect
            </span>
          </div>

          <h2 
            id="contact-heading" 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 xs:mb-3 sm:mb-4"
          >
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          
          <div className="w-16 xs:w-20 sm:w-24 h-0.5 xs:h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-3 xs:mb-4 sm:mb-6"></div>
          
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-600 max-w-xl xs:max-w-2xl mx-auto px-2 xs:px-4">
            For collaborations, book inquiries, or updates on future projects. 
            I'd love to hear from you!
          </p>
        </div>

        {/* Contact Methods Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 lg:gap-8 mb-8 xs:mb-10 sm:mb-12">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 shadow-md xs:shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 xs:hover:-translate-y-2 border border-blue-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-blue-100 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-lg xs:rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mb-2 xs:mb-3 sm:mb-4">
                {method.icon}
              </div>
              
              <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-800 mb-1 xs:mb-2">
                {method.title}
              </h3>
              
              <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-2 xs:mb-3 break-all">
                {method.value}
              </p>
              
              <div className="flex items-center gap-2">
                <a
                  href={method.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-[10px] xs:text-xs sm:text-sm group"
                >
                  {method.action}
                  <svg className="w-3 h-3 xs:w-4 xs:h-4 ml-0.5 xs:ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {method.showCopy && (
                  <button
                    onClick={handleCopyEmail}
                    className="relative inline-flex items-center text-gray-400 hover:text-blue-600 transition-colors"
                    title="Copy email"
                  >
                    <svg className="w-3 h-3 xs:w-4 xs:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    {copied && (
                      <span className="absolute -top-6 xs:-top-8 -right-2 bg-green-500 text-white text-[8px] xs:text-xs px-1 xs:px-2 py-0.5 xs:py-1 rounded">
                        Copied!
                      </span>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Email Card with Copy Feature - Responsive */}
        <div 
          className={`max-w-2xl mx-auto bg-white rounded-xl xs:rounded-2xl p-5 xs:p-6 sm:p-8 shadow-lg border border-blue-100 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-4 xs:mb-5 sm:mb-6">
            <div className="bg-blue-100 w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-2 xs:mb-3 sm:mb-4">
              <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-800 mb-1 xs:mb-2">Email Me Directly</h3>
            <p className="text-gray-600 text-[10px] xs:text-xs sm:text-sm">Click to copy or send an email</p>
          </div>

          <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 items-center justify-center">
            <div className="relative flex-1 w-full">
              <input
                type="text"
                value="contact@ajsinclair.com"
                readOnly
                className="w-full px-3 xs:px-4 py-2 xs:py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg xs:rounded-xl text-gray-600 text-[10px] xs:text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2 xs:gap-3 w-full xs:w-auto">
              <button
                onClick={handleCopyEmail}
                className="flex-1 xs:flex-initial px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg xs:rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-medium text-[10px] xs:text-xs sm:text-sm whitespace-nowrap flex items-center justify-center gap-1 xs:gap-2"
              >
                <svg className="w-3 h-3 xs:w-4 xs:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                <span className="hidden xs:inline">Copy</span>
              </button>
              <a
                href="mailto:contact@ajsinclair.com"
                className="flex-1 xs:flex-initial px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg xs:rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 font-medium text-[10px] xs:text-xs sm:text-sm whitespace-nowrap flex items-center justify-center gap-1 xs:gap-2"
              >
                <svg className="w-3 h-3 xs:w-4 xs:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="hidden xs:inline">Send</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Response Message - Responsive */}
        <div 
          className={`mt-6 xs:mt-8 text-center text-[10px] xs:text-xs sm:text-sm text-gray-500 transition-all duration-1000 delay-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p>✨ I'll get back to you within 24-48 hours</p>
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
          .xs\\:inline {
            display: inline;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;