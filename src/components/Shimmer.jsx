import data from "../utills/mockData";
function Shimmer() {
  return (
    <div className="container mx-auto">
      <div className="py-3 my-3">
        <form className="flex items-center max-w-64 lg:max-w-sm mx-auto">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="bg-gray-300 h-10 w-full rounded-lg animate-pulse"></div>
          </div>
          <button
            type="submit"
            className="px-2.5 py-2 ml-2 text-sm font-medium text-white flex items-center bg-gray-300 rounded-lg border animate-pulse"
          >
            <span className="ml-2 hidden md:block  bg-gray-300 h-4 w-16 rounded-lg animate-pulse"></span>
          </button>
        </form>
      </div>

      <div className="mx-auto flex flex-wrap justify-center gap-5 ">
        <div className="max-w-xs bg-white border border-gray-200 hover:shadow-md  h-full p-3">
          {/* Image Skeleton */}
          <div className="bg-gray-300 h-36 w-full rounded-t-lg animate-pulse mb-3"></div>

          <div className="px-3 pb-3">
            {/* Title Skeleton */}
            <div className="bg-gray-300 h-6 w-3/4 rounded-lg animate-pulse mb-2"></div>

            {/* Subtitle Skeleton */}
            <div className="bg-gray-300 h-5 w-1/2 rounded-lg animate-pulse mb-4"></div>

            <div className="flex justify-between items-center mt-2.5 mb-5">
              {/* Rating Skeleton */}
              <div className="bg-gray-300 h-6 w-20 rounded-lg animate-pulse flex items-center justify-center text-orange-500 text-sm font-semibold px-2.5 py-0.5"></div>

              {/* SLA String Skeleton */}
              <div className="bg-gray-300 h-6 w-20 rounded-lg animate-pulse flex items-center justify-center text-orange-500 text-sm font-semibold px-2.5 py-0.5 ml-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shimmer;
