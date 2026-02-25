import { XMarkIcon } from '@heroicons/react/24/outline';

const BookModal = ({ book, isOpen, onClose }) => {

  if (!book) return null;

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close modal"
          >
            <XMarkIcon className="w-6 h-6 text-gray-700" />
          </button>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 md:p-10">
            {/* Header with Image and Title */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8">
              {/* Book Cover */}
              <div className="w-full md:w-64 lg:w-80 flex-shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-75 blur"></div>
                  <img
                    src={book.image}
                    alt={book.title}
                    className="relative w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>

              {/* Title and Basic Info */}
              <div className="flex-1">
                <div className="inline-block bg-blue-100 px-3 py-1 rounded-full mb-3">
                  <span className="text-blue-700 font-semibold text-sm">{book.genre}</span>
                </div>
                
                <h2 id="modal-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                  {book.title}
                </h2>

                {book.badge && (
                  <span className="inline-block bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
                    {book.badge}
                  </span>
                )}

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="bg-blue-50 p-3 rounded-xl text-center">
                    <div className="text-xl font-bold text-blue-600">{book.rating}</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-xl text-center">
                    <div className="text-xl font-bold text-blue-600">{book.pages}</div>
                    <div className="text-xs text-gray-600">Pages</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-xl text-center">
                    <div className="text-xl font-bold text-blue-600">{book.published}</div>
                    <div className="text-xs text-gray-600">Published</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-xl text-center">
                    <div className="text-xl font-bold text-blue-600">{book.price}</div>
                    <div className="text-xs text-gray-600">Price</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Synopsis</h3>
              <div className="prose prose-blue max-w-none">
                {book.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Themes */}
            {book.themes && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Themes</h3>
                <div className="flex flex-wrap gap-2">
                  {book.themes.map((theme, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Target Audience */}
            {book.targetAudience && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Target Audience</h3>
                <p className="text-gray-600 bg-gray-50 p-4 rounded-xl">
                  {book.targetAudience}
                </p>
              </div>
            )}

            {/* Purchase Links */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Purchase Options</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Amazon Link */}
                {book.amazonLink && (
                  <button
                    onClick={() => handleLinkClick(book.amazonLink)}
                    className="group flex items-center justify-between bg-[#FF9900] hover:bg-[#FF9900]/90 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.54 7.02c.28-.24.64-.4 1.05-.4.81 0 1.44.58 1.44 1.36 0 .32-.1.6-.26.82-.13.17-.3.3-.5.4.25.11.46.27.62.48.17.22.26.49.26.79 0 .84-.65 1.48-1.56 1.48-.41 0-.78-.11-1.06-.28-.2-.12-.36-.28-.48-.46-.1-.16-.16-.34-.16-.53 0-.29.11-.53.3-.71.18-.18.42-.28.68-.28.16 0 .31.03.45.1.1-.1.16-.22.16-.36 0-.14-.06-.26-.16-.34-.14-.1-.31-.15-.51-.15-.22 0-.42.07-.58.19-.1.07-.18.16-.23.27-.05.1-.08.21-.08.32h-.8c0-.43.15-.82.41-1.12.26-.3.6-.48 1-.53-.02-.12-.03-.24-.03-.36 0-.58.47-1.05 1.05-1.05.33 0 .63.15.82.4l.03.03c.1.13.17.28.2.44.02.08.03.16.03.24h-.8c0-.12-.03-.23-.08-.33-.06-.1-.14-.18-.23-.24-.1-.07-.22-.1-.34-.1-.19 0-.35.09-.46.23-.1.12-.16.27-.16.43 0 .13.04.25.11.35.07.1.16.18.27.23.15.08.32.12.5.12.29 0 .53-.11.7-.28.14-.15.22-.34.22-.55 0-.2-.08-.38-.22-.52-.16-.16-.37-.24-.6-.24-.29 0-.55.13-.72.35-.13.16-.2.36-.2.57h-.8c0-.4.17-.77.45-1.04.28-.27.65-.43 1.06-.43.44 0 .83.18 1.12.47.27.27.43.63.43 1.03 0 .41-.16.78-.44 1.06.27.15.48.36.63.62.16.27.25.58.25.91 0 .98-.8 1.78-1.78 1.78-.54 0-1.02-.24-1.35-.61-.3-.34-.47-.77-.47-1.22 0-.47.18-.9.5-1.22.15-.15.33-.27.52-.36-.15-.1-.28-.22-.38-.36-.1-.15-.16-.33-.16-.52 0-.38.18-.72.47-.95z"/>
                      </svg>
                      <div className="text-left">
                        <div className="font-bold">Amazon</div>
                        <div className="text-sm opacity-90">Kindle & Paperback</div>
                      </div>
                    </div>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                )}

                {/* Barnes & Noble Link */}
                {book.barnesNobleLink && (
                  <button
                    onClick={() => handleLinkClick(book.barnesNobleLink)}
                    className="group flex items-center justify-between bg-[#2E7D32] hover:bg-[#2E7D32]/90 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                      </svg>
                      <div className="text-left">
                        <div className="font-bold">Barnes & Noble</div>
                        <div className="text-sm opacity-90">Nook & Hardcover</div>
                      </div>
                    </div>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Other Links */}
              {book.otherLinks && book.otherLinks.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-2">More retailers:</p>
                  <div className="flex flex-wrap gap-2">
                    {book.otherLinks.map((link, index) => (
                      <button
                        key={index}
                        onClick={() => handleLinkClick(link.url)}
                        className="text-blue-600 hover:text-blue-700 text-sm underline"
                      >
                        {link.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookModal;