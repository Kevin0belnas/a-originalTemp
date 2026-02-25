import { useState } from 'react';

const LoadingSpinner = () => {
  const [randomMessage] = useState(() => 
    loadingMessages[Math.floor(Math.random() * loadingMessages.length)]
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="text-center">
        {/* Main spinner container */}
        <div className="relative flex items-center justify-center">
          {/* Outer rotating ring */}
          <div className="absolute w-20 h-20 border-4 border-transparent border-t-blue-600 border-r-blue-400 rounded-full animate-spin"></div>
          
          {/* Middle ring */}
          <div className="absolute w-16 h-16 border-4 border-transparent border-b-blue-500 border-l-blue-300 rounded-full animate-spin-slow"></div>
          
          {/* Inner pulsing circle */}
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-75"></div>
            <div className="absolute inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Loading text with animation */}
        <div className="mt-8 space-y-2">
          <p className="text-gray-700 font-medium text-lg animate-pulse">
            {/* Loading amazing content */}
            <span className="inline-flex ml-1">
              <span className="animate-bounce delay-0">.</span>
              <span className="animate-bounce delay-150">.</span>
              <span className="animate-bounce delay-300">.</span>
            </span>
          </p>
          
          {/* Progress bar */}
          <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-progress"></div>
          </div>
          
          {/* Random loading messages */}
          <p className="text-sm text-gray-500 animate-fade">
            {randomMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

// Array of fun loading messages
const loadingMessages = [
  "Gathering pixels...",
  "Summoning creativity...",
  "Polishing the code...",
  "Making it awesome...",
  "Almost there...",
  "Adding magic touches...",
  "Waking up the components...",
  "Brewing digital coffee...",
  "Sharpening the design...",
  "Crossing the t's and dotting the i's..."
];

export default LoadingSpinner;