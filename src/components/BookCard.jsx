import { useState } from "react";

const BookCard = ({
  image,
  title,
  genre,
  shortDescription,
  rating = 4.8,
  pages = 320,
  published = "2024",
  price = null,
  badge = null,
  onClick,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      onClick={onClick}
      className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer w-full max-w-[280px] sm:max-w-[300px] mx-auto"
    >
      {/* Image Section - adjusts to card width */}
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" style={{ aspectRatio: '2/3' }} />
        )}

        <img
          src={image}
          alt={title}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ aspectRatio: '2/3' }}
          loading="lazy"
        />

        {/* Badge */}
        {badge && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
            {badge}
          </span>
        )}

        {/* Year badge */}
        <span className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-blue-600 shadow-sm">
          {published}
        </span>

        {/* Hover Description */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
          <div>
            <p className="text-white text-xs line-clamp-3 leading-snug">
              {shortDescription}
            </p>
            <p className="text-blue-300 text-[10px] mt-1.5 font-medium">
              Click to read more →
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 space-y-2">
        {/* Title and genre */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-bold text-gray-900 line-clamp-2 flex-1">
            {title}
          </h3>
          <span className="text-[10px] font-medium text-blue-600 whitespace-nowrap bg-blue-50 px-2 py-1 rounded-full">
            {genre}
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-sm">★</span>
            <span className="font-medium">{rating}</span>
          </div>
          <span>•</span>
          <span>{pages} pages</span>
        </div>

        {/* Price/Details */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-sm font-semibold text-blue-600">
            {price || "Buy Now"}
          </span>
          <span className="text-[10px] font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
            Details →
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;