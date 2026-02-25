import { memo } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline'; // or any icon library

const ScrollToTop = memo(({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-50"
      aria-label="Scroll to top"
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
});

ScrollToTop.displayName = 'ScrollToTop';
export default ScrollToTop;