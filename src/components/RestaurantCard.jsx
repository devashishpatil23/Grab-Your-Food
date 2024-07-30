import CDN_URL from "../utills/constants";
function RestaurantCard({ resObj }) {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { slaString },
  } = resObj;

  return (
    <div>
      <div className="max-w-xs bg-white border border-gray-200  hover:shadow-md hover:cursor-pointer h-full">
        <img
          className="p-2 rounded-t-lg  h-60 w-[100rem]"
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt="product image"
        />

        <div className="px-3 pb-3">
          <h4 className="text-lg font-semibold tracking-tight text-black-500">
            {name}
          </h4>
          <h5 className="text-sm font-semibold tracking-tight text-gray-500">
            {cuisines.join(", ")}
          </h5>

          <div className="flex justify-between items-center mt-2.5 mb-5">
            <span className="bg-gray-100 text-orange-500 text-sm font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
              {avgRating}
            </span>
            <span className=" text-gray-500 text-sm pr-2">{slaString}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg  text-gray-900 dark:text-white">{costForTwo}</span>
            <a
              href="#"
              className="text-white bg-gray-400 hover:bg-gray-500 rounded-lg  text-sm px-2 py-1.5 text-center"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
