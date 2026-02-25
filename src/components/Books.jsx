import { useState, useEffect } from 'react';
import BookCard from "./BookCard";
import { books as booksData } from "../data/data";
// Import bookstore logos (add your logo images here)
import amazonLogo from "../assets/logos/amazon.png";
import barnesNobleLogo from "../assets/logos/barnes-noble.png";
import booktopiaLogo from "../assets/logos/booktopia.png";
import appleBooksLogo from "../assets/logos/apple-books.jpg";
import koboLogo from "../assets/logos/kobo.png";
// Add more logos as needed

const Books = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle body scroll lock when modal opens/closes
  useEffect(() => {
    if (openModal) {
      // Save the current scroll position before locking
      setScrollPosition(window.scrollY);
      
      // Lock body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore body scroll
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Restore scroll position after unlocking
      window.scrollTo(0, scrollPosition);
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [openModal, scrollPosition]);

  // Bookstore configuration with image paths and colors
  const bookstores = {
    amazon: {
      name: "Amazon",
      logo: amazonLogo,
      bgColor: "bg-[#FF9900]",
      hoverBg: "hover:bg-[#FF9900]/90",
      description: ""
    },
    barnesNoble: {
      name: "Barnes & Noble",
      logo: barnesNobleLogo,
      bgColor: "bg-[#2E7D32]",
      hoverBg: "hover:bg-[#2E7D32]/90",
      description: ""
    },
    booktopia: {
      name: "Booktopia",
      logo: booktopiaLogo,
      bgColor: "bg-[#E63946]",
      hoverBg: "hover:bg-[#E63946]/90",
      description: ""
    },
    appleBooks: {
      name: "Apple Books",
      logo: appleBooksLogo,
      bgColor: "bg-[#8A2BE2]",
      hoverBg: "hover:bg-[#8A2BE2]/90",
      description: ""
    },
    kobo:{
      name: "Kobo",
      logo: koboLogo,
      bgColor: "bg-[#008B8B]",
      hoverBg: "hover:bg-[#008B8B]/90",
      description: ""
    }
  };

  // Enhance books data with additional fields for the modal
  const enhancedBooks = booksData.map(book => ({
    ...book,
    genre: "Fantasy",
    shortDescription: book.description,
    fullDescription: book.description,
    rating: 4.8,
    pages: 350,
    published: book.releaseYear.toString(),
    price: "",
    badge: book.releaseYear === 2024 ? "New Release" : book.releaseYear === 2021 ? "Bestseller" : "",
    themes: ["Fantasy", "Adventure", "Magic", "Dragons", "Heroism"],
    targetAudience: "Fantasy lovers, adventure seekers, and readers of all ages",
    purchaseLinks: [
      {
        store: "amazon",
        url: "#"
      },
      {
        store: "barnesNoble",
        url: "#"
      },
      {
        store: "kobo",
        url: "#"
      },
      {
        store: "appleBooks",
        url: "#"
      }
    ]
  }));

  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    // Don't clear selected book immediately to avoid flicker
    setTimeout(() => setSelectedBook(null), 300);
  };

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  // Handle click outside modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <>
      <section 
  id="books" 
  className="relative w-full py-10 xs:py-12 sm:py-14 md:py-16 bg-gradient-to-b from-white via-blue-50 to-white px-3 xs:px-4 sm:px-6 md:px-8 overflow-hidden"
  aria-labelledby="books-heading"
>
  {/* Decorative background elements */}
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    <div className="absolute top-0 right-0 w-48 xs:w-56 sm:w-64 md:w-72 h-48 xs:h-56 sm:h-64 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl xs:blur-3xl opacity-20 animate-blob"></div>
    <div className="absolute bottom-0 left-0 w-48 xs:w-56 sm:w-64 md:w-72 h-48 xs:h-56 sm:h-64 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl xs:blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
  </div>

  <div className="relative w-full max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-8 xs:mb-10 sm:mb-12">
      <div className="inline-flex items-center bg-blue-100/80 backdrop-blur-sm px-3 py-1.5 rounded-full mb-3 border border-blue-200">
        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse mr-1.5"></span>
        <span className="text-blue-700 font-semibold text-xs uppercase tracking-wide">
          Book Collection
        </span>
      </div>

      <h2 
        id="books-heading" 
        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3"
      >
        Featured <span className="text-blue-600">Books</span>
      </h2>
      
      <div className="w-14 xs:w-16 sm:w-20 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-3"></div>
      
      <p className="text-xs xs:text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
        Epic fantasy adventures from A.J. Sinclair
      </p>
    </div>

    {/* Books Grid - 3 per row with consistent sizing */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-7 sm:gap-8">
      {enhancedBooks.map((book) => (
        <div key={book.id} className="flex justify-center">
          <BookCard
            {...book}
            onClick={() => handleOpenModal(book)}
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Modal - more compact design */}
      {openModal && selectedBook && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-3 sm:p-4"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
            aria-hidden="true"
          />

          {/* Modal Content - more compact */}
          <div 
            className="relative w-full max-w-[95%] xs:max-w-[90%] sm:max-w-2xl md:max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-xl xs:rounded-2xl shadow-2xl animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 z-10 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close modal"
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Body - compact padding */}
            <div className="p-3 xs:p-4 sm:p-5 md:p-6">
              {/* Header with Image and Title - compact */}
              <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 sm:gap-5 mb-4">
                {/* Book Cover - full image display */}
                <div className="w-32 xs:w-36 sm:w-40 md:w-48 flex-shrink-0 mx-auto sm:mx-0">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg opacity-75 blur"></div>
                    <img
                      src={selectedBook.image}
                      alt={selectedBook.title}
                      className="relative w-full h-auto rounded-lg shadow-lg object-cover"
                      style={{ aspectRatio: '2/3' }}
                    />
                  </div>
                </div>

                {/* Title and Basic Info - compact */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="inline-block bg-blue-100 px-2 py-0.5 rounded-full mb-2">
                    <span className="text-blue-700 font-semibold text-xs">{selectedBook.genre}</span>
                  </div>
                  
                  <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">
                    {selectedBook.title}
                  </h2>

                  <p className="text-xs text-gray-500 mb-2">
                    Released: {selectedBook.releaseYear}
                  </p>

                  {selectedBook.badge && (
                    <span className="inline-block bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full mb-2">
                      {selectedBook.badge}
                    </span>
                  )}

                  {/* Stats - compact */}
                  <div className="grid grid-cols-3 gap-1 xs:gap-2 mb-3">
                    <div className="bg-blue-50 p-1.5 rounded-lg text-center">
                      <div className="text-sm font-bold text-blue-600">{selectedBook.rating}</div>
                      <div className="text-[10px] text-gray-600">Rating</div>
                    </div>
                    <div className="bg-blue-50 p-1.5 rounded-lg text-center">
                      <div className="text-sm font-bold text-blue-600">{selectedBook.pages}</div>
                      <div className="text-[10px] text-gray-600">Pages</div>
                    </div>
                    <div className="bg-blue-50 p-1.5 rounded-lg text-center">
                      <div className="text-sm font-bold text-blue-600">{selectedBook.published}</div>
                      <div className="text-[10px] text-gray-600">Year</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description - compact */}
              <div className="mb-4">
                <h3 className="text-sm font-bold text-gray-800 mb-1">Synopsis</h3>
                <p className="text-xs xs:text-sm text-gray-600 leading-relaxed">
                  {selectedBook.fullDescription}
                </p>
              </div>

              {/* Themes - compact */}
              {selectedBook.themes && (
                <div className="mb-4">
                  <h3 className="text-sm font-bold text-gray-800 mb-1">Themes</h3>
                  <div className="flex flex-wrap gap-1">
                    {selectedBook.themes.slice(0, 4).map((theme, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Purchase Links - compact */}
              {selectedBook.purchaseLinks && selectedBook.purchaseLinks.length > 0 && (
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-sm font-bold text-gray-800 mb-2">Purchase Options</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedBook.purchaseLinks.slice(0, 4).map((link, index) => {
                      const store = bookstores[link.store];
                      if (!store) return null;
                      
                      return (
                        <button
                          key={index}
                          onClick={() => handleLinkClick(link.url)}
                          className={`group flex items-center justify-between ${store.bgColor} hover:${store.hoverBg} text-white p-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
                        >
                          <div className="flex items-center gap-2">
                            <img 
                              src={store.logo} 
                              alt={store.name}
                              className="w-4 h-4 xs:w-5 xs:h-5 object-contain"
                            />
                            <span className="font-bold text-xs">{store.name}</span>
                          </div>
                          <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-modal-in {
          animation: modalIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Books;