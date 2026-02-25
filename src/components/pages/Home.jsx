import { useEffect, useState, useCallback, memo } from 'react';
import Navbar from "../Navbar";
import Hero from "../Hero";
import Books from "../Books";
import About from "../About";
import Contact from "../Contacts";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import LoadingSpinner from "../LoadingSpinner";

// Memoize components that don't need frequent re-renders
const MemoizedNavbar = memo(Navbar);
const MemoizedHero = memo(Hero);
const MemoizedBooks = memo(Books);
const MemoizedAbout = memo(About);
const MemoizedContact = memo(Contact);
const MemoizedFooter = memo(Footer);

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Handle initial loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Handle scroll events for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 sm:focus:top-4 sm:focus:left-4 bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md z-50 transition-transform focus:scale-105"
      >
        Skip to main content
      </a>

      {/* Main content with semantic HTML */}
      <main id="main-content" className="overflow-x-hidden">
        <MemoizedNavbar />
        
        {/* Hero section with id for navigation */}
        <section id="home" aria-label="Hero section">
          <MemoizedHero />
        </section>

        {/* Books section */}
        <section 
          id="books"
          aria-labelledby="books-heading" 
          className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 mx-auto scroll-mt-20" // scroll-mt-20 accounts for fixed navbar
        >
          <h2 id="books-heading" className="sr-only">Books Collection</h2>
          <MemoizedBooks />
        </section>

        {/* About section */}
        <section 
          id="about"
          aria-labelledby="about-heading"
          className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 mx-auto scroll-mt-20"
        >
          <h2 id="about-heading" className="sr-only">About Us</h2>
          <MemoizedAbout />
        </section>

        {/* Contact section */}
        <section 
          id="contact"
          aria-labelledby="contact-heading"
          className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 mx-auto scroll-mt-20"
        >
          <h2 id="contact-heading" className="sr-only">Contact Information</h2>
          <MemoizedContact />
        </section>
      </main>

      <MemoizedFooter />

      {/* Scroll to top button - using CSS for responsive positioning */}
      {showScrollButton && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 z-50 animate-bounce-slow">
          <ScrollToTop onClick={scrollToTop} />
        </div>
      )}
    </div>
  );
};

export default Home;