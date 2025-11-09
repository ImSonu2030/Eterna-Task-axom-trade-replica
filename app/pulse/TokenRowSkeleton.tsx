export function TokenRowSkeleton() {
  return (
    <div className="p-4 bg-[#131313] border-b border-gray-700/50">
      {/* Wrap everything in the animate-pulse class */}
      <div className="animate-pulse">
        <div className="flex justify-between items-start mb-2">
          {/* Left Side: Token Info Skeleton */}
          <div className="flex gap-3">
            {/* Image Placeholder */}
            <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
            <div>
              {/* Token Name Placeholder */}
              <div className="h-4 bg-gray-700 rounded w-20 mb-2"></div>
              {/* Pair Address Placeholder */}
              <div className="h-3 bg-gray-700 rounded w-32 mb-3"></div>
              {/* Stats Icons Placeholders */}
              <div className="flex items-center gap-3">
                <div className="h-3 bg-gray-700 rounded w-8"></div>
                <div className="h-3 bg-gray-700 rounded w-8"></div>
                <div className="h-3 bg-gray-700 rounded w-8"></div>
              </div>
            </div>
          </div>

          {/* Right Side: Price Info Skeleton */}
          <div className="text-right w-1/4">
            {/* Market Cap Placeholder */}
            <div className="h-4 bg-gray-700 rounded w-3/4 ml-auto mb-2"></div>
            {/* Volume Placeholder */}
            <div className="h-3 bg-gray-700 rounded w-1/2 ml-auto mb-3"></div>
          </div>
        </div>

        {/* Bottom Part Skeleton */}
        <div className="flex justify-between items-center">
          {/* Price History Placeholders */}
          <div className="flex gap-2">
            <div className="h-3 bg-gray-700 rounded w-12"></div>
            <div className="h-3 bg-gray-700 rounded w-12"></div>
            <div className="h-3 bg-gray-700 rounded w-12"></div>
          </div>
          {/* Button Placeholder */}
          <div className="h-8 bg-gray-700 rounded w-20"></div>
        </div>
      </div>
    </div>
  );
}