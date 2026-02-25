import { useState, useEffect, memo } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'books', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'books', label: 'Books', href: '#books' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav className={`w-full py-3 xs:py-4 px-3 xs:px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 flex justify-between items-center fixed top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-sm'
      }`}>
        
        {/* Logo/Name with Icon - Responsive */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, 'home')}
          className="group relative overflow-hidden flex items-center gap-1 xs:gap-2 md:gap-3"
          aria-label="Go to homepage"
        >
          {/* Icon - Responsive sizing */}
          <img 
            src="/images/logo.png" 
            alt="A.J. Sinclair icon" 
            className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 object-contain rounded-full border-2 border-blue-100 group-hover:border-blue-300 transition-all duration-300"
            loading="eager"
          />
          
          {/* Name - Responsive text */}
          <h1 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
            <span className="text-blue-600 hover:text-blue-700 transition-colors duration-300">
              <span className="hidden xs:inline">A. J. </span>
              <span className="xs:hidden"></span>
              Sinclair
            </span>
          </h1>
          
          {/* Animated underline */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
        </a>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`relative text-xs lg:text-sm xl:text-base font-medium transition-colors duration-300 group ${
                activeSection === link.id
                  ? 'text-blue-600'
                  : 'text-gray-800 hover:text-blue-600'
              }`}
              aria-current={activeSection === link.id ? 'page' : undefined}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          ))}

          {/* CTA Button */}
          <button 
            onClick={() => window.location.href = '#contact'}
            className="ml-2 lg:ml-4 px-3 lg:px-4 py-1.5 lg:py-2 bg-blue-600 text-white text-xs lg:text-sm font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap"
          >
            <span className="hidden lg:inline">Let's Connect</span>
            <span className="lg:hidden">Connect</span>
          </button>
        </div>

        {/* Mobile Menu Button - Visible only on mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 xs:p-2 rounded-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <XMarkIcon className="h-5 w-5 xs:h-6 xs:w-6 text-gray-800" />
          ) : (
            <Bars3Icon className="h-5 w-5 xs:h-6 xs:w-6 text-gray-800" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel - Responsive width */}
      <div
        className={`fixed top-0 right-0 h-full w-64 xs:w-72 sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header with Icon */}
          <div className="p-3 xs:p-4 bg-blue-50 border-b border-blue-100 flex items-center gap-2 xs:gap-3">
            <img 
              src="/mane-icon.png" 
              alt="Icon" 
              className="w-7 h-7 xs:w-8 xs:h-8 object-contain rounded-full border-2 border-blue-200"
            />
            <h2 className="text-base xs:text-lg font-semibold text-blue-600">
              Menu
            </h2>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 p-3 xs:p-4">
            <ul className="space-y-2 xs:space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`block px-3 xs:px-4 py-2 xs:py-2.5 rounded-lg transition-colors text-sm xs:text-base ${
                      activeSection === link.id
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'text-gray-800 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                    aria-current={activeSection === link.id ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Footer with Icon */}
          <div className="p-3 xs:p-4 border-t border-gray-200">
            <button
              onClick={() => {
                setIsOpen(false);
                window.location.href = '#contact';
              }}
              className="w-full px-3 xs:px-4 py-2 xs:py-2.5 bg-blue-600 text-white text-sm xs:text-base font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <img 
                src="/mane-icon.png" 
                alt="" 
                className="w-4 h-4 xs:w-5 xs:h-5 object-contain rounded-full"
                aria-hidden="true"
              />
              Let's Connect
            </button>
          </div>
        </div>
      </div>

      {/* Custom breakpoint for extra small devices */}
      <style jsx>{`
        @media (min-width: 380px) {
          .xs\\:inline {
            display: inline;
          }
          .xs\\:hidden {
            display: none;
          }
        }
      `}</style>
    </>
  );
});

Navbar.displayName = 'Navbar';
export default Navbar;